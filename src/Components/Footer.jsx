import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
	<Box mt='80px' bgcolor='#FFF3F4'>
		<Stack
			gap='40px'
			sx={{ alignItems: 'center' }}
			flexWrap='wrap'
			px='38px'
			pt='20px'
		>
			<img
				src={Logo}
				alt='logo'
				style={{ width: '110px', height: '55px' }}
			/>
		</Stack>
		<Typography
			variant='h6'
			sx={{ fontSize: { lg: '25px', xs: '20px' } }}
			mt='38px'
			textAlign='center'
			pb='35px'
		>
			Your Health Matters
		</Typography>
	</Box>
);

export default Footer;
