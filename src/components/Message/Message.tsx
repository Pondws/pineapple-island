import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Message() {
  const Mobile = useMediaQuery('(min-width:1024px)');
  return (
    <Box
      id="Message"
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontSize: {
            mobile: 24,
            laptop: 60
          },
          color: '#0E204E',
          lineHeight: {
            laptop: "79.98px"
          },
          mb: {
            laptop: 2
          }
        }}
      >
        Stay In Touch
      </Typography>

      <Typography
        variant={Mobile ? "body1" : "body2"}
        sx={{
          textAlign: "center",
          lineHeight: "36px",
          px: 2,
          my: 2
        }}
      >
        {Mobile ? "Are you curious about Pineapple Island? Send a message" : "If you are interested in finding out more about The Discovery Village, leave a message"}
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
          placeholder="Name"
          sx={{
            alignSelf: "center",
            width: "50%",
            mt: 5
          }}
          InputProps={{ sx: { borderRadius: 0, border: 1, borderColor: "#2D2B2B" } }}
        />

        <TextField
          placeholder="Phone No"
          sx={{
            alignSelf: "center",
            width: "50%",
            mt: 5
          }}
          InputProps={{ sx: { borderRadius: 0, border: 1, borderColor: "#2D2B2B" } }}
        />

        <TextField
          placeholder="Email"
          sx={{
            alignSelf: "center",
            width: "50%",
            mt: 5
          }}
          InputProps={{ sx: { borderRadius: 0, border: 1, borderColor: "#2D2B2B" } }}
        />

        <TextField
          placeholder="Message"
          sx={{
            alignSelf: "center",
            width: "50%",
            mt: 5,
          }}
          multiline
          rows={12}
          InputProps={{
            sx: {
              borderRadius: 0,
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
          sx={{
            py: 1
          }}
          multiline
          rows={4}
          InputProps={{ sx: { borderRadius: 0, borderColor: "#2D2B2B" } }}
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
            mb: 7,
            '&:hover': {
              background: "#0E204E"
            }
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  )
}
