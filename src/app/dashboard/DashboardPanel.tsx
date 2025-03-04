'use client';

import CustomLink from '@/components/common/CustomLink';
import { useColorModeValue } from '@/components/ui/color-mode';
import { Flex, IconButton, Image, Separator, Text } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  LuChartNoAxesCombined,
  LuChartPie,
  LuHistory,
  LuPanelLeftClose,
  LuReceipt,
  LuSettings2,
  LuUserCog,
  LuWallet,
} from 'react-icons/lu';

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
      { name: "Overview", href: "/dashboard/overview", icon: <LuChartPie /> },
      { name: "Profile", href: "/dashboard/profile", icon: <LuUserCog /> },
      { name: "Analytics", href: "/dashboard/analytics", icon: <LuChartNoAxesCombined /> },
    ]
  },
  {
    title: "Payments",
    items: [
      { name: "Payments", href: "/dashboard/payments", icon: <LuWallet /> },
      { name: "Orders", href: "/dashboard/orders", icon: <LuReceipt /> },
      { name: "Transactions", href: "/dashboard/transactions", icon: <LuHistory /> },
    ]
  },
];

function DashboardPanel(props: IDashboardPanelProps) {
  const { width } = props;
  const iconColor = useColorModeValue("black", "white");

  const pathname = usePathname();


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
              <LuPanelLeftClose color={iconColor} />
            </IconButton>
          </Flex>
          <Separator orientation={"horizontal"} width={"100%"} height={"2"} />
        </Flex>

        {DashboardSectionGroups.map((group, index) => (
          <Flex key={`group-${index}`} flexDirection={"column"} width={"100%"} justifyContent={"start"} alignItems={"start"} paddingX={"5"}>
            <Text fontSize={"xl"} fontStyle={"italic"} marginX={"2"} color={"gray.fg"}>{group.title}</Text>
            {group.items.map((section: DashboardSectionItemType, index) => (
              <CustomLink key={`section-${index}`} href={section.href ?? '/dashboard'} styleProps={{
                paddingX: "3", paddingY: "1", color: pathname === section.href ? "blue" : ""
              }}
              >
                {section.icon}
                <Text fontSize={"lg"} marginX={"2"}>{section.name}</Text>
              </CustomLink>
            ))}
            {index < DashboardSectionGroups.length - 1 && <Separator orientation={"horizontal"} width={"100%"} height={"2"} marginY={"4"} />}
          </Flex>
        ))}
      </Flex>

      <Flex flexDirection={"column"} width={"100%"} justifyContent={"end"} alignItems={"start"} paddingX={"5"} gap={"1"} marginBottom={"2"}>
        <CustomLink key={`section-supports`} href={'/dashboard/supports'} styleProps={{ paddingX: "3", paddingY: "1" }}>
          <LuSettings2 />
          <Text fontSize={"lg"} marginX={"2"}>Supports</Text>
        </CustomLink>
        <CustomLink key={`section-settings`} href={'/dashboard/settings'} styleProps={{ paddingX: "3", paddingY: "1" }}>
          <LuSettings2 />
          <Text fontSize={"lg"} marginX={"2"}>Settings</Text>
        </CustomLink>
      </Flex>
    </Flex>
  );
}

export default DashboardPanel;