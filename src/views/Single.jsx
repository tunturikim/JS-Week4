import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const item = state;

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
      <p>Uploaded by: {item.username}</p>
      <p>Created: {new Date(item.created_at).toLocaleString('fi-FI')}</p>
      <p>
        Size: {item.filesize} bytes, type: {item.media_type}
      </p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default Single;
