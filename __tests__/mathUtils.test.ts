import { deltaPercentage, limitDecimals } from "../src/utils/mathUtils"

describe("limitDecimals", () => {
  describe("when given 10.234", () => {
    const res = limitDecimals(10.234)
    it("should return 10.23", () => {
      expect(res).toStrictEqual(10.23);
    });
  });

  describe("when given 0.5432", () => {
    const res = limitDecimals(0.5432)
    it("should return 0.54", () => {
      expect(res).toStrictEqual(0.54);
    });
  });

  describe("when given 0.001", () => {
    const res = limitDecimals(0.001)
    it("should return 0.00", () => {
      expect(res).toStrictEqual(0.00);
    });
  });
});



describe("deltaPercentage", () => {
  describe("when given 10, 12", () => {
    it("should return 20.", () => {
      expect(deltaPercentage(10, 12)).toStrictEqual(20);
    });
  });
  
  describe("when given 6, 12", () => {
    it("should return 100.", () => {
      expect(deltaPercentage(6, 12)).toStrictEqual(100);
    });
  });

  describe("when given 8, 12", () => {
    it("should return 50.", () => {
      expect(deltaPercentage(8, 12)).toStrictEqual(50);
    });
  });
})