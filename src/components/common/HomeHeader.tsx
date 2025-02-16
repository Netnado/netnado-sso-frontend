import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { ColorModeButton } from '@/components/ui/color-mode';
import HeaderLink from '@/components/common/HeaderLink';
import CustomLink from '@/components/common/CustomLink';

function HomeHeader() {
  return (
    <Flex direction={"row"} w={"full"} px={"10"} alignItems={"center"}>
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
        <HeaderLink title={"Login"} href={"/auth/login"} />
        <HeaderLink title={"Sign up"} href={"/auth/signup"} isContrast />
      </Flex>
    </Flex>
  );
}

export default HomeHeader;