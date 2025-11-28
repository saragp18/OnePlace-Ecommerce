import type { Dispatch, SetStateAction } from "react";

interface Props {
  value: string;
  onChange: (e: any) => void | Dispatch<SetStateAction<string>>;
}

function Contrasena({ value, onChange }: Props) {
  return (
    <input
      type="password"
      name="Password"
      placeholder="Password"
      value={value}
      onChange={onChange as any}
      className="w-full max-w-sm px-4 py-2 bg-gray-200 rounded-xl border-none focus:outline-none shadow-inner"
    />
  );
}

export default Contrasena;