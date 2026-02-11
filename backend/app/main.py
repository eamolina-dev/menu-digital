from fastapi import FastAPI
from db import Base, engine

from models.category import Category
from models.menu_item import MenuItem

from routes.category import router as category_router
from routes.menu_item import router as item_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(category_router, prefix="/categories", tags=["Categories"])
app.include_router(item_router, prefix="/items", tags=["Items"])
