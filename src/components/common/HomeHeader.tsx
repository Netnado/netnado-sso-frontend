import { Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { ColorModeButton } from '@/components/ui/color-mode';
import HeaderLink from '@/components/common/HeaderLink';

function HomeHeader() {
	return (
		<Flex direction={"row"} w={"full"} px={"10"} alignItems={"center"}>
			<Link href={"/"} w={"1/4"}>
				<Image src={"/images/logo.png"} alt={"header"} objectFit={"cover"} h={"28"} />
			</Link>

			<Flex direction={"row"} w={"1/2"} justify={"center"} gap={"2"}>
				<HeaderLink title={"Home"} href={"/"} />
				<HeaderLink title={"Organizations"} href={"/organizations"} />
				<HeaderLink title={"Contact"} href={"/contact"} />
				<HeaderLink title={"About us"} href={"/about-us"} />
			</Flex>

			<Flex direction={"row"} w={"1/4"} justify={"center"} gap={"2"}>
				<ColorModeButton />
				<HeaderLink title={"Login"} href={"/login"} />
				<HeaderLink title={"Sign up"} href={"/signup"} isContrast />
			</Flex>
		</Flex>
	);
}

export default HomeHeader;