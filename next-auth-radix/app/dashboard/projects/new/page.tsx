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
import { useForm, Controller } from 'react-hook-form';

function TaskNewPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });
  const router = useRouter();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (!params.projectId) {
      const res = await axios.post('/api/projects', data);
      if (res.status === 201) {
        router.push('/dashboard');
      }
    } else {
      console.log('editing');
    }
  });

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
              <Button color="ruby">
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
