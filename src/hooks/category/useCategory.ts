import { useDispatch, useSelector } from 'react-redux';
import {
  categoryRemove,
  categoryNameUpdate,
  attributeAdd,
  attributeRemove,
  attributeUpdate,
  categoryTitleFieldUpdate,
} from '@store/category/reducer';
import { IAttribute, ICategory } from '@store/category/type';
import { IRootState } from 'store/store';

export const useCategory = (id: string) => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state: IRootState) => state.category);
  const category = categories.find(category => category.id === id) as ICategory;

  const removeCategory = () => {
    dispatch(
      categoryRemove({
        id,
      }),
    );
  };

  const updateCategoryName = (name: string) => {
    dispatch(
      categoryNameUpdate({
        id,
        name,
      }),
    );
  };

  const updateCategoryTitleField = (titleField: string) => {
    dispatch(
      categoryTitleFieldUpdate({
        id,
        titleField,
      }),
    );
  };

  const addAttribute = (attribute: IAttribute) => {
    dispatch(
      attributeAdd({
        id,
        attribute,
      }),
    );
  };

  const removeAttribute = (attributeId: string) => {
    dispatch(
      attributeRemove({
        id,
        attributeId,
      }),
    );
  };

  const updateAttribute = (attribute: IAttribute) => {
    dispatch(
      attributeUpdate({
        id,
        attribute,
      }),
    );
  };

  return {
    category,
    removeCategory,
    updateCategoryName,
    updateCategoryTitleField,
    addAttribute,
    removeAttribute,
    updateAttribute,
  };
};
