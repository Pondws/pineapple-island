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

export default function Gallery() {
  return (
    <Box>
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

        <Container sx={{ maxWidth: '95%', mb:30 }} maxWidth={false}>
          <ImageList cols={3} sx={{ overflow: "hidden"}}>
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
  )
}
