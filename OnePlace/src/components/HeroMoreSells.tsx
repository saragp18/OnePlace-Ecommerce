export default function HeroMoresells() {
  return (
    <section className="relative flex items-center justify-center w-full h-screen bg-white overflow-hidden">
      {/* Imagen izquierda */}
      <img
        src="/img/Moresells.jpg"
        alt="Imagen izquierda"
        className="absolute left-0 top-0 w-full h-full object-cover"
      />
      {/* Degradado suave en los bordes */}
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/70 via-transparent to-white/70"></div>
    </section>
  );
}
