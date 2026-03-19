'use client';
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

  const onSubmit = handleSubmit(async (data) => {
    return null
  });

  return (
    <Container className="p-3 md:p-0" size="1" height="100%">
      <Flex className="h-screen w-full items-center">
        <Card className="w-full">
          <form className="flex flex-col gap-y-2" onSubmit={onSubmit}>
            <Heading>Create Project</Heading>

            <label htmlFor="title">Project title</label>
            <Controller
              name="title"
              control={control}
              rules={{
                required: {
                  message: 'Tittle is required',
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
              render={({ field }) => {
                return <TextArea placeholder="Project title..." {...field} />;
              }}
            />

            <Button>Create project</Button>
          </form>
        </Card>
      </Flex>
    </Container>
  );
}

export default TaskNewPage;
