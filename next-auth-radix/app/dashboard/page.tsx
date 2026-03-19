import HeaderDashboard from '@/components/dashboard/HeaderDashboard';
import { prisma } from '@/libs/prisma';
import { Container, Grid } from '@radix-ui/themes';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import ProjectCard from '@/components/projects/ProjectCard';

async function loadProjects(userId: number) {
  return await prisma.project.findMany({
    where: {
      userId,
    },
  });
}

async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const projects = await loadProjects(parseInt(session?.user.id as string));

  return (
    <Container className="mt-10 px-10 md:px-0">
      <HeaderDashboard />

      <Grid columns={{ xs: "1", md: "3"}} gap="4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Container>
  );
}

export default DashboardPage;
