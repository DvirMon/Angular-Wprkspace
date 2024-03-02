import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "isUnit",
  standalone: true,
})
export class IsUnitPipe implements PipeTransform {
  transform(
    value: boolean | null,
    type: "temp" | "length" | "amount" | "mass"
  ): string {
    switch (type) {
      case "temp":
        return this.getTemperatureUnit(value);
      case "length":
        return this.getLengthUnit(value);
      case "amount":
        return this.getAmountUnit(value);
      case "mass":
        return this.getMassUnit(value);
      default:
        return "";
    }
  }

  private getTemperatureUnit(isMetric: boolean | null): string {
    return isMetric ? "℃" : "℉";
  }

  private getLengthUnit(isMetric: boolean | null): string {
    // Assuming metric unit is meter (m) and imperial is feet (ft)
    return isMetric ? "m" : "ft";
  }

  private getAmountUnit(isMetric: boolean | null): string {
    // Assuming metric unit is liter (L) and imperial is gallon (gal)
    return isMetric ? "L" : "gal";
  }

  private getMassUnit(isMetric: boolean | null): string {
    // Assuming metric unit is kilogram (kg) and imperial is pound (lb)
    return isMetric ? "kg" : "lb";
  }
}
