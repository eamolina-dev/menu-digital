from app.database import SessionLocal
from app.models.client import Client
from app.models.category import Category
from app.models.menu_item import MenuItem

db = SessionLocal()

def seed_client(name: str, slug: str):

    client = Client(name=name, slug=slug)
    db.add(client)
    db.commit()
    db.refresh(client)

    bebidas = Category(title="Bebidas", client_id=client.id)
    comidas = Category(title="Comidas", client_id=client.id)

    db.add_all([bebidas, comidas])
    db.commit()
    db.refresh(bebidas)

    db.add(MenuItem(name="Café", price=3.0, category_id=bebidas.id))
    db.commit()

    print(f"Cliente {name} creado")

seed_client("Demo Restaurant", "demo")
db.close()
