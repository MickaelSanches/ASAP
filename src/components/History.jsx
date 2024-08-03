import React from 'react';

const History = () => {
    return (
        <section className="mt-8 relative flex justify-center items-center my-12">
            <div className="relative z-10 w-96 h-96 bg-noir text-white p-8 shadow-lg transform -translate-y-8 -translate-x-8">
                <h2 className="text-2xl mb-4">Notre Histoire</h2>
                <p>ASAP a été fondée en 2000 et s'est imposée comme un leader dans le domaine de la vente de pièces, solutions, services & outillages automobile...</p>
            </div>
            <div className="absolute bg-cover bg-center w-96 h-96 shadow-lg" style={{ backgroundImage: 'url(/img/histoire.webp)', right: '30rem', top: '10rem' }}></div>
        </section>
    );
};

export default History;
