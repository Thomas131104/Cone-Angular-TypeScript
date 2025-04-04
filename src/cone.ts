/**
 * Lớp đại diện cho một hình nón.
 */
export default class Cone 
{
    private radius: number;
    private height: number;
    private readonly PI: number = Math.PI;
  
    /**
     * Tạo một đối tượng hình nón.
     * @param radius Bán kính đáy của hình nón.
     * @param height Chiều cao của hình nón.
     */
    constructor(radius: number, height: number) 
    {
        this.radius = radius;
        this.height = height;
    }
  
    /**
     * Kiểm tra xem các tham số của hình nón có hợp lệ không.
     * @returns Trả về `true` nếu hợp lệ, ngược lại trả về `false`.
     */
    public isValid(): boolean 
    {
        return !(isNaN(this.radius) || isNaN(this.height) || this.radius <= 0 || this.height <= 0);
    }
  
    /**
     * Tính độ dài đường sinh của hình nón.
     * @returns Độ dài đường sinh, hoặc `NaN` nếu giá trị không hợp lệ.
     */
    public slantHeight(): number 
    {
        return this.isValid() ? Math.sqrt(this.radius * this.radius + this.height * this.height) : NaN;
    }
  
    /**
     * Tính diện tích xung quanh của hình nón.
     * @returns Diện tích xung quanh, hoặc `NaN` nếu giá trị không hợp lệ.
     */
    public lateralSurfaceArea(): number 
    {
        return this.isValid() ? this.PI * this.radius * this.slantHeight() : NaN;
    }
  
    /**
     * Tính diện tích đáy của hình nón.
     * @returns Diện tích đáy, hoặc `NaN` nếu giá trị không hợp lệ.
     */
    public baseArea(): number 
    {
        return this.isValid() ? this.PI * this.radius * this.radius : NaN;
    }
  
    /**
     * Tính tổng diện tích của hình nón (diện tích toàn phần).
     * @returns Tổng diện tích, hoặc `NaN` nếu giá trị không hợp lệ.
     */
    public totalSurfaceArea(): number 
    {
        return this.isValid() ? this.lateralSurfaceArea() + this.baseArea() : NaN;
    }
  
    /**
     * Tính thể tích của hình nón.
     * @returns Thể tích, hoặc `NaN` nếu giá trị không hợp lệ.
     */
    public volume(): number 
    {
        return this.isValid() ? (1 / 3) * this.PI * this.radius * this.radius * this.height : NaN;
    }
  }