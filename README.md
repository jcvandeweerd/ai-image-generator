# AI Image Generator

A proof-of-concept (POC) application that generates images from text prompts using the Stability AI API. Built with a **FastAPI** backend and a **Next.js** frontend.

---

## 🎯 Overview

This application allows users to:
- Enter a text prompt describing the image they want
- Generate an AI image using Stability AI's Stable Diffusion API
- View the generated image directly in the browser

---

## 🏗️ Architecture

```
ai-image-generator/
├── .venv/            # Python virtual environment
├── backend/          # FastAPI Python backend
│   ├── main.py              # API endpoints
│   ├── image_generator.py   # Stability AI integration
│   ├── utils.py             # Utility functions
│   ├── requirements.txt     # Python dependencies
│   └── .env.example         # Environment template
│
└── frontend/         # Next.js React frontend
    ├── app/
    │   ├── page.tsx              # Main page component
    │   ├── layout.tsx            # App layout
    │   ├── components/
    │   │   ├── PromptInput.tsx   # Text input component
    │   │   └── ImageResult.tsx   # Image display component
    │   └── utils/
    │       └── generateImage.ts  # API client
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Python 3.7+**
- **Node.js 18+**
- **Stability AI API Key** – Get one at [platform.stability.ai](https://platform.stability.ai/)

---

### Backend Setup

1. **Navigate to the project root and create a virtual environment:**
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r backend/requirements.txt
   ```

3. **Configure environment variables:**
   ```bash
   cp backend/.env.example backend/.env
   ```
   Then edit `backend/.env` and add your Stability AI API key:
   ```
   STABILITY_API_KEY=your_api_key_here
   ```

4. **Start the backend server:**
   ```bash
   cd backend
   ../.venv/bin/uvicorn main:app --reload --port 8000
   ```
   The API will be available at `http://localhost:8000`

---

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3005`

---

## 📡 API Reference

### Generate Image

**POST** `/generate`

Generates an image from a text prompt.

**Request Body:**
```json
{
  "prompt": "A futuristic city at sunset with flying cars"
}
```

**Response:**
```json
{
  "image_url": "data:image/webp;base64,..."
}
```

**Error Response:**
```json
{
  "detail": "Error message"
}
```

**Interactive Docs:** `http://localhost:8000/docs`

---

## 🛠️ Tech Stack

### Backend
- **FastAPI** – Modern Python web framework
- **Pydantic** – Data validation
- **Uvicorn** – ASGI server
- **Stability AI API** – Image generation (Stable Diffusion)

### Frontend
- **Next.js 15** – React framework with App Router
- **React 19** – UI library
- **TypeScript** – Type safety
- **Tailwind CSS 4** – Styling

---

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `STABILITY_API_KEY` | Your Stability AI API key | ✅ |

---

## 🔒 Security Notes

- The backend CORS is configured to allow all origins (`*`) for development. **Restrict this in production.**
- Never commit `.env` files with real API keys.
- The `.env.example` file is included in version control as a template.

---

## 📝 Development

### Running Both Servers

Run both servers simultaneously in separate terminals:

**Terminal 1 – Backend:**
```bash
cd backend
../.venv/bin/uvicorn main:app --reload --port 8000
```

**Terminal 2 – Frontend:**
```bash
cd frontend
npm run dev
```

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
npm start
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| `No module named uvicorn` | Activate venv: `source .venv/bin/activate` and install deps |
| `STABILITY_API_KEY` not found | Ensure `.env` file exists in `backend/` with valid key |
| CORS errors | Check backend is running on port 8000 |
| Image not generating | Verify API key is valid and has credits |
| Frontend can't connect | Ensure backend is running before making requests |
| `Address already in use` | Kill existing process: `lsof -ti:8000 \| xargs kill -9` |

---

## 📄 License

This project is a proof of concept for demonstration purposes.

---

## 🤝 Contributing

This is a POC project. Feel free to fork and extend for your own use cases.
