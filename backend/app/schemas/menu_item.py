from pydantic import BaseModel
from typing import Optional

class MenuItemBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    image: Optional[str] = None

class MenuItemCreate(MenuItemBase):
    category_id: int

class MenuItemUpdate(BaseModel):
    name: str | None = None
    description: str | None = None
    price: float | None = None
    image: str | None = None
    category_id: int | None = None

class MenuItemRead(MenuItemBase):
    id: int

    class Config:
        from_attributes = True
