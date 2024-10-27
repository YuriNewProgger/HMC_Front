import { Box } from "@mantine/core"
import { AppHeader } from "../components/headerApp"

export const Main = () => {
    return(
        <Box sx={{
            height: 'auto',
            width: '100%',
            background: 'red'
        }}>
            <AppHeader/>
        </Box>
    )
}