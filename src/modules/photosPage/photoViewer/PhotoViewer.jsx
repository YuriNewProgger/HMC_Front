import { Box, Image } from "@mantine/core"
import { useSelector } from "react-redux"
import { GetSelectedPhoto } from "../slice/PhotoSlice"
import { server } from "../../../api/api";
import { useEffect, useRef, useState } from "react";



export const PhotoViewer = () => {
    const fillPercentWidth = 95;
    const fillPercentHeight = 95;

    const selectedPhoto = useSelector(GetSelectedPhoto);

    //#region Обработка изменения размера окна
    const ref = useRef(null);
    const [_width, _setWidth] = useState(window.innerWidth);
    const [_height, _setHeight] = useState(window.innerHeight);

    useEffect(() => {
        if (ref !== null && ref.current !== null && ref.current.offsetWidth !== null) {
            _setWidth(ref.current.offsetWidth);
            _setHeight(ref.current.offsetHeight);

            window.addEventListener('resize', handleResize);
        }


        return () => window.removeEventListener('resize', handleResize);
    }, [ref.current]);

    const handleResize = () => {
        _setWidth(ref.current.offsetWidth);
        _setHeight(ref.current.offsetHeight);
    }
    //#endregion

    const definePathPhoto = (path) =>{
        return `${"development" ? `http://127.0.0.1:8000` : "http://192.168.1.35:8000"}${path}`;
    }

    return(
        <Box ref={ref} sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
        }}>
            {
                selectedPhoto ? 
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%'
                    }}>
                        <Image src={definePathPhoto(selectedPhoto)} fit="contain" width={_width / 100 * fillPercentWidth} height={_height / 100 * fillPercentHeight} styles={{
                            root: { margin: '1%' }
                        }} />
                        <Box>{selectedPhoto.split('/')[selectedPhoto.split('/').length - 1]}</Box>
                    </Box> : 
                <Box>Выберите фотографию</Box>
            }
        </Box>
    )
}