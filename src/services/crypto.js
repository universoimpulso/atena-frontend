import crypto from 'crypto-js'

const salt = process.env.REACT_APP_ATENA_CRYPTO_SALT

export const decrypt = async data => {
  var bytes = crypto.AES.decrypt(data, salt)
  return JSON.parse(bytes.toString(crypto.enc.Utf8))
}
