import axios from 'axios';
import { useQuery } from 'react-query';
// import { Link } from 'react-router-dom';
import { useAuthStore } from '../Auth/authStore';
import {
  TerritoryInterface,
  useTerritoryStore,
} from '../Helpers/territoryStore';
import { server } from './../Helpers/serverInfo';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Styles/Dashboard.module.css';
import NavBar from './UI/NavBar';
import TerritoryFAB from './UI/TerritoryFAB';
import Territories from './UI/Territories';

const Dashboard = () => {
  const { username, logout, token } = useAuthStore();
  const { setSelectedCard } = useTerritoryStore();

  // ReactQuery data fetch with axios
  // Pull array out of the data object below. Typescript allows for autocomplete of the map.
  const { data, isLoading, isError } = useQuery('territory', async () => {
    const res = await axios.get(`${server}/territorys/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    console.log(res.data);
    return res.data as [];
  });

  // Show if Loading
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // Show if there is an error
  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <div className={styles.dashboard}>
      <NavBar username={username} onClick={() => logout()} />
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <h1>My Territories</h1>
        </div>

        <div className={styles.line} />
        <Territories data={data as TerritoryInterface[]} />
      </div>
      <TerritoryFAB />
    </div>
  );
};

export default Dashboard;
