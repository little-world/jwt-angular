export class User {
  username = ""
  password = ""
}

export class JWT {
  token!: string
  user!: User
}
