export default function Card({ imgSrc, position, name, view, currentPage }) {
    return (
        <div 
            className={"bg-white w-64 p-6 mx-2 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out " + (currentPage === view ? "block" : "hidden")}
            data-aos="zoom-in"
        >
            <div className="relative">
                <img 
                    src={imgSrc} 
                    alt={position} 
                    className="h-48 w-48 mx-auto rounded-full object-cover border-4 border-gray-300 shadow-inner"
                />
                <div className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-t from-black to-transparent opacity-20"></div>
            </div>
            <div className="text-center mt-4">
                <p className="text-xl font-semibold text-gray-700">{position}</p>
                <p className="text-lg text-gray-500">{name}</p>
            </div>
        </div>
    );
}
