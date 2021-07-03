const matriksPC1 = [
  [57, 49, 41, 33, 25, 17, 9],
  [1,58,50,42,34,26,18],
  [10,2,59,51,43,35,27],
  [19,11,3,60,52,44,36],
  [63,55,47,39,31,23,15],
  [7,62,54,46,38,30,22],
  [14,6,61,53,45,37,29],
  [21,13,5,28,20,12,4]
]
const matriksPC2 = [
  [14,17,11,24,1,5],
  [3,28,15,6,21,10],
  [23,19,12,4,26,8],
  [16,7,27,20,13,2],
  [41,52,31,37,47,55],
  [30,40,51,45,33,48],
  [44,49,39,56,34,53],
  [46,42,50,36,29,32]
]
const matriksPBox = [ 
  [16,7,20,21,29,12,28,17],
  [1,15,23,26,5,18,31,10],
  [2,8,24,14,32,27,3,9],
  [19,13,30,6,22,11,4,25]
]
const sBoxTable = [
  [
    [14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],
    [0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],
    [4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],
    [15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13],
  ],
  [
    [15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],
    [3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],
    [0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],
    [13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9],
  ],
  [
    [10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],
    [13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],
    [13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],
    [1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12],
  ],
  [
    [7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],
    [13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],
    [10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],
    [3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14],
  ],
  [
    [2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],
    [14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,16],
    [4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],
    [11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3],
  ],
  [
    [12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],
    [10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],
    [9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],
    [4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13],
  ],
  [
    [4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],
    [13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],
    [1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],
    [6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12],
  ],
  [
    [13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],
    [1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],
    [7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],
    [2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11],
  ]
]
const invertPermutateTable = [
  [40,8,48,16,56,24,64,32],
  [39,7,47,15,55,23,63,31],
  [38,6,46,14,54,22,62,30],
  [37,5,45,13,53,21,61,29],
  [36,4,44,12,52,20,60,28],
  [35,3,43,11,51,19,59,27],
  [34,2,42,10,50,18,58,26],
  [33,1,41,9,49,17,57,25],
]

const stringToBinary = (str, len = 8) => {
  return str.split('')
    .map(c => c.charCodeAt()
      .toString(2).padStart(8, '0')
    )
}
const binaryToString = (binary, len = 8) => {
  let result = ''
  for (let i = 0; i < 8; i++) {
    const block = binary.substr(i*8, 8)
    const ascii = parseInt(block,2)
    result += String.fromCharCode(ascii)
  }
  return result
}
const hexToBinary = (hex) => {
  if (!Array.isArray(hex)) {
    hex = hex.split(' ')
  }
  return hex.map(
    x => parseInt(x, 16).toString(2).padStart(8,'0')
  )
}
const generateKey = (len = 8) => {
  return [...Array(len).keys()]
    .map(i => Math.floor(20 + Math.random() * (100-10+1)).toString(16).toUpperCase())
}
const permutateTable = (bit = 8) =>{
  const init = [...Array(bit).keys()]
    .map(
      x => [...Array(bit).keys()].map(i => (bit*x)+i+1)
    )
  let y = [...Array(bit).keys()]
    .map(
      i => {
        let h = []
        init.forEach(x => h.push(x[i]))
        return h
      }
    )
  let odd = y.filter((x,xi) => xi%2===0).map((x) => x.reverse())
  let even = y.filter((x,xi) => xi%2===1).map((x) => x.reverse())
  return [...even, ...odd]
}
const permutation = (binary, table) => {
  if (Array.isArray(binary)) binary = binary.join('')
  binary = binary.replace(/ +/g, '')
  let result = []
  table.forEach(row => {
    row.forEach(col => {
      result.push(binary[col-1])
    })
  })
  return result.join('')
}
const keyWrapping = (c0, d0) => {
  let result = []
  for (let i = 1; i < 17; i++) {
    if (result.length) {
      c0 = result[result.length-1][`c${result.length}`]
      d0 = result[result.length-1][`d${result.length}`]
    }
    let r = {}
    if ([1,2,9,16].includes(i)) {
      r[`c${i}`] = `${c0.substr(1)}${c0[0]}`
      r[`d${i}`] = `${d0.substr(1)}${d0[0]}`
    }else{
      r[`c${i}`] = `${c0.substr(2)}${c0.substr(0,2)}`
      r[`d${i}`] = `${d0.substr(2)}${d0.substr(0,2)}`
    }
    result.push(r)
    c = r[`c${i}`]
    d = r[`d${i}`]
  }
  return result
}
const calculatePC2 = (c0, d0) => {
  return keyWrapping(c0,d0)
    .map(
      (x, xi) => {
        const c = x[`c${xi+1}`]
        const d = x[`d${xi+1}`]
        return permutation(`${c}${d}`, matriksPC2)
      }
    )
}
const Expansi = (R) => {
  let result = []
  result.push(`${R[31]}${R.substr(0,4)}${R[4]}`)
  result.push(`${R[3]}${R.substr(4,4)}${R[8]}`)
  result.push(`${R[7]}${R.substr(8,4)}${R[12]}`)
  result.push(`${R[11]}${R.substr(12,4)}${R[16]}`)
  result.push(`${R[15]}${R.substr(16,4)}${R[20]}`)
  result.push(`${R[19]}${R.substr(20,4)}${R[24]}`)
  result.push(`${R[23]}${R.substr(24,4)}${R[28]}`)
  result.push(`${R[27]}${R.substr(28,4)}${R[0]}`)
  return result.join('')
}
const calculateSBox = (binary) => {
  let result = ''
  sBoxTable.forEach((t, ti) => {
    const block = binary.substr(ti*6,6)
    const r = parseInt(`${block[0]}${block[block.length-1]}`, 2), 
          c = parseInt(block.substr(1,4), 2)

    result += t[r][c].toString(2).padStart(4, '0')
  })
  return result
}
const xorBinary = (a,b) => {
  let result = ''
  a.split('').forEach((ac, ai) => {
    result += ac ^ b[ai]
  })
  return result
}
const Chipering = (l,r,K) => {
  let L = ''
  let R = ''
  K.forEach((k, ki) => {
    if (R.length && L.length) {
      l = R
      r = L
    }
    const ER = Expansi(r)
    const A = xorBinary(ER,k)
    const B = calculateSBox(A)
    const PB = permutation(B, matriksPBox)
    const Ri = xorBinary(PB,l)
    R = r
    L = Ri
  })
  return [L,R]
}

module.exports.Encrypt = (plaintext, key) => {
  // 1. Permutasi awal terhadap plaintext
  const initialPermutation = permutation(
    stringToBinary(plaintext), // Rubah plaintext menjadi ascii lalu biner
    permutateTable() // Table permutasi awal
  )

  // Pisahkan menjadi 2 bagian L0(32bit) dan R0(32bit)
  const L0 = initialPermutation.substring(0,32)
  const R0 = initialPermutation.substring(32,64)

  // 2. Pembangkitan kunci
  const K = hexToBinary(key) // Kunci dalam hex di rubah menjadi biner
  const Kplus = permutation(K, matriksPC1)

  // Bagi menjadi 2 bagian C0(28bit) dan D0(28bit)
  const C0 = Kplus.substring(0,28)
  const D0 = Kplus.substring(28,56)
  const Keys = calculatePC2(C0,D0)

  // 3. Proses Enchipering
  const Enchiper = Chipering(L0,R0,Keys)

  // 4. Invers Permutasi
  const Cipher = permutation(Enchiper.join(''), invertPermutateTable)

  // 5. Return hasil kalkulasi
  return Cipher
}

module.exports.Decrypt = (ciphertext, key) => {
  // 1. Permutasi awal terhadap plaintext
  const initialPermutation = permutation(
    ciphertext, // Rubah plaintext menjadi ascii lalu biner
    permutateTable() // Table permutasi awal
  )
  // Pisahkan menjadi 2 bagian L0(32bit) dan R0(32bit)
  const L0 = initialPermutation.substring(0,32)
  const R0 = initialPermutation.substring(32,64)

  // 2. Pembangkitan kunci
  const K = hexToBinary(key) // Kunci dalam hex di rubah menjadi biner
  const Kplus = permutation(K, matriksPC1)
  // Bagi menjadi 2 bagian C0(28bit) dan D0(28bit)
  const C0 = Kplus.substring(0,28)
  const D0 = Kplus.substring(28,56)
  // Pada proses dekripsi gunakan Keys dengan urutan K16, K15, ...Kn
  const Keys = calculatePC2(C0,D0).reverse()

  // 3. Proses Dechipering
  const Dechiper = Chipering(L0,R0,Keys)

  // 4. Invers Permutasi
  const PlaintextBinary = permutation(Dechiper.join(''), invertPermutateTable)

  // 5. Rubah plaintext biner ke string
  const Plaintext = binaryToString(PlaintextBinary)

  // 6. Return hasil kalkulasi
  return Plaintext
}