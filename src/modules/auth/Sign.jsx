import { Box, Button, Checkbox, TextInput } from "@mantine/core"
import { useState } from "react"



export const Sign = ({close, displayRegistrationWindow}) => {

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


            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button styles={{
                    root: { 
                        margin: '1% 0', 
                        padding: '0',
                        background: 'transparent',                        
                        '&:hover': { background: 'transparent', transform: 'scale(1.1)', cursor: 'pointer' },
                        '&:active': { background: 'transparent', transform: 'scale(0.9)', cursor: 'pointer' },
                    }
                }} onClick={() => {
                    close();
                    displayRegistrationWindow(true);
                }}>Регистрация</Button>


                <Checkbox styles={
                    {                        
                        root: { 
                            margin: '1% 0',
                            ...lableStyles
                        }
                    }} label="Запоминть" />

                <Button styles={{
                    root: { margin: '2% 0' }
                }}>Войти</Button>
            </Box>
        </Box>
    )
}

const lableStyles = {
    label: { color: 'white' }
}