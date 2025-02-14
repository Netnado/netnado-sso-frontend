import { Box, Image, Stack } from '@chakra-ui/react';
import React from 'react';

function AuthLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <Stack direction={"row"}>
      <Box w={"40vw"} h={"100vh"}>
        {children}
      </Box>
      <Image src={"/images/auth-banner.jpg"} alt={"Auth Banner"} objectFit={"cover"} w={"60vw"} h={"100vh"} loading="lazy" />
    </Stack>
  );
}

export default AuthLayout;