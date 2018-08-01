// This object stores information about dependences between available units and meter
var standardUnitDependences = {
  pm: Math.pow(10, -12),
  nm: Math.pow(10, -9),
  um: Math.pow(10, -6),
  mm: Math.pow(10, -3),
  cm: Math.pow(10, -2),
  dm: Math.pow(10, -1),
  m: 1,
  dam: Math.pow(10, 1),
  hm: Math.pow(10, 2),
  km: Math.pow(10, 3),
  nmi: 1852,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  fm: 1.8288,
  mi: 1609.344,
  ld: 384402000,
  au: 149597870700,
  ly: 9460730472580800,
  pc: (648000 / Math.PI) * 149597870700,
};

// Array of available units
var supportedUnits = Object.keys(standardUnitDependences);

export { standardUnitDependences, supportedUnits };
