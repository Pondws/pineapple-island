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
                        mobile: "transparent",
                        laptop: "#0E204E"
                    },
                    color: "white",
                    position: "absolute",
                    alignContent: "center",
                    top: {
                        mobile: "none",
                        laptop: 293
                    },
                    left: "100px",
                    display: "none",
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
                display: {
                    // mobile: "",
                    laptop: "flex"
                },
                px: {
                    mobile: 2
                },
                flexDirection: 'row-reverse',
            }}
            >
                <Box
                    sx={{
                        width: {
                            mobile: "100%",
                            laptop: 1368
                        },
                        height: {
                            mobile: 643,
                            laptop: 717 
                        },
                        zIndex: -1,
                        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 75% 80%, 0% 100%)",
                
                    }}
                >
                    <Image
                        src={image1}
                        alt={"Pineapple island"}
                        style={{
                            width: "100%",
                            // height: "auto"
                        }}
                        sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
                        objectFit="cover"
                    />
                </Box>

            </Box>
        </Box>
    )
}
