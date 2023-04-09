import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  // Define o número de saltos que o bcrypt irá utilizar
  const saltRounds = 10;

  // Gera o salt
  const salt = await bcrypt.genSalt(saltRounds);

  // Cria a hash
  const hash = await bcrypt.hash(password, salt);

  return hash;
};
