from fastapi import FastAPI

app = FastAPI(title="Cloud Native Honeypot")

@app.get("/health")
def health():
    return {"status": "ok"}