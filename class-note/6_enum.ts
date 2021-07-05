enum Shoes {
    Nike=10,
    Adidas,
    Newbalance,
    Puma=20,
    Converse
 }

 var myShoes = Shoes.Nike
 console.log(myShoes) // 10

// 예제

enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer){
    if(answer === Answer.Yes){
        console.log("정답")
    }
    if(answer === Answer.No){
        console.log("오답")
    }
}

askQuestion(Answer.Yes)