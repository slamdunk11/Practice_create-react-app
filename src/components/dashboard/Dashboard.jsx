import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Card, Button, CardActions, Container, CardContent, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import {WbSunnyIcon, CloudIcon, AcUnitIcon, NightsStayIcon, DarkModeIcon, UmbrellaIcon} from '@mui/icons-material';


const theme = createTheme({
    palette: {
        primary: {
            main: '#E8F4FF',
        },
        secondary: {
            main: '#74B7F9',
        },
    },
});
const Dashboard = (props) => {
    const api = {
        key: "0e5678a57f40c7492409ee9653caee4b",
        cityName: "Busan",
        base: `https://api.openweathermap.org/data/2.5/weather?`,
    
    };
    // const cityName = "Busan";
    // const apiKey = "0e5678a57f40c7492409ee9653caee4b";
    const url = `${api.base}q=${api.cityName}&appid=${api.key}`
    const [weather, setWeather] = useState("");    
    useEffect(() => {
        axios.get(url)
        .then(response => {
            console.log(response.data);
            setWeather({
                id: response.data.weather[0].id,
                temp: response.data.main.temp,
                main: response.data.weather[0].main,
                name: response.data.name
                })
            })
            .catch(error => console.log(error));
    }, [])
    

    return(
      <ThemeProvider theme={theme}>
        <Container
        sx={{display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'primary.main'}}
        >
        <Box sx={{
            }}>
            <Card sx={{ display: 'flex', width: 400, height: 400, justifyContent: 'center', 
        alignItems: 'center', }}>
                <CardContent>
                    <Typography>{(weather.temp - 273.15).toFixed(1)}℃</Typography>
                </CardContent>
                <CardContent>
                    <Typography>{weather.name}</Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </Box>
        </Container>
      </ThemeProvider>      
    );
}
export default Dashboard;