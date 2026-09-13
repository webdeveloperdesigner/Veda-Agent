import os
import sys
import uuid
import threading
from dotenv import load_dotenv
load_dotenv()
from flask import Flask, send_from_directory, request, jsonify, send_file

api_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.abspath(os.path.join(api_dir, '..'))
if root_dir not in sys.path:
    sys.path.insert(0, root_dir)

try:
    from api.core.swarm_logic import run_swarm_backend, latest_result
    from api.core.pdf_generator import generate_pdf
except ImportError:
    from core.swarm_logic import run_swarm_backend, latest_result
    from core.pdf_generator import generate_pdf

app = Flask(__name__, static_folder='../dist')

IS_VERCEL = os.environ.get("VERCEL") == "1"
OUTPUT_DIR = "/tmp/generated_docs" if IS_VERCEL else os.path.join(root_dir, "generated_docs")

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

jobs = {}

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        vue_index = os.path.join(app.static_folder, 'index.html')
        if os.path.exists(vue_index):
            return send_from_directory(app.static_folder, 'index.html')
        return "Backend API is active.", 200

@app.route("/api/run", methods=["POST"])
def run_swarm():
    data = request.json or {}
    topic = data.get("topic")
    model = data.get("model", "groq")
    if not topic:
        return jsonify({"error": "Topic is required"}), 400
    
    job_id = str(uuid.uuid4())
    
    try:
        from api.core.swarm_logic import run_swarm_backend, latest_result
        latest_result["logs"] = [f"Starting generation for topic: {topic}"]
        latest_result["status"] = "running"
        
        res = run_swarm_backend(topic, model)
        
        if res["status"] == "completed":
            pdf_filename = f"{job_id}.pdf"
            pdf_path = os.path.join(OUTPUT_DIR, pdf_filename)
            
            if generate_pdf(res["content"], pdf_path, res["title"]):
                return jsonify({
                    "job_id": job_id,
                    "status": "completed",
                    "title": res["title"],
                    "pdf_url": f"/api/download/{pdf_filename}",
                    "logs": res["logs"]
                })
            else:
                return jsonify({
                    "job_id": job_id,
                    "status": "failed",
                    "logs": res["logs"] + ["Error: Failed to generate PDF document."]
                }), 500
        else:
            return jsonify({
                "job_id": job_id,
                "status": "failed",
                "logs": res["logs"]
            }), 500
            
    except Exception as e:
        return jsonify({
            "job_id": job_id,
            "status": "error",
            "logs": [f"System Error: {str(e)}"]
        }), 500

@app.route("/api/status/<job_id>")
def get_status(job_id):
    if job_id not in jobs:
        return jsonify({"error": "Job not found"}), 404
    
    from api.core.swarm_logic import latest_result as lr
    if jobs[job_id]["status"] == "running":
        jobs[job_id]["logs"] = lr["logs"][:]
        
    return jsonify(jobs[job_id])

@app.route("/api/download/<filename>")
def download_pdf(filename):
    path = os.path.join(OUTPUT_DIR, filename)
    if os.path.exists(path):
        return send_file(path, as_attachment=True)
    return "File not found", 404

if __name__ == "__main__":
    app.run(debug=True, port=5000)
