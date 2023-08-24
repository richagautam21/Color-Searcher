export interface ColorApiData {
    color: string;
    hex: string;
  }
  
  export interface ColorData extends ColorApiData {
    rgb: string;
    hsl: string;
  }
  
  export interface ColorApiResponse {
    description: string;
    colors: ColorApiData[];
  }