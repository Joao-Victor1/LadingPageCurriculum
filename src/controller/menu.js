//Módulos Internos:
import {Erros, Sucessos, Avisos} from './mensagens.js'
import createCategory from './categorias.js';
import addData from './dados.js';
import getCategoryData from './view_data.js';

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
                aviso.exibirMensagem(3);
                getCategoryData();
                return;
            }
            else if(action === 'Inserir Dados'){
                aviso.exibirMensagem(3);
                addData();
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