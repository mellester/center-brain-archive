
import * as fs from 'fs';
import { parse } from 'querystring';
import { Recipe } from './json';
var Iconv  = require('iconv').Iconv;

// https://stackoverflow.com/questions/57556471/convert-kebab-case-to-camelcase-javascript
function camelize(str : string){
    let arr = str.split('-');
    let capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase());
    // ^-- change here.
    let capitalString = capital.join("");

  
    return capitalString.charAt(0).toUpperCase() + capitalString.slice(1);
  }

function readFileSync_encoding(filename : any, encoding : string) {
    var content = fs.readFileSync(filename);
    var iconv = new Iconv(encoding, 'UTF-8');
    var buffer = iconv.convert(content);
    return buffer.toString('utf8');
}
function removeByteOrderMark(str : string){
    return str.replace(/^\ufeff/g,"")
}

  let dataString : any = (removeByteOrderMark(readFileSync_encoding('./data.json', 'UTF-16LE')));
//   console.log(dataString[10754]);
let data :any = JSON.parse(dataString);   
const items : Array<Object> = data.items;
const itemsName : Array<String> = items.map((item : any) => camelize(item.id))
{
    let re = new RegExp(/(pub\s+enum\s+Item\s+\{\s+)(.+?)(\n\s*\})/, 'sgm') //'/pub enum Item \{((?:.|\n)+?)\}/m'
  let filename = '../src/items.rs';
  const replace = itemsName.join(',\n')
  let result2 = fs.readFileSync(filename).toString().replace(re, '$1'+ replace + '$3');
  fs.writeFileSync(filename,result2);
} 
let Recipes : Array<Recipe | null> = data.recipes || [];
const recipesNames = Recipes.map((item : any) => camelize(item.id));

{
    let re = new RegExp(/(pub\s+enum\s+Recipe\s+\{\s+)(.+?)(\n\s*\})/, 'sgm') //'/pub enum Item \{((?:.|\n)+?)\}/m'
    let filename = '../src/recipes.rs';
    const replace = recipesNames.join(',\n')
    let result = fs.readFileSync(filename).toString().replace(re, '$1'+ replace + '$3');
    fs.writeFileSync(filename, result);
} 


let recipes : Array<string> = [];
{
    
    if (typeof Recipes === typeof [] )
    for (let key in Recipes) {
        const recipe  = Recipes[key];
        if (recipe == null)
        continue;
        let InIngredients : Array<string>= [];
        let OutIngredients : Array<string>= [];
        let producers :Array<string> = [];

        if (typeof recipe.in === 'object') {
            for (let name of Object.keys(recipe.in)) {
                const count = recipe.in[name];
                InIngredients.push(`is(Item::${camelize(name)}, ${count.toFixed(0)})`)
            }
        }
        if (typeof recipe.out === 'object') {
            for (let outName of Object.keys(recipe.out)) {
                if (!recipe.out.hasOwnProperty(outName)) {continue}
                const count = (recipe.out as any)[outName];
                OutIngredients.push(`is(Item::${camelize(outName)}, ${count.toFixed(0)})`)
            }
        }
        if (typeof recipe.producers === 'object') {
            const Producers = recipe.producers;
            for (let prodName of (Producers)) {
                producers.push("Producer::" + camelize(prodName));
            }
        }
        recipes.push(
`  Recipe::${camelize(recipe.id)} => PartialRecipeEntry {
    ingredients: vec![${InIngredients.join(',')}],
    time: ${recipe.time.toFixed(2)},
    results: vec![${OutIngredients.join(',')}],
    made_in: vec![${producers.join(',')}],
    handcraftable: true,
    unlocked_by: Technology::DysonSphereProgram,
  }`            
        );
    }
    let filename = './PartialRecipeEntry.in';
    let result = 
`match recipe {\n
    \t${ recipes.join(',\n\t')},
     _ => PartialRecipeEntry::default(),
}`
    fs.writeFileSync(filename,result);

}

//   Recipe::IronSmelting => PartialRecipeEntry {
//     ingredients: vec![is(Item::IronOre, 1)],
//     time: 1.0,
//     results: vec![is(Item::IronIngot, 1)],
//     made_in: Producer::Smelter,
//     handcraftable: true,
//     unlocked_by: Technology::DysonSphereProgram,
// },

//  console.log(result2);