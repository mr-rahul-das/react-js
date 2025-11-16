

import MoviesList from './MoviesList';
import Bahubali from "../images/movies/Bahubali.jpg";
import KGF from "../images/movies/KGF.jpg";
import Master from "../images/movies/Master.jpg";
import Puspa from "../images/movies/Puspa.jpg";
import RRR from "../images/movies/RRR.jpg";
import Salaar from "../images/movies/Salaar.jpg";
import Spiderman from "../images/movies/Spiderman.jpg";
import War from "../images/movies/War.jpg";


function Movies() {

  let moviesArr = [
    { id: 101, name: "Bahubali", actor: "Prabhas", rating: 8.6, img: Bahubali },
    { id: 102, name: "KGF", actor: "Yash", rating: 7.6, img: KGF },
    { id: 103, name: "Master", actor: "Vijay Thalapathy", rating: 6.6, img: Master },
    { id: 104, name: "Puspa", actor: "Allu Arjun", rating: 5.5, img: Puspa },
    { id: 105, name: "RRR", actor: "Junior NTR", rating: 4.2, img: RRR },
    { id: 106, name: "Salaar", actor: "Prabhas", rating: 9.1, img: Salaar },
    { id: 107, name: "Spider Man", actor: "Peter Parkar", rating: 7.1, img: Spiderman },
    { id: 108, name: "War", actor: "Hritik Roshan", rating: 6.3, img: War }
  ]


  return (
    <>
      <div className="container-fluid my-3">

        <div className="row">
          {
            moviesArr.map(ele => <MoviesList item={ele} />)
          }
        </div>

      </div>
    </>
  )
}

export default Movies;