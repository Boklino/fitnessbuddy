import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './loader';
const SimilarExercises = ({ exercisesTarget, exercisesEquipment }) => {
	console.log('z', exercisesTarget);
	return (
		<Box
			sx={{
				mt: { lg: '100px', xs: '0' },
			}}
		>
			<Typography variant='h4' mb='20px' ml='50px'>
				Exercises that target the same muscle group
			</Typography>
			<Stack
				direction='row'
				sx={{
					position: 'relative',
					width: '100%',
					p: '20px',
				}}
			>
				{exercisesTarget.length ? (
					<HorizontalScrollbar data={exercisesTarget} />
				) : (
					<Loader />
				)}
			</Stack>
			<Typography variant='h4' mb='20px' ml='50px' mt='80px'>
				Exercises that use the same equipment
			</Typography>
			<Stack
				direction='row'
				sx={{
					position: 'relative',
					width: '100%',
					p: '20px',
				}}
			>
				{exercisesEquipment.length ? (
					<HorizontalScrollbar data={exercisesEquipment} />
				) : (
					<Loader />
				)}
			</Stack>
		</Box>
	);
};

export default SimilarExercises;
