import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import BodyPart from './BodyPart';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext);

	return (
		<Typography onClick={() => scrollPrev()} className='right-arrow'>
			<ArrowBackIcon fontSize='large' />
		</Typography>
	);
};

const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);

	return (
		<Typography onClick={() => scrollNext()} className='left-arrow'>
			<ArrowForwardIcon fontSize='large' />
		</Typography>
	);
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
			{data.map((item) => (
				<Box
					key={item.id || item}
					itemId={item.id || item}
					title={item.id || item}
					m='0 25px'
				>
					{isBodyPart ? (
						<BodyPart
							item={item}
							bodyPart={bodyPart}
							setBodyPart={setBodyPart}
						/>
					) : (
						<ExerciseCard key={item} exercise={item} />
					)}
				</Box>
			))}
		</ScrollMenu>
	);
};

export default HorizontalScrollbar;
