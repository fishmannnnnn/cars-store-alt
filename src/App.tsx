import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsPage from './components/screens/ProductsListScreen/ProductsPage';
import MainPage from './components/screens/MainScreen/MainPage';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/products' element={<ProductsPage />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
