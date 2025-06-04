import { ApiRounded, ComputerTwoTone, DataObjectRounded, WidgetsRounded } from "@mui/icons-material";
import { Box, Typography, AppBar, Tabs, Tab, useTheme, Grid, Paper } from "@mui/material";
import { useState, SyntheticEvent, ReactElement, type JSXElementConstructor } from "react";
import useSize from "../util/useSize";

type SkillCollection = {
    name: string,
    icon: string | ReactElement<any, string | JSXElementConstructor<any>>,
    skills: string[]
}

const skills: SkillCollection[] = [
    {
        name: "Software",
        icon: <WidgetsRounded sx={{width: 32, height: 32}}/>,
        skills: [
            "Visual Studio",
            "Visual Studio Code",
            "Android Studio",
            "Xcode",
            "App Store Connect",
            "Google Play",
            "Microsoft Office",
            "GitHub",
            "BitBucket",
            "CocoaPods",
            "VirtualBox",
            "NetBeans",
            "Adobe LiveCycle Designer"
        ]
    },
    {
        name: "Platforms",
        icon: <ComputerTwoTone sx={{width: 32, height: 32}}/>,
        skills: [
            "Web", "Windows", "Linux (Debian & Ubuntu)", "Android", "iOS"
        ]
    },
    {
        name: "Frameworks",
        icon: <ApiRounded sx={{width: 32, height: 32}}/>,
        skills: [
            "React", "Firebase", ".NET", "Angular", "Bootstrap", "Xamarin", "WPF"
        ]
    },
    {
        name: "Languages",
        icon: <DataObjectRounded sx={{width: 32, height: 32}}/>,
        skills: [
            "Swift",
            "Kotlin",
            "JavaScript, HTML, & CSS",
            "TypeScript",
            "C, C++, C#, & Objective-C",
            "Java",
            "Visual Basic",
            "PHP"
        ]
    }
]

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`skills-tabpanel-${index}`}
            aria-labelledby={`skills-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `skills-tab-${index}`,
        'aria-controls': `skills-tabpanel-${index}`,
    };
}

export default function SkillsTabView() {
    const theme = useTheme()
    const [value, setValue] = useState(0);
    const firstTabSize = useSize('#skills-tabpanel-0')

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return <>
        <Typography variant="h2">Skills</Typography>
        <Box sx={{ borderRadius: '1rem', bgcolor: 'background.paper', minHeight: firstTabSize ? `${firstTabSize.height + 150}px` : 'unset' }}>
            <AppBar position="static" sx={{borderRadius: '1rem'}}>
                <Tabs
                    sx={{ borderRadius: '1rem 1rem 0 0', background: 'linear-gradient(to right, #f97794, #6200ff, #3498DB)' }}
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    variant="fullWidth"
                    aria-label="Skills"
                >
                    {skills.map((c, i) => <Tab key={c.name} icon={c.icon} label={c.name} {...a11yProps(i)} sx={t => ({ borderRadius: '1rem 1rem 0 0', [t.breakpoints.down('sm')]: {fontSize: 'small'}})}/>)}
                </Tabs>
            </AppBar>
            {skills.map((c, i) => <>
                <TabPanel key={c.name} value={value} index={i} dir={theme.direction}>
                    <Grid container spacing={4}>
                        {c.skills.map(s => <Grid key={s} size={{xs: 6, md: 4, lg: 3}}><Paper elevation={8} sx={{ paddingY: 1, paddingX: 2, borderRadius: '1000px' }}><Typography variant="body1">{s}</Typography></Paper></Grid>)}
                    </Grid>
                </TabPanel>
            </>)}
        </Box>
    </>
}
