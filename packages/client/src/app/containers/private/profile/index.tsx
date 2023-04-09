import { useNavigate } from 'react-router-dom';
import { loginPath } from 'app/utils';
import { useAppDispatch } from 'data';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    navigate(loginPath);
  };

  return (
    <>
      user profile
      <button onClick={logout}>log out</button>
    </>
  );
};

export default Profile;
