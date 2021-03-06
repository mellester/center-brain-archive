use std::fmt::{Debug, Formatter};

use enum_map::Enum;
use schemars::JsonSchema;
use serde::Serialize;

#[derive(Debug, Clone, Copy, Enum, Serialize, JsonSchema)]
pub enum Item {
    IronOre,
CopperOre,
StoneOre,
CoalOre,
SiliciumOre,
TitaniumOre,
Water,
Oil,
Hydrogen,
Deuterium,
AntiMatter,
DiamondOre,
IronPlate,
CopperPlate,
StoneBrick,
Graphite,
SiliciumSingleCrystal,
TitaniumPlate,
SulphuricAcid,
RefinedOil,
HydrogenEnergyFuel,
DeuteriumEnergyFuel,
AntimatterEnergyFuel,
FractalSilica,
Magnet,
MagnetismWire,
Glass,
Diamond,
SiliciumHighPurity,
TitaniumAlloy,
GasHydrate,
Plastic,
CrystalRubber,
Graphene,
FuelThruster,
GratingOre,
SteelPlate,
CircuitBoard,
Prism,
ElectricMotor,
MicroComponent,
Accelerator1,
CasimirCrystal,
StrangeMatterGenerator,
TitanCrystal,
Nanotube,
IonThruster,
BambooCrystal,
GearWheel,
PlasmaGenerator,
PhotoShifter,
MagTurbine,
Processor,
Accelerator2,
FusionCapacitor,
TitanGlass,
ParticleWideBand,
LogisticDrone,
MonoMagOre,
TerrainTool,
PhotonCapacitorFull,
ParticalCapacitor,
HyperMagnetismRing,
GravityLens,
Accelerator3,
SpaceWarper,
PlaneFilter,
QuantumProcessor,
LogisticVessel,
Wood,
TMatrix,
EMatrix,
CMatrix,
IMatrix,
GMatrix,
UMatrix,
SolarCollector,
FrameMaterial,
DysonSphereComponent,
Rocket,
PlantFuel,
TeslaCoil,
ChargingPole,
OrbitalSubstation,
WindTurbine,
FuelPlant,
SolarPanel,
FusionPowerStation,
Accumulator,
AccumulatorFull,
EnergyExchanger,
RayReceiver,
FusionReactor,
Belt1,
Belt2,
Belt3,
Splitter4dir,
Storage1,
Storage2,
StorageTank,
LogisticStation,
InterstellarLogisticStation,
OrbitalCollector,
EmRailEjector,
Inserter1,
Inserter2,
Inserter3,
MiningDrill,
WaterPump,
OilExtractor,
OilRefinery,
HadronCollider,
Lab,
VerticalLaunchingSilo,
Assembler1,
Assembler2,
Assembler3,
Smelter,
SprayCoater,
ChemicalPlant,
Fractionator
}

#[derive(Serialize, JsonSchema)]
#[serde(deny_unknown_fields)]
pub struct ItemStack {
    pub item: Item,
    pub count: u32,
}

impl Debug for ItemStack {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}x{:?}", self.count, self.item)
    }
}
