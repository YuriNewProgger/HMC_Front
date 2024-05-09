import { Box } from "@mantine/core"
import { AppHeader } from "../components/header/AppHeader"
import { NavMenu } from "../components/navigation/NavMenu"


export const MainPage = () => {
    return(
        <Box sx={{
            height: '100vh',
            background: '#1B1B1B'
        }}>
            <AppHeader/>
            <NavMenu/>

            <Box sx={{color: 'white'}}>MainPage</Box>
        </Box>
    )
}