// components/Soins/SoinsFilter.tsx
import React from 'react';

const SoinsFilter: React.FC = () => {
  return (
    <div className="soins-filter">
      <label>Catégorie :</label>
      <select>
        <option>Visage</option>
        <option>Ongles</option>
        <option>Corps</option>
      </select>

      <style jsx>{`
        .soins-filter {
          margin: 20px 0;
        }
        select {
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
};

export default SoinsFilter;
