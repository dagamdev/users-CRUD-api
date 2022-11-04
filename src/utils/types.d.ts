export type UserType = {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  birthday: string
}

// export type dataUser = Pick<UserType, 'firstName' | "lastName" | "email" | "password" | "birthday">
export type UserData = Omit<UserType, "id">