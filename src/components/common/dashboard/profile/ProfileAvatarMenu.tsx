'use client';

import { IAccountType } from '@/types/account';
import { Avatar, Button, defineStyle, Float, Icon, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react';
import React from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { LuCamera, LuEye } from 'react-icons/lu';
import { MdBlock, MdCheckCircle, MdOutlineLockClock, MdOutlineRemoveCircle, MdPauseCircle, MdPending, MdPowerSettingsNew } from 'react-icons/md';

interface HeaderAvatarMenuItemType {
  name: string;
  value: string;
  icon: React.ReactNode;
  onClick?: () => Promise<void>;
}

interface IAccountStatusItems {
  name: string;
  icon: React.ReactNode;
};
const ringCss = defineStyle({
  outlineWidth: "3px",
  outlineColor: "colorPalette.500",
  outlineStyle: "solid",
});


const ACCOUNT_STATUS_ITEMS: IAccountStatusItems[] = [
  { name: "Pending", icon: <MdPending color={"blue"} /> },
  { name: "Active", icon: <MdCheckCircle color={"green"} /> },
  { name: "Inactive", icon: <MdPauseCircle /> },
  { name: "Suspended", icon: <BsFillQuestionCircleFill /> },
  { name: "Banned", icon: <MdBlock /> },
  { name: "Deactivated", icon: <MdPowerSettingsNew /> },
  { name: "Locked", icon: <MdOutlineLockClock /> },
  { name: "Deleted", icon: <MdOutlineRemoveCircle /> },
];

export interface IProfileAvatarMenuProps {
  account: IAccountType;
  loading: boolean;
}

function ProfileAvatarMenu(props: IProfileAvatarMenuProps) {
  const { account, loading } = props;

  const accountStatusItem: IAccountStatusItems = ACCOUNT_STATUS_ITEMS.find(item => item.name === account.status) as IAccountStatusItems;

  const handleOnClickSeeAvatar = async (): Promise<void> => {
    console.log("See avatar");
  }

  const handleOnClickUploadNewAvatar = async (): Promise<void> => {
    console.log("Upload new avatar");
  }

  const headerAvatarMenuItems: HeaderAvatarMenuItemType[] = [
    { name: "See avatar", value: "See avatar", icon: <LuEye />, onClick: () => handleOnClickSeeAvatar() },
    { name: "Upload new avatar", value: "Upload new avatar", icon: <LuCamera />, onClick: () => handleOnClickUploadNewAvatar() },
  ];

  if (!account || loading === true) {
    return null;
  }
  return (
    <MenuRoot size={"md"} positioning={{ placement: "right-end" }}>
      <MenuTrigger asChild>
        <Button backgroundColor={"transparent"} _hover={{ backgroundColor: "transparent" }} as={"div"}>
          <Avatar.Root css={ringCss} title="Profile Avatar" cursor={"pointer"} size={"2xl"} width={"40"} height={"40"} rounded={"50%"} shadow={"md"}>
            <Avatar.Fallback name={account.username} />
            <Avatar.Image src={account.avatarUrl} />
            <Float placement="bottom-end" offsetX="10" offsetY="2" background={"bg.subtle"} rounded={"50%"} shadow={"md"}
              borderColor={"border"} borderWidth={"1px"} borderStyle={"solid"}
            >
              <Icon fontSize={"40"} color={"text.subtle"} width={"8"} height={"8"}>
                {accountStatusItem.icon}
              </Icon>
            </Float>
          </Avatar.Root>

          {/* <Image src={account?.avatarUrl ?? ""} alt={"Profile Avatar"} width={"10"} height={"10"} rounded={"50%"} /> */}
        </Button>
      </MenuTrigger>

      <MenuContent>
        {headerAvatarMenuItems.map((item, index) => (
          <MenuItem key={index} value={item.value} padding="2" cursor={"pointer"} width={"100"} onClick={item.onClick}>
            {item.icon}
            {item.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}

export default ProfileAvatarMenu;