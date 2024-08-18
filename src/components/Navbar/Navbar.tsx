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
                            desktop: '92%'
                        }
                    }}
                >
                    <Toolbar
                        sx={{
                            p: 0,
                            display: "flex",
                            justifyContent: "space-between",
                            height: {
                                laptop: "100px",
                            },
                            pt: {
                                mobile: 4,
                                laptop: "none"
                            },
                            my: {
                                mobile: 2,
                                laptop: "none"
                            }
                        }}
                    >
                        {/* Logo */}
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
                                textDecoration: 'none',
                                lineHeight: {
                                    laptop: "42.66px"
                                },
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                alignContent: "center",
                            }}
                        >
                            Pineapple <br />
                            Island
                        </Typography>

                        {/* Menu */}
                        <Box
                            sx={{
                                display: {
                                    mobile: "none",
                                    laptop: 'flex'
                                },
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: "center",
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

                        {/* Button */}
                        <Box
                            sx={{
                                display: {
                                    mobile: "none",
                                    laptop: "inline"
                                }
                            }}
                        >
                            <Button
                                variant="text"
                                style={{
                                    backgroundColor: "#0E204E",
                                    borderRadius: 0,
                                    width: 188,
                                    height: 50,
                                    fontSize: 20,
                                    color: "white",
                                    textTransform: "capitalize",
                                }}
                                className={manrope.className}
                            >
                                Get in Touch
                            </Button>
                        </Box>

                        <Box
                            sx={{
                                display: {
                                    laptop: "none"
                                }
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 7.5H0V6H24V7.5ZM24 19.5H0V18H24V19.5ZM24 13.488H0V12H24V13.488Z" fill="#0E204E" />
                            </svg>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
