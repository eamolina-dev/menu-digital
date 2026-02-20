from pydantic import BaseModel

class ClientCreate(BaseModel):
    name: str
    slug: str

class ClientRead(BaseModel):
    id: int
    name: str
    slug: str
    access_token: str

    class Config:
        from_attributes = True
