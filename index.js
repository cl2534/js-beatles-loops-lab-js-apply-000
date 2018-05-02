function theBeatlesPlay (array, instrument) {
  var musicians = []
  for (let i = 0; i < array.length; i++) {
    musicians.push(array[i] + 'plays ${instrument}');
  }
  return musicians;
}