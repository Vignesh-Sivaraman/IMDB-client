import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddActor from "./routes/Add Actor/AddActor";
import AddMovie from "./routes/Add Movie/AddMovie";
import AddProducer from "./routes/Add Producer/AddProducer";
import MovieListing from "./routes/Movie Listing/MovieListing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieListing />} />
      <Route path="/addmovie" element={<AddMovie />} />
      <Route path="/addactor" element={<AddActor />} />
      <Route path="/addproducer" element={<AddProducer />} />
    </Routes>
  );
}

export default App;
