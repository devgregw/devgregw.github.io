import { Box, Typography, AppBar, Tabs, Tab, useTheme, Grid } from "@mui/material";
import { useState, SyntheticEvent } from "react";
import SwipeableViews from "react-swipeable-views";
import { products } from "../util/Products";
import useSize from "../util/useSize";
import PortfolioCard from "./PortfolioCard";

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
            id={`portfolio-tabpanel-${index}`}
            aria-labelledby={`portfolio-tab-${index}`}
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
        id: `portfolio-tab-${index}`,
        'aria-controls': `portfolio-tabpanel-${index}`,
    };
}

export default function PortfolioTabView() {
    const theme = useTheme()
    const [value, setValue] = useState(0);
    const firstTabSize = useSize('#portfolio-tabpanel-0')

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };
    return <>
        <Typography variant="h2">Portfolio</Typography>
        <Box sx={{ borderRadius: '1rem', bgcolor: 'background.paper', minHeight: firstTabSize ? `${firstTabSize.height + 150}px` : 'unset' }}>
            <AppBar position="static" sx={{borderRadius: '1rem'}}>
                <Tabs
                    sx={{ borderRadius: '1rem 1rem 0 0', background: 'linear-gradient(to right, purple, rgb(200,54,0))' }}
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    variant="fullWidth"
                    aria-label="Skills"
                >
                    {products.map((c, i) => <Tab key={c.name} icon={c.icon} label={c.name} {...a11yProps(i)} sx={t => ({ borderRadius: '1rem 1rem 0 0', [t.breakpoints.down('sm')]: { fontSize: 'small' } })} />)}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {products.map((c, i) => <>
                    <TabPanel key={c.name} value={value} index={i} dir={theme.direction}>
                        <Grid sx={{textAlign: 'left'}} container spacing={4}>
                            {c.products.map(p => <Grid key={p.name} xs={12} sm={6} md={4} item><PortfolioCard product={p}/></Grid>)}
                        </Grid>
                    </TabPanel>
                </>)}
            </SwipeableViews>
        </Box>
    </>
}
