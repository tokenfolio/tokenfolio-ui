import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import DashboardComponentWrapper, { DashboardComponentWrapperProps } from 'pages/dashboard/DashboardComponentWrapper';
import { PATH_SETTINGS } from 'shared/constants';

type Props = DashboardComponentWrapperProps;

const ProfileCompleteCheck: React.FC<Props> = ({ maxWidth }) => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const [percentageComplete, setPercentageComplete] = useState(0);

  // set how much complete profile is in percentage
  useEffect(() => {
    if (!user) return;
    const fields = [user.given_name, user.family_name, user.email, user.picture];
    const complete = fields.filter((x) => x !== undefined);
    setPercentageComplete(Math.ceil((complete.length / fields.length) * 100));
  }, [user]);

  if (percentageComplete > 80) return null;

  return (
    <DashboardComponentWrapper maxWidth={maxWidth}>
      <h3 className="h5 font-medium mb-6">Finish setting up your Tokenfolio profile</h3>
      <p className="my-4">Your profile is {percentageComplete}% complete</p>
      <div className="my-4 bg-platinum h-4 w-full rounded-lg">
        <div className="bg-chinese-purple h-4 rounded-lg" style={{ width: `${percentageComplete}%` }} />
      </div>
      <button className="button__lg__black mt-4" type="button" onClick={() => navigate(PATH_SETTINGS)}>
        Update profile
      </button>
    </DashboardComponentWrapper>
  );
};

export default ProfileCompleteCheck;
