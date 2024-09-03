import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import Image from "next/image";
import image1 from '../../images/1.jpg'

export default function Hero() {
  return (
    <Box
      display="absolute"
    >
      <Box
        alignItems="center"
        sx={{
          backgroundColor: {
            mobile: "transparent",
            laptop: "#0E204E"
          },
          color: "white",
          position: "absolute",
          alignContent: "center",
          width: {
            laptop: 786
          },
          height: {
            laptop: 496
          },
          top: {
            mobile: "none",
            laptop: 293
          },
          left: "100px",
          display: {
            mobile: "none",
            laptop: "block"
          },
        }}
      >

        <Typography
          variant="h1"
          sx={{
            fontSize: "64px",
            px: {
              laptop: 12
            },
            lineHeight: "85.31px",
            width: 643,
            textAlign: {
              mobile: "center",
              laptop: "start"
            },
            display: {
              mobile: "flex"
            },
          }}

        >
          Pineapple Island: GenZ and Millenial Abode
        </Typography>

        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            px: {
              laptop: 12,
            },
            width: 643,
            textAlign: {
              mobile: "center",
              laptop: "start"
            },
            lineHeight: "36px",
            fontSize: 20,
            pt: 3,
          }}
        >
          a community that gives you a taste of happiness, a place you’ll love to
          live and an opportunity to build a home.
        </Typography>

      </Box>

      <Box sx={{
        display: {
          laptop: "flex"
        },
        px: {
          mobile: 2,
          laptop: 0
        },
        flexDirection: 'row-reverse',
      }}
      >

        <Box
          sx={{
            width: {
              mobile: "100%",
              laptop: 1368
            },
            height: {
              mobile: 643,
              laptop: 717
            },
            zIndex: {
              laptop: -1
            },
            clipPath: {
              mobile: "polygon(0% 0%, 100% 0, 100% 100%, 75% 90%, 0% 100%)",
              laptop: "polygon(0% 0%, 100% 0, 100% 100%, 75% 82%, 0% 100%)"
            },
            background: `url(${image1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.44), rgba(0, 0, 0, 0.44))',
              zIndex: 1,
              display: {
                laptop: "none"
              }
            }
          }}
        >

          <Image
            fill
            src={image1}
            alt="Image alt"
            style={{ objectFit: "cover" }}
            priority
          />

          <Box
            sx={{
              zIndex: 999,
              textAlign: "center",
              color: 'white',
              display: {
                mobile: "block",
                laptop: "none"
              }
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: 26,
                lineHeight: "34.66px",
              }}
            >
              Pineapple Island: <br />
              GenZ and Millenial Abode
            </Typography>
            <Typography
              sx={{
                my: 4,
                fontSize: 14,
                px: 1,
              }}
            >
              a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
            </Typography>

            <Button
              href="#Message"
              sx={{
                backgroundColor: {
                  mobile: "#fff",
                  laptop: "#0E204E"
                },
                width: 127,
                height: 40,
                fontSize: 16,
                color: "#0E204E",
                alignSelf: "center",
                textTransform: "capitalize",
                '&:hover': {
                  background: {
                    mobile: "#fff",
                  }
                },
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
