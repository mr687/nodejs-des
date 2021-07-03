const Crypter = require('./crypter')

const plaintext = 'COMPUTER'
const key = '13 34 57 79 9B BC DF F1'

const ciphertext = Crypter.Encrypt(plaintext, key)
const decrypt = Crypter.Decrypt(ciphertext, key)

console.log(`Ciphertext: ${ciphertext}`)
console.log(`Decryption: ${decrypt}`)