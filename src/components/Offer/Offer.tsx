import {
    Box,
    Container,
    Grid,
    Stack,
    Typography
} from "@mui/material";
import Image from "next/image";

import image4 from '../../images/4.jpg'
import image5 from '../../images/5.jpg'

import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'
import icon5 from '../../images/icon5.png'
import icon6 from '../../images/icon6.png'

import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})
export default function offer() {
    return (
        <Container
            sx={{
                maxWidth: {
                    laptop: '85%'
                },
                mb: {
                    mobile: 10,
                    laptop: 30
                }
            }}
        >
            <Typography
                sx={{
                    fontFamily: "Playfair Display",
                    fontWeight: 700,
                    textAlign: "center",
                    fontSize: "60px",
                    color: '#0E204E',
                    lineHeight: "80px",
                    mb: 15,
                    display: {
                        mobile: "none",
                        laptop: "block"
                    }
                }}
            >
                What Pineapple Land Offers
            </Typography>

            <Typography
                sx={{
                    fontFamily: "Playfair Display",
                    fontWeight: 700,
                    textAlign: "center",
                    fontSize: "24px",
                    color: '#0E204E',
                    lineHeight: "80px",
                    display: {
                        mobile: "block",
                        laptop: "none"
                    }
                }}
            >
                Pineapple Island Offers
            </Typography>

            <Box
                sx={{
                    width: {
                        mobile: '100%',
                        laptop: 'none'
                    },
                    height: {
                        mobile: '387px',
                        laptop: 'none'
                    },
                    position: 'relative',
                    display: {
                        mobile: "block",
                        laptop: "none"
                    }
                }}>
                <Image
                    src={image4}
                    alt='image'
                    layout='fill'
                    objectFit='cover'
                />
            </Box>

            <Grid container>
                <Grid item laptop={12} desktop={6}
                    sx={{
                        display: "flex",
                        alignContent: {
                            laptop: "center"
                        }
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                mobile: 'none',
                                laptop: '567px'
                            },
                            height: {
                                mobile: 'none',
                                laptop: '582px'
                            },
                            position: 'relative',
                        }}>
                        <Image
                            src={image4}
                            alt='image'
                            layout='fill'
                            objectFit='cover'
                        />
                    </Box>

                    {/* <Box
                        sx={{
                            width: 235,
                            height: 445,
                            borderRadius: 0,
                            backgroundColor: "#0E204E",
                            alignSelf: "center",
                            display: {
                                mobile: "none"
                            }
                        }}
                    /> */}

<Box
                        sx={{
                            width: 232,
                            height: 445,
                            borderRadius: 0,
                            backgroundColor: "#0E204E",
                            flexDirection: "row-reverse",
                            alignSelf: "center",
                            zIndex: -1,
                        }}
                    />
                </Grid>

                <Grid item desktop={6}
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={18}
                        sx={{
                            display: {
                                mobile: "none",
                                laptop: "flex"
                            }
                        }}
                    >

                        <Box
                            sx={{
                                height: 157,
                                width: 107,
                                alignContent: "center",
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}
                        >
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    alignSelf: "center"
                                }}
                            >
                                <Image
                                    src={icon1}
                                    alt="Eco Friendly"
                                />
                            </Box>

                            <Typography
                                className={poppins.className}
                            >
                                Eco Friendly
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                height: 157,
                                width: 123,
                                alignContent: "center",
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}
                        >
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    alignSelf: "center"
                                }}
                            >
                                <Image
                                    src={icon2}
                                    alt="Good Rates"
                                />
                            </Box>

                            <Typography className={poppins.className}>
                                Smart Homes
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                height: 157,
                                width: 110,
                                alignContent: "center",
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}
                        >

                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    alignSelf: "center"
                                }}
                            >
                                <Image
                                    src={icon3}
                                    alt="Good Rates"
                                />
                            </Box>

                            <Typography
                                sx={{
                                    fontSize: 18
                                }}
                                className={poppins.className}
                            >
                                Good Rates
                            </Typography>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>

            <Grid container
                sx={{
                    flexDirection: "row-reverse",
                }}
            >
                <Grid item desktop={6}
                    sx={{
                        display: {
                            mobile: "none",
                            laptop: "flex"
                        },
                        flexDirection: "row-reverse"
                    }}
                >
                    <Image
                        src={image5}
                        alt="image"
                        width={567}
                        height={582}
                        style={{
                            zIndex: 1,
                        }}
                    />
                    <Box
                        sx={{
                            width: 235,
                            height: 445,
                            borderRadius: 0,
                            backgroundColor: "#0E204E",
                            flexDirection: "row-reverse",
                            alignSelf: "center",
                            zIndex: -1
                        }}
                    />
                </Grid>

                <Grid item desktop={6}
                    sx={{
                        display: "flex",
                        justifyContent: "flex-start"
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={13}
                        sx={{
                            display: {
                                mobile: "none",
                                laptop: "flex"
                            }
                        }}
                    >

                        <Box
                            sx={{
                                height: 157,
                                width: 180,
                                alignContent: "center",
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}
                        >
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    alignSelf: "center"
                                }}
                            >
                                <Image
                                    src={icon4}
                                    alt="Serviced Apartment"
                                />
                            </Box>

                            <Typography
                                className={poppins.className}
                            >
                                Serviced Apartment
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                height: 157,
                                width: 139,
                                alignContent: "center",
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}
                        >
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    alignSelf: "center"
                                }}
                            >
                                <Image
                                    src={icon5}
                                    alt="Private Security"
                                />
                            </Box>

                            <Typography className={poppins.className}>
                                Private Security
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                height: 157,
                                width: 135,
                                alignContent: "center",
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}
                        >

                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    alignSelf: "center"
                                }}
                            >
                                <Image
                                    src={icon6}
                                    alt="24/7 Electricity"
                                />
                            </Box>

                            <Typography
                                sx={{
                                    fontSize: 18
                                }}
                                className={poppins.className}
                            >
                                24/7 Electricity
                            </Typography>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}
