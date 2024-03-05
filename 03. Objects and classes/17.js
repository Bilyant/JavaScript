function solve(sentence) {

    sentence = sentence.split(' ').map(w => w = w.toLowerCase());
    let result = [];

    for (const word of sentence) {
        let count = 0;

        if (!(result.includes(word))) {

            for (let i = 0; i < sentence.length; i++) {
            
                if (word == sentence[i]) {
                    count++;
                };
            };
    
            if (count % 2 == 1) {
                result.push(word)
            }
        }
    };

    console.log(result);
};

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
