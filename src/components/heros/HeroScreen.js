import { Navigate, useNavigate, useParams } from "react-router";
import getHeroesByID from "../../selectors/getHeroesByID";
import { NotFound } from "../ui/NotFound";

export const HeroScreen = () => {
  const { heroId } = useParams();
  const hero = getHeroesByID(heroId);

  if (!hero) return <Navigate to="/" />;

  return (
    <div>
      <h1>Hero Screen</h1>
      <p>{hero.superhero}</p>
    </div>
  );
};
