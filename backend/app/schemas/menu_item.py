from pydantic import BaseModel
from typing import Optional

class MenuItemBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    image: Optional[str] = None

class MenuItemCreate(MenuItemBase):
    category_id: int

class MenuItem(MenuItemBase):
    id: int

    class Config:
        from_attributes = True
