import {
    Box,
    Button,
    TextField,
    Typography,
} from "@mui/material";

import { Manrope } from "next/font/google";

const manrope = Manrope({
    weight: '400',
    subsets: ['latin'],
})

export default function Message() {
    return (
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
                        width: "50%",
                        mt: 5
                    }}
                    InputProps={{ sx: { borderRadius: 0, border: 1, borderColor: "#2D2B2B" } }}
                />

                <TextField
                    label="Phone No"
                    sx={{
                        alignSelf: "center",
                        width: "50%",
                        mt: 5
                    }}
                    InputProps={{ sx: { borderRadius: 0, border: 1, borderColor: "#2D2B2B" } }}
                />

                <TextField
                    label="Email"
                    sx={{
                        alignSelf: "center",
                        width: "50%",
                        mt: 5
                    }}
                    InputProps={{ sx: { borderRadius: 0, border: 1, borderColor: "#2D2B2B" } }}
                />

                <TextField
                    label="Message"
                    sx={{
                        alignSelf: "center",
                        width: "50%",
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
                        textTransform: "capitalize"
                    }}
                    className={manrope.className}
                >
                    Send
                </Button>
            </Box>
        </Box>
    )
}
