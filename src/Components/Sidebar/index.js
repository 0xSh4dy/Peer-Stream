import React from 'react';
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

export default function Sidebar(){
    const [enableSidebar,setEnableSidebar] = React.useState(false);
    return(
        <div>
            <Button onClick={()=>{setEnableSidebar(true)}}>Toggle</Button>
            <Drawer anchor='left' open={enableSidebar} onClose={()=>{setEnableSidebar(false)}} PaperProps={{
                sx: {
                    backgroundColor: "#202833",
                    color: "#1976d2",
                }}} >
                <Box sx={{width:250}} >
                    <List >
                        <ListItem disablePadding  >
                            <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                            <ListItemButton>
                            <ListItemIcon>
                                <LocalFireDepartmentSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Trending" />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding >
                            <ListItemButton>
                            <ListItemIcon>
                                <VideoLibraryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Library" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                            <ListItemButton>
                            <ListItemIcon>
                                <HistoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="History" />
                            </ListItemButton>
                        </ListItem>
                        <Divider/>
                        <ListItem disablePadding >
                            <ListItemButton>
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