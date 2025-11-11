
import React from 'react';

const heroBg = 'https://i.pinimg.com/236x/f3/51/bd/f351bd24cee6ddbc5aac98621851a475.jpg';

// --- 1. Sub-Componente: Header ---
const Header: React.FC = () => (
  <header className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8 shadow-sm">
    <div className="container mx-auto flex justify-between items-center max-w-3xl">
      <div className="font-bold text-lg text-gray-900">ONEPLACE</div>
      <nav className="hidden md:flex space-x-6 text-gray-600 text-sm">
        {['HOME', 'NEW', 'CATEGORIES', 'MORE SELLS', 'SELL', 'LEARN'].map(item => (
          <a key={item} href="#" className="hover:text-gray-900 transition-colors">{item}</a>
        ))}
      </nav>
      <div className="flex items-center space-x-4 text-gray-600 text-lg">
        <span>Q</span> 
        <span>🛒</span> 
        <span>👤</span> 
      </div>
    </div>
  </header>
);

// --- 2. Sub-Componente: HeroSection ---
const HeroSection: React.FC = () => (
  <div
    className="relative h-64 bg-gray-700 bg-cover bg-center rounded-lg overflow-hidden flex items-center justify-center mb-8"
    style={{ backgroundImage: `url(${heroBg})` }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <h1 className="relative z-10 text-white text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide">
      SELLER PROFILE
    </h1>
  
  </div>
);

// --- 3. Sub-Componente: ProductCard ---
interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 border border-gray-100">
    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
      <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-auto flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-contain max-h-full max-w-full p-2"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span>Category</span>
          <span className="font-semibold text-gray-900">{price}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  </div>
);

// --- 4. Sub-Componente: CallToAction ---
const CallToAction: React.FC = () => (
  <div className="bg-gray-100 p-8 rounded-lg shadow-inner text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">STAY UPDTD DATE ABOUT OUR LATEST OFFERS</h3>
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="p-3 border border-gray-300 rounded-md w-full sm:max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out w-full sm:w-auto">
        Subscribe
      </button>
    </div>
  </div>
);

// --- 5. Sub-Componente: Footer ---
const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-200 py-8 px-4 mt-16">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 max-w-3xl text-gray-600 text-sm">
      {/* (Contenido del Footer simplificado) */}
      <div><h4 className="font-bold text-lg text-gray-900 mb-4">ONEPLACE</h4></div>
      <div><h4 className="font-semibold text-gray-900 mb-4">COMPANY</h4></div>
      <div><h4 className="font-semibold text-gray-900 mb-4">HELP</h4></div>
      <div><h4 className="font-semibold text-gray-900 mb-4">FAQ</h4></div>
    </div>
    <div className="container mx-auto border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-xs max-w-3xl">
      <p>&copy; 2023 ONEPLACE. All rights reserved.</p>
    </div>
  </footer>
);

// --- Componente Principal: App ---
function sellerprofile() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <HeroSection />

        {/* Botón para agregar nuevas publicaciones */}
        <div className="my-8 text-center">
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
            Agregar Nuevas Publicaciones
          </button>
        </div>

        {/* Productos del vendedor */}
        <div className="space-y-12">
          <ProductCard
            imageUrl="https://img01.ztat.net/article/spp-media-p1/21349289ab2f4eafbc85ceb024acf2eb/d036f5145bb44c28b4361dbc7810a287.jpg?imwidth=200&filter=packshot"
            title="Gathered striped shirt"
            price=""
            description="Shirt made from smoothly viscose blended fabric for greater comfort and mobility. Lapel collar and long sleeves. Gathered fabric detail on the front. Front button closure."
          />
          <ProductCard
            imageUrl="https://static.e-stradivarius.net/assets/public/f262/4044/e9de49cdafa6/71783e86095a/04512259400-s1/04512259400-s1.jpg?ts=1744123188517&w=1082&f=auto"
            title="Soft-touch wide-leg pants"
            price=""
            description="Pants made from a modal blend fabric that feels extremely soft to the touch. Mid-rise with elasticated waistband and front zip and button fastening. Feature patch pockets. Ribbed detail on the front. Straight, wide-legs. Available in several colors."
          />
          <ProductCard
            imageUrl="https://static.e-stradivarius.net/assets/public/e34f/9ef8/11a946bf9b46/f1a3972db179/06503410401-s1/06503410401-s1.jpg?ts=1750063192209&w=1082&f=auto"
            title="Soft-touch zip-up sweatshirt"
            price=""
            description="Sweatshirt made from a soft-touch modal blend fabric. Adjustable hood with contrasting drawstrings. Long sleeves. Ribbed cuffs and hem. Front zip fastening. Available in several colors."
          />
        </div>

        <div className="mt-16">
          <CallToAction />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default sellerprofile;