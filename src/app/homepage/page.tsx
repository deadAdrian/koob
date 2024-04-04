"use client"; 
import { BottomNavigation, BottomNavigationAction, Fab, Paper, useTheme} from "@mui/material";
import IsAuth from "@/components/IsAuth/IsAuth";
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import { useEffect, useState } from "react";
import StyledHomepage from './styles'
import { css } from "@emotion/css";
import Home from '@/components/Home/Home'

const Homepage = () => {
    const theme = useTheme();
    const [mounted, setMounted] = useState(false);
    const [bottomNavigationValue, setBottomNavigationValue] = useState('home');

    useEffect(() => {
      setMounted(true);
    }, []);

    return (
      mounted && <div className={css`
          ${StyledHomepage()}
        `}>
            {
              bottomNavigationValue === 'home' 
              && <Home/>
            }
            <Fab className="app-fab" color="primary" aria-label="add">
              <AddIcon />
            </Fab>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
              <BottomNavigation 
                  sx={{
                      bgcolor: theme.palette.background.default
                  }}
                  value={bottomNavigationValue} 
                  onChange={(e, value) => setBottomNavigationValue(value)}
              >
                  <BottomNavigationAction label="Home" value="home" icon={<HomeIcon/>}/>
                  <BottomNavigationAction label="Books" value="books" icon={<BookIcon/>}/>
                  <BottomNavigationAction label="Stats" value="stats" icon={<BarChartIcon/>}/>
                  <BottomNavigationAction label="Profile" value="profile" icon={<PersonIcon/>}/>
              </BottomNavigation>
            </Paper>
        </div>
    );
};

export default IsAuth(Homepage);