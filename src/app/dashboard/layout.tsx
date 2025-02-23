'use client';

import { Box, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import DashboardPanel from '@/app/dashboard/DashboardPanel';
import DashboardHeader from './DashboardHeader';

function DashboardLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <Stack direction={"row"} w={"98vw"} h={"100vh"} backgroundColor={"bg.subtle"} marginX={"1vw"}>
      <DashboardPanel width={"15%"} />
      <Flex flexDirection={"column"} width={"85%"} height={"100vh"} justifyContent={"stretch"} alignItems={"center"}>
        <DashboardHeader width={"100%"} />
        <Box w={"100%"} minH={"90vh"} overflow={"auto"} backgroundColor={"bg"} rounded={"md"} boxShadow={"md"} padding={"2"}
          borderColor={"border"} borderWidth={"1px"} borderStyle={"solid"}
        >
          {children}
        </Box>
      </Flex>
    </Stack>
  );
}

export default DashboardLayout;