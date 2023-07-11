import chalk from "chalk"

//System Messages:
class Mensagens
{
    exibirMensagem(){
        console.log('Mensagem');
    }
}

class Erros extends Mensagens
{
    exibirMensagem(idMensagem){
        if(idMensagem == 1){
            console.log(chalk.bgRed.black("Ops! Esta categoria já existe, escolha outro nome!"));
        }
        else if(idMensagem == 2){
            console.log(chalk.bgRed.black("Categoria não encontrada, escolha outro nome!"));
        }
        else if(idMensagem == 3){
            console.log(chalk.bgRed.black("Ops, ocorreu um erro, tente novamente!"));
        }
    }
}

class Sucessos extends Mensagens
{
    exibirMensagem(idMensagem){
        if(idMensagem == 1){
            console.log(chalk.bgGreen.black("Parabéns, categoria criada com sucesso!"));
        }
        else if(idMensagem == 2){
            console.log(chalk.bgGreen.black(`Dado inserido com sucesso!`));
        }
        
    }
}

class Avisos extends Mensagens
{
    exibirMensagem(idMensagem){
        if(idMensagem == 1){
            console.log(chalk.bgBlue.black("Obrigado por utilizar o sistema!"));
        }
        else if(idMensagem == 2){
            console.log(chalk.bgBlue("Agradecemos a preferência do sistema!"));
        }
        else if(idMensagem == 3){
            console.log(chalk.blue("Defina as opções a seguir:"));
        }
        else if(idMensagem == 4){
            console.log(chalk.blue("Aqui estão os dados desta categoria:"));
        }
        
        
    }
}

export {Erros, Sucessos, Avisos};

