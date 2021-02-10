import { Item, ItemStack, Recipe } from "./dsp";
import { INFO, OPTIONS, TRANSLATIONS } from "./main";

/**
 * Create the main page.
 */
export function makeLanding(): HTMLElement {
    let landing = document.createElement("div");
    landing.innerHTML = `<h1 class="display-1">${TRANSLATIONS.other.title}</h1>
        <p>${TRANSLATIONS.other.disclaimer}</p>`;
    if (!OPTIONS.displayUsageLinks) {
        landing.innerHTML += `<p>${TRANSLATIONS.other.instructions}</p>`;
    }

    let items = document.createElement("ul");
    for (let item of Object.keys(INFO.consumption_methods)) {
        items.appendChild(makeItem(item as any, "li"));
    }
    landing.append(items);


    return landing;
}

/**
 * Create an element with all the recipes that produce the given item.
 */
export function makeProduceItem(item: string): HTMLElement {
    let body = document.createElement("div");
    if (item in INFO.production_methods) {
        body.innerHTML = `<h2 class="display-2">${TRANSLATIONS.other.productionMethods(item as Item)}</h2>`;

        let methods = INFO.production_methods[item as keyof typeof INFO.production_methods];
        for (let recipe of methods) {
            let elm = makeRecipe(recipe, "listing");
            elm.classList.add("mt-4");
            body.append(elm);
        }
    } else {
        body.innerText = TRANSLATIONS.other.unknownItem(item);
    }
    return body;
}

/**
 * Create an element with all the recipes that consume the given item.
 */
export function makeConsumeItem(item: string): HTMLElement {
    let body = document.createElement("div");

    if (item in INFO.consumption_methods) {
        body.innerHTML = `<h2 class="display-2">${TRANSLATIONS.other.consumptionMethods(item as Item)}</h2>`;

        let methods = INFO.consumption_methods[item as keyof typeof INFO.consumption_methods];
        for (let recipe of methods) {
            let elm = makeRecipe(recipe, "listing");
            elm.classList.add("mt-4");
            body.append(elm);
        }
    } else {
        body.innerText = TRANSLATIONS.other.unknownItem(item);
    }
    return body;
}

export function updatePins() {
    document.getElementById('pinned-recipes')!.innerHTML = "";
    for (let recipe of OPTIONS.savedRecipes) {
        document.getElementById('pinned-recipes')!.append(makeRecipe(recipe, "pinned"));
    }
}

/**
 * Create an element to view the specified recipe.
 */
function makeRecipe(recipe: string, type: "listing" | "pinned"): HTMLElement {
    if (recipe in INFO.recipes) {
        let entry = INFO.recipes[recipe as keyof typeof INFO.recipes];

        let card = document.createElement("div");
        card.classList.add("card", "p-0", "shadow");

        let body = document.createElement("div");
        body.classList.add("content");

        let inputs = document.createElement("ul");
        inputs.classList.add("list-unstyled");
        for (let input of entry.ingredients) {
            inputs.append(makeItemstack(input, "li", type == "pinned"));
        }
        body.appendChild(inputs);

        let arrow = document.createElement("p");
        arrow.classList.add("bi-arrow-down");
        arrow.innerText = TRANSLATIONS.other.craftinfo(entry.time, entry.made_in[0], entry.handcraftable); // TODO entry.made_in
        body.appendChild(arrow);

        let outputs = document.createElement("ul");
        outputs.classList.add("list-unstyled");
        for (let output of entry.results) {
            outputs.append(makeItemstack(output, "li", type == "pinned"));
        }
        body.appendChild(outputs);

        let footer = document.createElement("div");
        footer.classList.add("px-card", "py-10", "bg-light-lm", "bg-very-dark-dm", "rounded-bottom");
        footer.innerText = TRANSLATIONS.other.unlockedBy(entry.unlocked_by);
        footer.title = TRANSLATIONS.other.recipeID(recipe as any);

        let corner = document.createElement("p");
        corner.classList.add("position-absolute", "top-0", "right-0", "m-5", "mt-0", "pointer");
        corner.style.fontSize = "2rem";
        if (type == "listing") {
            corner.classList.add("bi-pin-angle-fill");

            corner.onclick = ev => {
                let pinned = makeRecipe(recipe, "pinned");
                document.getElementById('pinned-recipes')!.append(pinned);
                OPTIONS.savedRecipes.push(recipe as Recipe);
            };
        } else {
            corner.classList.add("bi-x-square-fill");
            // Make it smaller
            card.classList.add("m-0", "mb-15", "font-size-12");
            body.classList.add("m-15");
            footer.classList.add("p-a5");
            // Remember where this is being inserted into the DOM
            let index = document.getElementById('pinned-recipes')!.childElementCount;
            corner.onclick = ev => {
                card.remove();
                OPTIONS.savedRecipes.splice(index, 1);
            };
        }

        card.append(body, footer, corner);
        return card;
    } else {
        // Error :(
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerText = TRANSLATIONS.other.unknownRecipeID(recipe);
        return card;
    }
}
function makeImg(item : Item) {
    const col = INFO.items[item].icon.col;
    const row = INFO.items[item].icon.row;
    let img = document.createElement('img');
    const size = {
        width: 832,
        height: 768
    };
    img.style.backgroundImage = "url(https://raw.githubusercontent.com/factoriolab/factorio-lab/master/src/data/dsp/icons.png)";
    img.style.width = (size.width) / 13 + "px";
    img.style.height = (size.height) / 12 + "px";
    img.style.backgroundPosition = -row.toString() + "px " + -col.toString() + "px";
    return img;
}

/**
 * Create an element representing an item.
 */
function makeItem(item: Item, type: keyof HTMLElementTagNameMap = "p", small = false): HTMLElement {
    let elm = document.createElement(type);
    elm.classList.add('dsp-item');

    if (OPTIONS.displayUsageLinks) {
        elm.innerHTML = `${TRANSLATIONS.items[item] ?? INFO.items[item].name} 
            [<a href="#?production=${item}">${small ? TRANSLATIONS.other.produceSmall : TRANSLATIONS.other.produce}</a>]
            [<a href="#?consumption=${item}">${small ? TRANSLATIONS.other.consumeSmall : TRANSLATIONS.other.consume}</a>]`;
    }
    else {
        elm.innerText = TRANSLATIONS.items[item] ?? INFO.items[item].name;
        addHandlersItem(elm, item);
    }
    let img = makeImg(item);

    //preppend picture 
    elm.prepend(img);
    return elm;
}

/**
 * Create an element representing an itemstack.
 */
function makeItemstack(stack: ItemStack, type: keyof HTMLElementTagNameMap = "p", small = false): HTMLElement {
    let elm = document.createElement(type);
    elm.classList.add('dsp-itemstack');
    if (OPTIONS.displayUsageLinks){
        elm.innerHTML = `${stack.count}x ${TRANSLATIONS.items[stack.item] ?? // translation might be undefined so we fall back to the english name
            INFO.items[stack.item].name ??  // If the english name is not defined we just use the id
             stack.item} 
        [<a href="#?production=${stack.item}">${small ? TRANSLATIONS.other.produceSmall : TRANSLATIONS.other.produce}</a>]
        [<a href="#?consumption=${stack.item}">${small ? TRANSLATIONS.other.consumeSmall : TRANSLATIONS.other.consume}</a>]`;
    }
    else {
        elm.innerText = `${stack.count}x ${TRANSLATIONS.items[stack.item] ?? INFO.items[stack.item].name ?? stack.item}`;
        addHandlersItem(elm, stack.item);
    }
 
    let img = makeImg(stack.item);
    //preppend picture 
    elm.prepend(img);


    return elm;
}

/**
 * Curry a function to put on the onclick handler of an item.
 */
function addHandlersItem(elm: HTMLElement, item: Item) {
    elm.onclick = ev => {
        window.location.hash = "?production=" + item;
    };
    elm.oncontextmenu = ev => {
        window.location.hash = "?consumption=" + item;
        // Prevent the menu from actually happening
        ev.preventDefault();
    };
}
