async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  const userWithAvatar = {
    ...user,
    avatar: `https://i.pravatar.cc/150?u=${user.email}`,
  };

  return userWithAvatar;
}

async function UsersPage({ params }) {
  const { id } = await params;
  const user = await getUser(id);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={user.avatar} />
          </div>
          <div className="card-body text-center">
            <h3>
              {user.id} {user.name}
            </h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
