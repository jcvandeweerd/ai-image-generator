'use client';

import { FC } from "react";

interface ImageResultProps {
  imageUrl: string | null;
}

const ImageResult: FC<ImageResultProps> = ({ imageUrl }) => {
  if (!imageUrl) return null;

  return (
    <div className="mt-6">
      <img
        src={imageUrl}
        alt="Generated"
        className="shadow max-w-md rounded-2xl"
      />
    </div>
  );
};

export default ImageResult;
