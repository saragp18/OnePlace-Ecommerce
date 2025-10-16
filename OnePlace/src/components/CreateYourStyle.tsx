
const CreateYourStyle = () => {
  return (
    <div
      className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-center bg-cover" // 👈 agrega tu ruta de imagen aquí
    >
        <img src="./img/CreateYourStyle.svg" alt="Seccion create your style" />
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-right max-w-md">
        <h2 className="text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          CREATE YOUR <br /> OWN STYLE
        </h2>
        <p className="text-white text-base leading-relaxed drop-shadow-md">
          At OnePlace, you'll find a wide variety of styles designed for every taste and occasion.
          From casual to elegant, you can choose the clothes that best suit your personality and
          feel comfortable at all times. Here, you can dress your way, combining trends and
          authenticity so that every look reflects who you really are.
        </p>
      </div>
    </div>
  );
};

export default CreateYourStyle;
