export function convert (value, fromSystem, toSystem) {
  return {
    unit: toSystem,
    value: (value * fromSystem / toSystem).toFixed(2),
  }
}
