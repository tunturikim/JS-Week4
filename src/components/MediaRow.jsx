import {Link} from 'react-router';
import PropTypes from 'prop-types';

const MediaRow = ({item}) => {
  return (
    <tr>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.username}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <Link to="/single" state={item}>
          Display
        </Link>
      </td>
    </tr>
  );
};

// Define prop types for the MediaRow component
MediaRow.propTypes = {
  item: PropTypes.shape({
    media_id: PropTypes.number.isRequired,
    user_id: PropTypes.number,
    filename: PropTypes.string,
    thumbnail: PropTypes.string,
    filesize: PropTypes.number,
    media_type: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    created_at: PropTypes.string,
  }).isRequired,
};

export default MediaRow;
