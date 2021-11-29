import classNames from 'classnames';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './Styles/Login.module.css';

// Draft Page. Feel free to restyle as needed.
const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }) => {
      console.log(email, password);
      navigate('/dashboard');
    },
  });

  return (
    <div>
      <div className={classNames(styles.row)}>
        <div className={classNames(styles.card)}>
          <h1 className={classNames(styles.card__title)}>Sign In</h1>
          <form
            className={classNames(styles.card__form)}
            onSubmit={formik.handleSubmit}
          >
            <input
              className={classNames(styles.card__input)}
              placeholder="Email"
              type="text"
            />
            <input
              className={classNames(styles.card__input)}
              placeholder="Password"
              type="password"
            />
            <input
              className={classNames(styles['card__submit-button'])}
              type="submit"
            />
          </form>
          <p className={classNames(styles.card__text)}>
            Don't have an account?
          </p>
          <Link
            className={classNames(styles['card__new-account-text'])}
            to={''}
          >
            New Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
