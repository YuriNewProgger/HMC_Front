import { Box, Image } from "@mantine/core"
import { OutterContainer } from "../styles/styles"
import { AppHeader } from "../components/header/AppHeader"
import { NavMenu } from "../components/navigation/NavMenu"
import processIcon from '../assets/icons/Process.png'
import { Photos } from "../modules/photosPage/photoTables/Photos"
import { PhotoViewer } from "../modules/photosPage/photoViewer/PhotoViewer"


export const PhotosPage = () => {
    return(
        <Box sx={OutterContainer}>
            <AppHeader/>
            <NavMenu/>

            <Box sx={{
                height: '79.8vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    width: '30%',
                    height: '100%'
                }}>
                    <Photos/>
                </Box>

                <Box sx={{
                    width: '70%',
                    height: '100%'
                }}>
                    <PhotoViewer/>
                </Box>
            </Box>
        </Box>
    )
}