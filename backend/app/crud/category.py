from sqlalchemy.orm import Session
from models.category import Category
from schemas.category import CategoryCreate

def get_categories(db: Session, client_id: int):
    return db.query(Category).filter(Category.client_id == client_id).all()

def create_category(db: Session, title: str, client_id: int):
    category = Category(title=title, client_id=client_id)
    db.add(category)
    db.commit()
    db.refresh(category)
    return category

def delete_category(db: Session, category_id: int):
    category = db.query(Category).get(category_id)
    if category:
        db.delete(category)
        db.commit()
    return category
