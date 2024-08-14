import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
    return (
        <>
            <Box sx={{
                mt: 30
            }}>
                <svg width="1920" height="400" viewBox="0 0 1920 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2_45)">
                        <path d="M1920 400L0 400V107.364L224 4L1920 107.364L1920 400Z" fill="#0E204E" />
                    </g>
                </svg>
            </Box>
        </>

        // <Box
        //   sx={{
        //     width: "100%",
        //     height: "396px",
        //     backgroundColor: "#0E204E",
        //     paddingTop: "1rem",
        //     paddingBottom: "1rem",
        //   }}
        // >
        //   <Container maxWidth="lg">
        //     <Grid container direction="column" alignItems="center">
        //       <Grid item xs={12}>
        //         <Typography color="black" variant="h5">
        //           React Starter App
        //         </Typography>
        //       </Grid>
        //       <Grid item xs={12}>
        //         <Typography color="textSecondary" variant="subtitle1">
        //           {`${new Date().getFullYear()} | React | Material UI | React Router`}
        //         </Typography>
        //       </Grid>
        //     </Grid>
        //   </Container>
        // </Box>
    )
}
