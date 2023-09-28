import { Http, ReadMore } from "@mui/icons-material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Avatar, Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grow, IconButton, Skeleton, Stack, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

type Experience = {
    companyName: string,
    location: string,
    logoUrl: string,
    url: string,
    titles: ({ title: string } & ({ custom: string } | { start: string, end?: string }))[],
    infoUrl: string
}

function toggle(setter: React.Dispatch<React.SetStateAction<boolean>>): () => void {
    return () => setter(value => !value)
}

function ExperienceItem(props: { item: Experience, last?: boolean }) {
    const [readMore, setReadMore] = useState(false)
    const [info, setInfo] = useState('')
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    useEffect(() => { !info && readMore && fetch(props.item.infoUrl!).then(r => r.text()).then(t => setInfo(t)) }, [readMore, info, props.item.infoUrl])

    return (
        <TimelineItem>
            <TimelineOppositeContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', paddingTop: '25px' }}>
                <Typography>{props.item.companyName}</Typography>
                <Typography color="textSecondary">{props.item.location}</Typography>
                <Box sx={{ alignSelf: 'flex-end' }}>
                    <Tooltip title="Website"><IconButton size="large" target="blank" rel="noopener noreferrer" href={props.item.url}><Http /></IconButton></Tooltip>
                    <Tooltip title="Read More"><IconButton size="large" onClick={toggle(setReadMore)}><ReadMore /></IconButton></Tooltip>
                </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot>
                    <Avatar src={props.item.logoUrl} />
                </TimelineDot>
                {!props.last ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', paddingTop: '25px' }}>
                <Stack spacing={1}>
                    {props.item.titles.map(item => <div key={item.title}>
                        <Typography>{item.title}</Typography>
                        {'custom' in item ? <Typography color="textSecondary">{item.custom}</Typography>
                            : <Typography color="textSecondary">{item.start} - {item.end || <Chip size="small" label="Present" />}</Typography>}
                    </div>)}
                </Stack>
            </TimelineContent>
            <Dialog open={readMore} scroll="paper" onClose={toggle(setReadMore)} TransitionComponent={Grow} maxWidth="md" fullWidth fullScreen={fullScreen}>
                <DialogTitle>
                    <Stack direction="row">
                        <Avatar src={props.item.logoUrl} sx={{ marginRight: 1 }} />
                        Experience Details
                    </Stack>
                </DialogTitle>
                <DialogContent dividers>
                    {!info ? <>
                        <Skeleton animation="wave" variant="rounded" width={210} height={40} />
                        <Skeleton animation="wave" variant="text" sx={{ fontSize: '2rem' }} />
                        <Skeleton animation="wave" variant="text" sx={{ fontSize: '2rem' }} />
                    </>
                        : <ReactMarkdown components={{hr: Divider}} children={info} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggle(setReadMore)}>Dismiss</Button>
                </DialogActions>
            </Dialog>
        </TimelineItem>
    )
}

const experienceItems: Experience[] = [
    {
        companyName: "Fidelity Investments",
        location: "Westlake, TX",
        logoUrl: "/img/fidelity.jpeg",
        url: "https://fidelity.com",
        titles: [
            { title: "Mobile Developer", start: "Jul 2022" },
            { title: "Associate Software Engineer", start: "Jun 2022", end: "Jul 2022" }
        ],
        infoUrl: 'md/fid.md'
    },
    {
        companyName: "University of Texas at Arlington",
        location: "Arlington, TX",
        logoUrl: "/img/uta.jpeg",
        url: "https://uta.edu",
        titles: [
            { title: "IT Assistant", start: "Jan 2022", end: "Apr 2022" },
            { title: "Student Associate", start: "Aug 2018", end: "Dec 2021" }
        ],
        infoUrl: 'md/uta.md'
    },
    {
        companyName: "SCIS Air Security",
        location: "Arlington, TX",
        logoUrl: "/img/scis.jpeg",
        url: "http://scisairsecurity.com",
        titles: [{ title: "Temporary Assistant", custom: "Jan & Mar 2021" }],
        infoUrl: 'md/scis.md'
    }
]

export default function ExperienceTimelineView() {
    return <>
        <Typography variant="h2">Experience</Typography>
        <Timeline sx={{ margin: 0 }}>
            {experienceItems.map((i, idx) => <ExperienceItem key={i.companyName} item={i} last={idx === experienceItems.length - 1} />)}
        </Timeline>
    </>
}