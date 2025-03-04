'use client';

import dynamic from 'next/dynamic';
import { Box, Flex, Stack } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import DashboardHeader from '@/app/dashboard/DashboardHeader';
const DashboardPanel = dynamic(() => import('@/app/dashboard/DashboardPanel'), { ssr: false });

function DashboardLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  const [componentsLoaded, setComponentsLoaded] = useState<boolean>(false);

  useEffect(() => {
    Promise.all([
      import('@/app/dashboard/DashboardPanel')
    ]).then(() => {
      setComponentsLoaded(true);
    });
  }, []);

  const memoizedChildren = useMemo(() => {
    if (componentsLoaded === false) {
      return <div>Loading...</div>; // Or any loading spinner/placeholder
    }
    return (
      <Box
        w={"100%"}
        minH={"90vh"}
        overflow={"auto"}
        backgroundColor={"bg"}
        rounded={"md"}
        boxShadow={"md"}
        padding={"2"}
        borderColor={"border"}
        borderWidth={"1px"}
        borderStyle={"solid"}
      >
        {children}
      </Box>
    );
  }, [children, componentsLoaded]);


  if (!componentsLoaded) {
    return <div>Loading...</div>; // Or any loading spinner/placeholder
  }
  return (
    <Stack direction={"row"} w={"98vw"} h={"100vh"} backgroundColor={"bg.subtle"} marginX={"1vw"}>
      <DashboardPanel width={"15%"} />
      <Flex flexDirection={"column"} width={"85%"} height={"100vh"} justifyContent={"stretch"} alignItems={"center"}>
        <DashboardHeader width={"100%"} />
        {memoizedChildren}
      </Flex>
    </Stack>
  );
}

export default DashboardLayout;