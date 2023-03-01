export interface IItemValues {
  attribute: string;
  value: any;
}
export interface IItem {
  id: string;
  category: string;
  values: IItemValues[];
}

export interface IInitialState {
  items: IItem[];
}
