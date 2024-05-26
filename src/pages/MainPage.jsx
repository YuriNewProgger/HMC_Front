import { Box } from "@mantine/core"
import { AppHeader } from "../components/header/AppHeader"
import { NavMenu } from "../components/navigation/NavMenu"
import { LinksList } from "../modules/mainPage/linksList/LinksList"
import { BackScreen } from "../modules/mainPage/bg/BackScreen"



export const MainPage = () => {
    
    return(
        <Box sx={{
            height: '100vh',
            background: '#141A32'
        }}>
            <AppHeader/>
            {/* <NavMenu/> */}

            {/* <Box sx={{
                color: 'white',
                height: '79.8vh',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Box sx={{
                    width: '60vw',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}>
                    <LinksList/>
                </Box>
            </Box> */}

            <Box sx={{
                display: 'flex',
                height: '90vh'
            }}>
                <NavMenu/>
                <BackScreen/>
            </Box>
        </Box>
    )
}