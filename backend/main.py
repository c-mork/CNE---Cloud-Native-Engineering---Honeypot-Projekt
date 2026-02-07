import os
from fastapi import FastAPI

ENV = os.getenv("APP_ENV", "dev")

app = FastAPI(title=f"Cloud Native Honeypot ({ENV})")

@app.get("/health")
def health():
    return {
        "status": "ok",
        "environment": ENV
    }
