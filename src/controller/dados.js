//Módulos Externos:
import inquirer from 'inquirer';
import fs from 'fs';

//Módulos Internos:
import {verifyCategory} from './verify.js';

import {Erros, Sucessos } from './mensagens.js';
import insertData from './inserir_dados.js';
import menu from './menu.js';

var erro = new Erros();
var sucesso = new Sucessos();

// add a data to category:
function addData(){
    inquirer
        .prompt(
            [
                {
                    name: 'categoryName',
                    message: 'Em qual categoria deseja inserir dados?'
                }
            ]
        )
        .then((answer) => {
            const categoryName = answer['categoryName'];
            
            if(!verifyCategory(categoryName)){
                return addData();
            }

            inquirer
                .prompt(
                    [
                        {
                            name: 'data',
                            message: 'Que dado você deseja inserir?'
                        }
                    ]
                )
                .then((answer) => {
                    const data = answer['data'];
                    insertData(categoryName, data);
                    menu();

                    
                })
                .catch(err => console.log(err));
            
        })
        .catch(err => console.log(err));
}

export default addData;
