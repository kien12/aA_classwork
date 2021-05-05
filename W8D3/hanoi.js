class Game {
    constructor() {
        this.stacks = [[1,2,3,4,5],[],[]]
    }

    run() {
        // Display towers
        // Prompt User for input
        // Check if won
    }

    promptMove() {
        function test() {
            console.log(3)
        }

        const readline = require('readline');

        console.log(this.stacks)

        const reader = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        reader.question("Enter which tower you want to move disc from and to separated by a space", 
            function (answer) {
            // answer = answer.split(" ").map(ele => parseInt(ele));
            // if (!this.isValidMove(answer[0], answer[1])) {
            //     return false
            // } else {
            //     let a = this.stacks[s].pop()
            //     this.stacks[e].unshift(a)
            //     return true
            // }
            test()
        });
    }

    isValidMove(s, e) {
        if (s < 0 || s > 2 || e < 0 || e > 2) {
            return false
        } else if (this.stacks[e].length == 0) {
            return true
        } else {
            if (this.stacks[s] < this.stacks[e]) {
                return true
            } else {
                return false
            }
        }
    }
}

a = new Game()
a.promptMove()
a.promptMove()

