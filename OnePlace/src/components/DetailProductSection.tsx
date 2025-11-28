import { useState } from "react";
import { NavLink } from "react-router-dom";

interface ProductDetailProps {
  onclick: () => void;
  name: string;
  price: string;
  color: string;
  sizes: string[];
  description: string;
  materials: string[];
  images: string[];
}

function ProductDetailPage({
  onclick,
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
      <div className="flex flex-col gap-4">
        {images && images.length > 0 && images[0] ? (
          <>
            <img
              src={images[0]}
              alt={name}
              className="rounded-lg object-cover w-full"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Crect width='600' height='600' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af'%3ESin imagen%3C/text%3E%3C/svg%3E";
              }}
            />
            {images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {images.slice(1).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`view-${i}`}
                    className="rounded-lg object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23e5e7eb'/%3E%3C/svg%3E";
                    }}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Sin imagen</span>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-start">
        <h1 className="text-3xl font-semibold text-gray-900">{name}</h1>
        <p className="text-2xl font-medium mt-2">{price}</p>

        <p className="mt-4 text-sm text-gray-700">
          <span className="font-semibold">COLOR: </span> {color}
        </p>

        {sizes && sizes.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-2">WOMEN'S SIZE:</h3>
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
        )}

        <div className="mt-6 flex flex-col gap-3">
          <button className="border border-black py-3 rounded-md hover:bg-black hover:text-white transition"
            onClick={() => onclick()}
          >
            ADD TO CART
          </button>
          <button className="bg-black text-white py-3 rounded-md hover:opacity-90 transition">
            BUY NOW
          </button>
          <NavLink to="/CommentPage">
              <button className="border border-black py-3 rounded-md hover:bg-black hover:text-white transition w-full">
           CONTACT
          </button>
          </NavLink>
        </div>

        <div className="mt-8 border-t pt-4">
          <h4 className="font-semibold mb-2">DESCRIPTION</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {materials && materials.length > 0 && (
          <div className="mt-8 border-t pt-4">
            <h4 className="font-semibold mb-2">MATERIALS AND CARE</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {materials.map((mat, index) => (
                <li key={index}>{mat}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductDetailPage;