import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';

import HeroBannerImage from '../assets/images/background.png';
const HeroBanner = () => {
	return (
		<Box
			sx={{
				mt: { lg: '212px', xs: '70px' },
				ml: { sm: '50px' },
			}}
			position='relative'
			p='20px'
		>
			<Typography color='#1065c0' fontWeight='600' fontSize='26px'>
				Fitness Club
			</Typography>
			<Typography
				fontWeight={700}
				sx={{
					fontSize: { lg: '44px', xs: '40px' },
				}}
				mb='23px'
				mt='30px'
			>
				Decide, Commit <br /> and Succeed.
			</Typography>
			<Typography fontSize='22px' mb={4} lineheight='35px'>
				Check out the most effective exercises
			</Typography>

			<Button
				sx={{
					backgroundColor: '#1065c0',
					padding: '10px',
				}}
				variant='contained'
				color='error'
				href='#exercises'
			>
				Explore Exercises
			</Button>
			<Typography
				fontWeight={600}
				color='#1065c0'
				sx={{
					opacity: 0.1,
					display: { lg: 'block', xs: 'none' },
					mt: '100px',
				}}
				fontSize='200px'
			>
				Exercise
			</Typography>
			<img
				src={HeroBannerImage}
				alt='banner'
				className='hero-banner-img'
			/>
		</Box>
	);
};

export default HeroBanner;
