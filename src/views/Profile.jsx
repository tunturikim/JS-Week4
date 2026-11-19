import {useState, useEffect} from 'react';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState({});
  const {getUserByToken} = useUser();

  useEffect(() => {
    const getUserInfo = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('No token found');
        return;
      }
      const user = await getUserByToken(token);
      setUser(user);
    };
    getUserInfo();
  }, []);

  return (
    <>
      <h2>User: {user.username}</h2>
      <ul>
        <li>Registered: {new Date(user.created_at).toLocaleDateString()}</li>
        <li>Email: {user.email}</li>
        <li>User level: {user.level_name}</li>
      </ul>
    </>
  );
};

export default Profile;
