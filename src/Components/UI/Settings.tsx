import React from 'react';

import { useAuthStore } from '../../Auth/authStore';
import styles from '../Styles/Settings.module.css';
import Button from './Button';

interface Props {
  username: string;
}

const Settings = (props: Props) => {
  const { username, email, logout } = useAuthStore();
  return (
    <div className={styles.settings}>
      <div className={styles.titleContainer}>
        <h2 className={styles.username}>{username}</h2>
        <h2 className={styles.email}>{email}</h2>
        <h2 className={styles.congregation}>Congregation Name</h2>
      </div>
      <div className={styles.btnContainer}>
        <Button className={styles.btn} title="Edit Settings" />
        <Button className={styles.btn} title="Donate" />
        <Button className={styles.btn} title="Theme" />
        <Button className={styles.btn} title="Delete Account" />
        <Button onClick={logout} className={styles.btn} title="Sign Out" />
      </div>
    </div>
  );
};

export default Settings;
