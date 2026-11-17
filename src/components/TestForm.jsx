import {useState} from 'react';

const TestForm = () => {
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Lähetys');
  };

  return (
    <div>
      <h3>Test Form</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleChange}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default TestForm;
