from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.db import Base

class Client(Base):
    __tablename__ = "clients"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)

    # slug = Column(String, unique=True, index=True, nullable=False)

    access_token = Column(String, unique=True, index=True, nullable=False)

    categories = relationship(
        "Category",
        back_populates="client",
        cascade="all, delete"
    )
