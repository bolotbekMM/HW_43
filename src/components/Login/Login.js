import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState(''); // useState,email инпуттан келген string маанини алат жана озгортот, пока пустой.
  const [emailIsValid, setEmailIsValid] = useState(); // useState setEmailIsValidтен boolean маанисин алат 
  const [enteredPassword, setEnteredPassword] = useState('');// useState,password инпуттан келген string маанини алат жана озгортот, пока пустой.
  const [passwordIsValid, setPasswordIsValid] = useState();// useState setPasswordIsValidтен boolean маанисин алат 
  const [formIsValid, setFormIsValid] = useState(false); // useState setFormIsValidтен boolean маанисин алат, азыр ал false

  const emailChangeHandler = (event) => {  // email inputтагы event, 
    setEnteredEmail(event.target.value); //emailга жазылган маанини (event.target.value) арукылу valuesin alyp beret

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6 // validaciya kylat, email inputta жазылган мааниде 
    );                                                            //'@' барбы, болсо true ,болбосо false, жана логич операторы, экоо тен true  
  };                                                              //болсо  true бироо false болсо false кайтарат(email && password)

  const passwordChangeHandler = (event) => { // password inputтагы event,
    setEnteredPassword(event.target.value); //password жазылган маанини (event.target.value) арукылу valuesin alyp beret

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@') // жогоруда email ди текшергентей эле passwordду да текшерет
    );                                                                  //length 6 дан чон болсо true аз болсо flase
  };

  const validateEmailHandler = () => {  // onBlurдун состояниесин озгортуш учун
    setEmailIsValid(enteredEmail.includes('@'));//  '@' бар болсо true жок болсо false
  };

  const validatePasswordHandler = () => { // onBlurдун состояниесин озгортуш учун
    setPasswordIsValid(enteredPassword.trim().length > 6);// length  6дан чон болсо true болбосо false
  };

  const submitHandler = (event) => {
    event.preventDefault(); // формдун ичин эле загрузка кылганы жардам берет
    props.onLogin(enteredEmail, enteredPassword); //liftingUp to App.js loginHandler
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : '' //эгер emailIsValid false болуп false ко барабар болсо
          }`}                                           // css class invalid bolsun
        >
          <label htmlFor="email">E-Mail</label> 
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : '' 
          }`} /* эгер passwordIsValid false болуп false ко барабар болсо */
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
