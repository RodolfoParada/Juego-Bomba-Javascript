const emojis = {

  '-': '',
  'O': '🚪',
  'X': '💣',
  'I': '🎁',
  'PLAYER': '🛳',
  'BOMB_COLLISION': '🔥',
  'GAME_OVER': '📣',
  'WIN': '🏆',
  'HEART': '❤️',
};

const maps = [];





maps.push(`
  IXXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX 
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  OXXXXXXXXX
`);

maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX-XXXX
  X--XX--XXX
  XX--XX--XX
  XX--XXX-XX
  XXX----IXX
  XXXXXXXXXX
`);

maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX--XX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`)
maps.push(`
  O------XXX
  XXXXXX--XX
  XXXXXXX---
  XXX----XX-
  ----XX-XX-
  -XXXXX----
  ---XXXXXXX
  XX-XXXXXXX
  XX-X-----X
  XX---XXX-I
`)

maps.push(`
  ----------
  -XXXXXXXX-
  -X------X-
  -X-XXXX-X-
  -X-XI-X-X-
  -X-XX---X-
  -X-XXXXXX-
  -X--------
  -XXXXXXXXX
  ---------O
`)

maps.push(`
   -------OXI
   -XXXXXXX--
   -------X-X
   XXXXXX-X-X
   XXXXXX-X-X
   -------X--
   -XXXXXXXX-
   -------XX-
   XXXXXX-XX-
   XXXXXX----
 `)

maps.push(`
   ---X----XO
   -X-X-XX---
   -X---XXXXX
   -XXXXX---X
   -------X--   
   XXXXXXXXX-
   X---------
   XX-XXXXXXX
   XX-XXXXXXX
   I---XXXXXX
 `)

// maps.push(`
//   XXXXXXXXXX
//   XXXXXXXXXX
//   XXXXXXXXXX
//   XXXXXXXXXX
//   XXXXXXXXXX
//   XXXXXXXXXX
//   XXXXXXXXXX
//   XXXXXXXXXX
//   XXXXXXXXXX
//   XXXXXXXXXX
// `)