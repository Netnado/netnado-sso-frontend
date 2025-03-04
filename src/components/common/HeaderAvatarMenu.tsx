'use client';

import { useAppSelector } from '@/store/store';
import { Avatar, Button, defineStyle, Float } from '@chakra-ui/react';
import React from 'react';
import { MenuContent, MenuItem, MenuItemGroup, MenuRoot, MenuSeparator, MenuTrigger } from '@/components/ui/menu';
import { useRouter } from 'next/navigation';
import { LuChevronDown, LuLayoutDashboard, LuLogOut } from 'react-icons/lu';

const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
});

export type HeaderAvatarMenuItemType = {
  name: string;
  value: string;
  href: string;
  icon: React.ReactNode;
};
export type HeaderAvatarMenuGroupItemType = HeaderAvatarMenuItemType[];

const headerAvatarMenuItems: HeaderAvatarMenuGroupItemType[] = [
  [
    { name: "Dashboard", value: "dashboard", href: "dashboard", icon: <LuLayoutDashboard /> },
  ],
  [
    { name: "Logout", value: "logout", href: "auth/logout", icon: <LuLogOut /> },
  ],
];

function HeaderAvatarMenu() {
  const { data: account, loading } = useAppSelector(state => state.account);
  const router = useRouter();

  function handleMenuItemClick(value: string) {
    router.push(`${value}`);
  };

  if (!account || loading === true) {
    return null;
  }
  return (
    <MenuRoot size={"md"}>
      <MenuTrigger asChild>
        <Button backgroundColor={"transparent"} _hover={{ backgroundColor: "transparent" }} as={"div"}>
          <Avatar.Root css={ringCss} title="Account">
            <Avatar.Fallback name={account.username} />
            <Avatar.Image src={account.avatarUrl} />
            <Float placement="bottom-end" offsetX="1" offsetY="1" background={"bg.subtle"} rounded={"50%"} shadow={"md"}
              borderColor={"border"} borderWidth={"1px"} borderStyle={"solid"}
            >
              <LuChevronDown />
            </Float>
          </Avatar.Root>
        </Button>
      </MenuTrigger>

      <MenuContent>
        {headerAvatarMenuItems.map((group, index) => (
          <MenuItemGroup key={index}>
            {group.map((item, index) => (
              <MenuItem key={index} value={item.value} padding="2" cursor={"pointer"} width={"100"} onClick={() => handleMenuItemClick(item.href)}>
                {item.icon}
                {item.name}
              </MenuItem>
            ))}
            {index < headerAvatarMenuItems.length - 1 && <MenuSeparator />}
          </MenuItemGroup>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}

export default HeaderAvatarMenu;