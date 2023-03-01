export type AttributeType = 'Text' | 'Checkbox' | 'Date' | 'Number';

export interface IAttribute {
  id: string;
  type: AttributeType;
  label: string;
}

export interface ICategory {
  id: string;
  name: string;
  titleField: string | null;
  attributes: IAttribute[];
}

export interface IInitialState {
  categories: ICategory[];
}
