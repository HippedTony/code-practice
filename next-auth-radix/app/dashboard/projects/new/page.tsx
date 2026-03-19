'use client';
import { TrashIcon } from '@radix-ui/react-icons';
import {
  Button,
  Card,
  Container,
  Flex,
  Heading,
  TextArea,
  TextField,
  Text,
} from '@radix-ui/themes';
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'sonner';

function TaskNewPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });
  const router = useRouter();
  const params = useParams() as { projectId: string };

  const onSubmit = handleSubmit(async (data) => {
    if (!params.projectId) {
      const res = await axios.post('/api/projects', data);
      if (res.status === 201) {
        router.push('/dashboard');
        router.refresh();
      }
    } else {
      const res = await axios.put(`/api/projects/${params.projectId}`, data);
      if (res.status === 200) {
        router.push('/dashboard');
        router.refresh();
      }
    }
  });

  const handleDelete = async (projectId: string) => {
    const res = await axios.delete(`/api/projects/${projectId}`);

    if (res.status === 200) {
      toast.success('Project deleted successfully');
    }
    router.push('/dashboard');
    router.refresh();
  };

  useEffect(() => {
    if (params.projectId) {
      axios.get(`/api/projects/${params.projectId}`).then((res) => {
        setValue('title', res.data.title);
        setValue('description', res.data.description);
      });
    }
  }, []);

  return (
    <Container className="p-3 md:p-0" size="1" height="100%">
      <Flex className="h-screen w-full items-center">
        <Card className="w-full">
          <form className="flex flex-col gap-y-2" onSubmit={onSubmit}>
            <Heading>
              {params.projectId ? 'Edit Project' : 'New Project'}
            </Heading>

            <label htmlFor="title">Project title</label>
            <Controller
              name="title"
              control={control}
              rules={{
                required: {
                  message: 'Title is required',
                  value: true,
                },
              }}
              render={({ field }) => {
                return (
                  <TextField.Root
                    type="text"
                    placeholder="Project title..."
                    autoFocus
                    {...field}
                  />
                );
              }}
            />
            {errors.title && (
              <Text color="ruby" className="text-sm">
                {errors.title.message}
              </Text>
            )}

            <label htmlFor="description">Project description</label>
            <Controller
              name="description"
              control={control}
              rules={{
                required: {
                  message: 'Description is required',
                  value: true,
                },
              }}
              render={({ field }) => {
                return <TextArea placeholder="Project title..." {...field} />;
              }}
            />
            {errors.description && (
              <Text color="ruby" className="text-sm">
                {errors.description.message}
              </Text>
            )}

            <Button>
              {params.projectId ? 'Update Project' : 'Create Project'}
            </Button>
          </form>

          <div className="flex justify-end mt-4">
            {params.projectId && (
              <Button
                color="ruby"
                onClick={() => handleDelete(params.projectId)}
              >
                <TrashIcon />
                Delete Project
              </Button>
            )}
          </div>
        </Card>
      </Flex>
    </Container>
  );
}

export default TaskNewPage;
