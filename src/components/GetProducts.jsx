
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './GetProducts.css';

export default function Veggie() {
  return (
    <div style={{backgroundImage:`url(https://img.freepik.com/free-photo/wrapped-gift-boxes-ice_23-2147969491.jpg?w=996&t=st=1701007898~exp=1701008498~hmac=294001ad60d9a1884ea670fee4133b286c7d0221475dddaa06016e95f18d0f1b)`}}>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 4,
            pb: 0,
          }}
        >
          <Container maxWidth="lg">
             <div className='t'>
                 <h4  style={{color:'White'}}><b>SHOP NOW</b><hr/></h4>
             </div>
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             
            </Stack>
          </Container>
        </Box>
      </main>
<div className='wrapper'>
        <Card1
        img="https://img.freepik.com/free-photo/young-woman-is-holding-ancient-shell-while-sitting-her-workplace_613910-3124.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="jewellary"
        size=" : Medium / Large"
        price="$2"
        stock="15"/>
        <Card1
        img="https://img.freepik.com/premium-photo/premium-jewelry-background-unleash-your-inner-glamour-generative-ai_753390-967.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="jewellary"
        size=" : Medium / Large"
        price="$10"
        stock="15" />
        <Card1
        img="https://img.freepik.com/premium-photo/add-touch-sophistication-your-outfit-with-designer-jewelry-generative-ai_753390-721.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="jewellary"
        size=" : Medium / Large"
        price="$15"
        stock="10"/>
        <Card1
        img="https://img.freepik.com/free-photo/closeup-shot-bride-wearing-pendant-necklace-with-black-cord_181624-24975.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="jewellary"
        size=" : Medium / Large"
        price="$10"
        stock="12"/>
        <Card1
        img="https://img.freepik.com/free-photo/woman-showcasing-jewelry-her-hands_1400-22.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="jewellary"
        size=" : Medium / Large"
        price="$100"
        stock="150"/>
        <Card1
        img="https://img.freepik.com/premium-photo/teddy-bear-with-holiday-decoration-presents_119973-246.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="Toys"
        size=" : Small / Big"
        price="$15"
        stock="30kgs" />
        <Card1
        img="https://img.freepik.com/premium-photo/christmas-gifts-concrete-background-with-copyspace_105565-270.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="Toy"
        size=" : Small / Big"
        price="$10"
        stock="15"/>
        <Card1
        img="https://img.freepik.com/free-photo/cute-plush-toy-pillow-arrangement_23-2150312280.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="Toy"
        size=" : Small / Big"
        price="$19"
        stock="15"/>
        <Card1
        img="https://img.freepik.com/premium-photo/homemade-sewn-soft-toy-mouse-gift-box_254470-599.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="Toy"
        size=" : Small / Big"
        price="$18"
        stock="100"/>
        <Card1
        img="https://img.freepik.com/premium-photo/pet-packaging-concepts-showcasing-wide-range-styles-insane-creativity-branding_655090-430875.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="Toy"
        size=" : Small / Big"
        price="$15"
        stock="15" />
        <Card1
        img="https://img.freepik.com/free-photo/golden-cufflings-wedding-rings-watch-lie-wooden-table_8353-405.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="Watch"
        size=" : Small / Big"
        price="$50"
        stock="15" />
        <Card1
        img="https://img.freepik.com/free-psd/music-mockup_23-2147696085.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="Headphone"
        size=" : Small / Big"
        price="$20"
        stock="10"/>
        <Card1
        img="https://img.freepik.com/premium-photo/christmas-interior-with-gift-boxes_73989-5555.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="Bags"
        size=" : Small / Big"
        price="$20"
        stock="15"/>
        <Card1
        img="https://img.freepik.com/free-photo/rain-portrait-young-beatiful-woman-with-umbrella_23-2149203749.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="Umbrella"
        size=" : Small / Big"
        price="$20"
        stock="25"/>
        <Card1
        img="https://img.freepik.com/free-photo/black-brown-holster-with-tail-smartphone_140725-7199.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="Cases"
        size=" : Small / Big"
        price="$10"
        stock="30"/>
        <Card1
        img="https://img.freepik.com/premium-photo/woman-pink-skirt-with-floral-print-bottom_81048-11779.jpg?size=626&ext=jpg&ga=GA1.1.1864136527.1701028390&semt=sph"
        title="Dress"
        size=" : S , L , M ,XL"
        price="$200"
        stock="20"/>
        <Card1
        img="https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17507.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais"
        title="Dress"
        size=" : S , L , M ,XL"
        price="$250"
        stock="300"/>
        <Card1
        img="https://img.freepik.com/free-photo/white-tshirt-mockup-wooden-texture-background_1409-4095.jpg?size=626&ext=jpg&ga=GA1.1.1864136527.1701028390&semt=sph"
        title="Dress"
        size=": S , L , M ,XL"
        price="$210"
        stock="35"/>
        <Card1
        img="https://img.freepik.com/free-photo/denims_1303-4490.jpg?size=626&ext=jpg&ga=GA1.1.1864136527.1701028390&semt=ais"
        title="Dress"
        size=": S , L , M ,XL"
        price="$230"
        stock="20"/>
        <Card1
        img="https://img.freepik.com/premium-photo/girl-with-makeup-hairstyle-princess-dress-middle-park-green-trees_136753-2368.jpg?size=626&ext=jpg&ga=GA1.1.1864136527.1701028390&semt=ais"
        title="Dress"
        size=": S , L , M ,XL"
        price="$2050"
        stock="300"/>
        </div>
    </div>
  );
}

function Card1(props)
{
    return(
    <div className='card'>
    <Card sx={{maxWidth: 345,padding:1 }}>
  <CardMedia className="image"image={props.img}
    sx={{height: 250}}
  />
  <CardContent>
    <p className='title'>{props.title}</p>
  
    <p className='stock'>Stocks Available:{props.stock}</p>
    <p className='size'>Size{props.size}</p>
    
  </CardContent>
  <CardActions>
    <Button variant="outlined" className='button'>MRP{props.price}</Button>
    <Button variant="outlined" className='cart'>Add to cart</Button>
    </CardActions>
  </Card>
  </div>
    );
}