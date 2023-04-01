import React from 'react';
import { Heading, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { useColorModeValue } from '@chakra-ui/react';

const NavLink = ({
    title,

}: {
    title: string,
}) => {
    const titleColor = useColorModeValue("logo.100", "logo.900");

    return (

        <Heading
            color={titleColor}
        >
            {title}
        </Heading>

    )
}

const Navbar = () => {

    return (
        <>
            <Stack
                color="logo.900"
                fontWeight={700}
            >
                <NavLink title="Jasper Huynh" />
            </Stack>

        </>
    )

}

export default Navbar;


