from sqlalchemy.orm import Session
from models.menu_item import MenuItem
from schemas.menu_item import MenuItemCreate

def get_items(db: Session, client_id: int):
    return (
        db.query(MenuItem)
        .join(MenuItem.category)
        .filter_by(client_id=client_id)
        .all()
    )

def create_item(db: Session, data):
    item = MenuItem(**data.dict())
    db.add(item)
    db.commit()
    db.refresh(item)
    return item

def delete_item(db: Session, item_id: int):
    item = db.query(MenuItem).get(item_id)
    if item:
        db.delete(item)
        db.commit()
    return item
