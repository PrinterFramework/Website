export const password =
  'e9ec4e8cc150b9b4a14c257d2ed5406ef85eb46531e8d501ae28930aa5dcf12b'

export const Session = {
  cookieName: 'printer',
  password,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
}
