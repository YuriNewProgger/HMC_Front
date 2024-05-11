import { Box, Image } from "@mantine/core"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"


export const LinkItem = ({ imgSource, title }) => {

    const [isHover, setIsHover] = useState(false);

    return (
        <Box sx={{
            position: 'relative',
            margin: '0 5%',
            '&:hover': { transform: 'scale(1.1)', }
        }} onMouseEnter={() => setIsHover(!isHover)} onMouseLeave={() => setIsHover(!isHover)}>
            <NavLink to={'#'}>
                <Image styles={{
                    root: { 
                        opacity: isHover ? 0.2 : 1
                    }
                }} src={imgSource} width={150} height={150} />
                <Box sx={{
                    position: 'absolute',
                    left: title.length < 5 ? '40%' : '25%',
                    top: '35%',
                    textDecoration: 'none',
                    color: 'white',
                    fontSize: '1.5em',
                    display: isHover ? 'block' : 'none'
                }}>{title}</Box>
            </NavLink>
        </Box>
    )
}