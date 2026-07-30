import { cars } from "@/data/cars";

export function getBrands() {
  return cars;
}

export function getBrand(id: string) {
  return cars.find((b) => b.id === id);
}