import { Box } from "@mantine/core";
import { FontAmaticSCBold } from "../../../style/style";


const AppHeader = () => {
    return(
        <Box sx={{
            height: '100%',
            width: '100%',
            background: '#03A9F4',
            fontSize: '3em',
            fontFamily: FontAmaticSCBold()
        }}>
            AppHeader
        </Box>
    )
}

export default AppHeader;