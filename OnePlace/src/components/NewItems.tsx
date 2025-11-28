import { motion } from "framer-motion";

const setups = [
  { id: 1, src: "/img/SueterItem.png" },
  { id: 2, src: "/img/CamisetaGraItem.png" },
  { id: 3, src: "/img/CardiganItem.png" },
  { id: 4, src: "/img/BlusaItem.png" },
  { id: 5, src: "/img/ChaquetaItem.png" },
  { id: 6, src: "/img/CamisetaItems.png" },
];


const repeatedSetups = [...setups, ...setups];

/**
Función NewItems.
Renderiza un carrusel horizontal infinito de imágenes utilizando framer-motion. 
Duplica el arreglo de ítems para generar un desplazamiento continuo hacia la izquierda.

Entradas:
No recibe parámetros.
Utiliza internamente:
- setups: lista de imágenes base.
- repeatedSetups: arreglo duplicado para lograr el efecto de loop.
- motion.div para animación continua (Framer Motion).

Salidas:
Retorna un componente JSX que muestra un carrusel auto-deslizable con los nuevos
ítems, cada uno dentro de una tarjeta con hover animado.
*/

export default function NewItems() {
  return (
    <section className="bg-white py-20 overflow-hidden">
       <h2 className="text-base tracking-[2px] mb-12 font-semibold text-gray-900 text-center">
        NEW ITEMS
      </h2>

      <div className="relative w-full">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30, 
            ease: "linear",
          }}
        >
          {repeatedSetups.map((setup, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={setup.src}
                alt={`img-${setup.id}`}
                className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}