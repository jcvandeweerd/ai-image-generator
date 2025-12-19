from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from image_generator import generate_image_from_prompt

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Only for development; restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Prompt(BaseModel):
    prompt: str

@app.post("/generate")
async def generate_image(prompt: Prompt):
    try:
        image_url = generate_image_from_prompt(prompt.prompt)
        return {"image_url": image_url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
