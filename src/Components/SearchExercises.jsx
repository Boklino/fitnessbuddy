import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
	const [search, setSearch] = useState('');
	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartsData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
				exerciseOptions
			);
			setBodyParts(['all', ...bodyPartsData]);
		};
		fetchExercisesData();
	}, []);

	const handleSearch = async () => {
		if (search) {
			const exerciseData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises',
				exerciseOptions
			);

			const searchedExercises = exerciseData.filter(
				(exercise) =>
					exercise.name.toLowerCase().includes(search) ||
					exercise.bodyPart.toLowerCase().includes(search) ||
					exercise.target.toLowerCase().includes(search) ||
					exercise.equipment.toLowerCase().includes(search)
			);

			window.scrollTo({
				top: 1750,
				behavior: 'smooth',
			});
			setSearch('');
			setExercises(searchedExercises);
		}
	};

	return (
		<Stack alignItems='center' mt='37px' justifyContent='center' p='18px'>
			<Typography
				fontWeight={700}
				sx={{
					fontSize: { lg: '44px', xs: '30px' },
				}}
				mb='50px'
				textAlign='center'
			>
				Great Exercises You <br /> Should Know
			</Typography>
			<Box position='relative' mb='70px'>
				<TextField
					sx={{
						input: {
							fontWeight: '700',
							border: 'none',
						},
						width: { lg: '840px', xs: '250px' },
						backgroundColor: '#fff',
					}}
					height='73px'
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
					placeholder='Search Exercises'
					type='text'
				/>
				<Button
					className='search-btn'
					sx={{
						bgcolor: '#1065c0',
						color: '#fff',
						textTransform: 'none',
						width: { lg: '175px', xs: '80px' },
						fontSize: { lg: '20px', xs: '14px' },
						height: '56px',
					}}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>
			<Box
				sx={{
					position: 'relative',
					width: '100%',
					p: '20px',
				}}
			>
				<HorizontalScrollbar
					data={bodyParts}
					bodyPart={bodyPart}
					setBodyPart={setBodyPart}
					isBodyPart
				/>
			</Box>
		</Stack>
	);
};

export default SearchExercises;
