import React from 'react';
import { TextField, Button, Link } from '@material-ui/core';
import styles from './LogIn.module.scss';
import { useHistory } from "react-router-dom";
import { routePaths } from '../../constants';

export const LogIn = () => {
    const history = useHistory();
    return (
        <div className={styles.logInContainer}>
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
            <Button variant="outlined" color="primary">LogIn</Button>
            <div className={styles.linkContainer}>
                <Link href="#" onClick={() => history.push(routePaths.SIGNUP)}>Register Now</Link>
                <Link href="#">Forgot your Password?</Link>
            </div>
        </div>
    )
}

export default LogIn