import SignupForm from '@/components/auth/SignupForm';
import { Card, Container, Flex, Heading, Text, Link } from '@radix-ui/themes';
import NavLink from 'next/link';

function RegisterPage() {
  return (
    <>
      <Container className="p-3 md:p-0" size="1" height="100%">
        <Flex className="w-full h-[calc(100vh-10rem)] items-center">
          <Card className="w-full">
            <Heading>Sing Up</Heading>
            <SignupForm />

            <Flex justify="between" my="4">
              <Text>Already have an account?</Text>
              <Link asChild>
                <NavLink href="/auth/login" passHref>Sign In</NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default RegisterPage;
