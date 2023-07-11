//Módulos externos:
import inquirer from "inquirer";
import fs from "fs";

//Módulos internos:
import {Erros, Sucessos} from './mensagens.js'
import menu from './menu.js';

var erro = new Erros();
var sucesso = new Sucessos();

//Model path:
var path = "src/model/categories";

//Create a category:
function createCategory(){
    inquirer
        .prompt(
            [
                {
                    name: 'categoryName',
                    message: 'Digite um nome para a categoria:'
                }
            ]
        )
        .then((answer) => {
            const categoryName = answer['categoryName'];
            console.info(categoryName);

            if(!fs.existsSync(path)){
                fs.mkdirSync(path);
            }

            if(fs.existsSync(`${path}/${categoryName}.json`)){
                erro.exibirMensagem(1);
                createCategory();
                return;
            }

            fs.writeFileSync(`${path}/${categoryName}.json`, '{"id": 0, "data": "data"}', function(err){
                console.log(err);
            });

            sucesso.exibirMensagem(1);
            menu();


        })
        .catch(err => console.log(err));
}

export default createCategory;