// Pre Test Number 3


const data = [
  {
    'ID': 'X1Z76E',
    'Nama': 'Silver',
    'IDPrev': 'Null'   
  },
  {
    'ID': 'X2P78J',
    'Nama': 'Copper',
    'IDPrev': 'X1Z76E'   
  },
  {
    'ID': 'X3H097',
    'Nama': 'Iron',
    'IDPrev': 'X2P78J'   
  },
  {
    'ID': 'Y1UH56',
    'Nama': 'Gold',
    'IDPrev': 'Null'   
  },
  {
    'ID': 'Y2CRT3',
    'Nama': 'Bronze',
    'IDPrev': 'Y1UH56'   
  },
]

const dataOutput = []

function matchingData(params) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].ID === params) {
      dataOutput.unshift(data[i])
      matchingData(data[i].IDPrev)
    }
  }
}

matchingData('X1Z76E')

console.table(dataOutput)