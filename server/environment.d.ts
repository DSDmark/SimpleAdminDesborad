// setup .env file varibles for autosuggestion in ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      MONGO_URL: string;
      ACTIVE_TOKEN_SECRET: string;
      ACCESS_TOKEN_SECRET: string;
      REFRESH_TOKEN_SECRET: string;
      MAIL_SERVICE_CLIENT_ID: string;
      MAIL_SERVIVE_SECRET: string;
      MAIL_SERVICE_REFRESH_TOKEN: string;
      SENDER_MAIL: string;
    }
  }
}
export { };

