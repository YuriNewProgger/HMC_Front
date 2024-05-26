import { Box, Image } from "@mantine/core"
import { OutterContainer } from "../styles/styles"
import { AppHeader } from "../components/header/AppHeader"
import { NavMenu } from "../components/navigation/NavMenu"
import processIcon from '../assets/icons/Process.png'
import { Photos } from "../modules/photosPage/photoTables/Photos"
import { PhotoViewer } from "../modules/photosPage/photoViewer/PhotoViewer"


export const PhotosPage = () => {
    // return(
    //     <Box sx={OutterContainer}>
    //         <AppHeader/>
    //         <NavMenu/>

    //         <Box sx={{
    //             height: '79.8vh',
    //             width: '100%',
    //             display: 'flex',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //         }}>
    //             <Box sx={{
    //                 width: '35%',
    //                 height: '100%'
    //             }}>
    //                 <Photos/>
    //             </Box>

    //             <Box sx={{
    //                 width: '65%',
    //                 height: '100%'
    //             }}>
    //                 <PhotoViewer/>
    //             </Box>
    //         </Box>
    //     </Box>
    // )

    return (
        <Box sx={{
            height: '100vh',
            background: '#141A32'
        }}>
            <AppHeader />

            <Box sx={{
                display: 'flex',
                height: '90vh'
            }}>
                <NavMenu />

                <Box sx={{
                    display: 'flex',
                    width: '100%'
                }}>
                    <Box sx={{
                        width: '35%',
                        height: '100%'
                    }}>
                        <Photos />
                    </Box>

                    <Box sx={{
                        width: '65%',
                        height: '100%'
                    }}>
                        <PhotoViewer />
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}