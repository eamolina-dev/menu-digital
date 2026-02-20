from sqlalchemy.orm import Session
from app.models.category import Category
from app.schemas.category import CategoryCreate

def get_categories(db: Session, client_id: int):
    return db.query(Category).filter(Category.client_id == client_id).all()

def create_category(db: Session, data: CategoryCreate, client_id: int):
    category = Category(title=data.title, client_id=client_id)
    db.add(category)
    db.commit()
    db.refresh(category)
    return category

def update_category(db: Session, category_id: int, client_id: int, data):
    category = db.get(Category, category_id)

    if not category or category.client_id != client_id:
        return None

    update_data = data.dict(exclude_unset=True)

    for field, value in update_data.items():
        setattr(category, field, value)

    db.commit()
    db.refresh(category)
    return category

def delete_category(db: Session, category_id: int, client_id: int):
    category = db.get(Category, category_id)

    if not category or category.client_id != client_id:
        return None

    db.delete(category)
    db.commit()
    return category

