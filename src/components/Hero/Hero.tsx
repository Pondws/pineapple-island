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
                alignItems="center"
                sx={{
                    backgroundColor: {
                        laptop: "#0E204E"
                    },
                    color: "white",
                    position: "absolute",
                    alignContent: "center",
                    top: "293px",
                    left: "100px",
                }}
            >

                <Typography
                    sx={{
                        fontFamily: "Playfair Display",
                        fontWeight: 700,
                        fontSize: "64px",
                        px: {
                            laptop: 12
                        },
                        lineHeight: "85.31px",
                        width: 643,
                        textAlign: {
                            mobile: "center",
                            laptop: "start"
                        },
                        display: {
                            mobile: "flex"
                        }
                    }}

                >
                    Pineapple Island: GenZ and Millenial Abode
                </Typography>

                <Typography
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        px: {
                            laptop: 12,
                        },
                        width: 643,
                        textAlign: {
                            mobile: "center",
                            laptop: "start"
                        },
                        lineHeight: "36px",
                        fontSize: 20
                    }}
                    className={manrope.className}
                >
                    a community that gives you a taste of happiness, a place you’ll love to
                    live and an opportunity to build a home.
                </Typography>

            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
            }}
            >
                <Image
                    src={image1}
                    alt={"Pineapple island"}
                    style={{
                        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 75% 80%, 0% 100%)",
                        zIndex: -1,
                        width: "1368px",
                        height: "717px"
                    }}

                />
            </Box>
        </Box>
    )
}
