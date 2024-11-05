// components/Reservations/Calendar.tsx
import React from 'react';

const Calendar: React.FC = () => {
  return (
    <div className="calendar">
      <p>Calendrier interactif pour les réservations</p>
      
      <style jsx>{`
        .calendar {
          padding: 20px;
          border: 1px solid #ddd;
        }
      `}</style>
    </div>
  );
};

export default Calendar;
