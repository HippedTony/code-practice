import Users from '@/components/Users';

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  const usersWithAvatar = users.map((user) => ({
    ...user,
    avatar: `https://i.pravatar.cc/150?u=${user.email}`,
  }));

  return usersWithAvatar;
}

async function IndexPage() {
  const users = await fetchUsers();

  return <Users users={users} />;
}

export default IndexPage;
