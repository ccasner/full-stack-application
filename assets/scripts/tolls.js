const allTolls = [
  {'Lee': 0.25},
  {'Blandford': 1.00},
  {'Westfield': 0.30},
  {'Ludlow': 0.45},
  {'Warren': 0.55},
  {'Charlton': 0.50},
  {'Hopkinton': 0.45},
  {'Southborough': 0.25},
  {'Framingham': 0.25},
  {'Weston': 0.25},
  {'Newtonville': 0.35},
  {'Brighton': 1.00},
  {'Allston': 0.35},
  {'Ted_Williams_Tunnel': 1.50},
  {'Tobin_Bridge': 1.25},
  {'Sumner_Tunnel': 1.50},
  {'Callahan_Tunnel': 1.50}
]

let tolls = []

const tollCalculator = function (location, price) {
  let exit = {}
  exit[location] = price
  return tolls.push(exit)
}

const table = document.createElement('TOLL_TABLE')
