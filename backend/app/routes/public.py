from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.routes.helpers import get_db, get_client_by_token
from app.crud.category import get_categories

router = APIRouter()

@router.get("/menu/{token}")
def public_menu(token: str, db: Session = Depends(get_db)):
    client = get_client_by_token(db, token)
    return get_categories(db, client.id)
