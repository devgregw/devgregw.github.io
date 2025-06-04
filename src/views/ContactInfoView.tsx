import { EmailRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton, Paper, Stack, Tooltip } from "@mui/material";

export default function ContactInfoView() {
    return <>
        <Paper elevation={12} sx={{ marginX: 'auto', marginTop: 10, paddingY: 2, paddingX: 4 }}>
            <Stack direction="row" spacing={4} sx={{ justifyContent: 'center', }}>
                <Tooltip title="Bluesky"><IconButton href="https://bsky.app/profile/gregwhatley.dev" target="blank" rel="noopener noreferrer"><img src='/img/bluesky.svg' width='64' height='48' alt='Bluesky Logo' /></IconButton></Tooltip>
                <Tooltip title="LinkedIn"><IconButton href="https://www.linkedin.com/in/gregwhatley/" target="blank" rel="noopener noreferrer"><LinkedIn sx={{ width: 64, height: 64 }} /></IconButton></Tooltip>
                <Tooltip title="GitHub"><IconButton href="https://github.com/devgregw" target="blank" rel="noopener noreferrer"><GitHub sx={{ width: 64, height: 64 }} /></IconButton></Tooltip>
                <Tooltip title="Email"><IconButton href="mailto:me@gregwhatley.dev"><EmailRounded sx={{ width: 64, height: 64 }} /></IconButton></Tooltip>
            </Stack>
        </Paper>
    </>
}
