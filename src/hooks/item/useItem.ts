import { useDispatch } from 'react-redux';
import { itemRemove, itemUpdate } from 'store/item/reducer';

export const useItem = (id: string) => {
  const dispatch = useDispatch();

  const updateItem = (attribute: string, value: any) => {
    dispatch(
      itemUpdate({
        id,
        attribute,
        value,
      }),
    );
  };

  const removeItem = () => {
    dispatch(
      itemRemove({
        id,
      }),
    );
  };

  return { removeItem, updateItem };
};
