import { Box } from "@mantine/core"
import { AppHeader } from "../components/header/AppHeader"
import { NavMenu } from "../components/navigation/NavMenu"
import { useEffect } from "react"


export const MainPageSmartTv = () => {

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