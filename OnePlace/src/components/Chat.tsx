import type { Dispatch, SetStateAction } from "react";

interface ChatProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>> | ((val: string) => void);
}

function Chat({ value, onChange }: ChatProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    // support both setState and simple callback
    if (typeof onChange === "function") onChange(v as any);
  };

  return (
    <input
      type="text"
      placeholder="Ask or send anything..."
      value={value}
      onChange={handleChange}
      className="w-full px-4 py-3 bg-white/90 text-gray-800 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
    />
  );
}

export default Chat;