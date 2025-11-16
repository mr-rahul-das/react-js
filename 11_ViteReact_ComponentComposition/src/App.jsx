
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Movies from './components/Movies';
import Button from './components/Button';


import Bahubali from "../src/images/movies/Bahubali.jpg"
import KGF from "../src/images/movies/KGF.jpg";
import Master from "../src/images/movies/Master.jpg";
import MoneyHeist from "../src/images/movies/MoneyHeist.jpg";
import Puspa from "../src/images/movies/Puspa.jpg";
import RRR from "../src/images/movies/RRR.jpg";
import Salaar from "../src/images/movies/Salaar.jpg";
import Spiderman from "../src/images/movies/Spiderman.jpg";
import StrangerThings from "../src/images/movies/StrangerThings.jpg";
import War from "../src/images/movies/War.jpg";
import { useState } from 'react';

let moviesArr = [
  { id: 101, name: "Bahubali", actor: "Prabhas", rating: 8.6, img: Bahubali },
  { id: 102, name: "KGF", actor: "Yash", rating: 7.2, img: KGF },
  { id: 103, name: "Master", actor: "Vijay Thalapathy", rating: 6.6, img: Master },
  { id: 104, name: "Money Heist", actor: "Vijay Thalapathy", rating: 8.3, img: MoneyHeist },
  { id: 105, name: "Puspa", actor: "Allu Arjun", rating: 5.5, img: Puspa },
  { id: 106, name: "RRR", actor: "Junior NTR", rating: 4.2, img: RRR },
  { id: 107, name: "Salaar", actor: "Prabhas", rating: 9.1, img: Salaar },
  { id: 108, name: "Spider Man", actor: "Peter Parkar", rating: 7.1, img: Spiderman },
  { id: 109, name: "Stranger Things", actor: "Eleven", rating: 9.0, img: StrangerThings },
  { id: 110, name: "War", actor: "Hritik Roshan", rating: 6.3, img: War }
]


function App() {

  let [movies, setMovies] = useState(moviesArr);


  return (
    <>
      <Navbar>
        <Button color={"btn-warning"}>
          {
            "Total Movies: " + movies.length
          }
        </Button>
      </Navbar>

      <Dashboard >

        <Home>
          <Movies movies={movies} />
        </Home>

      </Dashboard>


    </>
  )
}

export default App
