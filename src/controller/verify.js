import inquirer from 'inquirer';
import fs from 'fs';

import {Erros} from './mensagens.js';

var erro = new Erros();
var path = 'src/model/categories';

function verifyCategory(categoryName){
    if(!fs.existsSync(`${path}/${categoryName}.json`)){
        erro.exibirMensagem(2);
        return false;
    }

    return true;
}

function getCategory(categoryName){
    const categoryJSON = fs.readFileSync(`${path}/${categoryName}.json`, {
        encoding: 'utf-8',
        flag: 'r'
    })

    return JSON.parse(categoryJSON);
}

export {verifyCategory, getCategory};


