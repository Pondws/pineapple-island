import {
  Box,
  Container,
  Typography,
  ImageList,
} from "@mui/material";
import { Manrope } from "next/font/google";
import Image from "next/image";

import image1 from '../../images/gallery1.jpg'
import image2 from '../../images/gallery2.jpg'
import image3 from '../../images/gallery3.jpg'
import image4 from '../../images/gallery4.jpg'
import image5 from '../../images/gallery5.jpg'
import image6 from '../../images/gallery6.jpg'
import image7 from '../../images/gallery7.jpg'
import image8 from '../../images/gallery8.jpg'
import image9 from '../../images/gallery9.jpg'

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
import useMediaQuery from '@mui/material/useMediaQuery';

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
})

// const gallery = [
//   {
//     image1,
//     title: 'gallery1',
//   },
//   {
//     image2,
//     title: 'gallery2',
//   },
//   {
//     image3,
//     title: 'gallery3',
//   },
//   {
//     image4,
//     title: 'gallery4',
//   },
//   {
//     image5,
//     title: 'gallery5',
//   },
//   {
//     image6,
//     title: 'gallery6',
//   },
//   {
//     image7,
//     title: 'gallery7',
//   },
//   {
//     image8,
//     title: 'gallery8',
//   },
//   {
//     image9,
//     title: 'gallery9',
//   },

// ];

// const Galleries = [
//   {
//     img: mobileGallery1,
//     title: 'mobileGallery1',
//     mobile: 6,
//   },
//   {
//     img: mobileGallery2,
//     title: 'mobileGallery2',
//     mobile: 6,
//   },
//   {
//     img: mobileGallery3,
//     title: 'mobileGallery3',
//     mobile: 6,
//   },
//   {
//     img: mobileGallery4,
//     title: 'mobileGallery4',
//     mobile: 6,
//   },
//   {
//     img: mobileGallery5,
//     title: 'mobileGallery5',
//     mobile: 6,
//   },
//   {
//     img: mobileGallery6,
//     title: 'mobileGallery6',
//     mobile: 6,
//   },
//   {
//     img: mobileGallery7,
//     title: 'mobileGallery7',
//     mobile: 6,
//     gridRow: "3 / span 2",
//     gridColumn: "2 / span 1",
//     height: "100%"
//   },
//   {
//     img: mobileGallery8,
//     title: 'mobileGallery8',
//     mobile: 6,
//     gridRow: " 5 / span 2",
//     height: "100%"
//   },
//   {
//     img: mobileGallery9,
//     title: 'mobileGallery9',
//     mobile: 6,
//   },
//   {
//     img: mobileGallery10,
//     title: 'mobileGallery10',
//     mobile: 6,
//   },
//   {
//     img: mobileGallery11,
//     title: 'mobileGallery11',
//     mobile: 6,
//   },
//   {
//     img: mobileGallery12,
//     title: 'mobileGallery12',
//     mobile: 6,
//   },
//   {
//     img: mobileGallery13,
//     title: 'mobileGallery13',
//     mobile: 6,
//     gridColumn: "1 / span 2"
//   },
// ];

const galleriese = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  mobileGallery1,
  mobileGallery2,
  mobileGallery3,
  mobileGallery4,
  mobileGallery5,
  mobileGallery6,
  mobileGallery7,
  mobileGallery8,
  mobileGallery9,
  mobileGallery10,
  mobileGallery11,
  mobileGallery12,
  mobileGallery13,
]

export default function Gallery() {
  const Mobile = useMediaQuery('(min-width:1024px)');

  let sliceGalleriese = galleriese.slice(0, 9)

  if (!Mobile) {
    sliceGalleriese = galleriese.slice(9, 22)
  }

  return (
    <Box
      id="Project"
    >
      {/* <Box
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

        <Container sx={{ maxWidth: '95%', mb: 30 }}>
          <ImageList cols={3}>
            {gallery.map((item, index) => (
              <Box sx={{
                height: 469,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                m: 2,
                overflow: "hidden"
              }}
                key={index}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="100%"
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            ))}
          </ImageList>
        </Container>
      </Box> */}

      {/* <Box
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

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            gap: 1,
            mt: 3,
            mb: 6
          }}
        >
          {gallerys.map((item, index) => (
            <Box key={index}
              sx={{
                height: item.height || {
                  mobile: 150,
                  tablet: 250
                },
                position: 'relative',
                gridRow: item.gridRow,
                gridColumn: item.gridColumn,
                backgroundAttachment: 'fixed'
              }}
            >

              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="100%"
                priority
                style={{ objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Box>

      </Box> */}

      <Box>
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: 700,
            textAlign: "center",
            fontSize: {
              mobile: 24,
              laptop: 60
            },
            color: '#0E204E',
            lineHeight: {
              laptop: "80px"
            }
          }}
        >
          {Mobile ? "Galleries" : "Available Homes"}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Typography
            sx={{
              width: {
                mobile: 335,
                tablet: "auto",
                laptop: 726
              },
              textAlign: "center",
              lineHeight: "36px",
              fontSize: {
                laptop: 20
              }
            }}
            className={manrope.className}
          >
            a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
          </Typography>
        </Box>

        <Container
          sx={{
            maxWidth: {
              laptop: '92%'
            },
            mb: {
              mobile: 7,
              laptop: 30
            }
          }}
        >

          <ImageList cols={Mobile ? 3 : 2} gap={Mobile ? 20 : 10}>
            {sliceGalleriese.map((item, index) => (
              <Box sx={{
                height: {
                  mobile: index === 6 ? "100%" : 150 && index === 7 ? "100%" : 150,
                  tablet: index === 6 ? "100%" : 250 && index === 7 ? "100%" : 250,
                  laptop: 469
                },
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                gridRow:
                  index === 6 ? "3 / span 2" : "auto"
                    && !Mobile ? index === 7 ? "5 / span 2" : undefined : null,
                gridColumn:
                  index === 6 ? "2 / span 1" : "auto"
                    && index === 12 ? "1 / span 2" : "auto",
              }}
                key={index}
              >
                <Image
                  src={item}
                  alt={`item-${index}`}
                  fill
                  sizes="100%"
                  style={{
                    objectFit: 'cover',
                    objectPosition: index === 12 ? "80% 27%" : undefined
                  }}
                />
              </Box>
            ))}
          </ImageList>
        </Container>
      </Box>
    </Box >
  )
}
