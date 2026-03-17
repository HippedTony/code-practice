'use client';
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
import { Button, Flex, TextField, Text } from '@radix-ui/themes';
import { Controller, useForm } from 'react-hook-form';

function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="name">Name</label>
        <Controller
          name="name"
          control={control}
          rules={{
            required: {
              message: 'Name is required',
              value: true,
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                type="text"
                placeholder="Write your name"
                autoFocus
                {...field}
              >
                <TextField.Slot>
                  <PersonIcon height={16} width={16} />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />
        {errors.name && (
          <Text color="ruby" className="text-sm">
            {errors.name.message}
          </Text>
        )}

        <label htmlFor="email">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              message: 'Email is required',
              value: true,
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                type="email"
                placeholder="email@domain.com"
                {...field}
              >
                <TextField.Slot>
                  <EnvelopeClosedIcon height={16} width={16} />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />
        {errors.email && (
          <Text color="ruby" className="text-sm">
            {errors.email.message}
          </Text>
        )}

        <label htmlFor="password">Password</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              message: 'Password is required',
              value: true,
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root type="password" placeholder="*****" {...field}>
                <TextField.Slot>
                  <LockClosedIcon height={16} width={16} />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />
        {errors.password && (
          <Text color="ruby" className="text-sm">
            {errors.password.message}
          </Text>
        )}

        <Button>Sign Up</Button>
      </Flex>
    </form>
  );
}

export default SignupForm;
