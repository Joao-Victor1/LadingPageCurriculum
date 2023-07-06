//Módulos Internos:
import {Erros, Sucessos, Avisos} from './mensagens.js'
import createCategory from './categorias.js';

//Módulos Externos:
import inquirer from "inquirer";

//Instâncias:
var aviso = new Avisos();
var erro = new Erros();
var sucesso = new Sucessos();

function menu(){
    inquirer
        .prompt(
            [
                {
                    type: 'list',
                    name: 'action',
                    message: 'Qual operação deseja realizar?',
                    choices:
                    [
                        'Criar Categoria',
                        'Consultar Informações',
                        'Inserir Dados',
                        'Sair'
                        
                    ]
                }
            ]
        )
        .then((answer) =>{

            const action = answer['action'];

            if(action === 'Criar Categoria'){
                aviso.exibirMensagem(2);
                aviso.exibirMensagem(3);
                createCategory();
                
            }
            else if(action === 'Consultar Informações'){
                return;
            }
            else if(action === 'Inserir Dados'){
                return;
            }
            else if(action === 'Sair'){
                aviso.exibirMensagem(1)
                process.exit();
            }

        })
        .catch(err => console.log(err));
}

export default menu;