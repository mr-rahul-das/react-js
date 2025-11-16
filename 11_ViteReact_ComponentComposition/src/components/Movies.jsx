

import MoviesList from './MoviesList';


function Movies({movies}) {

 


  return (
    <>
      <div className="container-fluid my-3">

        <div className="row">
          {
            movies.map(ele => <MoviesList item={ele} key={ele.id}/>)
          }
        </div>

      </div>
    </>
  )
}

export default Movies;