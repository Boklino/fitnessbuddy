import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
	const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

	const extraDetail = [
		{
			image: BodyPartImage,
			name: bodyPart,
		},

		{
			image: TargetImage,
			name: target,
		},

		{
			image: EquipmentImage,
			name: equipment,
		},
	];

	return (
		<Stack
			gap='60px'
			sx={{
				flexDirection: { lg: 'row' },
				p: '20px',
				alignItems: 'center',
			}}
		>
			<img
				src={gifUrl}
				alt={name}
				loading='lazy'
				className='detail-image'
			/>
			<Stack
				sx={{
					gap: { lg: '35px', xs: '20px' },
				}}
			>
				<Typography variant='h3' textTransform='capitalize'>
					{name}
				</Typography>
				<Typography variant='h6'>
					{name} is an important exercise that targets your {target},
					you can do it using {equipment} and it will help you with
					improving your {bodyPart} muscles
				</Typography>
				{extraDetail.map((item) => (
					<Stack
						key={item.name}
						direction='row'
						gap='24px'
						alignItems='center'
						textTransform='capitalize'
					>
						<Button
							sx={{
								background: '#bbdffb',
								borderRaduis: '50%',
								width: '100px',
								height: '100px',
							}}
						>
							<img
								src={item.image}
								alt={bodyPart}
								style={{ width: '50px', height: '50px' }}
							/>
						</Button>
						<Typography variant='h5' textTransform='capitalize'>
							{item.name}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Stack>
	);
};

export default Detail;
