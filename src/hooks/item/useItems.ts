import { useDispatch, useSelector } from 'react-redux';
import { itemAdd } from 'store/item/reducer';
import { IItem } from 'store/item/type';
import { IRootState } from 'store/store';

export const useItems = (id: string) => {
  const dispatch = useDispatch();
  const items = useSelector((state: IRootState) =>
    state.item.items.filter(item => item.category === id),
  );

  const addItem = (item: IItem) => {
    dispatch(
      itemAdd({
        item,
      }),
    );
  };

  return { items, addItem };
};
