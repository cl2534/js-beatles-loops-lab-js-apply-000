function theBeatlesPlay (array, instrument) {
  var musicians = []
  for (let i = 0; i < array.length; i++) {
    musicians.push(array[i] + ' plays ' + instrument[i])
  }
  return musicians;
}

function johnLennonFacts(facts) {
  while (facts[i]) {
    facts[i] += "!!!"
    i++;
    
  }
}