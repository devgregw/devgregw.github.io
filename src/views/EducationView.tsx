import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineContent } from "@mui/lab";
import { Avatar, Typography } from "@mui/material";

export default function EducationView() {
    return <>
        <Typography variant="h2">Education</Typography>
        <Timeline sx={{ margin: 0 }}>
            <TimelineItem>
                <TimelineOppositeContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', paddingTop: '25px' }}>
                    <Typography>University of Texas at Arlington</Typography>
                    <Typography color="textSecondary">College of Engineering</Typography>
                    <Typography color="textSecondary">Arlington, TX</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <Avatar src="/img/uta.jpeg" />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', paddingTop: '25px' }}>
                    <Typography>Bachelor of Science in Computer Science</Typography>
                    <Typography color="textSecondary">Aug 2018 - Dec 2021</Typography>
                    <Typography variant="subtitle2" color="primary">Magna Cum Laude</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </>
}