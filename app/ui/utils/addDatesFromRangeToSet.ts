export function addDatesFromRangeToSet(
  from: string,
  to: string,
  setToBeMutated: Set<string>
) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const startDate = Date.parse(from);
  const endDate = Date.parse(to);

  for (let ms = startDate; ms <= endDate; ms += msPerDay) {
    setToBeMutated.add(new Date(ms).toISOString().split("T")[0]);
  }
}
