import { AttributeType } from '@store/category/type';

export interface IAttributeType {
  id: AttributeType;
  label: string;
}

export const AttributeTypes: IAttributeType[] = [
  {
    id: 'Text',
    label: 'Text',
  },
  {
    id: 'Checkbox',
    label: 'Checkbox',
  },
  {
    id: 'Date',
    label: 'Date',
  },
  {
    id: 'Number',
    label: 'Number',
  },
];
