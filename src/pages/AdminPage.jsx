import { Box, Image } from "@mantine/core"
import { OutterContainer } from "../styles/styles"
import { AppHeader } from "../components/header/AppHeader"
import { NavMenu } from "../components/navigation/NavMenu"
import processIcon from '../assets/icons/Process.png'
import { Outlet } from "react-router-dom"
import { ControlPanel } from "../modules/adminPage/controlPanel/ControlPanel"

export const AdminPage = () => {
    return(
        <Box sx={OutterContainer}>
            <AppHeader/>

            <ControlPanel/>

            <Box sx={{
                height: '74.8vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                
                ADMIN
            </Box>
        </Box>
    )
}