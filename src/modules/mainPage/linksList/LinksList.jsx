import { useLayoutEffect, useState } from "react";
import photoIco from '../../../assets/icons/photo.png'
import videoIco from '../../../assets/icons/video.png'
import tvIco from '../../../assets/icons/tv.png'
import movieIco from '../../../assets/icons/movie.png'
import musicIco from '../../../assets/icons/music.png'
import uniqid from 'uniqid'
import { NavLink } from "react-router-dom"
import { Box, Image } from "@mantine/core";


export const LinksList = () => {
    const icons = [
        {
            title: 'Фото',
            ico: photoIco
        }, 
        {
            title: 'Видео',
            ico: videoIco
        },
        {
            title: 'ТВ',
            ico: tvIco
        }, 
        {
            title: 'Фильмы',
            ico: movieIco
        },
        {
            title: 'Музыка',
            ico: musicIco
        }];

    const [links, setLinks] = useState([]);

    useLayoutEffect(() => {
        setLinks(
            icons.map(item => <NavLink style={{
                color: 'white',
                textDecoration: 'none',
                margin: '0 5%',
            }} key={uniqid()}>
                <Box sx={{
                    '&:hover': { transform: 'scale(1.05)', }
                }}>
                    <Image src={item.ico} width={150} height={150} />
                    <Box>{item.title}</Box>
                </Box>

            </NavLink>)
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