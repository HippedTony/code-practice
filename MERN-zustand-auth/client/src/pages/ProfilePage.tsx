import { useNavigate } from 'react-router';
import { useAuthStore } from '../store/auth';

function ProfilePage() {
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Name: {profile.test}</h1>
      <p>IAT: {profile.iat}</p>
      <p>EXP: {profile.exp}</p>

      <button
        onClick={() => {
          logout();
          navigate('/login');
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default ProfilePage;
