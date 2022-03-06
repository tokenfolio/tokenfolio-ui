import React from 'react';
import DashboardComponentWrapper, { DashboardComponentWrapperProps } from 'pages/dashboard/DashboardComponentWrapper';

type Props = DashboardComponentWrapperProps;

const ComingSoon: React.FC<Props> = ({ maxWidth }) => (
  <DashboardComponentWrapper maxWidth={maxWidth}>
    <h2>Coming soon</h2>
    <p className="mb-4">This feature is currently under constuction.</p>
  </DashboardComponentWrapper>
);

export default ComingSoon;
