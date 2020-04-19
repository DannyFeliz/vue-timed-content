import { isValidTimeZone, isValidDate } from "@/utils/helpers";

describe("isValidTimeZone", () => {
  it('should returns "true" if it is valid', () => {
    expect(isValidTimeZone("America/New_York")).toBe(true);
  });

  it('should returns "false" if is invalid', () => {
    expect(isValidTimeZone("invalid-timezone")).toBe(false);
  });
});

describe("isValidDate", () => {
  it('should returns "true" if it is valid', () => {
    const validDate = new Date();
    expect(isValidDate(validDate)).toBe(true);
  });

  it('should returns "false" if is invalid', () => {
    expect(isValidDate("invalid-date")).toBe(false);
  });
});
