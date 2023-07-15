export * from "./manga-maker";

export interface CloudinaryImage {
  public_id: string;
  format: string;
  version: number;
  width: number;
  height: number;
  url: string;
  secure_url: string;
}

export interface TCoordinate {
  lat: number
  lng: number
}