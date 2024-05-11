import { Box, Image } from "@mantine/core"
import { useEffect, useState } from "react"
import { PHOTO_MOCK } from "../../../MOCK/photo/mockPhoto"


export const PhotoSlider = () => {


    const [currentPhoto, setCurrentPhoto] = useState(PHOTO_MOCK[0])

    const [op, setOp] = useState(1);
    let isDisplay = true;

    useEffect(() => {
        let i = 1;
        const timerId = setInterval(() => {
            isDisplay = !isDisplay;

            if(isDisplay){
                setOp(1);
            }
            else {
                setOp(0.3);
                setTimeout(() => {
                    setCurrentPhoto(PHOTO_MOCK[i]);
                    if (i === PHOTO_MOCK.length - 1)
                        i = 0;
                    else
                        i++;
                }, 1000)
            }                

        }, 2000);

        return () => {
            clearInterval(timerId);
        };
    }, [])


    return(
        <Box sx={{
            border: '2px solid black',
            borderRadius: '20px',
            '&:hover': { cursor: 'pointer', border: '2px solid white', transform: 'scale(1.05)'}
        }}>
            <Image sx={{
                opacity: op,
                transition: '1s linear'
            }} src={currentPhoto} width={300} height={300} radius="lg"/>
        </Box>
    )
}