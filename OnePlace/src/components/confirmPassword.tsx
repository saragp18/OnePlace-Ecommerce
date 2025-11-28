import type { Dispatch, SetStateAction } from "react";

  /**
  Función ContrasenaConfirma.
  Renderiza un campo de entrada tipo contraseña y notifica los cambios realizados
  por el usuario mediante la función onChange recibida por props.

  Entradas:
  value: Cadena de texto que representa el valor actual del input.
  onChange: Función que maneja el evento de cambio del input y actualiza el valor.

  Salidas:
  Retorna un componente JSX que muestra un input tipo contraseña cuyo valor se
  controla externamente mediante props.
  */
interface Props {
  value: string;
  onChange: (e: any) => void | Dispatch<SetStateAction<string>>;
}

function ContrasenaConfirma({ value, onChange }: Props) {
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

export default ContrasenaConfirma;