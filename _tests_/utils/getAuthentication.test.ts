import getAuthentication from "../../app/ui/utils/getAuthentication";
import { describe, it, expect } from "vitest";

describe(getAuthentication, () => {
  it("returns an object with the props accesstoken, and apiKey", () => {
    const authDetails = getAuthentication();
    //Assert
    expect(authDetails).toHaveProperty("accessToken");
    expect(authDetails).toHaveProperty("apiKey");
  });
});
