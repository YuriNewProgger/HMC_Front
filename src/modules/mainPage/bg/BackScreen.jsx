import { Box, Image } from "@mantine/core"
import cloudImgV1 from '../../../assets/img/cloudSvg1.svg'
import cloudImgV2 from '../../../assets/img/cloudSvg2.svg'
import cloudImgV3 from '../../../assets/img/cloudSvg3.svg'
import { FontFamilyHeaderText } from "../../../style/commonStyle"


export const BackScreen = () => {
    return (
        <Box sx={{
            width: '90vw',
            height: '90vh',
            position: 'relative'
        }}>

            <Box sx={{
                position: 'absolute',
                left: '20%',
                top: '5%'
            }}>
                <Image src={cloudImgV3} width={80} height={80} />
            </Box>

            

            <Box sx={{
                padding: '0',
                margin: '0',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}>
                <Image src={cloudImgV2} width={500} height={500} />

                <Box sx={{
                    position: 'absolute',
                    color: 'white',
                    fontSize: '5em',
                    ...FontFamilyHeaderText
                }}>
                    <Box sx={{ marginTop: '50%' }}>Home</Box>
                    <Box sx={{ marginTop: '0%' }}>Cloud</Box>
                </Box>

                <Box sx={{
                    position: 'absolute',
                    left: '60%',
                    top: '20%'
                }}>
                    <Image src={cloudImgV1} width={350} height={350} />
                </Box>
            </Box>

            <Box sx={{
                position: 'absolute',
                left: '80%',
                top: '80%'
            }}>
                <Image src={cloudImgV3} width={80} height={80} />
            </Box>
            
        </Box>
    )
}