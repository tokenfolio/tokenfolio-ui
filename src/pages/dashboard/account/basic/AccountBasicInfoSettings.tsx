import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AccountBasicInfoSettings: React.FC = () => {
  const { user } = useAuth0();
  return (
    <div className="mx-4">
      <h2>Basic info</h2>
      <form className="flex flex-col gap-4">
        <label className="input__lg">
          <div className="label">First name</div>
          <input type="text" value={user?.given_name} />
        </label>
        <label className="input__lg">
          <div className="label">Last name</div>
          <input type="text" value={user?.family_name} />
        </label>
        <div className="my-6">
          <button className="button__lg__black" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountBasicInfoSettings;
