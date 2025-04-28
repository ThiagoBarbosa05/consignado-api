declare namespace Express {
  export interface Request {
    user?: {
      sub: string
      roles: string[]
      permissions: string[]
    }
  }
}