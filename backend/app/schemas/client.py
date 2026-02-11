from pydantic import BaseModel

class ClientCreate(BaseModel):
    name: str
    slug: str

class Client(BaseModel):
    id: int
    name: str
    slug: str

    class Config:
        from_attributes = True
