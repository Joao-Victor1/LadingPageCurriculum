//Módulos Externos:
import fs from 'fs';

//Módulos Internos:
import {Erros, Avisos, Sucessos} from './mensagens.js';
import { getCategory } from './verify.js';
import addData from './dados.js';

var aviso = new Avisos();
var erro = new Erros();
var sucesso = new Sucessos();
var path = 'src/model/categories';

function insertData(categoryName, data){
    const categoryData = getCategory(categoryName);

    if(!data){
        erro.exibirMensagem(3);
        return addData();
    }
    
    categoryData.data = data;

    fs.writeFileSync(`${path}/${categoryName}.json`, JSON.stringify(categoryData, null, 2), function(err){
        categoryData.id = parseInt(categoryData.id) + 1;
        console.log(err);
    })

    sucesso.exibirMensagem(2);
}

export default insertData;

