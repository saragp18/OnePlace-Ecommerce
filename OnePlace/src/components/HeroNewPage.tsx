

export default function HeroNewPage() {
  return (
    <section className="relative flex items-center justify-center w-full h-screen bg-white overflow-hidden">
      {/* Imagen izquierda */}
      <img
        src="/img/img-left.jpg"
        alt="Imagen izquierda"
        className="absolute left-0 top-0 w-1/2 h-full object-cover"
      />

      {/* Imagen derecha */}
      <img
        src="/img/img-right.jpg"
        alt="Imagen derecha"
        className="absolute right-0 top-0 w-1/2 h-full object-cover"
      />

      {/* Texto centrado */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-black text-[8rem] font-bold tracking-widest rotate-90">
          NEW
        </span>
      </div>

      {/* Degradado suave en los bordes */}
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/70 via-transparent to-white/70"></div>
    </section>
  );
}
