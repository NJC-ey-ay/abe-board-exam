// Candidate boxes for Area C batch 9: lighting, energy metering and wire size.
// Three specs, the last of the 240. Two design notes.
//
// THE LAMP SPACING factor ladder. M_s = C_f x M_H is a fixture-lane formula:
// the fluorescent direct-RLM 2x40W lane takes the factor 1.0, the louvers and
// incandescent dome lanes take 0.9, and the glass/metal/plastic lane takes 1.2.
// The driven box locks the driving lane at the 1.0 factor (so the answer is the
// mounting height) and the OTHER book factors are the distractors - 0.9 and
// 1.2 - sitting beside the 0.85/1.15 scalars. The factor is NOT a giving
// variable, because any distractor that used another book factor would collide
// with the driving value the moment the drawn factor matched it; the skill is
// identifying the fixture lane from the story, and the arithmetic is the
// multiplication.
//
// THE DISK METER constants. EC = (60 x k_h x D_rev)/(1000 x T_c) casts two
// constants: the meter factor k_h = 2.5 and the 60/1000 watt-hour-to-kilowatt-
// hour scaling. The driven box enters the revolutions and the counting period
// only, the meter factor is dropped inside the compute, and the honest
// structural distractor is the OMITTED meter factor (a fixed 0.4 of the
// answer) - the same family as C6's dropped hulling coefficient. The omitted
// 1000 (a thousand-fold overshoot) and the forgotten counting period (a ratio
// that slides with T_c itself) are both excluded: the first fails the
// plausibility ceiling and the second sweeps straight through the scalar band.
//
// THE WIRE SIZE lanes. A = (rho x N_w x L x I)/(V_drop x V) with rho = 10.8
// for copper and 17 for aluminium, V_drop = 0.02 fixed. The driven box locks in
// the copper lane and the ALUMINIUM lane is the structural distractor at a
// fixed 17/10.8 = 1.574 - a real confusable, the same metal-swap a cell-phone
// installer makes every day, and stable because it is a constant multiple.
// rho is not a giving variable for the same collision reason as the lamp
// factor. The voltages and currents are picked so the answer stays in a
// sensible feeder-wire range (roughly 610 to 177000 circular mils).
export const CANDIDATES = [
  {
    name: 'c-maximum-lamp-spacing  Ms = 1.0 * M_H (fluorescent 2x40W)',
    round: 1,
    vars: {
      Mh: { min: 8, max: 20, dec: 1 },
    },
    compute: v => v.Mh,
    distractors: [
      v => 0.9 * v.Mh,
      v => 1.2 * v.Mh,
      v => 0.85 * v.Mh,
      v => 1.15 * v.Mh,
    ],
  },

  {
    name: 'c-energy-consumption-disk-meter  EC = 60*2.5*Drev/(1000*Tc)',
    round: 2,
    vars: {
      Drev: { min: 100, max: 1200, dec: 1 },
      Tc: { min: 5, max: 60, dec: 1 },
    },
    compute: v => (60 * 2.5 * v.Drev) / (1000 * v.Tc),
    distractors: [
      v => (60 * v.Drev) / (1000 * v.Tc),
      v => 0.85 * ((60 * 2.5 * v.Drev) / (1000 * v.Tc)),
      v => 1.15 * ((60 * 2.5 * v.Drev) / (1000 * v.Tc)),
    ],
  },

  {
    name: 'c-wire-size-selection  A = 10.8*Nw*L*I/(0.02*V)  (copper)',
    round: 0,
    vars: {
      Nw: { min: 2, max: 4, dec: 1 },
      L: { min: 50, max: 300, dec: 1 },
      I: { min: 5, max: 30, dec: 1 },
      V: { min: 110, max: 440, dec: 1 },
    },
    compute: v => (10.8 * v.Nw * v.L * v.I) / (0.02 * v.V),
    distractors: [
      v => (17 * v.Nw * v.L * v.I) / (0.02 * v.V),
      v => 0.85 * ((10.8 * v.Nw * v.L * v.I) / (0.02 * v.V)),
      v => 1.15 * ((10.8 * v.Nw * v.L * v.I) / (0.02 * v.V)),
    ],
  },
];