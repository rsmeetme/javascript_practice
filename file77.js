function* startGame() {
  const answer = yield 'Do you love JavaScript?';
  console.log('ssssssssssssssss');
  if (answer !== 'Yes') {
    return "Oh wow... Guess we're done here";
  }
  return 'JavaScript loves you back ❤️';
}

const game = startGame();

console.log(game.next().value)
console.log(game.next('Yes').value)
