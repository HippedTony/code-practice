import { Container } from '@radix-ui/themes';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';

async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/dashboard');
  }

  return (
    <Container className="px-5 md:px-0">
      <h1 className="text-7xl my-10 bg-slate-900 p-10 rounded-md">
        NextAuth Radix
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa itaque
        incidunt explicabo nostrum. Iusto beatae voluptatibus non sunt,
        cupiditate blanditiis expedita nihil, repellat facere praesentium quod
        reprehenderit nemo at ratione.
      </p>
      <Link
        href="/auth/login"
        className="flex w-fit text-white bg-blue-500 p-2 rounded-md mt-4 px-4"
      >
        Login
      </Link>
    </Container>
  );
}

export default HomePage;
