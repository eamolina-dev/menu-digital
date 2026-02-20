from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db import SessionLocal
from app.schemas.client import ClientCreate, ClientRead
from app.crud.client import create_client
from app.routes.helpers import get_db

router = APIRouter(prefix="/api/dev", tags=["Dev"])

@router.post("/clients", response_model=ClientRead)
def new_client(payload: ClientCreate, db: Session = Depends(get_db)):
    return create_client(db, payload)
