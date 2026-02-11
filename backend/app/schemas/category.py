from pydantic import BaseModel
from typing import List
from schemas.menu_item import MenuItem

class CategoryBase(BaseModel):
    title: str

class CategoryCreate(CategoryBase):
    pass

class Category(CategoryBase):
    id: int
    items: List[MenuItem] = []

    class Config:
        from_attributes = True
