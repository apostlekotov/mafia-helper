export const roles = [
  "don",
  "mafia",
  "sheriff",
  "medic",
  "hooker",
  "citizen"
] as const;

export type RoleType = typeof roles[number];

export const roleOptions = {
  don: {
    emoji: "🤵🏻‍♂️",
    label: "Don",
    defaultQuantity: 1,
    multiple: false
  },
  mafia: {
    emoji: "🔪",
    label: "Mafia",
    defaultQuantity: 2,
    multiple: true
  },
  sheriff: {
    emoji: "🕵🏼‍♀️",
    label: "Sheriff",
    defaultQuantity: 1,
    multiple: false
  },
  medic: {
    emoji: "🥼",
    label: "Medic",
    defaultQuantity: 0,
    multiple: false
  },
  hooker: {
    emoji: "🦋",
    label: "Hooker",
    defaultQuantity: 0,
    multiple: false
  },
  citizen: {
    emoji: "👤",
    label: "Citizent",
    defaultQuantity: 6,
    multiple: true
  }
};
