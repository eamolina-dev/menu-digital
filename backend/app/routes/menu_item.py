from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db import SessionLocal
from crud import menu_item as menu_item_crud
from schemas import menu_item as menu_itemory_schema

from models.client import Client
from schemas.menu_item import MenuItemCreate
from crud.menu_item import get_items, create_item

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/clients/{slug}/items")
def list_items(slug: str, db: Session = Depends(get_db)):

    client = db.query(Client).filter(Client.slug == slug).first()
    if not client:
        raise HTTPException(404, "Client not found")

    return get_items(db, client.id)

@router.post("/clients/{slug}/items")
def new_item(slug: str, payload: MenuItemCreate, db: Session = Depends(get_db)):

    return create_item(db, payload)

@router.post("/", response_model=menu_itemory_schema.MenuItem)
def create_item(item: menu_itemory_schema.MenuItemCreate, db: Session = Depends(get_db)):
    return menu_item_crud.create_item(db, item)

@router.delete("/{item_id}")
def delete_item(item_id: int, db: Session = Depends(get_db)):
    return menu_item_crud.delete_item(db, item_id)
