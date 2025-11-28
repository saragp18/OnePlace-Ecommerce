function Inspire() {
    return (
        <div className="flex flex-col md:flex-row bg-black shadow-lg gap-24">
            
            <div className="md:w-5xl ">
                <img
                    src="/img/Inspire.jpg"
                    alt="Collage of urban outfits"
                    className="w-full h-auto object-cover"
                />
            </div>

            
            <div className="md:w-2/3 flex flex-col justify-center items-start text-left gap-12">
                <h2 className="text-7xl font-bold text-white mb-4 uppercase tracking-wide">
                    #Inspire You
                </h2>
                <p className="text-white mb-6 text-5xl">
                    You can see other people's outfits and get inspired or upload your outfits and inspire others.
                </p>
                <button
                    className="text-black px-6 py-2 bg-white transition text-3xl "
                >
                    See More
                </button>
            </div>
        </div>
    );
};

export default Inspire;