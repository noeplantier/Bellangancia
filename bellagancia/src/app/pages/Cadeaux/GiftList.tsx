// components/Cadeaux/GiftList.tsx
import React from 'react';

const GiftList: React.FC = () => {
  const gifts = [
    { id: 1, name: 'Carte cadeau Soin', price: '50€' },
    { id: 2, name: 'Produit de beauté', price: '30€' },
  ];

  return (
    <div className="gift-list">
      {gifts.map((gift) => (
        <div key={gift.id} className="gift-card">
          <h3>{gift.name}</h3>
          <p>{gift.price}</p>
        </div>
      ))}
    </div>
  );
};

export default GiftList;
