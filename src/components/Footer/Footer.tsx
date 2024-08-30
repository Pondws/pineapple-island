import { Manrope } from "next/font/google";
import { 
  Box, 
  Container, 
  Grid, 
  OutlinedInput, 
  Typography 
} from "@mui/material";

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
})

export default function Footer() {
  return (
    <>
      <Box sx={{
        mt: {
          laptop: 30
        },
        width: "100%",
        height: {
          mobile: 88,
          laptop: 396
        },
        backgroundColor: "#0E204E",
        clipPath: {
          mobile: "flex",
          laptop: "polygon(0 25%, 11.3% 0, 100% 25%, 100% 100%, 0 100%)"
        },
        color: "white",
        alignContent: {
          mobile: "center",
          tablet: "none"
        }
      }}>
        <Container maxWidth={false}
          sx={{
            maxWidth: {
              laptop: "50%",
            },
            display: {
              mobile: "none",
              laptop: "flex"
            },
            px: 0
          }}
        >
          <Grid container>
            <Grid item laptop={6}
              sx={{
                color: "white",
                pt: 4,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: 40,
                    width: 141,
                    pb: 4,
                  }}
                  className={manrope.className}
                >
                  Banana
                  Island
                </Typography>
                <Typography
                  sx={{
                    width: 337,
                    fontSize: 20
                  }}
                >
                  a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
                </Typography>
              </Box>
            </Grid>
            <Grid item laptop={6}
              sx={{
                pt: 10,
                pl: 4.5,
                display: "flex",
                alignContent: "flex-end",
                flexDirection: "column",
              }}
            >

              <Typography
                sx={{
                  fontSize: 24,
                  fontFamily: "Playfair Display",
                }}
              >
                Follow up
              </Typography>

              <Typography
                sx={{
                  fontSize: 20,
                  py: 2,
                  width: 330
                }}
                className={manrope.className}
              >
                Keep up with our newsletter to get updates about projects and offers
              </Typography>
              <Box
                sx={{
                  position: "relative"
                }}
              >
                <OutlinedInput
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 0,
                    width: "100%",
                    height: 46,

                  }}
                  placeholder='Email'
                />
                <Typography
                  sx={{
                    color: "#0E204E",
                    position: "absolute",
                    top: 10,
                    right: 20
                  }}
                >
                  Subscribe
                </Typography>
              </Box>
            </Grid>
          </Grid>

        </Container>

        <Box
          sx={{
            display: {
              laptop: "none"
            },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: 18
            }}
          >
            Pineapple Island
          </Typography>
          <Typography
            sx={{
              fontSize: 10
            }}
          >
            &copy;	Copyright 2021 Glowdsgn All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </>
  )
}
