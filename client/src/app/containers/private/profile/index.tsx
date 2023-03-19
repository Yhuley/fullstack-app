import { useNavigate } from 'react-router-dom';
import { loginPath } from 'app/utils';
import { useAppDispatch } from 'data';
import { logout as logoutReducer } from 'data/reducers/auth.reducer';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logoutReducer());
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
