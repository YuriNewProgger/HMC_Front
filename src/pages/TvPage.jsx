import { Box, Image } from "@mantine/core"
import { OutterContainer } from "../styles/styles"
import { AppHeader } from "../components/header/AppHeader"
import { NavMenu } from "../components/navigation/NavMenu"
import processIcon from '../assets/icons/Process.png'

export const TvPage = () => {
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
                <Box sx={{
                    color: 'white',
                    fontSize: '1.2em'
                }}>В разработке</Box>
                <Image src={processIcon} width={200} height={200}/>                
            </Box>
        </Box>
    )
}