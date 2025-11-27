import { useState } from "react";
import Navbar from "../components/Navbar";
import Chat from "../components/Chat";
import Footer from "../components/Footer";

function CommentPage() {
  // Estados para los campos
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Mensaje de confirmación
  const [confirmacion, setConfirmacion] = useState("");

  const handleSubmit = () => {
    if (!nombre || !correo || !mensaje) {
      setConfirmacion("Por favor completa todos los campos.");
      return;
    }

    setConfirmacion("Información enviada correctamente");

    // Reiniciar campos
    setNombre("");
    setCorreo("");
    setMensaje("");

    // Quitar mensaje después de 3 segundos
    setTimeout(() => setConfirmacion(""), 3000);
  };

  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/Fondo-comments.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <Navbar />

          <div className="flex flex-col md:flex-row justify-center gap-10 px-4 md:px-8 mt-10 w-full">

            <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-xl mx-auto border border-gray-200 mb-1">

              <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
              <p className="text-gray-500 mb-8">
                Feel free to contact us any time. We will get back to you as soon as we can!
              </p>

              <div className="space-y-6">

                {/* Nombre */}
                <input
                  type="text"
                  placeholder="Your Name"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-gray-500"
                />

                {/* Correo */}
                <input
                  type="email"
                  placeholder="Your Email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-gray-500"
                />

                {/* Chat */}
                <Chat value={mensaje} onChange={setMensaje} />

                <div className="w-full flex justify-end">
                  <button
                    className="h-full px-6 py-3 bg-black text-white rounded-full border hover:bg-gray-800 transition"
                    onClick={handleSubmit}
                  >
                    ➤
                  </button>
                </div>

                {/* Mensaje de confirmación */}
                {confirmacion && (
                  <p className="text-center text-black font-semibold mt-3">
                    {confirmacion}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="bg-white py-16 px-6 flex flex-col items-center border-t border-gray-200 shadow-inner">
        <h1 className="text-2xl md:text-3xl font-bold mb-12 text-gray-900 text-center">
          YOU CAN USE THIS CHAT FOR
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl w-full text-center">

          <div className="px-4 bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <img
              src="/img/24y7.png"
              alt="24/7 Icon"
              className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 object-contain"
            />
            <p className="text-gray-700 text-sm md:text-base">
              Answer questions about products, availability, sizes, prices,
              shipping times, etc.
            </p>
          </div>

          <div className="px-4 bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <img
              src="/img/Pregunta.png"
              alt="Question Icon"
              className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 object-contain"
            />
            <p className="text-gray-700 text-sm md:text-base">
              Recommend products based on customer needs and guide them through
              the ordering process.
            </p>
          </div>

          <div className="px-4 bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <img
              src="/img/Mano-con-caja.png"
              alt="Box Icon"
              className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 object-contain"
            />
            <p className="text-gray-700 text-sm md:text-base">
              Assist with exchanges, returns, order tracking, or complaints.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CommentPage;
