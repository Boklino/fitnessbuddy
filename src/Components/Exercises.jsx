import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Pagination from '@mui/material/Pagination';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const exercisesPerPage = 9;
	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

	useEffect(() => {
		const fetchExercisesData = async () => {
			if (bodyPart === 'all') {
				const exerciseData = await fetchData(
					`https://exercisedb.p.rapidapi.com/exercises`,
					exerciseOptions
				);
				setExercises(exerciseData);
			} else {
				const exerciseData = await fetchData(
					`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
					exerciseOptions
				);
				setExercises(exerciseData);
			}
		};

		fetchExercisesData();
	}, [bodyPart]);

	const showExercises = exercises.slice(
		indexOfFirstExercise,
		indexOfLastExercise
	);

	const paginate = (e, value) => {
		setCurrentPage(value);

		window.scrollTo({
			top: 1800,
			behavior: 'smooth',
		});
	};

	return (
		<Box
			id='exercises'
			sx={{
				mt: {
					lg: '60px',
				},
			}}
			mt='50px'
			p='20px'
		>
			<Typography variant='h4' mb='50px' mt='5px' ml='50px'>
				Showing Results
			</Typography>

			<Stack
				direction='row'
				sx={{
					gap: { lg: '110px', xs: '50px' },
				}}
				flexWrap='wrap'
				justifyContent='center'
			>
				{showExercises.map((exercise, index) => (
					<ExerciseCard key={index} exercise={exercise} />
				))}
			</Stack>
			<Stack mt='100px' alignItems='center'>
				{exercises.length > 9 && (
					<Pagination
						color='standard'
						count={Math.ceil(exercises.length / exercisesPerPage)}
						page={currentPage}
						onChange={paginate}
						size='large'
						variant='outlined'
						showFirstButton
						showLastButton
						hidePrevButton
						hideNextButton
					/>
				)}
			</Stack>
		</Box>
	);
};

export default Exercises;
