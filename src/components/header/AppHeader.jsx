import { Avatar, Box, Button, Modal, Popover, Text } from "@mantine/core"
import { FontFamilyHeaderText, FontFamilySimpleText } from "../../style/commonStyle"
import { useNavigate } from "react-router-dom"

export const AppHeader = () => {
    const navigate = useNavigate();



    return(
        <Box sx={{
            background: '#03A9F4',            
            height: '10vh',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '1%',            
        }}>
            <Box sx={{
                width: '90%',
                textAlign: 'start',
                color: 'white',
                fontSize: '3em',
                fontWeight: 'bold',
                ...FontFamilyHeaderText
            }} onClick={() => navigate('/')}>Home Cloud</Box>

        </Box>
    )
}