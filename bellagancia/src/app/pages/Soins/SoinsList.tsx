// components/Soins/SoinsList.tsx
import React from 'react';

const SoinsList: React.FC = () => {
  const soins = [
    { id: 1, name: 'Soin visage', price: '50€' },
    { id: 2, name: 'Manucure', price: '30€' },
  ];

  return (
    <div className="soins-list">
      {soins.map((soin) => (
        <div key={soin.id} className="soin-card">
          <h3>{soin.name}</h3>
          <p>{soin.price}</p>
        </div>
      ))}

      <style jsx>{`
        .soins-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .soin-card {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default SoinsList;
