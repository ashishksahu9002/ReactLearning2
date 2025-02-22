import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const fetchPokemonImages = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();
    return data.results.map((pokemon, index) => {
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`;
        return { id: index + 1, name: pokemon.name, image };
    });
};

const Carousel = () => {
    const [items, setItems] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        fetchPokemonImages().then(setItems);
    }, []);

    return (
        <div className="flex flex-col items-center p-6 min-h-screen bg-gray-900">
            <Swiper
                modules={[Navigation]}
                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={20}
                loop={false}
                navigation
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full max-w-6xl h-[500px]"
            >
                {items.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <SwiperSlide key={item.id}>
                            <div
                                className={`p-4 w-72 h-96 rounded-xl transition-transform duration-300 flex flex-col items-center justify-center shadow-lg border-2 ${isActive ? "scale-110 shadow-2xl border-blue-500 bg-opacity-90" : "scale-100 border-transparent"
                                    } mx-3 relative`}
                                style={{ background: `linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${item.image})`, backgroundSize: 'cover' }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl"></div>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className={`relative rounded-lg transition-transform duration-300 w-48 h-48 object-contain ${isActive ? "scale-125" : "scale-100"
                                        }`}
                                />
                                <h3 className="relative text-lg font-semibold mt-4 capitalize text-white">{item.name}</h3>
                                <button className="relative mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-500">
                                    View Stats
                                </button>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Carousel;
