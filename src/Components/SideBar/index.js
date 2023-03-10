import React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Dashboard as DashboardIcon } from '@mui/icons-material';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import LocalFireDepartmentSharpIcon from '@mui/icons-material/LocalFireDepartmentSharp';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function SideBar({ enableSidebar, setEnableSidebar }) {
    let location = useLocation();
    return (
        <div>
            <Drawer anchor='left' open={enableSidebar} onClose={() => { setEnableSidebar(false) }} >
                <Box className="" sx={{ width: 250 }} >
                    <List >
                        <ListItem disablePadding  >
                            <ListItemButton onClick={() => { window.location.href = '/home' }} selected={location.pathname === '/home'}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                            <ListItemButton onClick={() => { window.location.href = '/dashboard' }} selected={location.pathname === '/dashboard'}>
                                <ListItemIcon>
                                    <DashboardIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                            <ListItemButton onClick={() => { window.location.href = '/trending' }} selected={location.pathname === '/trending'}>
                                <ListItemIcon>
                                    <LocalFireDepartmentSharpIcon />
                                </ListItemIcon>
                                <ListItemText primary="Trending" />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding >
                            <ListItemButton onClick={() => { window.location.href = '/lpt' }} selected={location.pathname === '/library'}>
                                <ListItemIcon>
                                    <LiveTvIcon />
                                </ListItemIcon>
                                <ListItemText primary="Start Stream" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                            <ListItemButton onClick={() => { window.location.href = '/history' }} selected={location.pathname === '/history'}>
                                <ListItemIcon>
                                    <HistoryIcon />
                                </ListItemIcon>
                                <ListItemText primary="History" />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding >
                            <ListItemButton onClick={() => { window.location.href = '/settings' }} selected={location.pathname === '/settings'}>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}