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