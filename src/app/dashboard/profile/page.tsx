'use client';

import ProfileAvatarMenu from '@/components/common/dashboard/profile/ProfileAvatarMenu';
import { useAppSelector } from '@/store/store';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { LuCamera } from 'react-icons/lu';

function DashboardProfilePage() {
  const { data: account, loading } = useAppSelector(state => state.account);

  useEffect(() => {
    console.log(account)
  }, [account]);

  if (!account || loading === true) {
    return null;
  }
  return (
    <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'start'} height={'100%'} width={'100%'}>
      <Flex id="cover-photo-container" width={'100%'} bg={'gray.200'} justifyContent={'center'} alignItems={'center'} position={"relative"} rounded={"xl"}>
        <Image
          width={"full"}
          height={"60"}
          alt={"Cover Photo"}
          fit={"contain"}
          src={account?.coverPhotoUrl ?? '/images/cover-image-placeholder.png'}
        >
        </Image>
        <Button variant={"surface"} position={"absolute"} bottom={"2"} right={"5"} size={"sm"} colorPalette={"blue"} padding={"3"}>
          <Text>Edit</Text>
          <LuCamera />
        </Button>
        <Flex position={"absolute"} bottom={"-10"} left={"10"} width={"full"} height={"20"}>
          <ProfileAvatarMenu account={account} loading={loading} />
        </Flex>
      </Flex>

      <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'start'} height={'100%'} width={'100%'}>
        <Flex flexBasis={"9/12"}>

        </Flex>

        <Flex flexBasis={"3/12"}>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default DashboardProfilePage;