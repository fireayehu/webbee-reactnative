import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '@store/store';
import { categoryAdd } from '@store/category/reducer';
import { ICategory } from '@store/category/type';

export const useCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: IRootState) => state.category);

  const addCategory = (category: ICategory) => {
    dispatch(
      categoryAdd({
        category,
      }),
    );
  };

  return { categories, addCategory };
};
