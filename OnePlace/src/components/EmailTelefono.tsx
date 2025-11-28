import type { Dispatch, SetStateAction } from "react";

interface Props {
  value: string;
  onChange: (e: any) => void | Dispatch<SetStateAction<string>>;
}

/**
Función EmailTelefono.
Renderiza un campo de entrada destinado a recibir un correo electrónico o un número de teléfono,
permitiendo al usuario escribir y actualizar el valor proporcionado desde el componente padre.

Entradas:
- value: cadena de texto que representa el valor actual del campo.
- onChange: función que se ejecuta cada vez que el usuario cambia el contenido del input.
  Puede ser un manejador de evento o un SetState para actualizar el estado externo.

Salidas:
Retorna un componente JSX que muestra un input de tipo texto estilizado, 
configurado para recibir correo o número de teléfono y notificar cambios al componente padre.
*/
function EmailTelefono({ value, onChange }: Props) {
  return (
    <input
      type="text"
      name="EmailTelefono"
      placeholder="Email or Phone Number"
      value={value}
      onChange={onChange as any}
      className="w-full max-w-sm px-4 py-2 bg-gray-200 rounded-xl border-none focus:outline-none shadow-inner"
    />
  );
}

export default EmailTelefono;