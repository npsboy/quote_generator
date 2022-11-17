let first_words = ["The magic of life", "The light of hope", "The light of your soul", "The state of being", "The feeling of love", "The feeling of joy", "A content state of being", "An emotion", "The feeling of calm", "A person's consiousness", "A positive mindset", "Righteousness", "A happy thought",]
let second_words = ["happiness", "light", "divine",  "an ocean", "like a fluffy cloud in a sky of blue", "like a rippling pond", "like a petal of a flower", "like a lilly pad floating in a pond", "temporary", "a precious gem"]

let first_names = ["Aiden", "Oscar", "Jenson", "Alex", "Adam", "Peter", "Peterson", "Garry", "Stephen", "Lusy","Allison", "Katie", "Sophia", "Caroline", "Elaine", "Nora", "Harrison", "Daniel", "joseph", "Vera", "Sally", "Jason", "Frank", "Silena", "Gloria", "Richard", "Karen","Jessica", "Leonard", "Helen"]
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
    let full_quote = ("\"" + quote + "\"" + " " + "-" + "<i>" + auther + "</i>")
    console.log (full_quote)
    document.getElementById("quote").innerHTML = full_quote ;
}

main();