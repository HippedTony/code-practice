'use client';
import { useRouter } from 'next/navigation';

function Users({ users }) {
  const router = useRouter();

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          key={user.id}
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          <div>
            <h5>{user.name}</h5>
            <p>{user.email}</p>
          </div>
          <img className="rounded-circle" src={user.avatar} />
        </li>
      ))}
    </ul>
  );
}

export default Users;
