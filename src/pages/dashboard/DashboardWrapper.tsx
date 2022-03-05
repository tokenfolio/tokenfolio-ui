import React from 'react';
import TopNavigation from 'pages/dashboard/TopNavigation';
import LeftNavigation from 'pages/dashboard/LeftNavigation';
import Footer from 'pages/dashboard/Footer';

type Props = {
  children: React.ReactNode;
};

const DashboardWrapper: React.FC<Props> = ({ children }) => (
  <div>
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-2">
        <LeftNavigation />
      </div>
      <div className="col-span-10">
        <div className="col-span-2 mt-4">
          <TopNavigation />
        </div>
        <main className="px-8">{children}</main>
        <Footer />
      </div>
    </div>
  </div>
);

export default DashboardWrapper;
