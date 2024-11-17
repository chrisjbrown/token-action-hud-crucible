import { MODULE } from "./constants.js";

/**
 *
 * @param updateFunc
 */
export function register(updateFunc) {
  game.settings.register(MODULE.ID, "abbreviateSkills", {
    name: game.i18n.localize(
      "tokenActionHud.crucible.settings.abbreviateSkills.name"
    ),
    hint: game.i18n.localize(
      "tokenActionHud.crucible.settings.abbreviateSkills.hint"
    ),
    scope: "client",
    config: true,
    type: Boolean,
    default: false,
    onChange: (value) => {
      updateFunc(value);
    },
  });

  game.settings.register(MODULE.ID, "showSlowActions", {
    name: game.i18n.localize(
      "tokenActionHud.crucible.settings.showSlowActions.name"
    ),
    hint: game.i18n.localize(
      "tokenActionHud.crucible.settings.showSlowActions.hint"
    ),
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange: (value) => {
      updateFunc(value);
    },
  });

  game.settings.register(MODULE.ID, "displaySpellInfo", {
    name: game.i18n.localize(
      "tokenActionHud.crucible.settings.displaySpellInfo.name"
    ),
    hint: game.i18n.localize(
      "tokenActionHud.crucible.settings.displaySpellInfo.hint"
    ),
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange: (value) => {
      updateFunc(value);
    },
  });

  game.settings.register(MODULE.ID, "showUnchargedItems", {
    name: game.i18n.localize(
      "tokenActionHud.crucible.settings.showUnchargedItems.name"
    ),
    hint: game.i18n.localize(
      "tokenActionHud.crucible.settings.showUnchargedItems.hint"
    ),
    scope: "client",
    config: true,
    type: Boolean,
    default: false,
    onChange: (value) => {
      updateFunc(value);
    },
  });

  game.settings.register(MODULE.ID, "showUnequippedItems", {
    name: game.i18n.localize(
      "tokenActionHud.crucible.settings.showUnequippedItems.name"
    ),
    hint: game.i18n.localize(
      "tokenActionHud.crucible.settings.showUnequippedItems.hint"
    ),
    scope: "client",
    config: true,
    type: Boolean,
    default: false,
    onChange: (value) => {
      updateFunc(value);
    },
  });

  game.settings.register(MODULE.ID, "showUnequippedItemsNpcs", {
    name: game.i18n.localize(
      "tokenActionHud.crucible.settings.showUnequippedItemsNpcs.name"
    ),
    hint: game.i18n.localize(
      "tokenActionHud.crucible.settings.showUnequippedItemsNpcs.hint"
    ),
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange: (value) => {
      updateFunc(value);
    },
  });

  game.settings.register(MODULE.ID, "showUnpreparedSpells", {
    name: game.i18n.localize(
      "tokenActionHud.crucible.settings.showUnpreparedSpells.name"
    ),
    hint: game.i18n.localize(
      "tokenActionHud.crucible.settings.showUnpreparedSpells.hint"
    ),
    scope: "client",
    config: true,
    type: Boolean,
    default: false,
    onChange: (value) => {
      updateFunc(value);
    },
  });

  game.settings.register(MODULE.ID, "showItemsWithoutActivationCosts", {
    name: game.i18n.localize(
      "tokenActionHud.crucible.settings.showItemsWithoutActivationCosts.name"
    ),
    hint: game.i18n.localize(
      "tokenActionHud.crucible.settings.showItemsWithoutActivationCosts.hint"
    ),
    scope: "client",
    config: true,
    type: Boolean,
    default: false,
    onChange: (value) => {
      updateFunc(value);
    },
  });
}
