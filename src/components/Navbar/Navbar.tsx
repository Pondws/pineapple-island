import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  Link
} from '@mui/material';
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

  return (
    <>
      <AppBar position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          zIndex: 5,
        }}
      >
        <Container
          sx={{
            maxWidth: {
              laptop: '92%'
            },
            zIndex: 5,
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
                  href={`#${item}`}
                  underline="none"
                  sx={{
                    color: "#000",
                    fontSize: 20,
                  }}
                  style={{scrollBehavior:'smooth'}}
                  className={manrope.className}
                >
                  {item}
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                display: {
                  mobile: "none",
                  laptop: "inline"
                }
              }}
            >
              <Button
                href='#Message'
                variant="text"
                style={{
                  backgroundColor: "#0E204E",
                  borderRadius: 0,
                  width: 188,
                  height: 50,
                  fontSize: 20,
                  fontWeight: 400,
                  color: "white",
                  textTransform: "capitalize",
                }}
                className={manrope.className}
              >
                Get in Touch
              </Button>
            </Box>

            <div className={`${styles.hamburger} ${isActive ? '' : styles.active}`} onClick={toggleActiveClass}>
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
