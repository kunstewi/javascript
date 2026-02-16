// detects various other data types along wtih null
function customTypeOf(value) {
  if (value === null) return "null";

  if (Array.isArray(value)) return "array";

  if (value instanceof Date) return "date";

  if (value instanceof Map) return "map";

  if (value instanceof Set) return "set";

  return typeof value;
}
