
import { useState, useEffect } from 'react';
import { getProfile } from '../Services/APiService';
export default function UserProfile() {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
      getProfile()
      .then(response => setProfile(response.data))
      .catch(error => console.error(error));
    }, []);


  return (
    <div>
      <h1>User Profile</h1>
      {profile && (
        <div>
            <img src={profile.image} alt="Profile" />
          <p>Name: {profile.firstname} {profile.lastname}</p>
          <p>Email: {profile.email}</p>
          <p>Age: {profile.age}</p>
        </div>
      )}

    </div>
  );
}