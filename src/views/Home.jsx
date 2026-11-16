import MediaRow from '../components/MediaRow';
import { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetchData';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const MEDIA_API = import.meta.env.VITE_MEDIA_API;
  const AUTH_API = import.meta.env.VITE_AUTH_API;

  useEffect(() => {
    const getMedia = async () => {
      // Fetch media files from the API
    const mediafiles = await fetchData(MEDIA_API + '/media');
    // Fetch user data for each media file and add the username to the media file object
    const updatedMediafiles = await Promise.all(mediafiles.map(async (mediafile) => {
      const userdata = await fetchData(`${AUTH_API}/users/${mediafile.user_id}`);
      return {...mediafile, username: userdata.username};
    }));

    setMediaArray(updatedMediafiles);
    };
    getMedia();
 }, []);

 console.log(mediaArray);

  return (
    <>
      {/* This is comment inside JSX: */}
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Username</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
