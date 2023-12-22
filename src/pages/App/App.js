import { useState } from "react";
import "./App.css";
import LoginPage from "../LoginPage/LoginPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import { Routes, Route } from "react-router-dom";
import MovieListPage from "../MovieListPage/MovieListPage";
import ActorListPage from "../ActorListPage/ActorListPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(true);
  return (
    <>
      <main className="App">
        {user ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/movies/:movieName" element={<MovieDetailPage />} />
              <Route path="/" element={<MovieListPage />} />
              <Route path="/actors" element={<ActorListPage />} />
            </Routes>
          </>
        ) : (
          <LoginPage />
        )}
      </main>
    </>
  );
}
