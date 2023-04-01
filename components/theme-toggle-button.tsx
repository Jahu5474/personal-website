import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FiMoon } from 'react-icons/fi'
import { FiSun } from 'react-icons/fi'

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <IconButton
            aria-label="Toggle theme"
            icon={useColorModeValue(<FiMoon />, <FiSun />)}
            variant="transparent"
            _hover={{
                color: "orange.400"
            }}
            onClick={toggleColorMode}>
        </IconButton>
    )
}

export default ThemeToggleButton;