import React from 'react';

const Footer = () => {
    return (
    <footer className="bg-noir-footer p-8 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
            <h4 className="tracking-wider text-xl mb-4">ASAP</h4>
            <ul>
            <li><a href="/" className="hover:text-rose">Accueil</a></li>
            <li><a href="/prestations" className="hover:text-rose">Services</a></li>
            <li><a href="/histoire" className="hover:text-rose">Produits</a></li>
            <li><a href="/contact" className="hover:text-rose">Contact</a></li>
            <li><a href="/mentions-legales" className="hover:text-rose">Mentions légales</a></li>
            </ul>
        </div>
        <div>
            <h4 className="tracking-wider text-xl mb-4">SUIVEZ-NOUS</h4>
            <ul>
            <li>
                <a href="" className="hover:text-rose">
                <img src="/icon/instagram.webp" loading="lazy" alt="Instagram" className="w-5 h-5 mx-auto md:mx-0" /> Instagram
                </a>
            </li>
            <li>
                <a href="" className="hover:text-rose">
                <img src="/icon/facebook.webp" loading="lazy" alt="Facebook" className="w-5 h-5 mx-auto md:mx-0" /> Facebook
                </a>
            </li>
            <li>
                <a href="" className="hover:text-rose">
                <img src="/icon/linkedin.webp" loading="lazy" alt="LinkedIn" className="w-5 h-5 mx-auto md:mx-0" /> LinkedIn
                </a>
            </li>
            </ul>
        </div>
        <div>
            <h4 className="tracking-wider text-xl mb-4">LOCALISATION</h4>
            <div className="container mx-auto mt-8">
            <p>140 Boulevard du Dr Jean Jules Herbert</p>
            <p>73100 Aix-les-bains</p>
            <p>04 81 91 09 49</p>
            </div>
        </div>
        </div>
        <div className="text-center mt-8">
        <p>© Alpes Solutions Auto Pro. Tous droits réservés.</p>
        <p><a href="/privacy-policy" className="hover:text-rose">Politique de confidentialité</a></p>
        </div>
    </footer>
    );
};

export default Footer;
