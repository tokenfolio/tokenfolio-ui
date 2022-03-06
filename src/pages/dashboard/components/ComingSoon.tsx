import React from 'react';
import DashboardSectionWrapper from 'pages/dashboard/DashboardSectionWrapper';

const ComingSoon: React.FC = () => (
  <DashboardSectionWrapper maxWidth={740}>
    <h2>Coming soon</h2>
    <p className="mb-4">This feature is currently under constuction.</p>
  </DashboardSectionWrapper>
);

export default ComingSoon;
