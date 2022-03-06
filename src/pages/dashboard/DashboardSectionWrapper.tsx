import React from 'react';

type Props = {
  children: React.ReactNode;
  maxWidth: number;
};

const DashboardSectionWrapper: React.FC<Props> = ({ children, maxWidth }) => (
  <section className="bg-white rounded-2xl p-8 border-anti-flash-white border-2 w-full" style={{ maxWidth }}>
    {children}
  </section>
);

export default DashboardSectionWrapper;
