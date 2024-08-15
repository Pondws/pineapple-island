import { Manrope } from "next/font/google";
import {
    Box,
    Button,
    Checkbox,
    Container,
    Grid,
    Typography,
} from "@mui/material";

import image6 from '../../images/6.jpg'
import image7 from '../../images/7.jpg'
import Image from 'next/image';

const manrope = Manrope({
    weight: '400',
    subsets: ['latin'],
})

export default function Features() {
    return (
        <Container
            sx={{ maxWidth: '70%', mb: 30 }}
            maxWidth={false}
        >
            <Grid container
                sx={{
                    mb: 30
                }}
            >
                <Grid item xs={7}
                    sx={{
                        display: "flex",
                    }}
                >
                    <Image
                        src={image6}
                        alt="test"
                        width={484}
                        height={725}
                    />
                    <Box
                        sx={{
                            width: 175,
                            height: 445,
                            borderRadius: 0,
                            backgroundColor: "#0E204E",
                            flexDirection: "row-reverse",
                            alignSelf: "center",
                            zIndex: -1
                        }}
                    />
                </Grid>
                <Grid item xs={5}>
                    <Typography
                        sx={{
                            fontFamily: "Playfair Display",
                            fontWeight: 700,
                            fontSize: "60px",
                            color: '#0E204E',
                            lineHeight: "80px",
                            mb: 2
                        }}
                    >
                        Amazing Features
                    </Typography>

                    {/* List */}
                    <Box>
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    backgroundColor: "rgba(14, 63, 51, 0.2)",
                                    px: 3
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        fontWeight: 400,
                                        py: 1,
                                    }}
                                    className={manrope.className}

                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                </Typography>
                                <Checkbox
                                    defaultChecked
                                    style={{
                                        color: "#0E204E",
                                        padding: 0
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    px: 3
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        fontWeight: 400,
                                        py: 3,
                                    }}
                                    className={manrope.className}

                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                </Typography>
                                <Checkbox
                                    defaultChecked
                                    style={{
                                        color: "#0E204E",
                                        padding: 0
                                    }}
                                />
                            </Box>

                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    backgroundColor: "rgba(14, 63, 51, 0.2)",
                                    px: 3
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        fontWeight: 400,
                                        py: 1,
                                    }}
                                    className={manrope.className}

                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                </Typography>
                                <Checkbox
                                    defaultChecked
                                    style={{
                                        color: "#0E204E",
                                        padding: 0
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    px: 3
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        fontWeight: 400,
                                        py: 3,
                                    }}
                                    className={manrope.className}

                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                </Typography>
                                <Checkbox
                                    defaultChecked
                                    style={{
                                        color: "#0E204E",
                                        padding: 0
                                    }}
                                />
                            </Box>

                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    backgroundColor: "rgba(14, 63, 51, 0.2)",
                                    px: 3
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        fontWeight: 400,
                                        py: 1,
                                    }}
                                    className={manrope.className}

                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                </Typography>
                                <Checkbox
                                    defaultChecked
                                    style={{
                                        color: "#0E204E",
                                        padding: 0
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    px: 3
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        fontWeight: 400,
                                        py: 3,
                                    }}
                                    className={manrope.className}

                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                </Typography>
                                <Checkbox
                                    defaultChecked
                                    style={{
                                        color: "#0E204E",
                                        padding: 0
                                    }}
                                />
                            </Box>

                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    backgroundColor: "rgba(14, 63, 51, 0.2)",
                                    px: 3
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        fontWeight: 400,
                                        py: 1,
                                    }}
                                    className={manrope.className}

                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                </Typography>
                                <Checkbox
                                    defaultChecked
                                    style={{
                                        color: "#0E204E",
                                        padding: 0
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    px: 3
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        fontWeight: 400,
                                        py: 3,
                                    }}
                                    className={manrope.className}

                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                </Typography>
                                <Checkbox
                                    defaultChecked
                                    style={{
                                        color: "#0E204E",
                                        padding: 0
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    backgroundColor: "rgba(14, 63, 51, 0.2)",
                                    px: 3
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        fontWeight: 400,
                                        py: 1,
                                    }}
                                    className={manrope.className}

                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                </Typography>
                                <Checkbox
                                    defaultChecked
                                    style={{
                                        color: "#0E204E",
                                        padding: 0
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    px: 3
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        fontWeight: 400,
                                        py: 3,
                                    }}
                                    className={manrope.className}

                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                </Typography>
                                <Checkbox
                                    defaultChecked
                                    style={{
                                        color: "#0E204E",
                                        padding: 0
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>

                </Grid>
            </Grid>

            <Grid container
                sx={{
                    flexDirection: "row-reverse",
                }}
            >
                <Grid item xs={7}
                    sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignContent: "flex-end"
                    }}
                >
                    <Image
                        src={image7}
                        alt="image"
                        width={552}
                        height={725}
                        style={{
                            zIndex: 1,
                        }}
                    />
                    <Box
                        sx={{
                            width: 175,
                            height: 445,
                            borderRadius: 0,
                            backgroundColor: "#0E204E",
                            flexDirection: "row-reverse",
                            alignSelf: "center",
                            zIndex: -1
                        }}
                    />
                </Grid>

                <Grid item xs={5}
                    sx={{
                        display: "flex",
                        justifyContent: "flex-start"
                    }}
                >
                    <Box
                        sx={{
                            my: "auto"
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Playfair Display",
                                fontWeight: 700,
                                fontSize: "60px",
                                color: '#0E204E',
                                lineHeight: "80px"
                            }}
                        >
                            Become an <br /> Agent
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 20,
                                my: 2
                            }}
                            className={manrope.className}
                        >
                            a community that gives you a taste of <br />
                            happiness, a place you’ll love to live and an <br />
                            opportunity to build a home.
                        </Typography>

                        <Button
                            style={{
                                backgroundColor: "#0E204E",
                                borderRadius: 0,
                                width: 239,
                                height: 62,
                                fontSize: 18,
                                color: "white",
                                alignSelf: "center",
                                margin: 5,
                                textTransform: "capitalize"
                            }}
                            className={manrope.className}
                        >
                            Join Now
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
