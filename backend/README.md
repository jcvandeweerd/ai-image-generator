# AI Image Generator – Backend

FastAPI backend for the AI Image Generator POC.

See the main [README.md](../README.md) in the project root for full setup instructions.

## Quick Start

```bash
# From project root
pip install -r backend/requirements.txt
cp backend/.env.example backend/.env  # Add your API key
cd backend
../.venv/bin/uvicorn main:app --reload --port 8000
```

The API runs at `http://localhost:8000`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/generate` | Generate image from prompt |
| GET | `/docs` | Interactive API documentation |
| GET | `/redoc` | Alternative API documentation |

## Project Structure

```
backend/
├── main.py              # FastAPI app & endpoints
├── image_generator.py   # Stability AI integration
├── utils.py             # Utility functions
├── requirements.txt     # Python dependencies
├── .env                 # Environment variables (not committed)
└── .env.example         # Environment template
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `STABILITY_API_KEY` | Your Stability AI API key |

## Dependencies

- `fastapi` – Web framework
- `uvicorn` – ASGI server
- `python-dotenv` – Environment variable loading
- `requests` – HTTP client
- `pydantic` – Data validation
