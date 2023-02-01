const input = document.getElementsByName('password')[0];
const blocks = document.querySelector('.check-wrap').children;

function checkLength(value) {
    if ((value.length > 0 && value.length < 8) || value.length > 16) {
        for (let i = 0; i < blocks.length; i++) {
            changeBgcolor(blocks[i], '#f00');
        }
        return false;
    }
    return true;
}

function resetBlock() {
    for (let i = 0; i < blocks.length; i++) {
        changeBgcolor(blocks[i], '##787878');
    }
}

function changeBgcolor(item, color) {
    item.style = `background-color: ${color}`;
}

function isOnlyStrig(value) {
    return value.search(/^[a-zA-Z]+$/g) >= 0;
}

function isOnlyNumber(value) {
    return value.search(/^\d*$/) >= 0;
}

function isOnlySymbols(value) {
    return value.search(/^[!@#\$%\^\&*\)\(+=._-]+$/g) >= 0;
}

function isStringAndNumber(value) {
    return value.search(/[a-zA-Z]/g) >= 0 && value.search(/\d/g) >= 0;
}

function isStringAndSymlos(value) {
    return (
        value.search(/[a-zA-Z]/g) >= 0 &&
        value.search(/[$-/:-@#%&?{-~!"^_`\[\]]/g) >= 0
    );
}

function isNumberAndSybols(value) {
    return (
        value.search(/\d/g) >= 0 &&
        value.search(/[$-/:-@#%&?{-~!"^_`\[\]]/g) >= 0
    );
}

function isPaswordEasy(value) {
    return isOnlyStrig(value) || isOnlyNumber(value) || isOnlySymbols(value);
}

function isPaswordMedium(value) {
    return (
        isStringAndNumber(value) ||
        isStringAndSymlos(value) ||
        isNumberAndSybols(value)
    );
}

function isPaswordStrong(value) {
    return (
        isStringAndNumber(value) &&
        isStringAndSymlos(value) &&
        isNumberAndSybols(value)
    );
}

function checkPassword(event) {
    const value = event.target.value;
    if (value.length === 0) {
        resetBlock();
        return;
    }
    if (checkLength(value)) {
        if (isPaswordEasy(value)) {
            resetBlock();
            changeBgcolor(blocks[0], '#f00');
            return;
        }
        if (isPaswordStrong(value)) {
            resetBlock();
            changeBgcolor(blocks[0], '#00FF00');
            changeBgcolor(blocks[1], '#00FF00');
            changeBgcolor(blocks[2], '#00FF00');
            return;
        }

        if (isPaswordMedium(value)) {
            resetBlock();
            changeBgcolor(blocks[0], '#FFD700');
            changeBgcolor(blocks[1], '#FFD700');
            return;
        }
    }
}

input.addEventListener('change', checkPassword);
