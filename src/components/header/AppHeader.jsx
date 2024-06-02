import { Avatar, Box, Button, Modal, Popover, Text } from "@mantine/core"
import { FontFamilyHeaderText, FontFamilySimpleText } from "../../style/commonStyle"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { getUser } from "../../modules/auth/slice/AuthSlice";
import { useState } from "react";
import { Sign } from "../../modules/auth/Sign";

export const AppHeader = () => {
    const navigate = useNavigate();
    const user = useSelector(getUser)

    const [isDisplayLoginWindow, setIsDisplayLoginWindow] = useState(false);


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
            }}>Home Cloud</Box>

            <Box sx={{
                width: '10%',
                display: 'flex',
                justifyContent: 'end'
            }}>
                {
                    user.role === "admin" ?
                        <Popover styles={{
                            dropdown: { color: 'black', fontSize: '1em' }
                        }}
                            position="left"
                            withArrow
                        >
                            <Popover.Target>
                                <Avatar styles={{
                                    root: { marginRight: '10%', '&:hover': { transform: 'scale(1.1)', cursor: 'pointer' } },
                                    placeholder: { fontSize: '0.78em' }
                                }}
                                    color="white"
                                    radius="xl"
                                    >
                                    {`${user.name[0]}${user.surname[0]}`}
                                </Avatar>
                            </Popover.Target>

                            <Popover.Dropdown>
                                Администрирование
                            </Popover.Dropdown>
                        </Popover>
                        : 
                        <Avatar styles={{
                            root: { 
                                marginRight: '10%', 
                                '&:hover': { transform: 'scale(1.1)', cursor: 'pointer' },
                                '&:active': { transform: 'scale(0.95)', cursor: 'pointer' }
                            },
                            placeholder: { fontSize: '0.78em' }
                        }}
                            color="white"
                            radius="xl"
                            onClick={() => setIsDisplayLoginWindow(true)}>
                            Гость
                        </Avatar>
                }

                
            </Box>

            <Modal opened={isDisplayLoginWindow} onClose={() => setIsDisplayLoginWindow(false)}
                styles={{
                    content: { background: '#141A32' },
                    header: { background: '#141A32', color: 'white' }
                }}
                title='Вход'
                overlayProps={{
                    color: 'black',
                    opacity: 0.7,
                    blur: 5,
                  }}
            >
                <Sign/>
            </Modal>
        </Box>
    )
}