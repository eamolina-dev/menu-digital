from fastapi import FastAPI
from app.db import Base, engine

from app.models.category import Category
from app.models.menu_item import MenuItem

from app.routes.category import router as category_router
from app.routes.menu_item import router as item_router
from app.routes.clients import router as clients_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Menu QR API")

app.include_router(category_router, tags=["Categories"])
app.include_router(item_router, tags=["Items"])
app.include_router(clients_router)
