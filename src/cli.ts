#!/usr/bin/env node

const CLIEngines =require('./CLIEngine/cliEngine')
const APICommands =require('./commands/api_command')
const BasicCommand =require('./commands/basic_command')

const engine=new CLIEngines()
engine.registerCommand([BasicCommand,APICommands])
engine.run()