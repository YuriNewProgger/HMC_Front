import { Box, Button, TextInput } from "@mantine/core"
import { useState } from "react"



export const Sign = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return(
        <Box>
            <TextInput styles={{...lableStyles}}
                label="email"
                withAsterisk 
                value={login} 
                onChange={(e) => setLogin(e.currentTarget.value)}/>
            <TextInput styles={{...lableStyles}}
                label="пароль"
                withAsterisk
                value={password} 
                onChange={(e) => setPassword(e.currentTarget.value)}/>

            <Button styles={{
                root: { margin: '2% 0' }
            }}>Войти</Button>
        </Box>
    )
}

const lableStyles = {
    label: { color: 'white' }
}