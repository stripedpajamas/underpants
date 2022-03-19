const firstNameFirstLetterMap = [
  'stinky',
  'lumpy',
  'buttercup',
  'gidget',
  'crusty',
  'greasy',
  'fluffy',
  'cheeseball',
  'chim-chim',
  'poopsie',
  'flunky',
  'booger',
  'pinky',
  'zippy',
  'goober',
  'doofus',
  'slimy',
  'loopy',
  'snotty',
  'falafel',
  'dorky',
  'squeezeit',
  'oprah',
  'skipper',
  'dinky',
  'zsa-zsa'
]

const lastNameFirstLetterMap = [
  'diaper',
  'toilet',
  'giggle',
  'bubble',
  'girdle',
  'barf',
  'lizard',
  'waffle',
  'cootie',
  'monkey',
  'potty',
  'liver',
  'banana',
  'rhino',
  'burger',
  'hamster',
  'toad',
  'gizzard',
  'pizza',
  'gerble',
  'chicken',
  'pickle',
  'chuckle',
  'tofu',
  'gorilla',
  'stinker'
]

const lastNameLastLetterMap = [
  'herd',
  'mouth',
  'face',
  'nose',
  'tush',
  'breath',
  'pants',
  'shorts',
  'lips',
  'honker',
  'butt',
  'brain',
  'tushy',
  'chunks',
  'hiney',
  'biscuits',
  'toes',
  'buns',
  'fanny',
  'sniffer',
  'sprinkles',
  'kisser',
  'squirt',
  'humperdink',
  'brains',
  'juice'
]

function makeNewName (oldName) {
  const [firstName, lastName] = oldName.split(' ')

  const firstLetterFirstName = firstName[0].toUpperCase().charCodeAt(0) - 65
  const firstLetterLastName = lastName[0].toUpperCase().charCodeAt(0) - 65
  const lastLetterLastName = lastName[lastName.length - 1].toUpperCase().charCodeAt(0) - 65


  const newFirstName = firstNameFirstLetterMap[firstLetterFirstName]
  const newLastNameFront = lastNameFirstLetterMap[firstLetterLastName]
  const newLastNameBack = lastNameLastLetterMap[lastLetterLastName]
  const newLastName = newLastNameFront + '-' + newLastNameBack

  return (newFirstName + ' ' + newLastName).toUpperCase()
}


function main (input) {
  console.log("Initial: ", input)

  const seen = new Set()
  let current = makeNewName(input)
  let count = 0

  while (!seen.has(current)) {
    seen.add(current)
    count += 1
    console.log(current)
    current = makeNewName(current)
  }

  console.log('Cycle of length %d detected!', count)
}

main(process.argv[2])
