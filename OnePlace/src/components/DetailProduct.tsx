import { useState } from "react";

interface ProductDetailProps {
  name: string;
  price: string;
  color: string;
  sizes: string[];
  description: string;
  materials: string[];
  images: string[];
}

function ProductDetailPage({
  name,
  price ,
  color,
  sizes,
  description,
  materials,
  images,
}: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string>("M");

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* LEFT - Images */}
<div className="flex flex-col gap-3">
  {/* Imagen principal */}
  <img
    src={images[0]}
    alt={name}
    className="rounded-lg object-cover w-full aspect-[2/3]"
  />

  {/* Dos imágenes más pequeñas abajo */}
  <div className="grid grid-cols-2 gap-3">
    {images.slice(1, 3).map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`${name}-${i}`}
        className="rounded-lg object-cover w-full aspect-[2/3]"
      />
    ))}
  </div>
</div>


      {/* RIGHT - Info */}
      <div className="flex flex-col justify-start">
        <h1 className="text-3xl font-semibold text-gray-900">{name}</h1>
        <p className="text-2xl font-medium mt-2">{price}</p>

        <p className="mt-4 text-sm text-gray-700">
          <span className="font-semibold">COLOR: </span> {color}
        </p>

        {/* Size Selector */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2">WOMEN’S SIZE:</h3>
          <div className="flex gap-3 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border rounded-md px-4 py-2 text-sm transition ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button className="border border-black py-3 rounded-md hover:bg-black hover:text-white transition">
            ADD TO CART
          </button>
          <button className="bg-black text-white py-3 rounded-md hover:opacity-90 transition">
            BUY NOW
          </button>
          <button className="bg-gray-200 py-3 rounded-md hover:bg-gray-300 transition">
            CHAT HERE
          </button>
        </div>

        {/* Description */}
        <div className="mt-8 border-t pt-4">
          <h4 className="font-semibold mb-2">DESCRIPTION</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Materials */}
        <div className="mt-8 border-t pt-4">
          <h4 className="font-semibold mb-2">MATERIALS AND CARE</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {materials.map((mat, index) => (
              <li key={index}>{mat}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;