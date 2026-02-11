from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db import SessionLocal
from crud import category as category_crud
from schemas import category as category_schema

from models.client import Client
from schemas.category import CategoryCreate
from crud.category import get_categories, create_category

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/clients/{slug}/categories")
def list_categories(slug: str, db: Session = Depends(get_db)):

    client = db.query(Client).filter(Client.slug == slug).first()
    if not client:
        raise HTTPException(404, "Client not found")

    return get_categories(db, client.id)

@router.post("/clients/{slug}/categories")
def new_category(slug: str, payload: CategoryCreate, db: Session = Depends(get_db)):

    client = db.query(Client).filter(Client.slug == slug).first()
    if not client:
        raise HTTPException(404, "Client not found")

    return create_category(db, payload.title, client.id)

@router.post("/", response_model=category_schema.Category)
def create_category(category: category_schema.CategoryCreate, db: Session = Depends(get_db)):
    return category_crud.create_category(db, category)

@router.delete("/{category_id}")
def delete_category(category_id: int, db: Session = Depends(get_db)):
    return category_crud.delete_category(db, category_id)
