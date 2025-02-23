'use client';

import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { ColorModeButton } from '@/components/ui/color-mode';
import HeaderLink from '@/components/common/HeaderLink';
import CustomLink from '@/components/common/CustomLink';
import { useAppSelector } from '@/store/store';
import HeaderAvatarMenu from '@/components/common/HeaderAvatarMenu';

function HomeHeader() {
  const { data: account, loading } = useAppSelector(state => state.account);

  const AuthRightComponent = (
    <Box gap={"2"}>
      <HeaderLink title={"Login"} href={"/auth/login"} />
      <HeaderLink title={"Sign up"} href={"/auth/signup"} isContrast />
    </Box>
  );

  return (
    <Flex direction={"row"} w={"full"} px={"10"} alignItems={"center"} justify={"space-between"}>
      <CustomLink href={"/"} parentStyleProps={{ width: "25%" }}>
        <Image src={"/images/logo.png"} alt={"header"} objectFit={"cover"} h={"28"} />
      </CustomLink>

      <Flex direction={"row"} w={"1/2"} justify={"center"} gap={"2"}>
        <HeaderLink title={"Home"} href={"/"} />
        <HeaderLink title={"Organizations"} href={"/organizations"} />
        <HeaderLink title={"Contact"} href={"/contact"} />
        <HeaderLink title={"About us"} href={"/about-us"} />
      </Flex>

      <Flex direction={"row"} w={"1/4"} justify={"center"} gap={"2"} alignItems={"center"}>
        <ColorModeButton />
        {loading
          ? <Box>Loading...</Box>
          : <>
            {account && !loading
              ? <HeaderAvatarMenu />
              : AuthRightComponent
            }
          </>
        }

      </Flex>
    </Flex>
  );
}

export default HomeHeader;