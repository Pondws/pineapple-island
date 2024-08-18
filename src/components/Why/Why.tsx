import {
    Box,
    Container,
    Typography,
    Card
} from "@mui/material";

import { Manrope } from "next/font/google";

const manrope = Manrope({
    weight: '400',
    subsets: ['latin'],
})

import image3 from '../../images/3.jpg'
import Image from "next/image";

export default function Why() {
    return (
        <>
            <Box
                sx={{
                    position: {
                        laptop: "relative"
                    },
                }}
            >
                <Box
                    sx={{
                        height: {
                            laptop: 700
                        },
                        width: "100%",
                        backgroundColor: {
                            mobile: "none",
                            tablet: "#0E204E"
                        },
                        mb: {
                            laptop: 30
                        },
                        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 75% 80%, 0% 100%)",
                    }}
                />

                <Box sx={{
                    position: {
                        mobile: "none",
                        laptop: "absolute"
                    },
                    top: 0,
                    alignContent: "center",
                    width: "100%",
                }}>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: {
                                mobile: "column",
                                laptop: "row"
                            },
                            justifyContent: "center",
                            pt: {
                                laptop: 15
                            },
                            p: 2
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Playfair Display",
                                fontWeight: 700,
                                fontSize: {
                                    mobile: 24,
                                    laptop: 60
                                },
                                mr: {
                                    laptop: 10
                                },
                                display: {
                                    laptop: "flex"
                                },
                                alignItems: 'center',
                                color: {
                                    mobile: "#0E204E",
                                    laptop: "#FFFF"
                                },
                                backgroundColor: "transparent",
                                textAlign: {
                                    mobile: "center",
                                    laptop: "start"
                                },
                                width: {
                                    laptop: "317px"
                                }
                            }}
                        >
                            Why Choose Pineapple Island
                        </Typography>

                        <Box
                            sx={{
                                backgroundColor: {
                                    mobile: "transparent",
                                    laptop: "#FFFF"
                                },
                                width: {
                                    mobile: "none",
                                    laptop: "433px"
                                },
                                height: {
                                    mobile: 250,
                                    laptop: 620
                                },
                                display: "flex",
                                alignItems: "center",
                                boxShadow: {
                                    mobile: "none",
                                    laptop: "0px 4px 25px 5px #0000001A"
                                },
                            }}
                        >
                            <Typography
                                color="#0E204E"
                                sx={{
                                    display: "flex",
                                    px: {
                                        laptop: 11
                                    },
                                    fontSize: {
                                        mobile: 16,
                                        laptop: 20
                                    },
                                    borderRadius: 0,
                                    textAlign: 'center',
                                    lineHeight: 1.5
                                }}
                                className={manrope.className}
                            >
                                Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development. A perfect, professional built  abode that gives you the true taste of beauty and happiness.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                width: {
                                    mobile: 'auto',
                                    laptop: '728px'
                                },
                                height: {
                                    mobile: '207px',
                                    laptop: '620px'
                                },
                                position: 'relative'
                            }}>
                            <Image
                                src={image3}
                                alt='logo'
                                fill
                                sizes="100%"
                                priority 
                            />
                        </Box>
                    </Box>

                </Box>
            </Box >
        </>
    )
}
