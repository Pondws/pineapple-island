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
                    fontSize: {
                        mobile: 24,
                        laptop: 60
                    },
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
                    fontSize: "20px",
                    display: {
                        mobile: "none",
                        laptop: 'block'
                    }
                }}
                className={manrope.className}
            >
                Are you curious about Pineapple Island? Send a message
            </Typography>

            <Typography
                sx={{
                    textAlign: "center",
                    lineHeight: "36px",
                    fontFamily: "Manrope",
                    px: 2,
                    display: {
                        mobile: "block",
                        laptop: 'none'
                    }
                }}
                className={manrope.className}
            >
                If you are interested in finding out more about The Discovery Village, leave a message
            </Typography>

            <Box
                sx={{
                    textAlign: "center",
                    display: {
                        mobile: "none",
                        laptop: "flex"
                    },
                    flexDirection: "column",
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

            <Box
                sx={{
                    textAlign: "center",
                    px: 5,
                    display: {
                        laptop: "none"
                    }
                }}
            >
                <TextField
                    label="Name"
                    fullWidth
                    variant="standard"
                    sx={{
                        py: 1
                    }}
                />
                <TextField
                    label="Phone No"
                    fullWidth
                    variant="standard"
                    sx={{
                        py: 1
                    }}
                />
                <TextField
                    label="Email"
                    fullWidth
                    variant="standard"
                    sx={{
                        py: 1
                    }}
                />

                <Typography
                    sx={{
                        textAlign: "start",
                        mt: 2,
                        color: "rgba(0, 0, 0, 0.6)"
                    }}
                >
                    Message
                </Typography>
                <TextField
                    fullWidth
                    // variant="standard"
                    sx={{
                        py: 1,
                    }}
                    InputProps={{ sx: { borderRadius: 0, height: 83, borderColor: "#2D2B2B" } }}
                />
                <Button
                    sx={{
                        backgroundColor: "#0E204E",
                        borderRadius: "5px",
                        width: 82,
                        height: 40,
                        fontSize: 16,
                        color: "white",
                        alignSelf: "center",
                        textTransform: "capitalize",
                        mt: 1,
                        mb: 7
                    }}
                    className={manrope.className}
                >
                    Send
                </Button>
            </Box>
        </Box>
    )
}
