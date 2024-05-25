import { Box, Image } from "@mantine/core"
import { useLayoutEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom";
import uniqid from 'uniqid';
import { FontFamilyHeaderText } from "../../style/commonStyle";
import photoImg from '../../assets/icons/photo.png'
import videoImg from '../../assets/icons/video.png'
import musicImg from '../../assets/icons/music.png'
import movieImg from '../../assets/icons/movie.png'
import cartoonImg from '../../assets/icons/cartoons.png'

export const NavMenu = () => {
    const menuItems = [
        {
            title: 'Фото',
            link: 'photos',
            img: photoImg
        },
        {
            title: 'Видео',
            link: 'homeVideos',
            img: videoImg
        },        
        {
            title: 'Музыка',
            link: 'musics',
            img: musicImg
        },
        {
            title: 'Фильмы',
            link: 'films',
            img: movieImg
        },
        {
            title: 'Мультики',
            link: 'admin',
            img: cartoonImg
        },
    ]

    const [links, setLinks] = useState();


    useLayoutEffect(() => {
        setLinks(
            menuItems.map(item => {
                return <NavLink key={uniqid()} to={`/${item.link}`} style={{
                    textDecoration: 'none',
                    margin: '2% 0',
                    color: 'white',
                    fontSize: '1.5em',
                    paddingLeft: '10%',
                    ...FontFamilyHeaderText
                }}>
                    <Box sx={{
                        display: 'flex'
                    }}>
                        <Image src={item.img} width={25} height={25}/>
                        <Box sx={{margin: '0 10px'}}>{item.title}</Box>
                    </Box>
                </NavLink>
            })
        );

        
    }, [])

    return(
        <Box sx={{
            width: '10vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            borderRight: '1px solid #03A9F4'
        }}>
            {links}
        </Box>
    )
}