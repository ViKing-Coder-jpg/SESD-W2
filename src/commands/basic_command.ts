class BasicCommands{
    program:any;
    constructor(program:any) {
        this.program = program;
    }
    register() {
        this.program
            .command('greet <name>').action((name) => this.greetName(name))
            .command('what is the sum of <a> <b>').action((a,b) => this.addNumber(a,b))
            .command('what is the difference of <a> <b>').action((a,b) => this.subNumber(a,b))
            .command('what is the product of <a> <b>').action((a,b) => this.multiplyNumber(a,b))
            .command('what is the division of <a> <b>').action((a,b) => this.divideNumber(a,b))

            .command('tell me about your friend').action((name) => this.friend())
            .command('what are your hobbies').action((a,b) => this.hobbies())
            .command('what you want to become').action(() => this.goal())
    }
    greetName(name) {
        console.log(`Hello ${name}!, Myself dekisugi`);
    }
    addNumber(a,b) {
        console.log(`The answer is ${Number(a)+Number(b)}`);
    }
    subNumber(a,b) {
        console.log(`The answer is ${Number(a)-Number(b)}`);
    }
    multiplyNumber(a,b) {
        console.log(`The answer is ${Number(a)*Number(b)}`);
    }
    divideNumber(a,b) {
        console.log(`The answer is ${Number(a)/Number(b)}`);
    }
    friend() {
        console.log(`My friends are Doraemon , Nobita,Shizuka,Gian, Suneo`);
    }
    hobbies() {
        console.log(`I love to play scoccer,read novels and biography and ply flute`);
    }
    goal() {
        console.log(`I want to be an astronaut`);
    }
}

module.exports=BasicCommands