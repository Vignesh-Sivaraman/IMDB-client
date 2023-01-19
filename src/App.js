import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddMovie from "./routes/Add Movie/AddMovie";
import MovieListing from "./routes/Movie Listing/MovieListing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieListing />} />
      <Route path="/addmovie" element={<AddMovie />} />
    </Routes>
  );
}

export default App;
