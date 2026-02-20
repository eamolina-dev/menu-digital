from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.routes.helpers import get_db, get_client_by_token

from app.schemas.category import CategoryCreate, CategoryUpdate, CategoryRead
from app.crud.category import (
    get_categories,
    create_category,
    update_category,
    delete_category,
)

router = APIRouter(prefix="/api/admin")

@router.get("/{token}/categories", response_model=list[CategoryRead])
def list_categories(token: str, db: Session = Depends(get_db)):
    client = get_client_by_token(db, token)
    return get_categories(db, client.id)

@router.post("/{token}/categories", response_model=CategoryRead)
def new_category(token: str, payload: CategoryCreate, db: Session = Depends(get_db)):
    client = get_client_by_token(db, token)
    return create_category(db, payload, client.id)

@router.patch("/{token}/categories/{category_id}", response_model=CategoryRead)
def edit_category(token: str, category_id: int, payload: CategoryUpdate, db: Session = Depends(get_db)):
    client = get_client_by_token(db, token)

    category = update_category(db, category_id, client.id, payload)
    if not category:
        raise HTTPException(404, "Category not found")

    return category

@router.delete("/{token}/categories/{category_id}")
def remove_category(token: str, category_id: int, db: Session = Depends(get_db)):
    client = get_client_by_token(db, token)

    category = delete_category(db, category_id, client.id)
    if not category:
        raise HTTPException(404, "Category not found")

    return {"success": True}
