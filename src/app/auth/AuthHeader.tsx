'use client';

import HeaderLink from '@/components/common/HeaderLink';
import { ColorModeButton } from '@/components/ui/color-mode';
import { SizeEnum } from '@/types/size-enum';
import { Flex, Link as ChakraLink, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export interface IAuthHeaderProps {
  isLogin?: boolean;
}

function AuthHeader(props: IAuthHeaderProps) {
  const { isLogin } = props;
  return (
    <Flex direction={"row"} w={"full"} px={"10"} alignItems={"center"} justifyContent={"space-between"}>
      <Link href={"/"} passHref>
        <ChakraLink as={"button"}>
          <Image src={"/images/logo.png"} alt={"header"} objectFit={"cover"} h={"14"} />
        </ChakraLink>
      </Link>

      <Flex direction={"row"} w={"1/4"} justify={"center"} gap={"2"} alignItems={"center"}>
        <ColorModeButton />
        <HeaderLink title={isLogin ? "Sign up" : "Login"} href={isLogin ? "/auth/signup" : "/auth/login"} isContrast size={SizeEnum.SMALL} />
      </Flex>
    </Flex>
  );
}

export default AuthHeader;