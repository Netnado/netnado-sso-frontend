import { SizeEnum } from '@/types/size-enum';
import { Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export interface IHeaderLinkProps {
  title: string;
  href: string;
  isContrast?: boolean;
  size?: SizeEnum;
}

function HeaderLink(props: IHeaderLinkProps) {
  const { title, href, isContrast } = props;
  return (
    <Link href={href ?? "/"} passHref>
      <ChakraLink as="button" _hover={{ opacity: "0.9", color: "cyan.600" }} fontWeight={"bold"} px={"4"} py={"2"} borderRadius={"md"}
        fontSize={props.size ?? SizeEnum.MEDIUM}
        bg={isContrast ? "bg.info" : "bg"}
        color={isContrast ? "fg.info" : "fg"}
      >
        {title}
      </ChakraLink>
    </Link>
  );
}

export default HeaderLink;