const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%*#?&]{6,}$/;

const evaluatePasswordStrength = (password: string): number => {
  let strength = 0;
  if (password.length >= 6) {
    strength = 1;
    if (PASSWORD_REGEX.test(password)) {
      strength = 2;
      if (password.length >= 12) {
        strength = 3;
      }
  	}
  }
  return strength;
};

export {
	PASSWORD_REGEX,
	evaluatePasswordStrength,
}