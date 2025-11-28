import type { Dispatch, SetStateAction } from "react";

  /**
  Función handleChange.
  Captura el valor ingresado por el usuario en el input y lo envía al callback
  recibido por props, permitiendo compatibilidad tanto con setState como con
  funciones personalizadas.

  Entradas:
  e: Evento de cambio proveniente de un input HTML.

  Salidas:
  No retorna valor. Ejecuta la función onChange enviada por props, enviando
  el texto actual del input.
  */
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