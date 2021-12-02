import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTerritoryStore } from "../Helpers/territoryStore";
import styles from "./Styles/TerritoryPage.module.css";

const TerritoryPage = () => {
  let params = useParams();
  const { selectedCard } = useTerritoryStore();
  const { name, notes, photo, territory_type } = selectedCard;

  // Just spitting data out
  // Holding the data in the global store so that we don't need to pass down props into this page. It's kind of a headache when doing that with react-router.
  return (
    <>
      <div className={styles.container}>
        <Link to="/dashboard">Dashboard</Link>
        <h1>Card: {name} </h1>
        <h2>Territory Card: {params.id} </h2>
        <ul>
          <li> {notes} </li>
          <li> {territory_type} </li>
        </ul>
        <img className={styles.container__photo} src={photo} alt="" />
      </div>
    </>
  );
};

export default TerritoryPage;
