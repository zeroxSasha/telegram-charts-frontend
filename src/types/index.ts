export interface Collection {
  name: string;
  floor_price: string;
  logo: string;
}

export interface ApiResponse {
  last_updated: string;
  collections: Collection[];
}
