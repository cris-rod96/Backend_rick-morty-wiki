import bcrypt from "bcrypt";

const encryptPasssword = async (password) => {
  return await bcrypt.hash(password, 13);
};

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

export default { encryptPasssword, comparePassword };
