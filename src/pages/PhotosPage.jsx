import { Box, Image } from "@mantine/core"
import { OutterContainer } from "../styles/styles"
import { AppHeader } from "../components/header/AppHeader"
import { NavMenu } from "../components/navigation/NavMenu"
import processIcon from '../assets/icons/Process.png'
import { Photos } from "../modules/photosPage/photoTables/Photos"


export const PhotosPage = () => {
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
                <Photos/>           
            </Box>
        </Box>
    )
}