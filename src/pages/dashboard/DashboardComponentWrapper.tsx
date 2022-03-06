import React from 'react';

export type DashboardComponentWrapperProps = {
  maxWidth: number;
};

type Props = {
  children: React.ReactNode;
} & DashboardComponentWrapperProps;

const DashboardComponentWrapper: React.FC<Props> = ({ children, maxWidth }: Props) => (
  <section className="mb-8 bg-white rounded-2xl p-8 border-anti-flash-white border-2 w-full" style={{ maxWidth }}>
    {children}
  </section>
);

export default DashboardComponentWrapper;
