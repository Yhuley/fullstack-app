import { selectors, useAppDispatch, useAppSelector } from 'data';
import { logout as logoutThunk } from 'data/reducers/auth.reducer';

const Profile = () => {
  const dispatch = useAppDispatch();
  const userDetails = useAppSelector(selectors.auth.getUserDetails);

  const logout = () => {
    dispatch(logoutThunk());
  };

  return (
    <>
      user profile
      <button onClick={logout}>log out</button>
      {JSON.stringify(userDetails)}
    </>
  );
};

export default Profile;
