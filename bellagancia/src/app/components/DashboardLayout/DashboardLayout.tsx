"use client"

import React from 'react';
import Link from 'next/link';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link href="/soins">Soins</Link></li>
            <li><Link href="/reservations">Réservations</Link></li>
            <li><Link href="/cadeaux">Cadeaux</Link></li>
            <li><Link href="/mon-salon">Mon Salon</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <h1>Bellagancia Dashboard</h1>
          {/* Add more header elements like search, notifications, user profile */}
        </header>

        {/* Page Content */}
        <div className="page-content">
          {children}
        </div>
      </main>

      <style jsx>{`
        .dashboard-layout {
          display: flex;
        }
        .sidebar {
          width: 200px;
          background-color: #f4f4f4;
          padding: 20px;
        }
        .main-content {
          flex: 1;
          padding: 20px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          padding: 10px;
          border-bottom: 1px solid #eaeaea;
        }
        .page-content {
          padding: 20px;
          background-color: #fafafa;
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
