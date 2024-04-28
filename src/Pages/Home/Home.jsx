import { useLoaderData } from 'react-router-dom';
import CoffieCard from '../../Components/coffieCard/CoffieCard';

const Home = () => {
  const coffies = useLoaderData();
  console.log(coffies);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {coffies.map(coffie => (
        <CoffieCard key={coffie._id} coffie={coffie}></CoffieCard>
      ))}
    </div>
  );
};

export default Home;
