import {useLocation, useNavigate} from 'react-router';
import {useState, useEffect} from 'react';
import {useUser} from '../hooks/apiHooks';

const Single = () => {
  const {getUserInfo} = useUser();
  const [user, setUser] = useState(null);

  const {state} = useLocation();
  const navigate = useNavigate();
  const item = state;


  useEffect(() => {
    const fetchUser = async () => {
      setUser(await getUserInfo(item.user_id));
    };
    fetchUser();
  }, []);

  if (!item) {
    return (
      <>
        <p>No media selected.</p>
        <button onClick={() => navigate('/')}>Go to home</button>
      </>
    );
  }

  return (
    <>
      <h2>Single media file</h2>
      <h3>{item.title}</h3>
      {item.media_type.startsWith('image') ? (
        <img src={item.filename} alt={item.description} />
      ) : (
        <video controls src={item.filename} />
      )}
      <p>{item.description}</p>
      <h4>Uploaded by: {item.username}</h4>
      <p>Email: {user?.email}, User level: {user?.level_name}</p>
      <p>Created: {new Date(item.created_at).toLocaleString('fi-FI')}</p>
      <p>
        Size: {item.filesize} bytes, type: {item.media_type}
      </p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default Single;
