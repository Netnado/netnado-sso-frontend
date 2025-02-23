'use client';

import CustomLink from '@/components/common/CustomLink';
import { useColorMode } from '@/components/ui/color-mode';
import { Flex, IconButton, Image, Separator, Text } from '@chakra-ui/react';
import React from 'react';
import { LuHouse, LuIdCard, LuPanelLeftClose, LuSettings2, LuUserCog } from 'react-icons/lu';

export interface IDashboardPanelProps {
  width?: string;
}

type DashboardSectionItemType = {
  name: string;
  href?: string;
  icon: React.ReactNode;
};

type DashboardSectionGroupType = {
  title: string;
  items: DashboardSectionItemType[];
};


const DashboardSectionGroups: DashboardSectionGroupType[] = [
  {
    title: "General",
    items: [
      { name: "Home", href: "/dashboard/home", icon: <LuHouse /> },
      { name: "Profile", href: "/dashboard/profile", icon: <LuUserCog /> },
    ]
  },
  {
    title: "Payments",
    items: [
      { name: "Payment", href: "/dashboard/payment", icon: <LuIdCard /> },
    ]
  },
];

function DashboardPanel(props: IDashboardPanelProps) {
  const { width } = props;
  const { colorMode } = useColorMode();

  return (
    <Flex flexDirection={"column"} width={width ?? "10%"} height={"100%"} justifyContent={"space-between"} alignItems={"center"}
      borderColor={"border"} borderWidth={"1px"} borderStyle={"solid"} boxShadow={"md"}
    >
      <Flex flexDirection={"column"} width={"100%"} justifyContent={"start"} alignItems={"center"} paddingY={"2"}>
        <Flex flexDirection={"column"} width={"100%"} justifyContent={"start"} alignItems={"center"} paddingX={"2"}>
          <Flex flexDirection={"row"} width={"100%"} height="15" justifyContent={"space-between"} alignItems={"center"}>
            <CustomLink href={"/"} parentStyleProps={{ width: "50%" }}>
              <Image src={"/images/logo.png"} alt={"header"} objectFit={"cover"} h={"65px"} />
            </CustomLink>

            <IconButton background={"transparent"} rounded={"50%"} title="Close panel" size={"md"} _hover={{ background: "gray.300" }}>
              <LuPanelLeftClose color={colorMode === "light" ? "black" : "white"} />
            </IconButton>
          </Flex>
          <Separator orientation={"horizontal"} width={"100%"} height={"2"} />
        </Flex>

        {DashboardSectionGroups.map((group, index) => (
          <Flex key={`group-${index}`} flexDirection={"column"} width={"100%"} justifyContent={"start"} alignItems={"start"} paddingX={"5"}>
            <Text fontSize={"xl"} fontStyle={"italic"} marginX={"2"} color={"gray.focusRing"}>{group.title}</Text>
            {group.items.map((section: DashboardSectionItemType, index) => (
              <CustomLink key={`section-${index}`} href={section.href ?? '/dashboard'} styleProps={{ paddingX: "3" }}>
                {section.icon}
                <Text fontSize={"lg"} marginX={"2"}>{section.name}</Text>
              </CustomLink>
            ))}
            {index < DashboardSectionGroups.length - 1 && <Separator orientation={"horizontal"} width={"100%"} height={"2"} marginY={"4"} />}
          </Flex>
        ))}
      </Flex>

      <Flex flexDirection={"column"} width={"100%"} justifyContent={"end"} alignItems={"start"} paddingX={"5"} gap={"1"} marginBottom={"2"}>
        <CustomLink key={`section-supports`} href={'/dashboard/supports'} styleProps={{ paddingX: "3" }}>
          <LuSettings2 />
          <Text fontSize={"lg"} marginX={"2"}>Supports</Text>
        </CustomLink>
        <CustomLink key={`section-settings`} href={'/dashboard/settings'} styleProps={{ paddingX: "3" }}>
          <LuSettings2 />
          <Text fontSize={"lg"} marginX={"2"}>Settings</Text>
        </CustomLink>
      </Flex>
    </Flex>
  );
}

export default DashboardPanel;