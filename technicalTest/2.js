// Pre Test Number 2

function makeGeneratorNumber(params) {
  let stringParams = params.toString()
  let output = params
  
  for (let i = 0; i < stringParams.length; i++) {
    let charactherParams = +stringParams[i]
    output += charactherParams
  }
  return output
}

function calculateSelfNumberOfGenerators(maxNumber) {
  let generators = []
  let selfNumberGenerators = []
  let sumSelfNumber = 0
  
  
  for (let i = 1; i <= maxNumber; i++) {
    generators.push([i, makeGeneratorNumber(i)])
  }
  
  for (let i = 0; i < generators.length; i++) {
    for (let j = i + 1; j < generators.length; j++) {
      if (i !== j) {
        if(generators[i][1] === generators[j][1]) {
          selfNumberGenerators.push(generators[i][0])
          selfNumberGenerators.push(generators[j][0])
          sumSelfNumber += generators[i][0]
          sumSelfNumber += generators[j][0]
        }
      }
    }
  }
  return sumSelfNumber
}


console.log(calculateSelfNumberOfGenerators(5000))