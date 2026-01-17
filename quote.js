let first_words = ["The strength within you",
  "The courage to begin",
  "The fire of determination",
  "The power of belief",
  "The resilience of the soul",
  "The beauty of perseverance",
  "The journey to greatness",
  "Your wisdom and experience",
  "Your clarity of vision",
  "The spark of ambition",
  "The energy of purpose",
  "The potential in every moment",
  "The courage to rise again",
  "The foundation of effort",
  "The dream you pursue",
  "The passion that drives you",
  "The possibilities ahead",
  "Your focus on the goal",
  "The strength of your resolve",
  "Your pursuit of excellence",
  "The patience to succeed",
  "The bravery to dream big",
  "The hunger for growth",
  "The drive to overcome life's challenges",
  "The promise of a new day",
  "The will to move forward",]
let second_words = [
  "the key to success",
  "your greatest power",
  "what defines you",
  "where dreams are made",
  "the light that guides you",
  "stronger than fear",
  "the foundation of greatness",
  "the source of inspiration",
  "the secret to progress",
  "your superpower",
  "a force to be reckoned with",
  "the reason you keep going",
  "your truest strength",
  "the fuel for your fire",
  "a step toward greatness",
  "the core of who you are",
  "stronger than the storm",
  "the essence of success",
  "how legends are built",
  "what makes you unstoppable",
  "your guiding star",
  "what makes the heart of a champion beat",
  "the spark of transformation",
  "the anchor of your dreams",
  "what sets you apart from the crowd",
  "your ultimate potential",
  "the moment you decide to act",
  "what will write your story",
  "your legacy in the making",
  "the catalyst for change",
  "your breakthrough waiting"
]

let first_names = ["Aiden", "Oscar", "Jenson", "Alex", "Adam", "Peter", "Peterson", "Garry", "Stephen", "Lusy","Allison", "Katie", "Sophia", "Caroline", "Elaine", "Nora", "Harrison", "Daniel", "Joseph", "Vera", "Sally", "Jason", "Frank", "Silena", "Gloria", "Richard", "Karen","Jessica", "Leonard", "Helen"]
let last_names = ["King", "Carter", "White", "Lane", "Bean", "Lee", "Hubbard", "Moss", "Bush", "Williams", "Wells", "Thomson", "Horton", "West", "Watson", "Herch", "Hersher", "Willsmith", "Claythorn", "McCombie", "Saunders", "Wills", "Thawn", "Farhart", "Carmichael", "Montague", "Lazrous", "Jackson", "Mclean", "Chase"]

function get_random_item(items) {
  
    return items[Math.floor(Math.random()*items.length)];
     
}

function print_words (first_list, middle_word, last_list)  {

    let fn = get_random_item(first_list)
    let ln = get_random_item(last_list)
    let sentence = fn + middle_word + ln
    return sentence
}

function main()  {

    let quote = print_words (first_words, " is ", second_words)
    let auther = print_words (first_names, " ", last_names)
    let full_quote = ("\"" + quote + "\"")
    console.log (full_quote + " -" + auther)
    document.getElementById("quote").innerHTML = "<mark>" + full_quote + "</mark>";
    document.getElementById("author").innerHTML = "-" + auther;
}

main();