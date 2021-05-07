const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// const addNumbers = (sum, numsLeft, completionCallback) => {}
function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question("Can u pls give a num: ", function (reply) {
            let resp = parseInt(reply);
            sum += resp;
            console.log(`Partial sum is: ${sum}.`);
            addNumbers(sum, numsLeft-1, completionCallback);
        });
    } else {
        completionCallback(sum);
    }
}
addNumbers(0, 3, sum => {
    console.log(`Total Sum: ${sum}`); 
    reader.close();
});
