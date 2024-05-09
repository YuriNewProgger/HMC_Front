import { Box } from "@mantine/core"
import { OutterContainer } from "../styles/styles"
import { AppHeader } from "../components/header/AppHeader"
import { NavMenu } from "../components/navigation/NavMenu"


export const PhotosPage = () => {
    return(
        <Box sx={OutterContainer}>
            <AppHeader/>
            <NavMenu/>

            <Box sx={{color: 'white'}}>Photos</Box>
        </Box>
    )
}