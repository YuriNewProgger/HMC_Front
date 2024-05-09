import { Box } from "@mantine/core"


export const AppHeader = () => {
    return(
        <Box sx={{
            background: 'linear-gradient(to top, #02005C, #76006A)',
            color: 'white',
            height: '15vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '5em',
            fontFamily: 'Souvenir',
            fontWeight: 'bold'
            //fontFamily: 'Comic Sans MS'
        }}>
            Home Media Center
        </Box>
    )
}