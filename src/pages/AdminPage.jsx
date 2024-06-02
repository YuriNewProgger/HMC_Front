import { Box, Image } from "@mantine/core"
import { OutterContainer } from "../styles/styles"
import { AppHeader } from "../components/header/AppHeader"
import { NavMenu } from "../components/navigation/NavMenu"
import processIcon from '../assets/icons/Process.png'
import { Outlet } from "react-router-dom"

export const AdminPage = () => {
    return(
        <Box sx={OutterContainer}>
            <AppHeader/>
            <NavMenu/>

            <Box sx={{
                height: '79.8vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>

            </Box>
        </Box>
    )
}