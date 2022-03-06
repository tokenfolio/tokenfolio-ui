import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AccountBasicInfoSettings: React.FC = () => {
  const { user } = useAuth0();
  const [firstName, setFirstName] = useState(user?.given_name);
  const [lastName, setLastName] = useState(user?.family_name);

  return (
    <div className="mx-4">
      <h2>Basic info</h2>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
        <label className="input__lg">
          <div className="label">First name</div>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label className="input__lg">
          <div className="label">Last name</div>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
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
