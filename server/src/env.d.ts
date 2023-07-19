// env varibles for autocompletion
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ACTIVE_TOKEN_SECRET: string
      ACCESS_TOKEN_SECRET: string
      REFRESH_TOKEN_SECRET: string
    }
  }
}

export {}
