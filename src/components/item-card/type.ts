import { IAttribute } from 'store/category/type';
import { IItem } from 'store/item/type';

export interface IItemCardProps {
  item: IItem;
  titleField: string | null;
  attributes: IAttribute[];
}
