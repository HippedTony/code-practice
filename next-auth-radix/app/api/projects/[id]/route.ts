import { Prisma } from '@/generated/prisma/client';
import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  },
) {
  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  },
) {
  try {
    const { id } = await params;

    const projectDeleted = await prisma.project.delete({
      where: {
        id: parseInt(id),
      },
    });

    return NextResponse.json(projectDeleted);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return NextResponse.json(
          { error: 'Project not found' },
          { status: 404 },
        );
      }
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  },
) {
  const { id } = await params;
  const data = await request.json();

  const projectUpdated = await prisma.project.update({
    where: {
      id: parseInt(id),
    },
    data,
  });

  return NextResponse.json(projectUpdated);
}
