
import * as fs from 'fs';
import { parse } from 'querystring';
import { Recipe, RootObject, namespace } from './data';
var Iconv  = require('iconv').Iconv;
/**
 * convert-kebab-case-to-camelcase-javascript
 * also capitalizes the first letter 
 * https://stackoverflow.com/questions/57556471/convert-kebab-case-to-camelcase-javascript
 * 
 * @param str 
 */
function camelize(str : string) : string{
    let arr = str.split('-');
    let capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase());
    // ^-- change here.
    let capitalString = capital.join("");

  
    return capitalString.charAt(0).toUpperCase() + capitalString.slice(1);
  }

/** 
 * Not all encondings can be read by Fs. Iconv the package should fix that
 * Also attempt  to remove the dom aka removeByteOrderMark
 *  
 */
function readFileSync_with_encoding(filename : any, encoding : string) :string {
    var content = fs.readFileSync(filename);
    var iconv = new Iconv(encoding, 'UTF-8');
    var buffer = iconv.convert(content);
    return removeByteOrderMark(buffer.toString('utf8'));
}
/**
 * Tries to find and replace they Byteorder mark
 * @param str A string that may contain Byteorder mark
 */
function removeByteOrderMark(str : string){
    return str.replace(/^\ufeff/g,"")
}

// Load from disk the json with the data were are about to parse
 let dataString : string = (readFileSync_with_encoding('./data.json', 'UTF-16LE'));

// The structures of the data is defined in a interface object called data.d.ts
const data : RootObject = JSON.parse(dataString);   

const items : namespace.Item[] = data.items;
const itemsName : Array<String> = items.map((item : namespace.Item) => camelize(item.id))

/**
 * In the below code block I will open a file called $filename,
 *  and find and replace the enum definitions with the itemsName
 */
{
    let re = new RegExp(/(pub\s+enum\s+Item\s+\{\s+)(.+?)(\n\s*\})/, 'sgm') //'/pub enum Item \{((?:.|\n)+?)\}/m'
  let filename = '../src/items.rs';
  const replace = itemsName.join(',\n')
  let result2 = fs.readFileSync(filename).toString().replace(re, '$1'+ replace + '$3');
  fs.writeFileSync(filename,result2);
} 


let Recipes : Array<Recipe | null> = data.recipes || [];
const recipesNames = Recipes.map((item : any) => camelize(item.id));
/**
 * In the below code block I will open a file called $filename,
 *  and find and replace the enum definitions with the recipesNames
 */
{
    let filename = '../src/recipes.rs';
    let re = new RegExp(/(pub\s+enum\s+Recipe\s+\{\s+)(.+?)(\n\s*\})/, 'sgm') //'/pub enum Item \{((?:.|\n)+?)\}/m'
    const replace = recipesNames.join(',\n')
    let result = fs.readFileSync(filename).toString().replace(re, '$1'+ replace + '$3');
    fs.writeFileSync(filename, result);
} 

let itemsStrings : Array<string> = [];
{
    if (typeof items === typeof [] )
    for (let key in items) {
        const item = items[key];
        if (item == null)
            continue;
        class struct {
            position : string | undefined                 
            id : string | undefined                 
        }
        let width, height : number = 0;
        let icons : struct[] = data.icons as struct[];
        for (let itter in icons) {
            const struct = icons[itter];
            if (struct.hasOwnProperty('id') &&
                struct.hasOwnProperty('position'))
            {
                if (struct.id !==  item.id)
                    continue;
                let string = struct.position?.split(' ')
                if (string === undefined)
                    continue;
                width = parseInt(string[0].slice(1,-2) ?? 0);
                if (width) {
                    width = 0;
                }
                height = parseInt(string[1].slice(1,-2) ?? 0);
                if (height) {
                    height = 0;
                }
                break;
            }
        };
        itemsStrings.push(
            `Item::${camelize(item.id)} => PartialItemEntry {
                category: "${item.category}",
                id: "${camelize(item.id)}",
                name: "${item.name}",
                stack: ${item.stack} ,
                icon: ItemIconLocation{
                    row : ${width},
                    col: ${height}
                }
            }`
        )
    } // end For loop
    let filename = './PartialItemEntry.in';
    let result = 
`match item {\n
    \t${ itemsStrings.join(',\n\t')},
     _ => PartialItemEntry::default(),
}`
    fs.writeFileSync(filename, result);
}


let recipes : Array<string> = [];
/**
 * In the below code-block I take the recipes information,
 *  and output it to a rust readable file using PartialRecipeEntry.in.template as a template
 * 
 //   Recipe::IronSmelting => PartialRecipeEntry {
//     ingredients: vec![is(Item::IronOre, 1)],
//     time: 1.0,
//     results: vec![is(Item::IronIngot, 1)],
//     made_in: Producer::Smelter,
//     handcraftable: true,
//     unlocked_by: Technology::DysonSphereProgram,
// 
 */
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
    } //End for loop
    let filename = './PartialRecipeEntry.in';
    let result = 
`match recipe {\n
    \t${ recipes.join(',\n\t')},
     _ => PartialRecipeEntry::default(),
}`
    fs.writeFileSync(filename, result);
}


//  console.log(result2);