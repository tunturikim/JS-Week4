import useForm from '../hooks/formHooks';
import {useRegistration} from '../hooks/apiHooks';

const RegisterForm = (setDisplayLogin) => {
  const postRegisteration = useRegistration();

  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const doRegistration = async (formData) => {
    try {
      const result = await postRegisteration(formData);
      alert('Registration successful', result.message);
      setDisplayLogin(true);
    } catch (error) {
      alert('Registration failed', error.message);
      console.error('Registration failed', error);
    }
  };

  const {handleInputChange, handleSubmit} = useForm(doRegistration, initValues);

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="register-username">Username</label>
          <input
            name="username"
            type="text"
            id="register-username"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="register-email">Email</label>
          <input
            name="email"
            type="email"
            id="register-email"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="register-password">Password</label>
          <input
            name="password"
            type="password"
            id="register-password"
            onChange={handleInputChange}
            autoComplete="new-password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
