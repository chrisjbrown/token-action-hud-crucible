/**
 * Module-based constants
 */
export const MODULE = {
  ID: "token-action-hud-crucible",
};

/**
 * Core module
 */
export const CORE_MODULE = {
  ID: "token-action-hud-core",
};

/**
 * Core module version required by the system module
 */
export const REQUIRED_CORE_MODULE_VERSION = "2.0";

/**
 * Action type
 */
export const ACTION_TYPE = {
  actions: "actions",
  ability: "crucible.Ability",
  check: "tokenActionHud.crucible.check",
  condition: "tokenActionHud.crucible.condition",
  counter: "tokenActionHud.crucible.counter",
  effect: "crucible.Effect",
  exhaustion: "crucible.Exhaustion",
  feature: "TYPES.Item.feat",
  item: "tokenActionHud.crucible.item",
  save: "crucible.SAVE.Title.one",
  skill: "tokenActionHud.crucible.skill",
  spell: "TYPES.Item.spell",
  utility: "crucible.ActionUtil",
};

/**
 * Activation types
 */
export const ACTIVATION_TYPE = {
  action: { group: "actions" },
  bonus: { group: "bonus-actions", icon: "fas fa-plus" },
  crew: { group: "crew-actions", icon: "fas fa-users" },
  day: { icon: "fas fa-hourglass-end" },
  hour: { icon: "fas fa-hourglass-half" },
  lair: { group: "lair-actions", icon: "fas fa-home" },
  minute: { icon: "fas fa-hourglass-start" },
  legendary: { group: "legendary-actions", icon: "fas fas fa-dragon" },
  reaction: { group: "reactions", icon: "fas fa-bolt" },
  reactiondamage: { group: "reactions", icon: "fas fa-bolt" },
  reactionmanual: { group: "reactions", icon: "fas fa-bolt" },
  special: { group: "special-actions", icon: "fas fa-star" },
  other: { group: "other-actions" },
};

/**
 * Concentration icon
 */
export const CONCENTRATION_ICON =
  "systems/crucible/icons/svg/statuses/concentrating.svg";

export const CUSTOM_crucible = {
  ID: "custom-crucible",
  COUNTERS: {
    character: "character-counters",
    group: "group-counters",
    npc: "npc-counters",
  },
};

/**
 * Feature Group IDs
 */
export const FEATURE_GROUP_IDS = [
  "activeFeatures",
  "passiveFeatures",
  "backgroundFeatures",
  "classFeatures",
  "feats",
  "monsterFeatures",
  "raceFeatures",
  "artificerInfusions",
  "channelDivinity",
  "defensiveTactics",
  "eldritchInvocations",
  "elementalDisciplines",
  "fightingStyles",
  "huntersPrey",
  "kiAbilities",
  "maneuvers",
  "metamagicOptions",
  "multiattacks",
  "pactBoons",
  "psionicPowers",
  "runes",
  "superiorHuntersDefense",
];

/**
 * Groups
 */
export const GROUP = {
  _1stLevelSpells: {
    id: "1st-level-spells",
    name: "tokenActionHud.crucible.1stLevelSpells",
    spellMode: 1,
    type: "system",
  },
  _2ndLevelSpells: {
    id: "2nd-level-spells",
    name: "tokenActionHud.crucible.2ndLevelSpells",
    spellMode: 2,
    type: "system",
  },
  _3rdLevelSpells: {
    id: "3rd-level-spells",
    name: "tokenActionHud.crucible.3rdLevelSpells",
    spellMode: 3,
    type: "system",
  },
  _4thLevelSpells: {
    id: "4th-level-spells",
    name: "tokenActionHud.crucible.4thLevelSpells",
    spellMode: 4,
    type: "system",
  },
  _5thLevelSpells: {
    id: "5th-level-spells",
    name: "tokenActionHud.crucible.5thLevelSpells",
    spellMode: 5,
    type: "system",
  },
  _6thLevelSpells: {
    id: "6th-level-spells",
    name: "tokenActionHud.crucible.6thLevelSpells",
    spellMode: 6,
    type: "system",
  },
  _7thLevelSpells: {
    id: "7th-level-spells",
    name: "tokenActionHud.crucible.7thLevelSpells",
    spellMode: 7,
    type: "system",
  },
  _8thLevelSpells: {
    id: "8th-level-spells",
    name: "tokenActionHud.crucible.8thLevelSpells",
    spellMode: 8,
    type: "system",
  },
  _9thLevelSpells: {
    id: "9th-level-spells",
    name: "tokenActionHud.crucible.9thLevelSpells",
    spellMode: 9,
    type: "system",
  },
  abilities: {
    id: "abilities",
    name: "tokenActionHud.crucible.abilities",
    type: "system",
  },
  actions: {
    id: "actions",
    name: "tokenActionHud.crucible.actions",
    type: "system",
  },
  activeFeatures: {
    id: "active-features",
    name: "tokenActionHud.crucible.activeFeatures",
    type: "system",
  },
  artificerInfusions: {
    id: "artificer-infusions",
    name: "tokenActionHud.crucible.artificerInfusions",
    type: "system",
  },
  atWillSpells: {
    id: "at-will-spells",
    name: "tokenActionHud.crucible.atWillSpells",
    spellMode: "atwill",
    type: "system",
  },
  backgroundFeatures: {
    id: "background-features",
    name: "tokenActionHud.crucible.backgroundFeatures",
    type: "system",
  },
  bonusActions: {
    id: "bonus-actions",
    name: "tokenActionHud.crucible.bonusActions",
    type: "system",
  },
  cantrips: {
    id: "cantrips",
    name: "tokenActionHud.crucible.cantrips",
    spellMode: 0,
    type: "system",
  },
  channelDivinity: {
    id: "channel-divinity",
    name: "tokenActionHud.crucible.channelDivinity",
    type: "system",
  },
  checks: {
    id: "checks",
    name: "tokenActionHud.crucible.checks",
    type: "system",
  },
  classFeatures: {
    id: "class-features",
    name: "tokenActionHud.crucible.classFeatures",
    type: "system",
  },
  combat: { id: "combat", name: "tokenActionHud.combat", type: "system" },
  conditions: {
    id: "conditions",
    name: "tokenActionHud.crucible.conditions",
    type: "system",
  },
  consumables: {
    id: "consumables",
    name: "TYPES.Item.consumablePl",
    type: "system",
  },
  containers: {
    id: "containers",
    name: "TYPES.Item.containerPl",
    type: "system",
  },
  counters: {
    id: "counters",
    name: "tokenActionHud.crucible.counters",
    type: "system",
  },
  crewActions: {
    id: "crew-actions",
    name: "tokenActionHud.crucible.crewActions",
    type: "system",
  },
  defensiveTactics: {
    id: "defensive-tactics",
    name: "tokenActionHud.crucible.defensiveTactics",
    type: "system",
  },
  eldritchInvocations: {
    id: "eldritch-invocations",
    name: "tokenActionHud.crucible.eldritchInvocations",
    type: "system",
  },
  elementalDisciplines: {
    id: "elemental-disciplines",
    name: "tokenActionHud.crucible.elementalDisciplines",
    type: "system",
  },
  equipment: {
    id: "equipment",
    name: "TYPES.Item.equipmentPl",
    type: "system",
  },
  equipped: { id: "equipped", name: "crucible.Equipped", type: "system" },
  exhaustion: { id: "exhaustion", name: "crucible.Exhaustion", type: "system" },
  feats: { id: "feats", name: "tokenActionHud.crucible.feats", type: "system" },
  fightingStyles: {
    id: "fighting-styles",
    name: "tokenActionHud.crucible.fightingStyles",
    type: "system",
  },
  huntersPrey: {
    id: "hunters-prey",
    name: "tokenActionHud.crucible.huntersPrey",
    type: "system",
  },
  innateSpells: {
    id: "innate-spells",
    name: "tokenActionHud.crucible.innateSpells",
    spellMode: "innate",
    type: "system",
  },
  kiAbilities: {
    id: "ki-abilities",
    name: "tokenActionHud.crucible.kiAbilities",
    type: "system",
  },
  lairActions: {
    id: "lair-actions",
    name: "tokenActionHud.crucible.lairActions",
    type: "system",
  },
  legendaryActions: {
    id: "legendary-actions",
    name: "tokenActionHud.crucible.legendaryActions",
    type: "system",
  },
  loot: { id: "loot", name: "TYPES.Item.lootPl", type: "system" },
  maneuvers: {
    id: "maneuvers",
    name: "tokenActionHud.crucible.maneuvers",
    type: "system",
  },
  metamagicOptions: {
    id: "metamagic-options",
    name: "tokenActionHud.crucible.metamagicOptions",
    type: "system",
  },
  monsterFeatures: {
    id: "monster-features",
    name: "tokenActionHud.crucible.monsterFeatures",
    type: "system",
  },
  multiattacks: {
    id: "multiattacks",
    name: "tokenActionHud.crucible.multiattacks",
    type: "system",
  },
  otherActions: {
    id: "other-actions",
    name: "tokenActionHud.crucible.otherActions",
    type: "system",
  },
  pactBoons: {
    id: "pact-boons",
    name: "tokenActionHud.crucible.pactBoons",
    type: "system",
  },
  pactSpells: {
    id: "pact-spells",
    name: "tokenActionHud.crucible.pactSpells",
    spellMode: "pact",
    type: "system",
  },
  passiveEffects: {
    id: "passive-effects",
    name: "crucible.EffectPassive",
    type: "system",
  },
  passiveFeatures: {
    id: "passive-features",
    name: "tokenActionHud.crucible.passiveFeatures",
    type: "system",
  },
  psionicPowers: {
    id: "psionic-powers",
    name: "tokenActionHud.crucible.psionicPowers",
    type: "system",
  },
  raceFeatures: {
    id: "race-features",
    name: "tokenActionHud.crucible.raceFeatures",
    type: "system",
  },
  reactions: { id: "reactions", name: "crucible.ReactionPl", type: "system" },
  rests: { id: "rests", name: "tokenActionHud.crucible.rests", type: "system" },
  runes: { id: "runes", name: "tokenActionHud.crucible.runes", type: "system" },
  saves: { id: "saves", name: "crucible.ClassSaves", type: "system" },
  skills: {
    id: "skills",
    name: "tokenActionHud.crucible.skills",
    type: "system",
  },
  superiorHuntersDefense: {
    id: "superior-hunters-defense",
    name: "tokenActionHud.crucible.superiorHuntersDefense",
    type: "system",
  },
  temporaryEffects: {
    id: "temporary-effects",
    name: "crucible.EffectTemporary",
    type: "system",
  },
  token: { id: "token", name: "tokenActionHud.token", type: "system" },
  tools: { id: "tools", name: "TYPES.Item.toolPl", type: "system" },
  unequipped: { id: "unequipped", name: "crucible.Unequipped", type: "system" },
  utility: { id: "utility", name: "tokenActionHud.utility", type: "system" },
  weapons: { id: "weapons", name: "TYPES.Item.weaponPl", type: "system" },
};

/**
 * Prepared icon
 */
export const PREPARED_ICON = "fas fa-sun";

/**
 * Proficiency level icons
 */
export const PROFICIENCY_LEVEL_ICON = {
  0: "fa-regular fa-circle",
  0.5: "fa-regular fa-circle-half-stroke",
  1: "fa-solid fa-circle",
  2: "fa-regular fa-circle-dot",
};

/**
 * Rarity
 */
export const RARITY = {
  common: "tokenActionHud.crucible.common",
  uncommon: "tokenActionHud.crucible.uncommon",
  rare: "tokenActionHud.crucible.rare",
  veryRare: "tokenActionHud.crucible.veryRare",
  legendary: "tokenActionHud.crucible.legendary",
  artifact: "tokenActionHud.crucible.artifact",
};

/**
 * Ritual icon
 */
export const RITUAL_ICON = "fas fa-circle-r";

/**
 * Spell Group IDs
 */
export const SPELL_GROUP_IDS = [
  "cantrips",
  "_1stLevelSpells",
  "_2ndLevelSpells",
  "_3rdLevelSpells",
  "_4thLevelSpells",
  "_5thLevelSpells",
  "_6thLevelSpells",
  "_7thLevelSpells",
  "_8thLevelSpells",
  "_9thLevelSpells",
  "atWillSpells",
  "innateSpells",
  "pactSpells",
];
