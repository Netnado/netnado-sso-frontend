'use client';

import { Breadcrumb, Flex, Text } from '@chakra-ui/react';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export interface ICustomBreadcrumbItemProps {
  name: string;
  href?: string;
}

function CustomBreadcrumb() {
  const pathname = usePathname();
  const [items, setItems] = useState<ICustomBreadcrumbItemProps[]>([]);

  const searchParams = useSearchParams();
  const queryStr = searchParams?.toString() || '';

  useEffect(() => {
    if (pathname) {
      // Split the pathname into segments and filter out empty strings.
      const segments = pathname.split('/').filter((seg) => seg);
      // Append the query string if it exists.
      const queryString = queryStr ? `?${queryStr}` : '';

      // Start with a "Home" breadcrumb.
      const breadcrumbItems: ICustomBreadcrumbItemProps[] = [
        { name: 'Home', href: '/' + queryString },
      ];

      // Build each breadcrumb link with accumulated path.
      let accumulatedPath = '';
      segments.forEach((segment) => {
        accumulatedPath += `/${segment}`;
        breadcrumbItems.push({
          name: segment.charAt(0).toUpperCase() + segment.slice(1),
          href: accumulatedPath + queryString,
        });
      });

      setItems(breadcrumbItems);
    }
  }, [pathname, queryStr]);

  return (
    <Breadcrumb.Root size="lg" variant={"underline"}>
      <Breadcrumb.List>
        {items.map((item, index) => (
          <Flex key={`breadcrumb-item-${index}`}>
            <Breadcrumb.Item>
              {index === items.length - 1
                ? (
                  <Breadcrumb.CurrentLink as={'a'}>
                    <Text fontWeight={"semibold"} fontSize={"xl"} paddingStart={"2"}>{item.name}</Text>
                  </Breadcrumb.CurrentLink>
                )
                : (
                  <Breadcrumb.Link href={item.href ?? "#"} as={'a'}>
                    <Text fontWeight={"semibold"} fontSize={"xl"} paddingStart={"2"}
                      color={"gray.emphasized"} _hover={{ color: "gray.fg" }}
                    >
                      {item.name}
                    </Text>
                  </Breadcrumb.Link>
                )
              }

            </Breadcrumb.Item>
            {/* {index < items.length - 1 && <Breadcrumb.Separator style={{ width: "24px" }} />} */}
            {index < items.length - 1 && <Text fontWeight={"semibold"} fontSize={"xl"} paddingStart={"2"}>{" > "}</Text>}
          </Flex>
        ))}
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}

export default CustomBreadcrumb;