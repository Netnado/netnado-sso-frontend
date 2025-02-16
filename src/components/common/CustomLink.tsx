'use client';

import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import React from 'react';

export interface ICustomLinkProps {
  href: string;
  isUnderline?: boolean;
  children: React.ReactNode;
  parentStyleProps?: unknown;
  styleProps?: unknown;
}

function CustomLink(props: ICustomLinkProps) {
  const { href, isUnderline = false, children, styleProps, parentStyleProps } = props;
  const textDecoration = isUnderline ? "underline" : "none";
  return (
    <Link href={href} passHref {...Object.assign({}, parentStyleProps)}>
      <ChakraLink as="div"
        _hover={{ opacity: "0.9", color: "cyan.600", textDecoration: textDecoration }}
        {...Object.assign({}, styleProps)}
      >
        {children}
      </ChakraLink>
    </Link>
  );
}

export default CustomLink;