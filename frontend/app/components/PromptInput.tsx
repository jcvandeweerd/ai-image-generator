'use client';

import { FC } from "react";

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
}

const PromptInput: FC<PromptInputProps> = ({ value, onChange, onSubmit, loading }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe your image..."
        className="border border-gray-300 rounded p-2 w-full mb-4"
      />

      <button
        onClick={onSubmit}
        disabled={loading || !value}
        className="bg-neutral-900 text-neutral-300 px-4 py-2 rounded-xl hover:bg-neutral-400 border border-neutral-600 disabled:opacity-50 w-full"
      >
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
};

export default PromptInput;
