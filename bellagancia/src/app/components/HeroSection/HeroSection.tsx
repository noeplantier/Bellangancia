// components/HomePage/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <h1>Bienvenue chez Bellagancia</h1>
      <p>Découvrez nos services de soins et beauté pour prendre soin de vous.</p>
      <button>Voir nos soins</button>
      
      <style jsx>{`
        .hero-section {
          text-align: center;
          padding: 50px;
          background-image: url('/images/hero-bg.jpg');
          color: white;
        }
        h1 {
          font-size: 3rem;
        }
        p {
          margin-top: 20px;
          font-size: 1.5rem;
        }
        button {
          margin-top: 30px;
          padding: 10px 20px;
          background-color: #ff69b4;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
