import { AppBar, Avatar, Box, Container, Fade, Toolbar, useScrollTrigger } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactNode } from "react";
import { Glitch } from "../Typography";

export default function GradientAppBarContainer(props: { children: ReactNode }) {
    const [threshold, setThreshold] = useState<number>(99999)
    const scrollTrigger = useScrollTrigger({ target: window, disableHysteresis: true, threshold });
    useEffect(() => {
        const setHeight = () => {
            let jumbotron = document.getElementById('jumbotron')?.getBoundingClientRect().height ?? 0
            let gradient = document.getElementById('grad')?.getBoundingClientRect().height ?? 0
            setThreshold((jumbotron + gradient) || 999999)
        }
        setHeight()
        window.addEventListener('resize', setHeight)
        return () => window.removeEventListener('resize', setHeight)
    }, [])
    return (
        <>
            <Box id="grad" sx={t => ({ background: `linear-gradient(${t.palette.background.default}, rgba(255,255,255,0.05))`, height: '10rem' })} />
            <React.Fragment>
                <AppBar elevation={scrollTrigger ? 16 : 0} position="sticky" sx={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px) saturate(150%)', WebkitBackdropFilter: 'blur(20px) saturate(150%)' }}>
                    <Fade appear={false} in={scrollTrigger}>
                        <Toolbar>
                            <Glitch gradient sx={{ flexGrow: 1, fontSize: '2rem', textAlign: 'start', cursor: 'pointer' }} onClick={() => document.firstElementChild?.scrollTo({ behavior: 'smooth', top: 0 })}>Greg Whatley</Glitch>
                            <Avatar src="img/me.png" />
                        </Toolbar>
                    </Fade>
                </AppBar>
            </React.Fragment>
            <div id="threshold" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <Container sx={{paddingBottom: 50}}>
                    {props.children}
                </Container>
            </div>
        </>
    )
}