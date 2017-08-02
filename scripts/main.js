/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {
  // let handTotal = 0;
  // for (let i = 0; i < hand.length; i++) {
  //   let card = hand[i];
  //
  //   if (card === 'K' || card === 'Q' || card === 'J') {
  //     handTotal += 10;
  //   } else if (card !== 'A') {
  //     handTotal += parseInt(card, 10)
  //   }
  // }
  //   console.log(handTotal);
  //
  // for (let i = 0; i < hand.length; i++) {
  //
  //   if (hand[i] === 'A') {
  //
  //     if (handTotal > 10)
  //       handTotal += 1
  //     else
  //      handTotal += 11;
  //   }
  // }
  // return handTotal;
  let handTotal = 0;
  let aceCount = 0;
  hand.forEach(function(card) {
    let cardValue = 0;

    switch (card) {
      case 'K':
        cardValue = 10;
        break;
      case 'Q':
        cardValue = 10;
        break;
      case 'J':
        cardValue = 10;
        break;
      case 'A':
        aceCount += 1;
      break;
      default:
        cardValue = parseInt(card);
    }

    handTotal += cardValue


  })
  if (aceCount > 0){
    if (handTotal > 10)
      handTotal += aceCount
    else
        handTotal += aceCount * 11 
        }
        return handTotal;
  }









/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
