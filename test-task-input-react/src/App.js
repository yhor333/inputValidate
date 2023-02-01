import './App.css';
import { useState } from 'react';
import Block from './Components/Block/Block';

function App() {
    const [password, setPassword] = useState('');
    const [blockColors, setBlockColors] = useState(['grey', 'grey', 'grey']);

    const handlePassword = (passwordValue) => {
        const chekPasswordLength = (passwordLength) => {
            if (passwordLength < 8) {
                return false;
            }
            return true;
        };

        const howStrongPassword = () => {
            if (chekPasswordLength(strengthChecks.length)) {
                if (verifiedList.length === 4) {
                    setBlockColors(['green', 'green', 'green']);
                    return;
                }
                if (verifiedList.length >= 3) {
                    setBlockColors(['yellow', 'yellow', 'grey']);
                    return;
                }
                setBlockColors(['red', 'grey', 'grey']);
                return;
            }
            setBlockColors(['red', 'red', 'red']);
            return;
        };

        const strengthChecks = {
            length: 0,
            hasOnlyLeters: false,
            hasOnlyNumbers: false,
            hasSpecialChar: false,
        };

        strengthChecks.length = passwordValue.length;
        strengthChecks.hasOnlyLeters = /[A-Za-z]+/.test(passwordValue);
        strengthChecks.hasOnlyNumber = /[0-9]+/.test(passwordValue);
        strengthChecks.hasSpecialChar = /[!@#$%^&*)(+=._-]+/.test(
            passwordValue
        );

        let verifiedList = Object.values(strengthChecks).filter((value) => {
            return value;
        });

        setPassword(passwordValue);
        howStrongPassword();
    };

    return (
        <form>
            <div className="input-box">
                <input
                    value={password}
                    onChange={({ target }) => {
                        handlePassword(target.value);
                    }}
                    type={'password'}
                    className="input"
                    placeholder="Enter Password"
                />
            </div>
            <div className="block-wrpa">
                {blockColors.map((color) => (
                    <Block color={color} />
                ))}
            </div>
        </form>
    );
}

export default App;
