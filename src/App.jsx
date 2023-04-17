import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
	return (
		<Box width='400px' sx={{ width: { xl: '2500px' } }} m='auto'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/exercise/:id' element={<ExerciseDetail />} />
			</Routes>
			<Footer />
		</Box>
	);
};

export default App;
