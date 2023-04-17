import { Stack } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
	const id = useLocation();

	const handleExercises = () => {
		if (id.pathname === '/')
			window.scrollTo({ top: 1800, behavior: 'smooth' });
	};
	return (
		<Stack
			direction='row'
			sx={{
				gap: { sm: '122px', xs: '40px' },
				mt: { sm: '32px', xs: '20px' },
				justifyContent: 'none',
			}}
			px='20px'
		>
			<Link to='/'>
				<img
					src={Logo}
					alt='logo'
					style={{
						width: '48px',
						height: '48px',
						margin: '0 20px',
					}}
				/>
			</Link>
			<Stack
				direction='row'
				gap='40px'
				fontSize='24px'
				alignItems='flex-end'
			>
				<Link
					to='/'
					style={{
						textDecoration: 'none',
						color: '#3A1212',
						borderBottom: '3px solid #1065c0',
					}}
				>
					Home
				</Link>
				<Link
					onClick={handleExercises}
					style={{
						textDecoration: 'none',
						color: '#3A1212',
					}}
				>
					Exercises
				</Link>
			</Stack>
		</Stack>
	);
};

export default Navbar;
