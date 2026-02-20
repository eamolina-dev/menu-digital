from sqlalchemy.orm import Session
from app.models.client import Client
from app.schemas.client import ClientCreate

import uuid

def generate_access_token():
    return str(uuid.uuid4())

def create_client(db: Session, data: ClientCreate):
    token = generate_access_token()

    client = Client(
        name=data.name,
        # slug=data.slug,
        access_token=token
    )

    db.add(client)
    db.commit()
    db.refresh(client)

    return client
