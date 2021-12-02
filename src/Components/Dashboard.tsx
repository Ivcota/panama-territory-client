import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useAuthStore } from "../Auth/authStore";
import {
  TerritoryInterface,
  useTerritoryStore,
} from "../Helpers/territoryStore";
import { server } from "./../Helpers/serverInfo";
import styles from "./Styles/Dashboard.module.css";

const Dashboard = () => {
  const { username, logout, token } = useAuthStore();
  const { setSelectedCard } = useTerritoryStore();

  // ReactQuery data fetch with axios
  // Pull array out of the data object below. Typescript allows for autocomplete of the map.
  const { data, isLoading, isError } = useQuery("territory", async () => {
    const res = await axios.get(`${server}/territorys/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    console.log(res.data);
    return res.data as TerritoryInterface[];
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
    <div className={styles.container}>
      <h1>Welcome {username} to your dashboard.</h1>
      <button onClick={() => logout()}>Sign Out</button>
      <div>
        <div className={styles.list}>
          {/* Ofcourse this is not how we want to do this, but I wrote this out as an example of how the links can work. When clicked, it will reroute to another page and use the url params as props for that page. */}
          {data?.map(({ id, name, photo, territory_type, account, notes }) => {
            return (
              <div key={id} className={styles.card}>
                <h1 className={styles.card__title}>
                  {name} | {id}
                </h1>
                <p className={styles.card__paragraph}>Type: {territory_type}</p>
                <img className={styles.card__img} src={photo} alt="Img" />
                <Link
                  onClick={() => {
                    setSelectedCard({
                      id,
                      account,
                      name,
                      notes,
                      photo,
                      territory_type,
                    });
                  }}
                  to={`/territory/${id}`}
                  className={styles.card__button}
                >
                  View Card
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
