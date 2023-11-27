


import React from 'react';
import { Box, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center' , 
    bgcolor:'#1A1A19' ,
     color:'white' , p:3}} >
        <Box sx={{my: 3, "& svg":{
            fontSize:"60px",
            cursor:'pointer',
            mr: 2,
        },
        "& svg:hover":{
            color:'goldenrod',
            transform:'translateX(5px)',
            transition:'all 400px',
        }
    }}>
            <InstagramIcon />
            <TwitterIcon />
            <GitHubIcon />
            <FacebookIcon />
            <YouTubeIcon />
        </Box>
        <Typography variant='h5' sx={{"@media (mix-width:600px)":{
            fontSize: "1rem",
        },
    }}>
            All Right Reserved &copy;  Techifo YT
        </Typography>
    </Box>
    </>

  );
};

export default Footer;