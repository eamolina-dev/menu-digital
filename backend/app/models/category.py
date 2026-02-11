from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db import Base

class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)

    client_id = Column(Integer, ForeignKey("clients.id"))
    client = relationship("Client", back_populates="categories")

    items = relationship("MenuItem", back_populates="category", cascade="all, delete")
