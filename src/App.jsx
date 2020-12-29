import React from "react";
import "./styles.css";
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import NavBar from './components/NavBar';


export default function App() {
  return (
		<>
			<div className="App">
				
					<Header />
					<NavBar />
					<AppRoutes />
			</div>
		</>
  );
}
