import { Box, Image, Pagination, Select, Tooltip } from "@mantine/core"
import addIcon from '../../../assets/icons/add.png'
import delIcon from '../../../assets/icons/delete.png'
import editIcon from '../../../assets/icons/edit.png'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getAdminPhotosQuery, setSelectedTab } from "../slice/AdminSlice"

const categoryTab = [
    { value: 'photos', label: 'Фото' },
    { value: 'videos', label: 'Видео' },
    { value: 'musics', label: 'Музыка' },
    { value: 'movies', label: 'Фильмы' },
    { value: 'cartoons', label: 'Мультики' },
]


export const ControlPanel = () => {
    const dispatch = useDispatch();

    const categoryTabHandler = (e) => {
        console.log(e);
        dispatch(setSelectedTab(e));

        switch (e) {
            case 'photos': dispatch(getAdminPhotosQuery({tab: e, count: 10, offset: 0}));                
                break;
        
            default: alert(e + " не реализовано")
                break;
        }

        
    }

    return (
        <Box sx={{
            height: '5vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center'
        }}>

            <Select styles={{
                root: { margin: '0 1%' }
            }}
                placeholder="Вкладка"
                data={categoryTab}
                onChange={(e) => categoryTabHandler(e)}
            />

            <Tooltip label='Добавить'>
                <Image styles={{
                    root: iconsStyle
                }} src={addIcon} width={35} height={35} />
            </Tooltip>

            <Tooltip label='Редактировать'>
                <Image styles={{
                    root: iconsStyle
                }} src={editIcon} width={35} height={35} />
            </Tooltip>

            <Tooltip label='Удалить'>
                <Image styles={{
                    root: iconsStyle
                }} src={delIcon} width={35} height={35} />
            </Tooltip>


        </Box>
    )
}

const iconsStyle = {
    marginRight: '1%',
    '&:hover': { transform: 'scale(1.1)', },
    '&:active': { transform: 'scale(0.95)', }
}