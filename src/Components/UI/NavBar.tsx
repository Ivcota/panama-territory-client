import React from 'react';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../Styles/NavBar.module.css';
import Button from './Button';

interface Props {
  username: string;
  onClick?: () => void;
}

const NavBar: React.FC<Props> = (props) => {
  return (
    <div className={styles.navBar}>
      <Button onClick={props.onClick} className={styles.btn} title="Sign Out" />
      <Button
        icon={faUser}
        className={styles.userName}
        title={props.username}
      />
      {/* <h2 className={styles.userName}>{props.username}</h2> */}
    </div>
  );
};

export default NavBar;
