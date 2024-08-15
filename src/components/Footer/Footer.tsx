import { Manrope } from "next/font/google";
import { Box, Container, Grid, OutlinedInput, Typography } from "@mui/material";

const manrope = Manrope({
    weight: '400',
    subsets: ['latin'],
})

export default function Footer() {
    return (
        <>
            <Box sx={{
                mt: 30,
                width: 1920,
                height: 396,
                backgroundColor: "#0E204E",
                clipPath: "polygon(0 26%, 11.5% 0, 100% 32%, 100% 100%, 0 100%);",
                color: "white"
            }}>
                <Container maxWidth={false}
                    sx={{
                        maxWidth: "50%"
                    }}
                >
                    <Grid container >
                        <Grid item xs={6}
                            sx={{
                                color: "white",
                                pt: 7,
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: 40,
                                        width: 141,
                                        pb: 4
                                    }}
                                    className={manrope.className}
                                >
                                    Banana
                                    Island
                                </Typography>
                                <Typography
                                    sx={{
                                        width: 337,
                                        fontSize: 20
                                    }}
                                >
                                    a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}
                            sx={{
                                pt: 15,
                                pl: 4.5,
                                display: "flex",
                                alignContent: "flex-end",
                                flexDirection: "column",
                            }}
                        >

                            <Typography
                                sx={{
                                    fontSize: 24,
                                    fontFamily: "Playfair Display",
                                }}
                            >
                                Follow up
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: 20,
                                    py: 2,
                                }}
                                className={manrope.className}
                            >
                                Keep up with our newsletter to get <br />
                                updates about projects and offers
                            </Typography>
                            <Box
                                sx={{
                                    position: "relative"
                                }}
                            >
                                <OutlinedInput
                                    sx={{
                                        backgroundColor: "white",
                                        borderRadius: 0,
                                        width: 419,
                                        height: 46,

                                    }}
                                    placeholder='Email'
                                />
                                <Typography
                                    sx={{
                                        color: "#0E204E",
                                        position: "absolute",
                                        top: 10,
                                        right: 20
                                    }}
                                >
                                    Subscribe
                                </Typography>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>

    )
}
