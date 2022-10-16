const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
];
const answers = [];

function ask(index = 0) {
    process.stdout.write(questions[index] + "\n");
}

ask();

process.stdin.on("data", (data) => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {
    console.log(`
        Bacana Gabriel!

        ${questions[0]}
        ${answers[0]}

        ${questions[1]}
        ${answers[1]}

        ${questions[2]}
        ${answers[2]}
        
        ${questions[3]}
        ${answers[3]}

        ${questions[4]}
        ${answers[4]}
    `);
});
