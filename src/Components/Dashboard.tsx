import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
// import { Link } from 'react-router-dom';
import { useAuthStore } from '../Auth/authStore';
import {
  TerritoryInterface,
  // useTerritoryStore,
} from '../Helpers/territoryStore';
import { server } from './../Helpers/serverInfo';

import styles from './Styles/Dashboard.module.css';
import NavBar from './UI/NavBar';
import Spinner from './UI/Spinner';
import TerritoryFAB from './UI/TerritoryFAB';
import Territories from './UI/Territories';
import Settings from './UI/Settings';

const Dashboard = () => {
  const [settingsIsopen, setSettingsIsopen] = useState(false);
  const { username, logout, token } = useAuthStore();
  // const { setSelectedCard } = useTerritoryStore();

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
    return <Spinner />;
  }

  // Show if there is an error
  if (isError) {
    return <h1>Error</h1>;
  }

  const openSettingsHandler = () => {
    const settingsState = settingsIsopen === false ? true : false;
    setSettingsIsopen(settingsState);
  };

  return (
    <div className={styles.dashboard}>
      <NavBar
        toggle={openSettingsHandler}
        username={username}
        onClick={() => logout()}
      />
      {settingsIsopen && <Settings username={username} />}
      {!settingsIsopen && (
        <>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <h1>My Territories</h1>
            </div>

            <div className={styles.line} />
            <Territories data={data as TerritoryInterface[]} />
          </div>
          <TerritoryFAB />
        </>
      )}
    </div>
  );
};

export default Dashboard;
