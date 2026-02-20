from sqlalchemy.orm import Session
from app.models.category import Category
from app.models.menu_item import MenuItem
from app.schemas.menu_item import MenuItemCreate

def get_items(db: Session, client_id: int):
    return db.query(MenuItem).filter(MenuItem.client_id == client_id).all()

def create_item(db: Session, data: MenuItemCreate, client_id: int):
    category = db.get(Category, data.category_id)

    if not category or category.client_id != client_id:
        return None

    item = MenuItem(
        name=data.name,
        description=data.description,
        price=data.price,
        image=data.image,
        category_id=data.category_id,
        client_id=client_id
    )

    db.add(item)
    db.commit()
    db.refresh(item)
    return item

def update_item(db: Session, item_id: int, client_id: int, data):
    item = db.get(MenuItem, item_id)

    if not item or item.client_id != client_id:
        return None

    update_data = data.dict(exclude_unset=True)

    if "category_id" in update_data:
        category = db.get(Category, update_data["category_id"])
        if not category or category.client_id != client_id:
            return None

    for field, value in update_data.items():
        setattr(item, field, value)

    db.commit()
    db.refresh(item)
    return item

def delete_item(db: Session, item_id: int, client_id: int):
    item = db.get(MenuItem, item_id)

    if not item or item.client_id != client_id:
        return None

    db.delete(item)
    db.commit()
    return item
