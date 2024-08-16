import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

import { Manrope } from "next/font/google";

const manrope = Manrope({
    weight: '400',
    subsets: ['latin'],
})

export default function Navbar() {
    return (
        <>
            <AppBar position="static"
                sx={{
                    backgroundColor: "white",
                    boxShadow: "none"
                }}
            >
                <Container
                    sx={{
                        maxWidth: {
                            laptop: '92%'
                        }
                    }}
                >
                    <Toolbar
                        sx={{
                            p: 0
                        }}
                    >
                        <Typography
                            sx={{
                                display: "flex",
                                fontFamily: 'Playfair Display',
                                fontWeight: 700,
                                fontSize: {
                                    mobile: "20px",
                                    tablet: '32px'
                                },
                                color: '#0E204E',
                                height: "168px",
                                textDecoration: 'none',
                                lineHeight: "42.66px",
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                alignContent: "center"
                            }}
                        >
                            Pineapple <br />
                            Island
                        </Typography>

                        <Box
                            sx={{
                                display: {
                                    mobile: "none",
                                    laptop: "flex"
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    typography: 'body1',
                                    '& > :not(style) ~ :not(style)': {
                                        ml: 10,
                                    },
                                    flexGrow: 1
                                }}

                            >
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "#000",
                                        fontSize: 20
                                    }}
                                    className={manrope.className}
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "#000",
                                        fontSize: 20
                                    }}
                                    className={manrope.className}
                                >
                                    What we do
                                </Link>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "#000",
                                        fontSize: 20
                                    }}
                                    className={manrope.className}
                                >
                                    Project
                                </Link>
                            </Box>

                            <Box>
                                <Button
                                    variant="text"
                                    style={{
                                        backgroundColor: "#0E204E",
                                        borderRadius: 0,
                                        width: 188,
                                        height: 50,
                                        fontSize: 20,
                                        color: "white",
                                        textTransform: "capitalize"
                                    }}
                                    className={manrope.className}
                                >
                                    Get in Touch
                                </Button>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
