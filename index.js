function scuberGreetingForFeet(distance){
  switch (true) {
    case distance <= 400:
      return "This one is on me!"
    case distance <= 2000:
      return "That will be twenty bucks."
    case distance <= 2500:
      return "I will gladly take your thirty bucks."
    case distance > 2500:
      return "No can do."
  }
}

function ternaryCheckCity(city){
  let responce
  city === "NYC" ? (responce = "Ok, sounds good."): (responce = "No go.")
  return responce
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default: 
      return "Bye."
  }
}