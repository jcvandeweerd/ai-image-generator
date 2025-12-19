'use client';

import { useState } from "react";
import PromptInput from "./components/PromptInput";
import ImageResult from "./components/ImageResult";
import { generateImage } from "./utils/generateImage";

export default function HomePage() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setError(null);
      const url = await generateImage(prompt);
      setImageUrl(url);
    } catch (err) {
      setError("Could not generate image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-neutral-950">
      <h1 className="text-3xl font-bold mb-6">webqid. Image Generator</h1>

      <PromptInput
        value={prompt}
        onChange={setPrompt}
        onSubmit={handleGenerate}
        loading={loading}
      />

      {error && <p className="text-red-600 mt-4">{error}</p>}

      <ImageResult imageUrl={imageUrl} />
    </main>
  );
}
