from pydantic import BaseModel, Field
from typing import List
from app.schemas.menu_item import MenuItemRead

class CategoryBase(BaseModel):
    title: str

class CategoryCreate(CategoryBase):
    pass

class CategoryUpdate(BaseModel):
    title: str | None = None

class CategoryRead(CategoryBase):
    id: int
    items: List[MenuItemRead] = Field(default_factory=list)

    class Config:
        from_attributes = True
