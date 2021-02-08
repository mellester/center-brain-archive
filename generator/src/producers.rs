use schemars::JsonSchema;
use serde::Serialize;

/// Anything that makes items.
#[derive(Debug, Clone, Copy, Serialize, JsonSchema)]
#[allow(dead_code)]
pub enum Producer {
    Assembler1,
    Assembler2,
    Assembler3,
    Lab,
    HadronCollider,
    MiningDrill,
    OilExtractor,
    RayReceiver,
    WaterPump,
    OrbitalCollector,
    Smelter,
    OilRefinery,
    ChemicalPlant,
    Fractionator,

    ToDo,
}

impl Default for Producer {
    fn default() -> Self {
        Producer::ToDo
    }
}
