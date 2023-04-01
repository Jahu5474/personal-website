import React from 'react';
import { Heading, Stack, Box, Container, Text, Flex, Menu, MenuButton, MenuList, MenuItem, IconButton, Button } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link'
import { useColorModeValue } from '@chakra-ui/react';
import ThemeToggleButton from './theme-toggle-button';

const NavLink = ({
    title,

}: {
    title: string,
}) => {
    return (


        <Link href="/">
            <Button
                color="logo.900"
                size="sm"
                variant="navbar"
            >
                {title}
            </Button>
        </Link>


    )
}

const Navbar = () => {

    return (
        <>
            <Container
                display="flex"
                p={2}
                maxW="container.lg"
                flexWrap="wrap"
                alignItems="center"
            >
                <Flex
                    align="center"
                >
                    <Heading
                        size="sm"
                    >
                        <Link href="/">

                            Jasper Huynh
                        </Link>
                    </Heading>

                </Flex>
                <Stack
                    color="logo.900"
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={3}
                    gap={3}
                    justify="center"
                    alignContent="center"
                >
                    <NavLink title="About" />
                    <NavLink title="Blog" />
                    <NavLink title="Social" />
                    <NavLink title="Projects" />
                </Stack>

                <Box flex={1} display="flex" justifyContent="flex-end">
                    <Button
                        variant="navbar"
                    >
                        <Link href="mailto:jasper123ya@live.com">
                            Email Me
                        </Link>
                    </Button>
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline'
                            />
                            <MenuList>
                                <Link href="/brand" passHref>
                                    <MenuItem >
                                        Brands
                                    </MenuItem>
                                </Link>

                                <Link href="contactlens" passHref>
                                    <MenuItem >
                                        Contact Lens
                                    </MenuItem>
                                </Link>

                                <Link href="Location" passHref>
                                    <MenuItem >
                                        Location
                                    </MenuItem>
                                </Link>

                                <Link href="contactus" passHref>
                                    <MenuItem >
                                        Contact Us
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>

        </>
    )

};

export default Navbar;


