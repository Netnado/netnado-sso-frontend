'use client'

import { IAccountType } from '@/types/account';
import { Circle, Float, HStack, SystemStyleObject, Text, VStack, defineStyle } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { Avatar } from '@/components/ui/avatar';


export interface IUserAvatarBoxProps {
  account: IAccountType;
  loading?: "eager" | "lazy" | undefined;
  isHavingRing?: boolean;
  colorPalette?: string;
  ringDefinedStyle?: SystemStyleObject,
  isShowEmail?: boolean;
}

const defaultRingStyle: SystemStyleObject = {
  outlineWidth: "2px",
  // outlineColor: "colorPalette.500",
  outlineColor: "currentColor",
  outlineOffset: "2px",
  outlineStyle: "solid",
};

function UserAvatarBox(props: IUserAvatarBoxProps) {
  const { account, isHavingRing, loading, colorPalette, ringDefinedStyle, isShowEmail } = props;

  // Memoize the computed ring style
  const computedRingStyle = useMemo(() => {
    if (!isHavingRing) return {};
    return defineStyle(ringDefinedStyle ?? defaultRingStyle);
  }, [isHavingRing, ringDefinedStyle]);

  return (
    <HStack gap={"4"}>
      <Avatar
        name={account.username}
        src={account.avatarUrl}
        loading={loading ?? "eager"}
        colorPalette={colorPalette}
        css={computedRingStyle}
      >
        <Float placement="bottom-end" offsetX="1" offsetY="1">
          <Circle
            bg="green.500"
            size="8px"
            outline="0.2em solid"
            outlineColor="bg"
          />
        </Float>
      </Avatar>

      <VStack align={"flex-start"} justifyContent={"center"}>
        <Text fontWeight="semibold" fontSize={"xl"}>{account.username}</Text>
        {isShowEmail
          && <Text color="fg.muted" textStyle="sm">{account.email}</Text>
        }
      </VStack>
    </HStack>
  );
}

export default UserAvatarBox;