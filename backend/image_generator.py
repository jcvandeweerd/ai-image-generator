# backend/image_generator.py
import requests
import os
import base64
from dotenv import load_dotenv

load_dotenv()

STABILITY_API_KEY = os.getenv("STABILITY_API_KEY")

def generate_image_from_prompt(prompt: str) -> str:
    url = "https://api.stability.ai/v2beta/stable-image/generate/core"

    headers = {
        "authorization": f"Bearer {STABILITY_API_KEY}",
        "accept": "image/*"
    }

    files = {
        "none": ""
    }

    data = {
        "prompt": prompt,
        "output_format": "webp",  # of "png", "jpeg"
    }

    response = requests.post(url, headers=headers, data=data, files=files)

    if response.status_code == 200:
        image_bytes = response.content
        image_base64 = base64.b64encode(image_bytes).decode("utf-8")
        return f"data:image/webp;base64,{image_base64}"
    else:
        raise Exception(str(response.json()))
