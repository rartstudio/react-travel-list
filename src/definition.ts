export interface PackedItem {
  id: number;
  quantity: number;
  description: string;
  packed: boolean;
}

export enum SortItem {
  INPUT = "input",
  DESCRIPTION = "description",
  PACKED = "packed"
}