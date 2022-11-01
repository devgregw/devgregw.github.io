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
        logoUrl: "https://pbs.twimg.com/profile_images/1278360830367674368/SfqcgSVD_400x400.jpg",
        url: "https://fidelity.com",
        titles: [
            { title: "Digital Technologist", start: "Oct 2022" },
            { title: "Associate Software Engineer", start: "Jun 2022", end: "Oct 2022" }
        ],
        infoUrl: 'md/fid.md'
    },
    {
        companyName: "University of Texas at Arlington",
        location: "Arlington, TX",
        logoUrl: "https://cdn.web.uta.edu/-/media/project/website/general/uta-link-preview.ashx?revision=aa44075d-8f8c-4c1e-a916-b3d1ebc1449e",
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
        logoUrl: "data:image/jpeg;base64,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",
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