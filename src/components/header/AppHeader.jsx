import { Box } from "@mantine/core"
import { FontFamilyHeaderText, FontFamilySimpleText } from "../../style/commonStyle"

export const AppHeader = () => {
    return(
        <Box sx={{
            background: '#03A9F4',
            color: 'white',
            height: '10vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '2.5%',
            fontSize: '3em',
            fontFamily: 'Souvenir',
            fontWeight: 'bold',
            ...FontFamilyHeaderText
        }}>
            Home Cloud
        </Box>
    )
}