import React from 'react';
import TopNavigation from 'pages/dashboard/TopNavigation';
import LeftNavigation from 'pages/dashboard/LeftNavigation';
import Footer from 'pages/dashboard/Footer';

type Props = {
  children: React.ReactNode;
};

const DashboardWrapper: React.FC<Props> = ({ children }) => (
  <div>
    <div className="flex gap-8">
      <div className="w-72">
        <LeftNavigation />
      </div>
      <div className="grow mx-8">
        <div className="my-4">
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
