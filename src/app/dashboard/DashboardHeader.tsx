'use client';

import HeaderAvatarMenu from '@/components/common/HeaderAvatarMenu';
import { ColorModeButton, useColorMode } from '@/components/ui/color-mode';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { LuBellRing } from 'react-icons/lu';

function DashboardHeader(props: { width?: string }) {
  const { width } = props;
  const { colorMode } = useColorMode();

  return (
    <Flex flexDirection={"row"} width={width ?? "100%"} height={"10vh"} justifyContent={"space-between"} alignItems={"center"}
      bg={"transparent"} paddingY={"2"} paddingX={"4"}
    >
      <Text fontWeight={"semibold"} fontSize={"3xl"} paddingStart={"2"}>Dashboard</Text>

      <Flex flexDirection={"row"} width={"50%"} justifyContent={"end"} alignItems={"center"} gap={"2"}>
        <ColorModeButton />
        <IconButton background={"transparent"} rounded={"50%"} title="Notifications" size={"lg"} _hover={{ background: "gray.300" }}>
          <LuBellRing color={colorMode === "light" ? "black" : "white"} />
        </IconButton>
        <HeaderAvatarMenu />
      </Flex>
    </Flex>
  );
}

export default DashboardHeader;