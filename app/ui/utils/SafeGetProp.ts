export default function SafeGetProp<T, K extends keyof T>(
  dataObject: T,
  key: K,
  defaultValue: T[K]
): T[K] {
  return dataObject?.[key] || defaultValue;
}
