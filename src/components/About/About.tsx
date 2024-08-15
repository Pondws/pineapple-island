import {
    Box,
    Container,
    Typography,
    Card,
} from "@mui/material";
import { Manrope } from "next/font/google";
import Image from "next/image";
import image2 from '../../images/2.jpg'

const manrope = Manrope({
    weight: '400',
    subsets: ['latin'],
})

export default function About() {
    return (
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
                        src={image2}
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
    )
}
