import { Box } from "@mantine/core"
import { useLayoutEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom";
import uniqid from 'uniqid';


export const NavMenu = ({isSmartTv}) => {
    const menuItems = [
        {
            title: 'Главная',
            link: ''
        },
        {
            title: 'Фотографии',
            link: 'photos'
        },
        {
            title: 'Видео',
            link: 'homeVideos'
        },
        {
            title: 'ТВ',
            link: 'tv'
        },
        {
            title: 'Музыка',
            link: 'musics'
        },
        {
            title: 'Фильмы',
            link: 'films'
        },
    ]

    const [links, setLinks] = useState();


    useLayoutEffect(() => {
        if(isSmartTv){
            setLinks(
                menuItems.map(item => {
                    return <Box key={uniqid()}  sx={{
                        textDecoration: 'none',
                        margin: '0 1%',
                        color: 'white',
                        fontSize: '1.2em',
                        '&:hover': { cursor: 'pointer' }
                    }}>
                        {item.title}
                    </Box>
                })
            );
        }
        else{
            setLinks(
                menuItems.map(item => {
                    return <NavLink key={uniqid()} to={`/${item.link}`} style={{
                        textDecoration: 'none',
                        margin: '0 1%',
                        color: 'white',
                        fontSize: '1.2em'
                    }}>
                        {item.title}
                    </NavLink>
                })
            );
        }

        
    }, [])

    return(
        <Box sx={{
            height: '5vh',
            background: '#02005C',
            borderTop: '1px solid white',
            borderBottom: '1px solid white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {links}
        </Box>
    )
}