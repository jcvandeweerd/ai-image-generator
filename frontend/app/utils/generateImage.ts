export async function generateImage(prompt: string): Promise<string> {
    const response = await fetch("http://localhost:8000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
  
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || "Image generation failed");
    }
  
    const data = await response.json();
    return data.image_url;
  }
  