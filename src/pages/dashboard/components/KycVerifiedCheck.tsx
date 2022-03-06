import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardComponentWrapper, { DashboardComponentWrapperProps } from 'pages/dashboard/DashboardComponentWrapper';
import { PATH_ACCOUNT } from 'shared/constants';

type Props = DashboardComponentWrapperProps;

const KycVerifiedCheck: React.FC<Props> = ({ maxWidth }) => {
  const navigate = useNavigate();

  return (
    <DashboardComponentWrapper maxWidth={maxWidth}>
      <h3 className="h5 font-medium">Verify your identity</h3>
      <p>To enable trading for your account, we need to verify your identity.</p>
      <button className="button__lg__black mt-6" type="button" onClick={() => navigate(PATH_ACCOUNT)}>
        Verify identity
      </button>
    </DashboardComponentWrapper>
  );
};

export default KycVerifiedCheck;
