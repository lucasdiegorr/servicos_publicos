from typing import Optional
from sqlmodel import Field, SQLModel

class Servico(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    nome: str = Field(index=True)
    descricao: str
    link_site: Optional[str] = Field(default=None)
    link_chat: Optional[str] = Field(default=None)
    categoria: Optional[str] = Field(default=None)