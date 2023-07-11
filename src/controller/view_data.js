//Módulos Externos:
import inquirer from "inquirer";
import chalk from "chalk";

//Módulos Internos:
import { verifyCategory, getCategory } from "./verify.js";
import menu from "./menu.js";


function getCategoryData(){
    inquirer
        .prompt(
            [
                {
                    name: 'categoryName',
                    message: 'De qual categoria deseja visualizar os dados?'
                }
            ]
        )
        .then((answer) => {
            const categoryName = answer['categoryName'];

            if(!verifyCategory(categoryName)){
                return getCategoryData();
            }

            const categoryData = getCategory(categoryName);

            console.log(chalk.bgBlue.black(`Os dados da categoria ${categoryName} são:`));
            console.log(`${categoryData.dados}\n`);
            menu();
        })
        .catch(err => console.log(err));

}

export default getCategoryData;