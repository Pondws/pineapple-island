import { Inter, Poppins, Manrope } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

import image1 from '../images/1.jpg'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import icon5 from '../images/icon5.png'
import icon6 from '../images/icon6.png'


const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
})


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },

];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Box
        display="absolute"
      >
        <Box
          height="496px"
          width="786px"
          alignItems="center"
          sx={{
            backgroundColor: "#0E204E",
            color: "white",
            position: "absolute",
            alignContent: "center",
            top: "293px",
            left: "100px"
          }}
        >

          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontSize: "64px",
              px: 12,
              lineHeight: "85.31px"
            }}

          >
            Pineapple Island: <br />
            GenZ and Millenial <br />
            Abode
          </Typography>

          <Box>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                px: 12,
                lineHeight: "36px",
                fontSize: 20
              }}
              className={manrope.className}
            >
              a community that gives you a taste of happiness, a place you’ll love to
              live and an opportunity to build a home.
            </Typography>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
        }}
        >
          <Image
            src={image1}
            alt={"Pineapple island"}
            width={1368}
            height={717}
          />
        </Box>
      </Box>

      {/* About */}
      <Container
        sx={{ maxWidth: '92%', my: 30 }}
        maxWidth={false}
      >
        <Box
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontSize: "60px",
              mr: 20,
              display: "flex",
              alignItems: 'center',
              color: "#0E204E"
            }}
          >
            About<br />
            Pineapple<br />
            Island
          </Typography>
          <Card sx={{
            display: 'flex',
            borderRadius: 0
          }}>

            <Image
              src={image1}
              alt="test"
              width={728}
              height={620}
            />

            <Box
              sx={{
                backgroundColor: "#0E204E",
                width: "433px",
                height: "620px",
                display: "flex",
                alignItems: "center"
              }}
            >
              <Typography
                variant="subtitle1"
                color="#ffff"
                sx={{
                  px: 8,
                  fontSize: 20,
                  borderRadius: 0
                }}
                className={manrope.className}
              >
                Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development. A perfect, professional built  abode that gives you the true taste of beauty and happiness.
              </Typography>
            </Box>
          </Card>
        </Box>
      </Container>

      {/* Why Choose */}
      <Container
        sx={{ maxWidth: '92%', mb: 30 }}
        maxWidth={false}
      >
        <Box
          sx={{ display: "flex", justifyContent: "center" }}
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
              boxShadow: "0px 4px 25px 5px #0000001A"
            }}
          >
            <Typography
              variant="subtitle1"
              color="#0E204E"
              sx={{
                px: 8,
                fontSize: 20,
                borderRadius: 0
              }}
              className={manrope.className}
            >
              Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development. A perfect, professional built  abode that gives you the true taste of beauty and happiness.
            </Typography>
          </Box>

          <Card sx={{
            display: 'flex',
            borderRadius: 0
          }}>

            <Image
              src={image1}
              alt="test"
              width={728}
              height={620}
            />

          </Card>
        </Box>
      </Container>

      {/* Offer */}
      <Container
        sx={{ maxWidth: '85%', mb: 30 }}
        maxWidth={false}
      >
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: 700,
            textAlign: "center",
            fontSize: "60px",
            color: '#0E204E',
            lineHeight: "80px",
            mb: 15
          }}
        >
          What Pineapple Land Offers
        </Typography>

        <Grid container >
          <Grid item xs={6}>
            <Image
              src={image1}
              alt="image"
              width={567}
              height={582}
              style={{
                zIndex: 2
              }}
            />
            <Box
              sx={{
                width: 412,
                height: 358,
                borderRadius: 0,
                backgroundColor: "#0E204E",
                position: "absolute",
                left: 548,
                top: 3153,
                zIndex: -1
              }}
            />
          </Grid>

          <Grid item xs={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={18}
            >


              <Box
                sx={{
                  height: 157,
                  width: 107,
                  alignContent: "center",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    alignSelf: "center"
                  }}
                >
                  <Image
                    src={icon1}
                    alt="Eco Friendly"
                  />
                </Box>

                <Typography
                  className={poppins.className}
                >
                  Eco Friendly
                </Typography>
              </Box>

              <Box
                sx={{
                  height: 157,
                  width: 123,
                  alignContent: "center",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    alignSelf: "center"
                  }}
                >
                  <Image
                    src={icon2}
                    alt="Good Rates"
                  />
                </Box>

                <Typography className={poppins.className}>
                  Smart Homes
                </Typography>
              </Box>

              <Box
                sx={{
                  height: 157,
                  width: 110,
                  alignContent: "center",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >

                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    alignSelf: "center"
                  }}
                >
                  <Image
                    src={icon3}
                    alt="Good Rates"
                  />
                </Box>


                <Typography
                  sx={{
                    fontSize: 18
                  }}
                  className={poppins.className}
                >
                  Good Rates
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Grid container
          sx={{
            flexDirection: "row-reverse",
          }}
        >
          <Grid item xs={6}
            sx={{
              display: "flex",
              flexDirection: "row-reverse"
            }}
          >
            <Image
              src={image1}
              alt="image"
              width={567}
              height={582}
              style={{
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                width: 412,
                height: 358,
                borderRadius: 0,
                backgroundColor: "#0E204E",
                flexDirection: "row-reverse",
                alignSelf: "center",
                zIndex: -1
              }}
            />
          </Grid>

          <Grid item xs={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start"
            }}
          >
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={13}
            >

              <Box
                sx={{
                  height: 157,
                  width: 180,
                  alignContent: "center",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    alignSelf: "center"
                  }}
                >
                  <Image
                    src={icon4}
                    alt="Serviced Apartment"
                  />
                </Box>

                <Typography
                  className={poppins.className}
                >
                  Serviced Apartment
                </Typography>
              </Box>

              <Box
                sx={{
                  height: 157,
                  width: 139,
                  alignContent: "center",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    alignSelf: "center"
                  }}
                >
                  <Image
                    src={icon5}
                    alt="Private Security"
                  />
                </Box>

                <Typography className={poppins.className}>
                  Private Security
                </Typography>
              </Box>

              <Box
                sx={{
                  height: 157,
                  width: 135,
                  alignContent: "center",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >

                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    alignSelf: "center"
                  }}
                >
                  <Image
                    src={icon6}
                    alt="24/7 Electricity"
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: 18
                  }}
                  className={poppins.className}
                >
                  24/7 Electricity
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Gelleries */}
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

        <Container sx={{ maxWidth: '95%' }} maxWidth={false}>
          <ImageList cols={3} >
            {itemData.map((item) => (
              <ImageListItem sx={{ width: 553, height: 469, padding: 2 }} key={item.img}>
                <Image
                  src={image1}
                  alt={item.title}
                  width={553}
                  height={469}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Box>

      {/* Amazing Features */}
      <Container
        sx={{ maxWidth: '70%', mb: 30 }}
        maxWidth={false}
      >
        <Grid container>
          <Grid item xs={6}>
            <Image
              src={image1}
              alt="test"
              width={484}
              height={620}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>
              Amazing Features
            </Typography>
          </Grid>
        </Grid>

        <Grid container
          sx={{
            flexDirection: "row-reverse",
          }}
        >
          <Grid item xs={6}
            sx={{
              display: "flex",
              flexDirection: "row-reverse"
            }}
          >
            <Image
              src={image1}
              alt="image"
              width={552}
              height={725}
              style={{
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                width: 400,
                height: 445,
                borderRadius: 0,
                backgroundColor: "#0E204E",
                flexDirection: "row-reverse",
                alignSelf: "center",
                zIndex: -1
              }}
            />
          </Grid>

          <Grid item xs={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start"
            }}
          >
            <Box
              sx={{
                my: "auto"
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Playfair Display",
                  fontWeight: 700,
                  fontSize: "60px",
                  color: '#0E204E',
                  lineHeight: "80px"
                }}
              >
                Become an <br /> Agent
              </Typography>

              <Typography
                sx={{
                  fontSize: 20,
                  my: 2
                }}
                className={manrope.className}
              >
                a community that gives you a taste of <br />
                happiness, a place you’ll love to live and an <br />
                opportunity to build a home.
              </Typography>

              <Button
                sx={{
                  backgroundColor: "#0E204E",
                  borderRadius: 0,
                  width: 239,
                  height: 62,
                  fontSize: 18,
                  color: "white",
                  alignSelf: "center",
                  my: 5,

                }}
                className={manrope.className}
              >
                Join Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Send Message */}
      <Box>
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: 700,
            textAlign: "center",
            fontSize: "60px",
            color: '#0E204E',
            lineHeight: "79.98px"
          }}
        >
          Stay In Touch
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            lineHeight: "36px",
            fontFamily: "Manrope",
            fontSize: "20px"
          }}
          className={manrope.className}
        >
          Are you curious about Pineapple Island? Send a message
        </Typography>

        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <TextField
            label="Name"
            sx={{
              alignSelf: "center",
              width: 909,
              mt: 5
            }}
            InputProps={{ sx: { borderRadius: 0, border: 1, borderColor: "#2D2B2B" } }}
          />

          <TextField
            label="Phone No"
            sx={{
              alignSelf: "center",
              width: 909,
              mt: 5
            }}
            InputProps={{ sx: { borderRadius: 0, border: 1, borderColor: "#2D2B2B" } }}
          />

          <TextField
            label="Email"
            sx={{
              alignSelf: "center",
              width: 909,
              mt: 5
            }}
            InputProps={{ sx: { borderRadius: 0, border: 1, borderColor: "#2D2B2B" } }}
          />

          <TextField
            label="Message"
            sx={{
              alignSelf: "center",
              width: 909,
              mt: 5,
            }}
            InputProps={{
              sx: {
                borderRadius: 0,
                height: "302px",
                border: 1,
                borderColor: "#2D2B2B"
              }
            }}
          />

          <Button
            sx={{
              backgroundColor: "#0E204E",
              borderRadius: 0,
              width: 141,
              height: 48,
              fontSize: 18,
              color: "white",
              alignSelf: "center",
              my: 5,

            }}
            className={manrope.className}
          >
            Send
          </Button>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
