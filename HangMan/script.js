let categories = ["Fruits", "Furniture", "Films","Books", "Artists", "Holidays","Animals", "Vehicles", "Characters"]
let hints = ["Morning juice", "greatest empire which reigned for more than 600 years", "scifi movie from 1979 ... Ripley", "'Here's Johnny'", "famously cut his own ear", "where are my milk and cookies", "Big flopy ears", "fly like a bird, and not the song", "I declare BaNkRuPtCy!"]
let answer = ["ORANGE", "OTTOMAN", "ALIEN","SHINNING", "VANGOGH", "CHRISTMAS", "ELEPHANT", "PLANE", "MICHAEL"]
let n = 0 
let guesses = []
let randomNumber = Math.floor(Math.random() * categories.length)
const showHint = document.querySelector('#hint')

function selectCategory(){
    
    categoryChosen = categories[randomNumber]
    const showCategories = document.createElement('p')
    showCategories.textContent = (`The category chosen : ${categoryChosen}`)
    document.querySelector('#categories').appendChild(showCategories)
    return categoryChosen
}

function getHint(){
    document.getElementById('hintButton').disabled = true;
    const showHint = document.createElement('p')
    showHint.textContent = (`Hint: ${hints[randomNumber]}`)
    document.querySelector('#hint').appendChild(showHint)
}

function selectAnswer(){
    const newAnswer = answer[randomNumber]
    return newAnswer
}

// function disbaleButton(){
//     document.getElementById(button).disabled = true

// converts the word into dashed for display within inner HTML
function wordConverter(){
    let newWord = document.createElement('p')
    newWord.id = "blankWord"
    newWord.textContent = selectAnswer().toUpperCase().replace(" ", "--").replace(/[A-Z]/g, '_ ')
    document.querySelector('#answer').appendChild(newWord)
}

// let bttn 
// what type of object were we getting from the HTML before converting it to toString.


let stringAnswer =selectAnswer()
///splits the selected answer within an array. 
function splitAnswer(){
    let wordCheck = stringAnswer.split('')   
    return wordCheck
}



// compares the letter to word. 
function selected(bttn){
    let word = splitAnswer()
    let wrongChoice = word.indexOf(bttn)
    for (let i = 0; i < word.length; i++) {
        if(word[i] == bttn){
            let guess = bttn
            guesses.push(guess)
            for(let i = 0; i < word.length; i++) {
                if(guesses.includes(word[i])){
                    
                }else if(word[i].includes(' ')){
                    word[i] = '- '
                }else {
                    word[i] = '_ '
                }
            };
           document.querySelector('#answer').innerHTML = word.join(' ')
            
        }

    }
    if (wrongChoice === -1){
        //count each time that a selection does not match the word.
        n = n + 1 
       switchImage(n)
    }
    // determines win 
    if(guesses.length  === word.length){
        document.getElementById('image').src="./images/Won.gif"
        
    }
    
}

// animates depending on result of n=== whihc it attemps allowed. 
function switchImage(){
    switch (n) {
        case 0:
            document.getElementById('image').src="./images/hangmananimations/startgame.gif"
            break;
        case n:
            document.getElementById('image').src=(`./images/hangmananimations/stroke${n}.gif`)
            break;
        default:
            break;
    }
    
}

function playAgain(){
    location.reload()
}

function startGame(){
    selectCategory()
    wordConverter()
    switchImage()   
    
}

startGame()



// In your if on lines 120 - 126, you’re checking to see if there’s letters in guesses, BUT maybe you want a case for when you have a space
// Commas - word (word is an array, so it’s giving you commas - find a better way to convert an Array to a String

// indicator outside the for loop that determines if a match was made or not. 





// Fruits category, hint morning juice, answer Orange
// furniture category, hint greatest empire which reigned for more than 600 years, answer Ottoman 
// Films category, hint scifi movie from 1997 ... Mul-ti-pass, answer the fifth element
// Books, hint 'Here's Johnny', answer The Shinning 
//Artist category, hint famously cut his own ear, answer Vincent Van Gogh
// Holidays category, hint marks the end of a new beggining, answer New years. 


