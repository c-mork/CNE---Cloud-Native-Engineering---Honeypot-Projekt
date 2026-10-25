
from sqlalchemy import text

from database import engine

with engine.begin() as connection:
    connection.execute(
        text("""
            INSERT INTO honeypot_events
                (source_ip, request_path, attack_type, severity, detected)
            VALUES
                ('127.0.0.1', '/login', 'sql_injection', 'high', TRUE)
        """)
    )

print("Test honeypot event saved successfully!")
