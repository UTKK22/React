
import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import GenrePage from "./pages/GenrePage";
import CarouselPage from "./pages/CarouselPage";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import MoviePage from "./pages/MoviePage";
import { AppContext } from "./context/AppContext";

const ProtectedRoute = ({ children }) => {
	const { user } = useContext(AppContext)
	return user ? children : <Navigate to="/register" />
}
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RegisterPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/home" element={<RegisterPage />} />
				<Route path="/genres" element={
					<ProtectedRoute>
						<GenrePage />
					</ProtectedRoute>} />
				<Route path="/carousel" element={
					<ProtectedRoute>
						<CarouselPage />
					</ProtectedRoute>
				} />
				<Route path="/dashboard" element={
					<ProtectedRoute>
						<DashboardPage />
					</ProtectedRoute>
				} />
				<Route path="/movies" element={
					<ProtectedRoute>
						<MoviePage />
					</ProtectedRoute>

				} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>

	);
}

export default App;
