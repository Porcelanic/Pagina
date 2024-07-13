import { registerAs } from '@nestjs/config';


export default registerAs('config', () => {
  // console.log(process.env)
  return {
    postgres: {
      host: process.env.DB_HOST,

      name: process.env.DB_DATABASE,

      user: process.env.DB_USUARIO,

      password: process.env.DB_PASSWORD,

      schema: 'public',

      port: parseInt(process.env.DB_PORT, 10),
      
    },
  };
});
