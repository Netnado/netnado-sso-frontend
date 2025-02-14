import { Link } from '@chakra-ui/react';
import React from 'react';

export interface IHeaderLinkProps {
	title: string;
	href: string;
	isContrast?: boolean;
}

function HeaderLink(props: IHeaderLinkProps) {
	const { title, href, isContrast } = props;
	return (
		<Link href={href ?? "/"} _hover={{ opacity: "0.9", color: "cyan.600" }} fontWeight={"bold"} px={"4"} py={"2"} borderRadius={"md"}
			bg={isContrast ? "bg.info" : "bg"}
			color={isContrast ? "fg.info" : "fg"}
		>
			{title}
		</Link>
	);
}

export default HeaderLink;