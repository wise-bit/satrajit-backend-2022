import dotenv from 'dotenv';
dotenv.config();

export default {
  database_url: process.env.ELEPHANTSQL_URL,
};
