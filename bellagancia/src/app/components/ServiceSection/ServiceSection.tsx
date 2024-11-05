// components/HomePage/ServicesSection.tsx
import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    { title: 'Soins Visage', description: 'Pour une peau éclatante et saine.' },
    { title: 'Soins Ongles', description: 'Beauté et santé de vos ongles.' },
    { title: 'Massages', description: 'Relaxation et bien-être.' },
  ];

  return (
    <section className="services-section">
      <h2>Nos Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .services-section {
          padding: 50px;
          text-align: center;
        }
        .services-grid {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }
        .service-card {
          width: 30%;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
