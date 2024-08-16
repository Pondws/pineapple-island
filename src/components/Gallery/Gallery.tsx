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
import { Manrope } from "next/font/google";
import Image from "next/image";
// import image1 from '../../images/1.jpg'

import gallery1 from '../../images/gallery1.jpg'
import gallery2 from '../../images/gallery2.jpg'
import gallery3 from '../../images/gallery3.jpg'
import gallery4 from '../../images/gallery4.jpg'
import gallery5 from '../../images/gallery5.jpg'
import gallery6 from '../../images/gallery6.jpg'
import gallery7 from '../../images/gallery7.jpg'
import gallery8 from '../../images/gallery8.jpg'
import gallery9 from '../../images/gallery9.jpg'

import mobileGallery1 from '../../images/mobilegallery1.jpg'
import mobileGallery2 from '../../images/mobilegallery2.jpg'
import mobileGallery3 from '../../images/mobilegallery3.jpg'
import mobileGallery4 from '../../images/mobilegallery4.jpg'
import mobileGallery5 from '../../images/mobilegallery5.jpg'
import mobileGallery6 from '../../images/mobilegallery6.jpg'
import mobileGallery7 from '../../images/mobilegallery7.jpg'
import mobileGallery8 from '../../images/mobilegallery8.jpg'
import mobileGallery9 from '../../images/mobilegallery9.jpg'
import mobileGallery10 from '../../images/mobilegallery10.jpg'
import mobileGallery11 from '../../images/mobilegallery11.jpg'
import mobileGallery12 from '../../images/mobilegallery12.jpg'
import mobileGallery13 from '../../images/mobilegallery13.jpg'

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
})

const gallery = [
  {
    img: gallery1,
    title: 'gallery1',
  },
  {
    img: gallery2,
    title: 'gallery2',
  },
  {
    img: gallery3,
    title: 'gallery3',
  },
  {
    img: gallery4,
    title: 'gallery4',
  },
  {
    img: gallery5,
    title: 'gallery5',
  },
  {
    img: gallery6,
    title: 'gallery6',
  },
  {
    img: gallery7,
    title: 'gallery7',
  },
  {
    img: gallery8,
    title: 'gallery8',
  },
  {
    img: gallery9,
    title: 'gallery9',
  },

];

const mobileGalleries = [
  {
    img: mobileGallery1,
    title: 'mobileGallery1',
  },
  {
    img: mobileGallery2,
    title: 'mobileGallery2',
  },
  {
    img: mobileGallery3,
    title: 'mobileGallery3',
  },
  {
    img: mobileGallery4,
    title: 'mobileGallery4',
  },
  {
    img: mobileGallery5,
    title: 'mobileGallery5',
  },
  {
    img: mobileGallery6,
    title: 'mobileGallery6',
  },
  {
    img: mobileGallery7,
    title: 'mobileGallery7',
  },
  {
    img: mobileGallery8,
    title: 'mobileGallery8',
  },
  {
    img: mobileGallery9,
    title: 'mobileGallery9',
  },
  {
    img: mobileGallery10,
    title: 'mobileGallery10',
  },
  {
    img: mobileGallery11,
    title: 'mobileGallery11',
  },
  {
    img: mobileGallery12,
    title: 'mobileGallery12',
  },
  {
    img: mobileGallery13,
    title: 'mobileGallery13',
    cols: 2
  },
];

export default function Gallery() {
  return (
    <Box>
      <Box
        sx={{
          display: {
            mobile: "none",
            laptop: "block"
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: 700,
            textAlign: "center",
            fontSize: "60px",
            color: '#0E204E',
            lineHeight: "80px"
          }}
        >
          Galleries
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            lineHeight: "36px",
            fontSize: "20px"
          }}
          className={manrope.className}
        >
          a community that gives you a taste of happiness, a place you’ll love to live and <br /> an opportunity to build a home.
        </Typography>

        <Container sx={{ maxWidth: '95%', mb: 30 }} maxWidth={false}>
          <ImageList cols={3} sx={{ overflow: "hidden" }}>
            {gallery.map((item, index) => (
              <ImageListItem sx={{ width: 553, height: 469, padding: 2 }} key={index}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={553}
                  height={469}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Box>

      <Box
        sx={{
          display: {
            mobile: "block",
            laptop: "none"
          },
          px: {
            mobile: 2
          }
        }}
      >
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: 700,
            textAlign: "center",
            fontSize: "24px",
            color: '#0E204E',
            // lineHeight: "80px"
          }}
        >
          Available Homes
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            lineHeight: "36px",
            fontSize: "16px"
          }}
          className={manrope.className}
        >
          a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
        </Typography>

          <ImageList
            sx={{
              overflow: "hidden",
              p:0,
              mb: 10
            }}
            gap={9}
            cols={2}
          >
            {mobileGalleries.map((item, index) => (
               <ImageListItem key={index} cols={item.cols || 1}>
                <Image
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: 150 }}
                />
              </ImageListItem>
            ))}
          </ImageList>
      </Box>

    </Box>
  )
}
