import random
import sys

#from flask import Flask

#app = Flask(__name__)

#@app.route("/")
def hello_world():
    return "<p>Hello, World!!!</p>"


def hello_quote():
    return "<h1>Welcome to quote</h1>"

first_names = ["Aiden", "Oscar", "Jenson", "Alex", "Adam", "Peter", "Peterson", "Garry", "Stephen", "Lusy","Allison", "Katie", "Sophia", "Caroline", "Elaine" ]
last_names = ["King", "Carter", "White", "Lane", "Parker", "Bean", "Lee", "Hubbard", "Moss", "Bush", "Williams", "Wells", "Thomson", "Larson"]
first_word = ["Life", "Death", "Hope", "Soul", "Hunger", "Money", "Heaven", "Breath", "Body", "The state of being", "Love", "Hate",]
second_word = ["happiness", "freedom", "light", "an adventure", "like a dance", "like an eternal garden", "an ocean"]

def print_in_line(stuff):
    sys.stdout.write(stuff)


def get_random_item (my_list):
    return(random.choice(my_list))

def print_words (first_list, middle_word, last_list):
    fn = get_random_item (first_list)
    ln = get_random_item (last_list)
    sentence = fn + middle_word + ln
    return sentence

@app.route("/quote")
def main ():
    quote = "\"" + print_words (first_word, " is ", second_word) + "\""
    author = print_words (first_names, " ", last_names)

    full_quote = quote + " " + "-" + author

    full_quote_html = "<!DOCTYPE html> \
<html lang=\"en\"> \
<body> \
\
<h1 style=\"font-size:60px;color:#bf8913;\" align=\"center\">Wisest Quotes</h1> \
\
<br><br><br><br> \
\
<h2 style=\"color:#bf8913;\" align=\"center\">{quote_html} - <i>{author_html}</i> </h2> \
<br><br> \
\
<div style=\"text-align: center\"> \
<img   src=\"https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png\" align=\"center\" alt=\"smily\" width=\"130\" height=\"142\"> \
</div>\
</body>\
</html>".format(quote_html = quote, author_html = author)


    return(full_quote_html)

main()
