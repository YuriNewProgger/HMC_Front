import { Box, Button, Checkbox, List, TextInput } from "@mantine/core"
import { DateTimePicker } from "@mantine/dates";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { RegistrationQuery } from "./slice/AuthSlice";
import uniqid from "uniqid";


export const Registration = ({ closeCb, isDisplaySignWindow }) => {

    const dispatch = useDispatch();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState();
    const [dateToServer, setDateToServer] = useState();
    const [registrationResult, setRegistrationResult] = useState(null);
    const [registrationStatus, setRegistrationStatus] = useState(null);


    const registrationHandler = async () => {
        const result = await dispatch(RegistrationQuery({ email: login, password: password, birthday: dateToServer })).unwrap();
        
        if (result.result.hasOwnProperty("errors")) {
            const tmp = [];
            result.result.errors.forEach(item => {
                tmp.push(<Box sx={{color: 'white'}} key={uniqid()}>-{item.msg}</Box>)
            })

            setRegistrationResult(tmp)
        }
        else {
            setRegistrationResult(<Box sx={{color: 'white'}}>{result.result.message}</Box>)
        }

        setRegistrationStatus(result.status)

        if(result.status === 200){
            setTimeout(() => {
                closeCb();
                isDisplaySignWindow();
            }, 2000);
        }
    }

    if (registrationResult !== null) {
        return(
            <Box>                
                {registrationResult}
                <Button styles={{
                    root: {
                        display: registrationStatus === 200 ? 'none' : 'block',
                        color: 'white',
                        margin: '5% 0' 
                    }
                }} onClick={() => setRegistrationResult(null)}>Вернуться</Button>
            </Box>
        )
    }
    else {
        return (
            <Box>
                <TextInput styles={{ ...lableStyles }}
                    label="Email"
                    withAsterisk
                    value={login}
                    onChange={(e) => setLogin(e.currentTarget.value)} />
                <TextInput styles={{ ...lableStyles }}
                    label="Пароль"
                    withAsterisk
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)} />

                <DateTimePicker styles={{
                    root: { ...lableStyles }
                }}
                    maxDate={new Date(new Date(Date.now()).toISOString().split('T')[0])}
                    locale="ru"
                    dropdownType="modal"
                    placeholder=""
                    label="Дата рождения"
                    withAsterisk
                    value={date}
                    onChange={(e) => {
                        setDate(e);
                        setDateToServer(new Date(e).addHours(3)?.toISOString().replace('Z', '').split('.')[0]);
                    }}
                />


                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <Button styles={{
                        root: { margin: '2% 0' }
                    }} onClick={() => registrationHandler()}>Регистрация</Button>
                </Box>
            </Box>
        )
    }


}

const lableStyles = {
    label: { color: 'white' }
}