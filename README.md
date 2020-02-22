# TeamBuilder
A CLI application that organizes a programming team and generates a HTML page for reference

TeamBuilder is run from the command line using node and only requires Inquirer as a module. Once run it pulls from assets in the lib and template folder to build objects and feed them into an html generation function, constructing a single html document in the output folder with a name based on the user's/manager's name.