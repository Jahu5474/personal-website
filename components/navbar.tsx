import React from 'react';
import { Heading, Stack, Box, Container, Text, Flex, Menu, MenuButton, MenuList, MenuItem, IconButton, Button } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link'
import { useColorModeValue } from '@chakra-ui/react';
import ThemeToggleButton from './theme-toggle-button';
import Image from 'next/image'
import style from '../styles/app.module.css'
import { motion } from 'framer-motion'

const NavLink = ({
    title,

}: {
    title: string,
}) => {
    return (


        <Link href="/">
            <Button
                size="sm"
                variant="ghost"
                _hover={{
                    bg: "gray",
                    color: "white"
                }}
            >
                {title}
            </Button>
        </Link>


    )
}

const Navbar = () => {


    return (
        <>

            <Flex
                display="flex"
                p={2}
                w="full"
                flexWrap="wrap"
                alignItems="center"
                justify="center"
            >


                <Link href="/">
                    <Flex
                        align="center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 20,
                            }}
                        >
                            <Image src="/images/jasper.png" alt="jasper" width={60} height={60} className={style.me} />
                        </motion.div>
                        <Heading
                            fontSize="sm"
                            pl={4}
                        >
                            Jasper H.
                        </Heading>

                    </Flex>
                </Link>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={3}
                    gap={12}
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
                        variant="ghost"
                        _hover={{
                            bg: "gray",
                            color: "white"
                        }}
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
                                <Link href="about" passHref>
                                    <MenuItem >
                                        About
                                    </MenuItem>
                                </Link>

                                <Link href="blog" passHref>
                                    <MenuItem >
                                        Blog
                                    </MenuItem>
                                </Link>

                                <Link href="social" passHref>
                                    <MenuItem >
                                        Social
                                    </MenuItem>
                                </Link>

                                <Link href="projects" passHref>
                                    <MenuItem >
                                        Projects
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Flex>

        </>
    )

};

export default Navbar;


