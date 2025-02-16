'use client';

import { SizeEnum } from '@/types/size-enum';
import React from 'react';
import CustomLink from '@/components/common/CustomLink';

export interface IHeaderLinkProps {
  title: string;
  href: string;
  isContrast?: boolean;
  size?: SizeEnum;
}

function HeaderLink(props: IHeaderLinkProps) {
  const { title, href, isContrast } = props;
  return (
    <CustomLink
      href={href}
      styleProps={{
        fontWeight: "bold",
        px: "4",
        py: "2",
        borderRadius: "md",
        fontSize: props.size ?? SizeEnum.MEDIUM,
        bg: isContrast ? "bg.info" : "bg",
        color: isContrast ? "fg.info" : "fg",
      }}
    >
      {title}
    </CustomLink>
  );
}

export default HeaderLink;