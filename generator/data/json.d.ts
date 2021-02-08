declare module namespace {

    export interface Category {
        id: string;
        name: string;
    }

    export interface Icon {
        color: string;
        id: string;
        position: string;
    }

    export interface Fuel {
        category: string;
        value: number;
    }

    export interface Factory {
        type: string;
        usage: number;
        drain: number;
        speed: number;
        category: string;
        mining?: boolean;
        modules?: number;
    }

    export interface Belt {
        speed: number;
    }

    export interface Module {
        consumption: number;
        speed: number;
    }

    export interface Item {
        category: string;
        id: string;
        name: string;
        row: number;
        stack: number;
        fuel: Fuel;
        factory: Factory;
        belt: Belt;
        module: Module;
    }

    export interface In {
        iron-ore: number;
        copper-ore?: number;
        stone-ore?: number;
        iron-plate?: number;
        magnet?: number;
        copper-plate?: number;
        gear-wheel?: number;
        magnetism-wire?: number;
        circuit-board?: number;
        glass?: number;
        prism?: number;
        tesla-coil?: number;
        plasma-generator?: number;
        steel-plate?: number;
        stone-brick?: number;
        oil?: number;
        coal-ore?: number;
        graphite?: number;
        hydrogen?: number;
        titanium-plate?: number;
        titanium-alloy?: number;
        mag-turbine?: number;
        refined-oil?: number;
        water?: number;
        plastic?: number;
        crystal-rubber?: number;
        diamond?: number;
        titan-crystal?: number;
        graphene?: number;
        grating-ore?: number;
        sulphuric-acid?: number;
        gas-hydrate?: number;
        bamboo-crystal?: number;
        nanotube?: number;
        silicium-high-purity?: number;
        silicium-single-crystal?: number;
        casimir-crystal?: number;
        titan-glass?: number;
        frame-material?: number;
        hyper-magnetism-ring?: number;
        processor?: number;
        deuterium?: number;
        partical-capacitor?: number;
        fusion-capacitor?: number;
        quantum-processor?: number;
        anti-matter?: number;
        assembler-1?: number;
        assembler-2?: number;
        particle-wide-band?: number;
        electric-motor?: number;
        micro-component?: number;
        plane-filter?: number;
        wood?: number;
        plant-fuel?: number;
        silicium-ore?: number;
        diamond-ore?: number;
        fractal-silica?: number;
        titanium-ore?: number;
        photo-shifter?: number;
        charging-pole?: number;
        photon-capacitor-full?: number;
        t-matrix?: number;
        e-matrix?: number;
        c-matrix?: number;
        i-matrix?: number;
        g-matrix?: number;
        gravity-lens?: number;
        solar-collector?: number;
        dyson-sphere-component?: number;
        deuterium-energy-fuel?: number;
        inserter-1?: number;
        belt-1?: number;
        inserter-2?: number;
        belt-2?: number;
        fuel-thruster?: number;
        logistic-station?: number;
        ion-thruster?: number;
        mono-mag-ore?: number;
        strange-matter-generator?: number;
        accelerator-1?: number;
        accelerator-2?: number;
        interstellar-logistic-station?: number;
        accumulator-full?: number;
    }

    export interface Out {
        iron-plate: number;
        magnet?: number;
        copper-plate?: number;
        stone-brick?: number;
        gear-wheel?: number;
        magnetism-wire?: number;
        wind-turbine?: number;
        tesla-coil?: number;
        t-matrix?: number;
        lab?: number;
        prism?: number;
        plasma-generator?: number;
        charging-pole?: number;
        oil-extractor?: number;
        oil-refinery?: number;
        hydrogen?: number;
        refined-oil?: number;
        graphite?: number;
        e-matrix?: number;
        hydrogen-energy-fuel?: number;
        fuel-thruster?: number;
        ion-thruster?: number;
        chemical-plant?: number;
        plastic?: number;
        sulphuric-acid?: number;
        crystal-rubber?: number;
        titan-crystal?: number;
        c-matrix?: number;
        casimir-crystal?: number;
        titan-glass?: number;
        graphene?: number;
        nanotube?: number;
        silicium-ore?: number;
        particle-wide-band?: number;
        silicium-high-purity?: number;
        plane-filter?: number;
        hadron-collider?: number;
        deuterium?: number;
        deuterium-energy-fuel?: number;
        fusion-capacitor?: number;
        fusion-reactor?: number;
        antimatter-energy-fuel?: number;
        assembler-1?: number;
        assembler-2?: number;
        assembler-3?: number;
        mining-drill?: number;
        water-pump?: number;
        circuit-board?: number;
        processor?: number;
        quantum-processor?: number;
        micro-component?: number;
        i-matrix?: number;
        smelter?: number;
        glass?: number;
        silicium-single-crystal?: number;
        diamond?: number;
        steel-plate?: number;
        fuel-plant?: number;
        titanium-plate?: number;
        titanium-alloy?: number;
        solar-panel?: number;
        photo-shifter?: number;
        solar-collector?: number;
        em-rail-ejector?: number;
        ray-receiver?: number;
        orbital-substation?: number;
        anti-matter?: number;
        u-matrix?: number;
        accumulator?: number;
        energy-exchanger?: number;
        space-warper?: number;
        frame-material?: number;
        dyson-sphere-component?: number;
        vertical-launching-silo?: number;
        rocket?: number;
        belt-1?: number;
        inserter-1?: number;
        storage-1?: number;
        splitter-4dir?: number;
        inserter-2?: number;
        belt-2?: number;
        inserter-3?: number;
        storage-2?: number;
        belt-3?: number;
        logistic-station?: number;
        logistic-drone?: number;
        interstellar-logistic-station?: number;
        logistic-vessel?: number;
        electric-motor?: number;
        mag-turbine?: number;
        partical-capacitor?: number;
        gravity-lens?: number;
        g-matrix?: number;
        hyper-magnetism-ring?: number;
        strange-matter-generator?: number;
        accelerator-1?: number;
        accelerator-2?: number;
        accelerator-3?: number;
        spray-coater?: number;
        fractionator?: number;
        orbital-collector?: number;
        terrain-tool?: number;
        fusion-power-station?: number;
        storage-tank?: number;
        iron-ore?: number;
        copper-ore?: number;
        titanium-ore?: number;
        stone-ore?: number;
        coal-ore?: number;
        gas-hydrate?: number;
        diamond-ore?: number;
        fractal-silica?: number;
        grating-ore?: number;
        bamboo-crystal?: number;
        mono-mag-ore?: number;
        oil?: number;
        photon-capacitor-full?: number;
        water?: number;
    }

    export interface Recipe {
        id: string;
        name: string;
        in: In;
        out: Out;
        time: number;
        producers: string[];
        mining?: boolean;
    }

    export interface Defaults {
        modIds: any[];
        minBelt: string;
        maxBelt: string;
        fuel: string;
        disabledRecipes: any[];
        minFactoryRank: string[];
        maxFactoryRank: string[];
        moduleRank: any[];
    }

    export interface Limitations {
        productivity-module: any[];
    }

    export interface RootObject {
        categories: Category[];
        icons: Icon[];
        items: Item[];
        recipes: Recipe[];
        defaults: Defaults;
        limitations: Limitations;
    }

}

