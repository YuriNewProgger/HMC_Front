import { Box } from "@mantine/core"
import { FontFamilyHeaderText, FontFamilySimpleText } from "../../style/commonStyle"

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
            fontWeight: 'bold',
            ...FontFamilyHeaderText
        }}>
            Home Media Center
        </Box>
    )
}