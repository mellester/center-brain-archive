/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Recipe =
  | "IronSmelting"
  | "CopperSmelting"
  | "SiliconSmelting"
  | "StoneSmelting"
  | "GraphiteSmelting"
  | "PlasmaRefining"
  | "Plastic"
  | "GrapheneFromFireIce"
  | "GrapheneFromGraphiteAndSulfuric"
  | "MagnetSmelting"
  | "Electromagnet"
  | "CrystalSiliconFromIngot"
  | "CrystalSiliconFromFractal"
  | "GlassSmelting"
  | "DiamondFromGraphite"
  | "DiamondFromKimberlite"
  | "XRayCracking"
  | "OrganicCrystalFromWood"
  | "OrganicCrystalFromPlastic"
  | "HydrogenFuelRod"
  | "SteelSmelting"
  | "SiliconOreFromStone"
  | "CircuitBoard"
  | "SulfuricAcidFromStone"
  | "PlasmaExciter"
  | "Processor"
  | "PhotonCombinerFromPrism"
  | "PhotonCombinerFromCrystal"
  | "MicrocrystallineComponent"
  | "ElectromagneticMatrix"
  | "EnergyMatrix"
  | "Foundation"
  | "TeslaTower"
  | "WirelessPowerTower"
  | "WindTurbine"
  | "ThermalPowerStation"
  | "SolarPanel"
  | "ConveyorMK1"
  | "Splitter"
  | "StorageMK1"
  | "FluidStorage"
  | "SorterMK1"
  | "SorterMK2"
  | "MiningMachine"
  | "WaterPump"
  | "OilExtractor"
  | "OilRefinery"
  | "AssemblingMachineMK1"
  | "Smelter"
  | "Fractionator"
  | "ChemicalPlant"
  | "MatrixLab";
export type Item =
  | "IronOre"
  | "CopperOre"
  | "StoneOre"
  | "CoalOre"
  | "SiliconOre"
  | "TungstenOre"
  | "Water"
  | "CrudeOil"
  | "Hydrogen"
  | "Deuterium"
  | "Antimatter"
  | "Kimberlite"
  | "IronIngot"
  | "CopperIngot"
  | "StoneBrick"
  | "EnergeticGraphite"
  | "HighPuritySilicon"
  | "TungstenIngot"
  | "SufuricAcid"
  | "RefinedOil"
  | "HydrogenFuelRod"
  | "DeuteronFuelRod"
  | "AntimatterFuelRod"
  | "FractalSilicon"
  | "Magnet"
  | "Electromagnet"
  | "Glass"
  | "Diamond"
  | "CrystalSilicon"
  | "TitaniumAlloy"
  | "FireIce"
  | "Plastic"
  | "OrganicCrystal"
  | "Graphene"
  | "Thruster"
  | "OpticalGratingCrystal"
  | "Steel"
  | "CircuitBoard"
  | "Prism"
  | "Motor"
  | "MicrocrystallineComponent"
  | "CasimirCrystal"
  | "StrangeMatter"
  | "TitaniumCrystal"
  | "CarbonNanotube"
  | "ReinforcedThruster"
  | "SpiniformStalagmiteCrystal"
  | "Gear"
  | "PlasmaExciter"
  | "PhotonCombiner"
  | "ElectromagneticTurbine"
  | "Processor"
  | "AnnihilationConstraintSphere"
  | "TitaniumGlass"
  | "ParticleBroadband"
  | "LogisticsDrone"
  | "UnipolarMagnet"
  | "Foundation"
  | "CriticalPhoton"
  | "ParticleContainer"
  | "SuperMagneticRing"
  | "GravitonLens"
  | "SpaceWarper"
  | "PlaneFilter"
  | "QuantumChip"
  | "LogisticsVessel"
  | "Log"
  | "ElectromagneticMatrix"
  | "EnergyMatrix"
  | "StructureMatrix"
  | "InformationMatrix"
  | "GravityMatrix"
  | "UniverseMatrix"
  | "SolarSail"
  | "FrameMaterial"
  | "DysonSphereComponent"
  | "SmallCarrierRocket"
  | "PlantFuel"
  | "TeslaTower"
  | "WirelessPowerTower"
  | "SatelliteSubstation"
  | "WindTurbine"
  | "ThermalPowerStation"
  | "SolarPanel"
  | "MiniFusionPowerStation"
  | "Accumulator"
  | "FullAccumulator"
  | "EnergyExchanger"
  | "RayReceiver"
  | "ArtificialStar"
  | "ConveyorMK1"
  | "ConveyorMK2"
  | "ConveyorMK3"
  | "Splitter"
  | "StorageMK1"
  | "StorageMK2"
  | "PlanetaryLogisticsStation"
  | "InterstellarLogisticsStation"
  | "OrbitCollector"
  | "EMRailEjector"
  | "SorterMK1"
  | "SorterMK2"
  | "SorterMK3"
  | "MiningMachine"
  | "OilExtractor"
  | "OilRefinery"
  | "MiniatureParticleCollider"
  | "MatrixLab"
  | "VerticalLaunchingSilo"
  | "AssemblingMachineMK1"
  | "AssemblingMachineMK2"
  | "AssemblingMachineMK3"
  | "Smelter"
  | "ChemicalPlant"
  | "Fractionator";
/**
 * Anything that makes items.
 */
export type Producer = "AssemblingMachine" | "Smelter" | "OilRefinery" | "ChemicalPlant" | "Fractionator" | "ToDo";
export type Technology =
  | "DysonSphereProgram"
  | "Electromagnetism"
  | "BasicLogisticsSystem"
  | "AutomaticMetallurgy"
  | "ElectromagneticMatrix"
  | "BasicAssemblingProcesses"
  | "FluidStorageEncapsulation"
  | "HighEfficiencyPlasmaControl"
  | "ElectromagneticDrive"
  | "ImprovedLogisticsSystem"
  | "SteelSmelting"
  | "SmeltingPurification"
  | "ThermalPower"
  | "PlasmaExtractRefining"
  | "AccelerantMK1"
  | "EnvironmentModification"
  | "CrystalSmelting"
  | "SolarCollection"
  | "SemiconductorMaterial"
  | "DeuteriumFractionation"
  | "BasicChemicalEngineering"
  | "EnergyMatrix"
  | "MagneticLevitationTechnology"
  | "HighEfficiencyLogisticsSystem"
  | "TitaniumSmelting"
  | "EnergyStorage"
  | "PhotonFrequencyConversion"
  | "Processor"
  | "AppliedSuperconductor"
  | "PolymerChemicalEngineering"
  | "XRayCracking"
  | "HydrogenFuelRod"
  | "SuperMagneticFieldGenerator"
  | "PlanetaryLogisticsSystem"
  | "SolarSailOrbitSystem"
  | "HighSpeedAssemblingProcesses"
  | "HighStrengthCrystal"
  | "Thruster"
  | "AccelerantMK2"
  | "MagneticParticleTrap"
  | "HighStrengthTitaniumAlloy"
  | "HighStrengthLightweightStructure"
  | "RayReceiver"
  | "MiniFusionPowerGeneration"
  | "HighStrengthMaterial"
  | "StructureMatrix"
  | "ReinforcedThruster"
  | "InterstellarLogisticsSystem"
  | "InterstellarPowerTransmission"
  | "ParticleControlTechnology"
  | "HighStrengthGlass"
  | "CasimirCrystal"
  | "MiniatureParticleCollider"
  | "AccelerantMK3"
  | "SatellitePowerDistributionSystem"
  | "GasGiantsExplotiation"
  | "InformationMatrix"
  | "WaveFunctionInterference"
  | "StrangeMatter"
  | "VerticalLaunchingSilo"
  | "QuantumChip"
  | "GravitationalWaveRefraction"
  | "DysonSphereStressSystem"
  | "PlanetaryIonosphereUtilization"
  | "QuantumPrintingTechnology"
  | "GravityMatrix"
  | "DiracInversionMechanism"
  | "ControlledAnnihilationReaction"
  | "ArtificialStar"
  | "UniverseMatrix"
  | "MissionCompleted";

export interface AllDSPInfo {
  consumption_methods: EnumMapOf_ItemTo_ArrayOf_Recipe;
  production_methods: EnumMapOf_ItemTo_ArrayOf_Recipe;
  recipes: EnumMapOf_RecipeTo_RecipeEntry;
  tech_tree: EnumMapOf_TechnologyTo_TechnologyEntry;
}
export interface EnumMapOf_ItemTo_ArrayOf_Recipe {
  Accumulator: Recipe[];
  AnnihilationConstraintSphere: Recipe[];
  Antimatter: Recipe[];
  AntimatterFuelRod: Recipe[];
  ArtificialStar: Recipe[];
  AssemblingMachineMK1: Recipe[];
  AssemblingMachineMK2: Recipe[];
  AssemblingMachineMK3: Recipe[];
  CarbonNanotube: Recipe[];
  CasimirCrystal: Recipe[];
  ChemicalPlant: Recipe[];
  CircuitBoard: Recipe[];
  CoalOre: Recipe[];
  ConveyorMK1: Recipe[];
  ConveyorMK2: Recipe[];
  ConveyorMK3: Recipe[];
  CopperIngot: Recipe[];
  CopperOre: Recipe[];
  CriticalPhoton: Recipe[];
  CrudeOil: Recipe[];
  CrystalSilicon: Recipe[];
  Deuterium: Recipe[];
  DeuteronFuelRod: Recipe[];
  Diamond: Recipe[];
  DysonSphereComponent: Recipe[];
  EMRailEjector: Recipe[];
  Electromagnet: Recipe[];
  ElectromagneticMatrix: Recipe[];
  ElectromagneticTurbine: Recipe[];
  EnergeticGraphite: Recipe[];
  EnergyExchanger: Recipe[];
  EnergyMatrix: Recipe[];
  FireIce: Recipe[];
  Foundation: Recipe[];
  FractalSilicon: Recipe[];
  Fractionator: Recipe[];
  FrameMaterial: Recipe[];
  FullAccumulator: Recipe[];
  Gear: Recipe[];
  Glass: Recipe[];
  Graphene: Recipe[];
  GravitonLens: Recipe[];
  GravityMatrix: Recipe[];
  HighPuritySilicon: Recipe[];
  Hydrogen: Recipe[];
  HydrogenFuelRod: Recipe[];
  InformationMatrix: Recipe[];
  InterstellarLogisticsStation: Recipe[];
  IronIngot: Recipe[];
  IronOre: Recipe[];
  Kimberlite: Recipe[];
  Log: Recipe[];
  LogisticsDrone: Recipe[];
  LogisticsVessel: Recipe[];
  Magnet: Recipe[];
  MatrixLab: Recipe[];
  MicrocrystallineComponent: Recipe[];
  MiniFusionPowerStation: Recipe[];
  MiniatureParticleCollider: Recipe[];
  MiningMachine: Recipe[];
  Motor: Recipe[];
  OilExtractor: Recipe[];
  OilRefinery: Recipe[];
  OpticalGratingCrystal: Recipe[];
  OrbitCollector: Recipe[];
  OrganicCrystal: Recipe[];
  ParticleBroadband: Recipe[];
  ParticleContainer: Recipe[];
  PhotonCombiner: Recipe[];
  PlaneFilter: Recipe[];
  PlanetaryLogisticsStation: Recipe[];
  PlantFuel: Recipe[];
  PlasmaExciter: Recipe[];
  Plastic: Recipe[];
  Prism: Recipe[];
  Processor: Recipe[];
  QuantumChip: Recipe[];
  RayReceiver: Recipe[];
  RefinedOil: Recipe[];
  ReinforcedThruster: Recipe[];
  SatelliteSubstation: Recipe[];
  SiliconOre: Recipe[];
  SmallCarrierRocket: Recipe[];
  Smelter: Recipe[];
  SolarPanel: Recipe[];
  SolarSail: Recipe[];
  SorterMK1: Recipe[];
  SorterMK2: Recipe[];
  SorterMK3: Recipe[];
  SpaceWarper: Recipe[];
  SpiniformStalagmiteCrystal: Recipe[];
  Splitter: Recipe[];
  Steel: Recipe[];
  StoneBrick: Recipe[];
  StoneOre: Recipe[];
  StorageMK1: Recipe[];
  StorageMK2: Recipe[];
  StrangeMatter: Recipe[];
  StructureMatrix: Recipe[];
  SufuricAcid: Recipe[];
  SuperMagneticRing: Recipe[];
  TeslaTower: Recipe[];
  ThermalPowerStation: Recipe[];
  Thruster: Recipe[];
  TitaniumAlloy: Recipe[];
  TitaniumCrystal: Recipe[];
  TitaniumGlass: Recipe[];
  TungstenIngot: Recipe[];
  TungstenOre: Recipe[];
  UnipolarMagnet: Recipe[];
  UniverseMatrix: Recipe[];
  VerticalLaunchingSilo: Recipe[];
  Water: Recipe[];
  WindTurbine: Recipe[];
  WirelessPowerTower: Recipe[];
}
export interface EnumMapOf_RecipeTo_RecipeEntry {
  AssemblingMachineMK1: RecipeEntry;
  ChemicalPlant: RecipeEntry;
  CircuitBoard: RecipeEntry;
  ConveyorMK1: RecipeEntry;
  CopperSmelting: RecipeEntry;
  CrystalSiliconFromFractal: RecipeEntry;
  CrystalSiliconFromIngot: RecipeEntry;
  DiamondFromGraphite: RecipeEntry;
  DiamondFromKimberlite: RecipeEntry;
  Electromagnet: RecipeEntry;
  ElectromagneticMatrix: RecipeEntry;
  EnergyMatrix: RecipeEntry;
  FluidStorage: RecipeEntry;
  Foundation: RecipeEntry;
  Fractionator: RecipeEntry;
  GlassSmelting: RecipeEntry;
  GrapheneFromFireIce: RecipeEntry;
  GrapheneFromGraphiteAndSulfuric: RecipeEntry;
  GraphiteSmelting: RecipeEntry;
  HydrogenFuelRod: RecipeEntry;
  IronSmelting: RecipeEntry;
  MagnetSmelting: RecipeEntry;
  MatrixLab: RecipeEntry;
  MicrocrystallineComponent: RecipeEntry;
  MiningMachine: RecipeEntry;
  OilExtractor: RecipeEntry;
  OilRefinery: RecipeEntry;
  OrganicCrystalFromPlastic: RecipeEntry;
  OrganicCrystalFromWood: RecipeEntry;
  PhotonCombinerFromCrystal: RecipeEntry;
  PhotonCombinerFromPrism: RecipeEntry;
  PlasmaExciter: RecipeEntry;
  PlasmaRefining: RecipeEntry;
  Plastic: RecipeEntry;
  Processor: RecipeEntry;
  SiliconOreFromStone: RecipeEntry;
  SiliconSmelting: RecipeEntry;
  Smelter: RecipeEntry;
  SolarPanel: RecipeEntry;
  SorterMK1: RecipeEntry;
  SorterMK2: RecipeEntry;
  Splitter: RecipeEntry;
  SteelSmelting: RecipeEntry;
  StoneSmelting: RecipeEntry;
  StorageMK1: RecipeEntry;
  SulfuricAcidFromStone: RecipeEntry;
  TeslaTower: RecipeEntry;
  ThermalPowerStation: RecipeEntry;
  WaterPump: RecipeEntry;
  WindTurbine: RecipeEntry;
  WirelessPowerTower: RecipeEntry;
  XRayCracking: RecipeEntry;
}
export interface RecipeEntry {
  handcraftable: boolean;
  ingredients: ItemStack[];
  made_in: Producer;
  recipe: Recipe;
  results: ItemStack[];
  /**
   * Time in seconds to make it
   */
  time: number;
  unlocked_by: Technology;
}
export interface ItemStack {
  count: number;
  item: Item;
}
export interface EnumMapOf_TechnologyTo_TechnologyEntry {
  AccelerantMK1: TechnologyEntry;
  AccelerantMK2: TechnologyEntry;
  AccelerantMK3: TechnologyEntry;
  AppliedSuperconductor: TechnologyEntry;
  ArtificialStar: TechnologyEntry;
  AutomaticMetallurgy: TechnologyEntry;
  BasicAssemblingProcesses: TechnologyEntry;
  BasicChemicalEngineering: TechnologyEntry;
  BasicLogisticsSystem: TechnologyEntry;
  CasimirCrystal: TechnologyEntry;
  ControlledAnnihilationReaction: TechnologyEntry;
  CrystalSmelting: TechnologyEntry;
  DeuteriumFractionation: TechnologyEntry;
  DiracInversionMechanism: TechnologyEntry;
  DysonSphereProgram: TechnologyEntry;
  DysonSphereStressSystem: TechnologyEntry;
  ElectromagneticDrive: TechnologyEntry;
  ElectromagneticMatrix: TechnologyEntry;
  Electromagnetism: TechnologyEntry;
  EnergyMatrix: TechnologyEntry;
  EnergyStorage: TechnologyEntry;
  EnvironmentModification: TechnologyEntry;
  FluidStorageEncapsulation: TechnologyEntry;
  GasGiantsExplotiation: TechnologyEntry;
  GravitationalWaveRefraction: TechnologyEntry;
  GravityMatrix: TechnologyEntry;
  HighEfficiencyLogisticsSystem: TechnologyEntry;
  HighEfficiencyPlasmaControl: TechnologyEntry;
  HighSpeedAssemblingProcesses: TechnologyEntry;
  HighStrengthCrystal: TechnologyEntry;
  HighStrengthGlass: TechnologyEntry;
  HighStrengthLightweightStructure: TechnologyEntry;
  HighStrengthMaterial: TechnologyEntry;
  HighStrengthTitaniumAlloy: TechnologyEntry;
  HydrogenFuelRod: TechnologyEntry;
  ImprovedLogisticsSystem: TechnologyEntry;
  InformationMatrix: TechnologyEntry;
  InterstellarLogisticsSystem: TechnologyEntry;
  InterstellarPowerTransmission: TechnologyEntry;
  MagneticLevitationTechnology: TechnologyEntry;
  MagneticParticleTrap: TechnologyEntry;
  MiniFusionPowerGeneration: TechnologyEntry;
  MiniatureParticleCollider: TechnologyEntry;
  MissionCompleted: TechnologyEntry;
  ParticleControlTechnology: TechnologyEntry;
  PhotonFrequencyConversion: TechnologyEntry;
  PlanetaryIonosphereUtilization: TechnologyEntry;
  PlanetaryLogisticsSystem: TechnologyEntry;
  PlasmaExtractRefining: TechnologyEntry;
  PolymerChemicalEngineering: TechnologyEntry;
  Processor: TechnologyEntry;
  QuantumChip: TechnologyEntry;
  QuantumPrintingTechnology: TechnologyEntry;
  RayReceiver: TechnologyEntry;
  ReinforcedThruster: TechnologyEntry;
  SatellitePowerDistributionSystem: TechnologyEntry;
  SemiconductorMaterial: TechnologyEntry;
  SmeltingPurification: TechnologyEntry;
  SolarCollection: TechnologyEntry;
  SolarSailOrbitSystem: TechnologyEntry;
  SteelSmelting: TechnologyEntry;
  StrangeMatter: TechnologyEntry;
  StructureMatrix: TechnologyEntry;
  SuperMagneticFieldGenerator: TechnologyEntry;
  ThermalPower: TechnologyEntry;
  Thruster: TechnologyEntry;
  TitaniumSmelting: TechnologyEntry;
  UniverseMatrix: TechnologyEntry;
  VerticalLaunchingSilo: TechnologyEntry;
  WaveFunctionInterference: TechnologyEntry;
  XRayCracking: TechnologyEntry;
}
export interface TechnologyEntry {
  /**
   * All technology immediately depending on this
   */
  postreqs: Technology[];
  /**
   * All technology that this immediately depends on
   */
  prereqs: Technology[];
  tech: Technology;
}
