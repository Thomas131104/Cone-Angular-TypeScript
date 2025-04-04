import Cone from '../dist/cone';

describe('Cone Class Tests', () => {
  let cone;



  beforeEach(() => {
    // Khởi tạo trước mỗi test
    cone = new Cone(5, 10);
  });



  test('should correctly calculate slant height', () => {
    const expectedSlantHeight = Math.sqrt(5 * 5 + 10 * 10);
    expect(cone.slantHeight()).toBeCloseTo(expectedSlantHeight);
  });



  test('should correctly calculate lateral surface area', () => {
    const expectedLateralSurfaceArea = Math.PI * 5 * cone.slantHeight();
    expect(cone.lateralSurfaceArea()).toBeCloseTo(expectedLateralSurfaceArea);
  });



  test('should correctly calculate base area', () => {
    const expectedBaseArea = Math.PI * 5 * 5;
    expect(cone.baseArea()).toBeCloseTo(expectedBaseArea);
  });



  test('should correctly calculate total surface area', () => {
    const expectedTotalSurfaceArea = cone.lateralSurfaceArea() + cone.baseArea();
    expect(cone.totalSurfaceArea()).toBeCloseTo(expectedTotalSurfaceArea);
  });



  test('should correctly calculate volume', () => {
    const expectedVolume = (1 / 3) * Math.PI * 5 * 5 * 10;
    expect(cone.volume()).toBeCloseTo(expectedVolume);
  });



  test('should return false if radius or height is invalid', () => {
    const invalidCone = new Cone(-5, 10);
    expect(invalidCone.isValid()).toBe(false);

    const invalidCone2 = new Cone(5, -10);
    expect(invalidCone2.isValid()).toBe(false);

    const invalidCone3 = new Cone(5, 0);
    expect(invalidCone3.isValid()).toBe(false);
  });



  test('should return NaN if calculation methods are called with invalid dimensions', () => {
    const invalidCone = new Cone(-5, 10);
    expect(invalidCone.slantHeight()).toBeNaN();
    expect(invalidCone.lateralSurfaceArea()).toBeNaN();
    expect(invalidCone.baseArea()).toBeNaN();
    expect(invalidCone.totalSurfaceArea()).toBeNaN();
    expect(invalidCone.volume()).toBeNaN();
  });
});
