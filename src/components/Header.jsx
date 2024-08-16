import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-noir text-white p-2 lg:px-16 flex justify-between items-center z-50 relative">
            <a href="/">
                <img
                    src="/img/logotransparent.webp"
                    alt="Logo de ASAP"
                    id="accueil-logo"
                    className="w-40 h-auto"
                />
            </a>
            <nav className="hidden md:flex space-x-4 text-white text-sm mx-auto">
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover:text-rose tracking-wide">
                            ACCUEIL
                        </a>
                    </li>
                    <li>
                        <a href="/services" className="hover:text-rose tracking-wide">
                            SERVICES
                        </a>
                    </li>
                    <li>
                        <a href="/produits" className="hover:text-rose tracking-wide">
                            PRODUITS
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-rose tracking-wide">
                            CONTACTEZ-NOUS
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose">
                <img src="/icon/facebook.webp" loading="lazy" alt="Facebook" className="w-5 h-5 mx-auto md:mx-0" /> 
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose">
                <img src="/icon/instagram.webp" loading="lazy" alt="Instagram" className="w-5 h-5 mx-auto md:mx-0" /> 
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose">
                <img src="/icon/linkedin.webp" loading="lazy" alt="LinkedIn" className="w-5 h-5 mx-auto md:mx-0" /> 
                </a>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="flex flex-col justify-between w-8 h-6 focus:outline-none"
                    >
                        <span
                            className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
                        ></span>
                        <span
                            className={`block w-full h-0.5 bg-current transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}
                        ></span>
                        <span
                            className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                        ></span>
                    </button>
                    <nav
                        className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 transform transition duration-300 ease-in-out z-50 ${isOpen ? "scale-100" : "scale-0"}`}
                    >
                        <a
                            href="/"
                            className="tracking-wider block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            ACCUEIL
                        </a>
                        <a
                            href="/services"
                            className="tracking-wider block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            SERVICES
                        </a>
                        <a
                            href="/produits"
                            className="tracking-wider block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            PRODUITS
                        </a>
                        <a
                            href="/contact"
                            className="tracking-wider block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            CONTACTEZ-NOUS
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
