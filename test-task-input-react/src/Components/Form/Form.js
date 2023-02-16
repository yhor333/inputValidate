import { useEffect, useState } from 'react';

import Input from '../Input/Input';
import Block from '../Block/Block';

import './Form.css';

const initialStrengthChecks = {
  length: 0,
  hasOnlyLeters: false,
  hasOnlyNumbers: false,
  hasSpecialChar: false,
};

const strengthLvl = {
  red: 'red',
  green: 'green',
  grey: 'grey',
  yellow: 'yellow',
};

const Form = () => {
  const { red, green, grey, yellow } = strengthLvl;
  const [password, setPassword] = useState('');
  const [blockColors, setBlockColors] = useState([grey, grey, grey]);
  const [strengthChecks, setStrengthChecks] = useState(initialStrengthChecks);
  useEffect(() => {
    validatePassword();
  }, [password]);

  useEffect(() => {
    howStrongPassword();
  }, [strengthChecks]);

  const isLenghtCorrectly = (passwordLength) => {
    if (passwordLength < 8) {
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    const updatedStrength = {};
    updatedStrength.length = password.length;
    updatedStrength.hasOnlyLeters = /[A-Za-z]+/.test(password);
    updatedStrength.hasOnlyNumber = /[0-9]+/.test(password);
    updatedStrength.hasSpecialChar = /[!@#$%^&*)(+=._-]+/.test(password);
    setStrengthChecks(updatedStrength);
  };

  const howStrongPassword = () => {
    let verifiedList = Object.values(strengthChecks).filter((value) => {
      return value;
    });
    if (isLenghtCorrectly(strengthChecks.length)) {
      if (verifiedList.length === 4) {
        setBlockColors([green, green, green]);
        return;
      }
      if (verifiedList.length >= 3) {
        setBlockColors([yellow, yellow, grey]);
        return;
      }
      setBlockColors([red, grey, grey]);
      return;
    }
    setBlockColors([red, red, red]);
    return;
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <form>
      <Input
        value={password}
        onChange={handlePassword}
        type="password"
        className="input"
        placeholder="Enter Password"
      />
      <div className="flex">
        {blockColors.map((color, index) => (
          <Block color={color} key={index} />
        ))}
      </div>
    </form>
  );
};

export default Form;
