import SigninForm from '@/components/auth/SigninForm';
import { Card, Container, Flex, Heading, Text, Link } from '@radix-ui/themes';
import NextLink from 'next/link';

function LoginPage() {
  return (
    <>
      <Container className="p-3 md:p-0" size="1" height="100%">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full">
            <Heading>Sing In</Heading>
            <SigninForm />

            <Flex justify="between" my="4">
              <Text>Don't have an account?</Text>
              <Link asChild>
                <NextLink href="/auth/register" passHref>Sign Up</NextLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default LoginPage;
