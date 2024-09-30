import { Box, Image } from "@mantine/core"
import { OutterContainer } from "../styles/styles"
import { AppHeader } from "../components/header/AppHeader"
import { ControlPanel } from "../modules/adminPage/controlPanel/ControlPanel"
import { Content } from "../modules/adminPage/content/Content"

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
                <Content/>
            </Box>
        </Box>
    )
}