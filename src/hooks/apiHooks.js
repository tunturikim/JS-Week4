import { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetchData';

const MEDIA_API = import.meta.env.VITE_MEDIA_API;
const AUTH_API = import.meta.env.VITE_AUTH_API;

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
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

  return {mediaArray};
};

const useUser = () => {

  const getUserInfo = async (userId) => {
    const userData = await fetchData(`${AUTH_API}/users/${userId}`);
    return userData;
  };
  return {getUserInfo};
};

export {useMedia, useUser};
