import { useState } from 'react';

import Input from '../Input/Input';
import Block from '../Block/Block';

import { validatePassword, isLenghtCorrectly } from '../../Utils/index.js';

import './Form.css';

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

  const howStrongPassword = (verifiedList, password) => {
    if (!isLenghtCorrectly(password.length)) {
      setBlockColors([red, red, red]);
      return;
    }
    if (verifiedList.length === 4) {
      setBlockColors([green, green, green]);
    } else if (verifiedList.length >= 3) {
      setBlockColors([yellow, yellow, grey]);
    } else {
      setBlockColors([red, grey, grey]);
    }
  };

  const handlePassword = (event) => {
    const currentPassword = event.target.value;
    setPassword(currentPassword);
    let verifiedList = Object.values(validatePassword(currentPassword)).filter(
      (value) => value
    );
    howStrongPassword(verifiedList, currentPassword);
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
