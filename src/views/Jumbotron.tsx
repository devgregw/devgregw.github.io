import { KeyboardDoubleArrowDownRounded } from "@mui/icons-material";
import { Container, Fade, Grid, Typography, useScrollTrigger } from "@mui/material";
import { Glitch, Mono } from "../Typography";

export default function Jumbotron() {
    const trigger = useScrollTrigger({target: window, threshold: 50, disableHysteresis: false})
    return (
        <Container id="jumbotron" sx={t => ({[t.breakpoints.down('sm')]: {marginTop: 4}})}>
            <Grid container spacing={0}>
                <Grid size={{xs: 12, sm: 6}} sx={t => ({ [t.breakpoints.up('sm')]: { textAlign: 'start', paddingBottom: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'end' })}>
                    <Typography sx={{ fontSize: 22 }}>Hello, I'm</Typography>
                    <Glitch gradient sx={{ fontSize: 'calc(min(10vw, 120px))' }}>Greg<br />Whatley</Glitch>
                    <Mono className="term" sx={{ fontSize: 18 }}>Software Engineer</Mono>
                </Grid>
                <Grid size={{xs: 12, sm: 6}} sx={{ padding: 4 }}>
                    <img src='/img/me.png' style={{ width: '100%', borderRadius: '0 0 50% 50%' }} />
                </Grid>
            </Grid>
            <Fade in={!trigger}>
                <KeyboardDoubleArrowDownRounded color="secondary" sx={t => ({ [t.breakpoints.up('sm')]: { display: 'none' }, width: 64, height: 64 })} />
            </Fade>
        </Container>
    )
}
