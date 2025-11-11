export default function HeroShirtsPage() {
  return (
    <section className="relative flex items-center justify-center w-full h-screen bg-white overflow-hidden">
      
      <img
        src="/img/HeroShirtBanner.jpeg"
        alt="Imagen izquierda"
        className="absolute left-0 top-0 w-full h-full object-cover"
      />
      
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/70 via-transparent to-white/70"></div>
    </section>
  );
}
