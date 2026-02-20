from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.routes.helpers import get_db, get_client_by_token

from app.schemas.menu_item import (
    MenuItemCreate,
    MenuItemUpdate,
    MenuItemRead,
)
from app.crud.menu_item import (
    get_items,
    create_item,
    update_item,
    delete_item,
)

router = APIRouter(prefix="/api/admin")

@router.get("/{token}/items", response_model=list[MenuItemRead])
def list_items(token: str, db: Session = Depends(get_db)):
    client = get_client_by_token(db, token)
    return get_items(db, client.id)

@router.post("/{token}/items", response_model=MenuItemRead)
def new_item(token: str, payload: MenuItemCreate, db: Session = Depends(get_db)):
    client = get_client_by_token(db, token)

    item = create_item(db, payload, client.id)
    if not item:
        raise HTTPException(400, "Invalid category")

    return item

@router.patch("/{token}/items/{item_id}", response_model=MenuItemRead)
def edit_item(token: str, item_id: int, payload: MenuItemUpdate, db: Session = Depends(get_db)):
    client = get_client_by_token(db, token)

    item = update_item(db, item_id, client.id, payload)
    if not item:
        raise HTTPException(404, "Item not found")

    return item

@router.delete("/{token}/items/{item_id}")
def remove_item(token: str, item_id: int, db: Session = Depends(get_db)):
    client = get_client_by_token(db, token)

    item = delete_item(db, item_id, client.id)
    if not item:
        raise HTTPException(404, "Item not found")

    return {"success": True}
