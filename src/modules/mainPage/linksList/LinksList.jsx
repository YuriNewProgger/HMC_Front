import { useLayoutEffect, useState } from "react";
import uniqid from 'uniqid'
import { NavLink } from "react-router-dom"
import { Box, Image } from "@mantine/core";
import { LinkItem } from "./LinkItem";


export const LinksList = () => {
    const icons = [
        // {
        //     title: 'Фото',
        //     ico: photoIco,
        //     link: '/photos'
        // }, 
        // {
        //     title: 'Видео',
        //     ico: videoIco,
        //     link: '/homeVideos'
        // },        
        // {
        //     title: 'Музыка',
        //     ico: musicIco,
        //     link: '/musics'
        // },
        // {
        //     title: 'Фильмы',
        //     ico: movieIco,
        //     link: '/films'
        // },
        // {
        //     title: 'Настройки',
        //     ico: settingsIco,
        //     link: '/admin'
        // }
    ];

    const [links, setLinks] = useState([]);
    
    useLayoutEffect(() => {
        setLinks(
            icons.map(item => <LinkItem key={uniqid()} imgSource={item.ico} title={item.title} link={item.link}/>)
        )
    }, []);
    return(
        <Box sx={{
            //background: 'green',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%',
            width: '60%'
        }}>
            {links}
        </Box>
    )
}