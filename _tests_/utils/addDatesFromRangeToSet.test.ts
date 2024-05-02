import { describe, it, test, expect } from "vitest";
import { addDatesFromRangeToSet } from "../../app/ui/utils/addDatesFromRangeToSet";
describe("addDatesFromRangeToSet", () => {
  it("mutates set used as argument to include new dates", () => {
    //aaa
    //Arrange
    const from = new Date("2024-07-13").toISOString().split("T")[0];
    const to = new Date("2024-07-17").toISOString().split("T")[0];
    const testSet: Set<string> = new Set();
    //Act
    addDatesFromRangeToSet(from, to, testSet);
    //Assert
    expect(testSet.has("2024-07-13")).toBe(true);
    expect(testSet.has("2024-07-14")).toBe(true);
    expect(testSet.has("2024-07-15")).toBe(true);
    expect(testSet.has("2024-07-16")).toBe(true);
    expect(testSet.has("2024-07-17")).toBe(true);
  });

  it("handles same from and to date", () => {
    // Arrange
    const date = new Date("2024-07-13").toISOString().split("T")[0];
    const testSet: Set<string> = new Set();

    // Act
    addDatesFromRangeToSet(date, date, testSet);

    // Assert
    expect(testSet.has(date)).toBe(true);
    expect(testSet.size).toBe(1);
  });

});
