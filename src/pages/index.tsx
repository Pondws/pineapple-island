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
import Why from "@/components/Why/Why";

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Offer />
      <Gallery />
      <Features />
      <Message />
      <Footer />
    </Box>
  );
}
