"use client"; 
import { BottomNavigation, BottomNavigationAction, Fab, Paper, useTheme} from "@mui/material";
import IsAuth from "@/components/IsAuth/IsAuth";
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import SwipeableViews from 'react-swipeable-views';
import { useEffect, useState } from "react";
import StyledHomepage from './styles'
import { css } from "@emotion/css";
import Home from '@/components/Home/Home'
import NewBookForm from "@/components/NewBookForm/NewBookForm";

const bottomNavigationValues = ['home', 'books', 'stats', 'profile'];

const Homepage = () => {
    const theme = useTheme();
    const [mounted, setMounted] = useState(false);
    const [bottomNavigationValue, setBottomNavigationValue] = useState('home');
    const [currentTab, setCurrentTab] = useState(0);

    useEffect(() => {
      setMounted(true);
    }, []);

    return (
      mounted && <div className={css`
          ${StyledHomepage()}
        `}>
            <SwipeableViews 
              className="swipeable-container" 
              slideClassName="swipeable-div" 
              containerStyle={{height: "100%", width: "100%"}} 
              index={currentTab}
              onChangeIndex={(index) => {
                setCurrentTab(index);
                setBottomNavigationValue(bottomNavigationValues[index])
              }}
            >
              <Home/>
              <div >
                books
              </div>
              <div >
                stats
              </div>
              <div >
                profile
              </div>
              <NewBookForm/>
            </SwipeableViews>
            <Fab className="app-fab" color="primary" aria-label="add" onClick={() => {
              setCurrentTab(4);
              setBottomNavigationValue('');
            }}>
              <AddIcon />
            </Fab>
            <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0, width: "100%" }} elevation={3}>
              <BottomNavigation 
                  sx={{
                      bgcolor: theme.palette.background.default
                  }}
                  value={bottomNavigationValue} 
                  onChange={(e, value) => setBottomNavigationValue(value)}
              >
                  <BottomNavigationAction label="Home" value="home" icon={<HomeIcon/>} onClick={() => {
                    setCurrentTab(0)
                  }}/>
                  <BottomNavigationAction label="Books" value="books" icon={<BookIcon/>} onClick={() => {
                    setCurrentTab(1)
                  }}/>
                  <BottomNavigationAction label="Stats" value="stats" icon={<BarChartIcon/>} onClick={() => {
                    setCurrentTab(2)
                  }}/>
                  <BottomNavigationAction label="Profile" value="profile" icon={<PersonIcon/>} onClick={() => {
                    setCurrentTab(3)
                  }}/>
              </BottomNavigation>
            </Paper>
        </div>
    );
};

export default IsAuth(Homepage);