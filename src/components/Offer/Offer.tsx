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
            sx={{ maxWidth: '85%', mb: 30 }}
            maxWidth={false}
        >
            <Typography
                sx={{
                    fontFamily: "Playfair Display",
                    fontWeight: 700,
                    textAlign: "center",
                    fontSize: "60px",
                    color: '#0E204E',
                    lineHeight: "80px",
                    mb: 15
                }}
            >
                What Pineapple Land Offers
            </Typography>

            <Grid container >
                <Grid item laptop={12} desktop={6}
                    sx={{
                        display: "flex",
                        alignContent: {
                            laptop: "center"
                        }
                    }}
                >

                    <Image
                        src={image4}
                        alt="image"
                        width={567}
                        height={582}
                    />

                    <Box
                        sx={{
                            width: 235,
                            height: 445,
                            borderRadius: 0,
                            backgroundColor: "#0E204E",
                            alignSelf: "center",
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
                        display: "flex",
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
                        // sx={{
                        //     width: 412,
                        //     height: 358,
                        //     borderRadius: 0,
                        //     backgroundColor: "#0E204E",
                        //     flexDirection: "row-reverse",
                        //     alignSelf: "center",
                        //     zIndex: -1
                        // }}
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
