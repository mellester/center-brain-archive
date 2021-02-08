use enum_map::Enum;
use schemars::JsonSchema;
use serde::Serialize;

#[derive(Debug, Clone, Copy, Enum, Serialize, JsonSchema)]
pub enum Recipe {
   IronPlate,
Magnet,
CopperPlate,
StoneBrick,
GearWheel,
MagnetismWire,
WindTurbine,
TeslaCoil,
TMatrix,
Lab,
Prism,
PlasmaGenerator,
ChargingPole,
OilExtractor,
OilRefinery,
PlasmaRefining,
Graphite,
EMatrix,
HydrogenEnergyFuel,
FuelThruster,
IonThruster,
ChemicalPlant,
Plastic,
SulphuricAcid,
CrystalRubber,
TitanCrystal,
CMatrix,
CasimirCrystal,
CasimirCrystalLv2,
TitanGlass,
Graphene,
GrapheneLv2,
Nanotube,
SiliciumOre,
NanotubeLv2,
ParticleWideBand,
SiliciumHighPurity,
PlaneFilter,
HadronCollider,
Deuterium,
DeuteriumEnergyFuel,
FusionCapacitor,
FusionReactor,
AntimatterEnergyFuel,
Assembler1,
Assembler2,
Assembler3,
MiningDrill,
WaterPump,
CircuitBoard,
Processor,
QuantumProcessor,
MicroComponent,
CrystalRubberLv0,
IMatrix,
Smelter,
Glass,
XRay,
SiliciumSingleCrystal,
Diamond,
DiamondLv2,
SiliciumHighPurityLv2,
SteelPlate,
FuelPlant,
TitaniumPlate,
TitaniumAlloy,
SolarPanel,
PhotoShifter,
PhotoShifterLv2,
SolarCollector,
EmRailEjector,
RayReceiver,
OrbitalSubstation,
PhotonFormula,
UMatrix,
Accumulator,
EnergyExchanger,
SpaceWarper,
SpaceWarperLv2,
FrameMaterial,
DysonSphereComponent,
VerticalLaunchingSilo,
Rocket,
Belt1,
Inserter1,
Storage1,
Splitter4dir,
Inserter2,
Belt2,
Inserter3,
Storage2,
Belt3,
LogisticStation,
LogisticDrone,
InterstellarLogisticStation,
LogisticVessel,
ElectricMotor,
MagTurbine,
ParticalCapacitor,
ParticalCapacitorLv2,
GravityLens,
GMatrix,
HyperMagnetismRing,
StrangeMatterGenerator,
Accelerator1,
Accelerator2,
Accelerator3,
SprayCoater,
Fractionator,
OrbitalCollector,
TerrainTool,
FusionPowerStation,
StorageTank,
DeuteriumFormula,
IronVein,
CopperVein,
SiliciumVein,
TitaniumVein,
StoneVein,
CoalVein,
FireiceVein,
DiamondVein,
FractalVein,
CrysrubVein,
GratVein,
BambooVein,
MagVein,
OilVein,
PhotonCapacitorFull,
WaterVein,
SulphuricAcidVein,
GasGiant,
IceGiant
}
