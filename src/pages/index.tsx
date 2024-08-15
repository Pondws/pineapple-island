import { Manrope } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from 'next/image'

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  Card,
  ImageList,
  ImageListItem
} from "@mui/material";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Gallery from "@/components/Gallery/Gallery";
import Message from "@/components/Message/Message";
import Offer from "@/components/Offer/Offer";
import Features from "@/components/Features/Features";

import image3 from '../images/3.jpg'

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* Why Choose */}
      <Box
        sx={{
          height: 700,
          backgroundColor: {
            mobile: "none",
            tablet: "#0E204E"
          },
          mb: 30,
          clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 75% 80%, 0% 100%)",
        }}
      >
        <Container
          sx={{ maxWidth: '92%' }}
          maxWidth={false}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 15
            }}
          >

            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 700,
                fontSize: "60px",
                mr: 20,
                display: "flex",
                alignItems: 'center',
                color: "#FFFF"
              }}
            >
              Why <br />
              Choose <br />
              Pineapple <br />
              Island
            </Typography>

            <Box
              sx={{
                backgroundColor: "#FFFF",
                width: "433px",
                height: "620px",
                display: "flex",
                alignItems: "center",
                boxShadow: "0px 4px 25px 5px #0000001A",
              }}
            >
              <Typography
                color="#0E204E"
                sx={{
                  px: 11,
                  fontSize: 20,
                  borderRadius: 0
                }}
                className={manrope.className}
              >
                Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development. A perfect, professional built  abode that gives you the true taste of beauty and happiness.
              </Typography>
            </Box>

            <Card sx={{
              borderRadius: 0,
              zIndex: 999
            }}>
              <Image
                src={image3}
                alt="test"
                width={728}
                height={620}

              />

            </Card>
          </Box>
        </Container>
      </Box>

      <Offer />
      <Gallery />

      <Features />
  
      <Message />
      <Footer />
    </>
  );
}
