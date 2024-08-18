import {
    Box,
    Container,
    Typography,
    Card,
} from "@mui/material";
import { Manrope } from "next/font/google";
import Image from "next/image";
import image2 from '../../images/2.jpg'

const manrope = Manrope({
    weight: '400',
    subsets: ['latin'],
})

export default function About() {
    return (
        <Container
            sx={{
                maxWidth: {
                    laptop: '92%'
                },
                my: {
                    mobile: 5,
                    laptop: 30
                },
            }}
        >

            <Box
                sx={{
                    display: {
                        mobile: "block",
                        laptop: "flex"
                    },
                    width: "100%",
                    justifyContent: "center"
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
                            mobile: 0,
                            laptop: 10
                        },
                        display: {
                            mobile: "block",
                            laptop: "flex"
                        },
                        alignItems: 'center',
                        color: "#0E204E",
                        width: {
                            mobile: "100%",
                            laptop: "317px"
                        },
                        textAlign: {
                            mobile: "center",
                            tablet: "center",
                            laptop: "start",
                        }
                    }}
                >
                    About Pineapple Island
                </Typography>

                <Card sx={{
                    display: {
                        desktop: "flex"
                    },
                    my: {
                        mobile: 2,
                        laptop: 0
                    },
                    borderRadius: 0
                }}>

                    <Box
                        sx={{
                            width: {
                                mobile: '335',
                                laptop: '728px'
                            },
                            height: {
                                mobile: '392px',
                                laptop: '620px'
                            },
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: 'linear-gradient(to top, rgba(62, 62, 62, 0.64), rgba(62, 62, 62, 0.64))',
                                zIndex: 1,
                                display: {
                                    laptop: "none"
                                }
                            }
                        }}>

                        <Box
                            sx={{
                                position: "absolute",
                                left: 0,
                                zIndex: 999,
                                p: 4
                            }}
                        >
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 10L18 20L28 30L26 34L12 20L26 6L28 10Z" fill="white" />
                            </svg>
                        </Box>
                        <Image
                            src={image2}
                            alt='logo'
                            fill
                            sizes="100%"
                            priority
                        />

                        <Box
                            sx={{
                                position: "absolute",
                                right: 0,
                                zIndex: 999,
                                p: 4,
                                rotate: "180deg"
                            }}
                        >
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 10L18 20L28 30L26 34L12 20L26 6L28 10Z" fill="white" />
                            </svg>
                        </Box>

                        <Box
                            sx={{
                                zIndex: 2,
                                textAlign: "center",
                                color: 'white',
                                display: {
                                    mobile: "block",
                                    laptop: "none"
                                }
                            }}
                        >
                            <Typography
                                sx={{ my: 4, fontSize: 14, px: 8, lineHeight: "25.6px" }}
                                className={manrope.className}
                            >
                                Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development. A perfect, professional built  abode that gives you the true taste of beauty and happiness.
                            </Typography>


                        </Box>
                    </Box>

                    <Box
                        sx={{
                            backgroundColor: "#0E204E",
                            width: "433px",
                            height: "620px",
                            display: {
                                mobile: "none",
                                laptop: "flex"
                            },
                            alignItems: "center"
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            color="#ffff"
                            sx={{
                                px: 8,
                                fontSize: 20,
                                borderRadius: 0
                            }}
                            className={manrope.className}
                        >
                            Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development. A perfect, professional built  abode that gives you the true taste of beauty and happiness.
                        </Typography>
                    </Box>
                </Card>
            </Box>
        </Container>
    )
}
