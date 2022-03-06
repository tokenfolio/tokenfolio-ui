import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_ACCOUNT } from 'shared/constants';

const KycVerifiedCheck: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3 className="h5 font-medium">Verify your identity</h3>
      <p>To enable trading for your account, we need to verify your identity.</p>
      <button className="button__lg__black mt-6" type="button" onClick={() => navigate(PATH_ACCOUNT)}>
        Verify identity
      </button>
    </>
  );
};

export default KycVerifiedCheck;
