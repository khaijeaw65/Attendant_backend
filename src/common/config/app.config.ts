function checkEnvVariable(key: string) {
  const variable = process.env[key];

  if (!variable) {
    throw new Error(`environment variable ${key} is missing`);
  }

  return variable;
}

export default {
  app: {
    port: checkEnvVariable('APP_PORT'),
    env: checkEnvVariable('APP_ENV')
  }
}