const {Command}=require('commander')

class CLIEngine{
    program:any
     constructor() {
        this.program = new Command();
    }
    registerCommand(commands:any) {
        commands.forEach((commandClass) => {
            const commandInstance = new commandClass(this.program);
            commandInstance.register();
        });
    }
    run() {
        this.program.parse();
    }

}

module.exports=CLIEngine