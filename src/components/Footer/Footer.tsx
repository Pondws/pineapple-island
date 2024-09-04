import {
  Box,
  Container,
  Grid,
  OutlinedInput,
  Typography
} from "@mui/material";

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
                  variant="body1"
                  sx={{
                    fontSize: 40,
                    width: 141,
                    pb: 4,
                    fontWeight: 500
                  }}
                >
                  Banana
                  Island
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    width: 337,
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
                variant="h1"
                sx={{
                  fontSize: 24,
                  fontWeight: 400
                }}
              >
                Follow up
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  py: 2,
                  width: 330
                }}
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
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                  placeholder='Email'
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#0E204E",
                    fontSize: 20,
                    position: "absolute",
                    top: 8,
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
              fontSize: 18,
            }}
          >
            Pineapple Island
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <Typography
              sx={{
                fontSize: 16,
                pr: 0.5
              }}
            >
              &copy;
            </Typography>
            <Typography
              variant="h6"
              sx={{
                alignSelf: "center",
              }}
            >
              Copyright 2021 Glowdsgn All Rights Reserved
            </Typography>
          </Box>

        </Box>
      </Box>
    </>
  )
}
