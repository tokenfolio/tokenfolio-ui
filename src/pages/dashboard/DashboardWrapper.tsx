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
      <div className="col-span-10 mx-8">
        <div className="col-span-2 my-4">
          <TopNavigation />
        </div>
        <main className="my-4">{children}</main>
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default DashboardWrapper;
