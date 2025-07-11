const questions = [
    {
        'que' : "What's my favorite color?",
        'a' : 'Yellow',
        'b' : 'Lilac',
        'c' : 'Sky Blue',
        'd' : 'Red',
        'correct':'d'
    },
    {
        'que' : 'When is my birthday?',
        'a' : '25 August',
        'b' : '25 September',
        'c' : '23 August',
        'd' : '23 September',
        'correct':'a'
    },
    {
        'que' : 'What do I prefer?',
        'a' : 'Reading novels',
        'b' : 'Watching web series',
        'c' : 'Both a and b',
        'd' : 'None of the above',
        'correct':'a'
    },
    {
        'que' : 'Which show in the following is my favorite?',
        'a' : 'The Big Bang Theory',
        'b' : 'Modern Family',
        'c' : 'The Office',
        'd' : 'All of the above',
        'correct':'b'
    },
    {
        'que' : 'Which book series in the following is my favorite?',
        'a' : 'Powerless',
        'b' : 'A Court Of Thornes and Roses',
        'c' : 'Six of Crows',
        'd' : 'Once Upon A Broken Heart',
        'correct':'c'
    }
]
let index = 0;
let total = questions.length
let right = 0, wrong = 0;
const qBox = document.getElementById("qBox")
const optInputs = document.querySelectorAll(".options")

const loadQuestion = () => {
    if (index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index];
    console.log(data)
    qBox.innerText =`(${index + 1}) ${data.que}`;
    optInputs[0].nextElementSibling.innerText = data.a;
    optInputs[1].nextElementSibling.innerText = data.b;
    optInputs[2].nextElementSibling.innerText = data.c;
    optInputs[3].nextElementSibling.innerText = data.d;
}

const getAns = () => {
    let answer;
    optInputs.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
            }
        }
    )
    return answer
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAns()
    if (ans === data.correct){
        right++
    }
    else{
        wrong++
    }
    index++
    loadQuestion()
    return
}

const reset = () => {
    optInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    if (right == 5)
    {
        document.getElementById("box").innerHTML = `
        <h3>You know me so well 🥹🥹🥹</h3>
        <h2>${right}/${total} are correct </h2>
    `
    }
    else if (right <= 2){
        document.getElementById("box").innerHTML = `
        <h3>Really? 😑😑😑</h3>
        <h2>${right}/${total} are correct </h2>
    `
    }
    else if (right == 3){
        document.getElementById("box").innerHTML = `
        <h3>Room for improvement 😥</h3>
        <h2>${right}/${total} are correct </h2>
    `
    }
    else if (right == 4){
        document.getElementById("box").innerHTML = `
        <h3>Good enough 🙂</h3>
        <h2>${right}/${total} are correct </h2>
    `
    }
}
loadQuestion()
