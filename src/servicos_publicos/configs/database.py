from sqlmodel import create_engine, Session, SQLModel
import os

DATABASE_USER = os.getenv("DATABASE_USER", "myuser")
DATABASE_PASSWORD = os.getenv("DATABASE_PASSWORD", "mypassword")
DATABASE_HOST = os.getenv("DATABASE_HOST", "localhost")
DATABASE_PORT = os.getenv("DATABASE_PORT", "5432")
DATABASE_NAME = os.getenv("DATABASE_NAME", "mydatabase")

DATABASE_URL = f"postgresql://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}:{DATABASE_PORT}/{DATABASE_NAME}"
engine = create_engine(DATABASE_URL, echo=True)

def get_session():
    with Session(engine) as session:
        yield session

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def seed_db():
    from servicos_publicos.models.models import Servico
    from sqlmodel import select
    with Session(engine) as session:
        statement = select(Servico).limit(1)
        if not session.exec(statement).first():
            servicos_iniciais = [
                Servico(
                    nome="Serviço de Exemplo 1",
                    descricao="Descrição do Serviço de Exemplo 1",
                    link_site="https://exemplo1.com",
                    link_chat="https://chat.exemplo1.com",
                    categoria="Categoria A"
                ),
                Servico(
                    nome="Serviço de Exemplo 2",
                    descricao="Descrição do Serviço de Exemplo 2",
                    link_site="https://exemplo2.com",
                    link_chat="https://chat.exemplo2.com",
                    categoria="Categoria B"
                ),
            ]
            session.add_all(servicos_iniciais)
            session.commit()