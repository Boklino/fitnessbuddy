import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../Components/Detail';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);
	const [exercisesTarget, setExercisesTarget] = useState([]);
	const [exercisesEquipment, setExercisesEquipment] = useState([]);
	const { id } = useParams();
	console.log('lol', id);

	useEffect(() => {
		const fetchExercisesData = async () => {
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
			const youtubeSearchUrl =
				'https://youtube-search-and-download.p.rapidapi.com';

			const exerciseDetailData = await fetchData(
				`${exerciseDbUrl}/exercises/exercise/${id}`,
				exerciseOptions
			);
			setExerciseDetail(exerciseDetailData);

			const exerciseVideosData = await fetchData(
				`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
				youtubeOptions
			);
			setExerciseVideos(exerciseVideosData.contents);

			const targetMuscleData = await fetchData(
				`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
				exerciseOptions
			);
			setExercisesTarget(targetMuscleData);

			const equipmentData = await fetchData(
				`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
				exerciseOptions
			);
			setExercisesEquipment(equipmentData);
		};
		fetchExercisesData();
	}, [id]);

	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos
				exerciseVideos={exerciseVideos}
				name={exerciseDetail.name}
			/>
			<SimilarExercises
				exercisesTarget={exercisesTarget}
				exercisesEquipment={exercisesEquipment}
			/>
		</Box>
	);
};

export default ExerciseDetail;
