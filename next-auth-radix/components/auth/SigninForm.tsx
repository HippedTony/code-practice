'use client';
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { Button, Flex, Text, TextField } from '@radix-ui/themes';
import { Controller, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/dashboard'
    });

    if (!res?.ok) {
      console.log(res);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
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
                autoFocus
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

        <Button mt="4">Sign In</Button>
      </Flex>
    </form>
  );
}

export default SigninForm;
