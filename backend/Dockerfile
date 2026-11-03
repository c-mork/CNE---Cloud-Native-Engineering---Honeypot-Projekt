# ---- Docker ----
# Base Image
FROM python:3.12-slim


# Python Config
# Prevent Python from creating unnecessary cache files
ENV PYTHONDONTWRITEBYTECODE=1
# Ensure Python output is sent directly to the terminal
ENV PYTHONUNBUFFERED=1
# Set the working directory inside the container
WORKDIR /app


# ----- Dependency Installation ------
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
