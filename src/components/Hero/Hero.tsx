import {
    Box,
    Typography,
} from "@mui/material";
import { Manrope } from "next/font/google";
import Image from "next/image";
import image1 from '../../images/1.jpg'

const manrope = Manrope({
    weight: '400',
    subsets: ['latin'],
})

export default function Hero() {
    return (
        <Box
            display="absolute"
        >
            <Box
                height="496px"
                width="786px"
                alignItems="center"
                sx={{
                    backgroundColor: "#0E204E",
                    color: "white",
                    position: "absolute",
                    alignContent: "center",
                    top: "293px",
                    left: "100px"
                }}
            >

                <Typography
                    sx={{
                        fontFamily: "Playfair Display",
                        fontWeight: 700,
                        fontSize: "64px",
                        px: 12,
                        lineHeight: "85.31px"
                    }}

                >
                    Pineapple Island: <br />
                    GenZ and Millenial <br />
                    Abode
                </Typography>

                <Box>
                    <Typography
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            px: 12,
                            lineHeight: "36px",
                            fontSize: 20
                        }}
                        className={manrope.className}
                    >
                        a community that gives you a taste of happiness, a place you’ll love to
                        live and an opportunity to build a home.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
            }}
            >
                <Image
                    src={image1}
                    alt={"Pineapple island"}
                    width={1368}
                    height={717}
                    style={{
                        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 75% 80%, 0% 100%)",
                        zIndex: -1
                    }}
                />
            </Box>
        </Box>
    )
}
