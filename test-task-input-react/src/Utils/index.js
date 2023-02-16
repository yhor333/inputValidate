export const validatePassword = (value) => {
  const updatedStrength = {};
  updatedStrength.length = value.length;
  updatedStrength.hasOnlyLeters = /[A-Za-z]+/.test(value);
  updatedStrength.hasOnlyNumber = /[0-9]+/.test(value);
  updatedStrength.hasSpecialChar = /[!@#$%^&*)(+=._-]+/.test(value);
  return updatedStrength;
};

export const isLenghtCorrectly = (passwordLength) => {
  return passwordLength >= 8;
};
