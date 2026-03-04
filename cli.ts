#! /usr/bin/env node

// const {Command}=require('commander');
// const axios=require('axios')
// const program =new Command();
const CLIEngine = require('./CLI Engine/cliEngine')
const GreetCommand = require('./commands/greet_command')


// program.command('greet <name>').action((name)=>(console.log(`Hello ${name} papa`)))
// program.command('add <a> <b>').action((a,b)=>(console.log(`Papa the answer is ${ Number(a)+ Number(b) }`)))
// program.command('subtract <a> <b>').action((a,b)=>(console.log(`Papa the answer is ${Number(a)- Number(b)}`)))
// program.command('multiply <a> <b>').action((a,b)=>(console.log(`Papa the answer is ${Number(a)* Number(b)}`)))
// program.command('divide <a> <b>').action((a,b)=>(console.log(`Papa the answer is ${Number(a)/ Number(b)}`)))
// program.command('chal bol ke dikha').action(async()=>{
//     try{
//         const response= await axios.get('https://pokeapi.co/api/v2/pokemon/charizard')
//         console.log(response.data.forms[0].name)
//     }catch(err){
//         console.error(err)
//     }
// })

const engine=new CLIEngine()
engine.registerCommand([GreetCommand])
engine.run()



program.parse()