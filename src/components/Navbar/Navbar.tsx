import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import styles from "./Navbar.module.css";

import { Manrope } from "next/font/google";

const manrope = Manrope({
    weight: '400',
    subsets: ['latin'],
})

export default function Navbar() {
    const [isActive, setIsActive] = useState(true);

    const menus = ["About Us", "What we do", "Project"]

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    const removeActive = () => {
        setIsActive(false)
    }

    return (
        <>
            <AppBar position="static"
                sx={{
                    backgroundColor: "white",
                    boxShadow: "none",
                    zIndex: 5
                }}
            >
                <Container
                    sx={{
                        maxWidth: {
                            desktop: '92%'
                        },
                        zIndex: 5,
                        backgroundColor: "white",
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
                                mobile: 6,
                                laptop: "none"
                            },
                            pb: {
                                mobile: 2,
                                laptop: "none"
                            },
                            backgroundColor: "white",
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
                                    mobile: "block",
                                    laptop: 'flex'
                                },
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: {
                                    mobile: "start",
                                    laptop: "center"
                                },
                                flexGrow: 1,
                                zIndex: {
                                    mobile: -1,
                                    laptop: 2
                                }
                            }}
                            className={`${styles.navMenu} ${isActive ? styles.active : ''}`}
                        >
                            {menus.map((item, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "#000",
                                        fontSize: 20,

                                    }}
                                    className={manrope.className}
                                >
                                    {item}
                                </Link>
                            ))}
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

                        {/* <Box
                            sx={{
                                display: {
                                    laptop: "none"
                                }
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 7.5H0V6H24V7.5ZM24 19.5H0V18H24V19.5ZM24 13.488H0V12H24V13.488Z" fill="#0E204E" />
                            </svg>
                        </Box> */}

                        <div className={`${styles.hamburger} ${isActive ? '' : styles.active }`} onClick={toggleActiveClass}>
                            <span className={`${styles.bar}`}></span>
                            <span className={`${styles.bar}`}></span>
                            <span className={`${styles.bar}`}></span>
                        </div>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
