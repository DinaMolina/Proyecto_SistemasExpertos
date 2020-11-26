export interface JwtResponseI {
    dataUser: {
      id: String,
      nombre: string,
      pagina: string,
      accessToken: string,
      expiresIn: string
    }
}