from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.db import SessionLocal

from app.models.client import Client

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_client_by_token(db: Session, token: str):
    client = db.query(Client).filter(Client.access_token == token).first()
    if not client:
        raise HTTPException(404, "Client not found")
    return client
