import { useDispatch } from 'react-redux';
import {
  categoryRemove,
  categoryNameUpdate,
  attributeAdd,
  attributeRemove,
  attributeUpdate,
  categoryTitleFieldUpdate,
} from '@store/category/reducer';
import { IAttribute } from '@store/category/type';

export const useCategory = (id: string) => {
  const dispatch = useDispatch();

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
    removeCategory,
    updateCategoryName,
    updateCategoryTitleField,
    addAttribute,
    removeAttribute,
    updateAttribute,
  };
};
