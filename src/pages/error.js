import { Link } from "react-router-dom";


function Error() {
  return (
    <div className={"error"}>
      <h1>Oups !</h1>
      <p>Cette page n'existe pas !</p>
      <Link to={'/'} >
        <button className={"link-button"}>Revenir à la page d'accueil</button>
      </Link>
    </div>

  )
}

export default Error;
