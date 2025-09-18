from sqlmodel import create_engine, Session, SQLModel

DATABASE_URL = "postgresql://myuser:mypassword@db:5432/mydatabase" # Replace with your actual details
engine = create_engine(DATABASE_URL, echo=True)

def get_session():
    with Session(engine) as session:
        yield session

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)