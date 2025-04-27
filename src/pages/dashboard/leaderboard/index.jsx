import React from 'react'
import { DashboardHeader, LeaderboardCards, LeaderboardTable } from '../../../component'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './leaderboard.scss'

const leadercard = [
    {
        name:'Siew C.',
        country:'MY',
        flag:'flag1.png',
        rank:1,
        profit: '78,624',
        equity:'178,624',
        gain: 79,
        acc_size:'100,000',
    },
    {
        name:'Jason F.',
        country:'FR',
        flag:'flag2.png',
        rank:2,
        profit: '75,624',
        equity:'178,624',
        gain: 19,
        acc_size:'400,000',
    },
    {
        name:'Lok T.',
        country:'HK',
        flag:'flag3.png',
        rank:3,
        profit: '78,624',
        equity:'178,624',
        gain: 18,
        acc_size:'400,000',
    }
]

const Leaderboard = () => {
    const [value, setValue] = React.useState('all');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <DashboardHeader title="Leaderboard" />
            <section className='leaderboard-wrapped'>

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="All" value="all" />
                                <Tab label="10k" value="10k" />
                                <Tab label="25k" value="25k" />
                                <Tab label="50k" value="50k" />
                                <Tab label="100k" value="100k" />
                                <Tab label="200k" value="200k" />
                            </TabList>
                        </Box>
                        <TabPanel value="all">
                            <LeaderboardCards leadercard={leadercard}/>
                        </TabPanel>
                        <TabPanel value="10k">
                            <LeaderboardCards leadercard={leadercard}/>
                        </TabPanel>
                        <TabPanel value="25k">
                            <LeaderboardCards leadercard={leadercard}/>
                        </TabPanel>
                        <TabPanel value="50k">
                            <LeaderboardCards leadercard={leadercard}/>
                        </TabPanel>
                        <TabPanel value="200k">
                            <LeaderboardCards leadercard={leadercard}/>
                        </TabPanel>
                        <TabPanel value="200k">
                            <LeaderboardCards leadercard={leadercard}/>
                        </TabPanel>
                    </TabContext>
                </Box>
                <LeaderboardTable/>
            </section>
        </>
    )
}

export default Leaderboard