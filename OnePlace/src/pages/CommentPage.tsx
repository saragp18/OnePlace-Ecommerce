import React from "react";
import Navbar from "../components/Navbar";
import Chat from "../components/Chat";
import Commnets from "../assets/Fondo-comments.png";
import Send from "../components/SendMessageBtn";
import veintey7 from "../assets/24y7.png";
import pregunta from "../assets/Pregunta.png";
import Caja from "../assets/Mano-con-caja.png";

function CommentPage() {
  return (
    <>
     
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Commnets})` }}
      >
       
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      
        <div className="relative z-10">
          <Navbar />

          <h1 className="text-2xl md:text-3xl font-bold text-white ml-4 md:ml-6 mt-4 md:mt-6 tracking-wide text-center md:text-left">
            CHAT
          </h1>

         
          <div className="flex flex-col md:flex-row items-start justify-center gap-6 px-4 md:px-8 mt-6 md:mt-10 w-full">
           
            <div className="flex-1 bg-black/60 rounded-2xl p-4 md:p-6 backdrop-blur-md flex flex-col md:flex-row items-center w-full max-w-4xl mx-auto overflow-hidden">
              <Chat />
              <Send />
            </div>

           
            <div className="bg-gray-200/90 rounded-xl p-4 w-full md:w-64 h-auto mt-6 md:mt-0">
              <h2 className="text-center font-semibold text-gray-800 mb-3">
                History Chat
              </h2>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-white py-10 md:py-16 px-6 flex flex-col items-center">
        <h1 className="text-xl md:text-2xl font-bold mb-8 md:mb-12 text-center">
          YOU CAN USE THIS CHAT FOR
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl w-full text-center">
          <div className="px-4">
            <img
              src={veintey7}
              alt="24/7 Icon"
              className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 object-contain"
            />
            <p className="text-gray-700 text-sm md:text-base">
              Answer questions about products, availability, sizes, prices,
              shipping times, etc.
            </p>
          </div>

          <div className="px-4">
            <img
              src={pregunta}
              alt="Question Icon"
              className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 object-contain"
            />
            <p className="text-gray-700 text-sm md:text-base">
              Recommend products based on customer needs and guide them through
              the ordering process.
            </p>
          </div>

          <div className="px-4">
            <img
              src={Caja}
              alt="Box Icon"
              className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 object-contain"
            />
            <p className="text-gray-700 text-sm md:text-base">
              Assist with exchanges, returns, order tracking, or complaints.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentPage;
