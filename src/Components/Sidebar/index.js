import React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LocalFireDepartmentSharpIcon from '@mui/icons-material/LocalFireDepartmentSharp';

export default function SideBar({enableSidebar,setEnableSidebar}){
    let location = useLocation();
    console.log(enableSidebar)
    return(
        <div>
            <Drawer anchor='left' open={enableSidebar} onClose={()=>{setEnableSidebar(false)}} >
                <Box sx={{width:250}} >
                    <List >
                        <ListItem disablePadding  >
                            <ListItemButton onClick={()=>{window.location.href='/home'}} selected={location.pathname==='/home'}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                            <ListItemButton onClick={()=>{window.location.href='/trending'}} selected={location.pathname==='/trending'}>
                            <ListItemIcon>
                                <LocalFireDepartmentSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Trending" />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding >
                            <ListItemButton onClick={()=>{window.location.href='/library'}} selected={location.pathname==='/library'}>
                            <ListItemIcon>
                                <VideoLibraryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Library" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                            <ListItemButton onClick={()=>{window.location.href='/history'}} selected={location.pathname==='/history'}>
                            <ListItemIcon>
                                <HistoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="History" />
                            </ListItemButton>
                        </ListItem>
                        <Divider/>
                        <ListItem disablePadding >
                            <ListItemButton onClick={()=>{window.location.href='/settings'}} selected={location.pathname==='/settings'}>
                            <ListItemIcon>
                                <SettingsIcon/>
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