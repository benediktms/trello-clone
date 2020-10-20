import { useDrag } from 'react-dnd';
import { useAppState } from './AppStateContext';
import { DragItem } from './DragItem';

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [_, drag] = useDrag({
    item,
    begin: () =>
      dispatch({
        type: 'SET_DRAGGED_ITEM',
        payload: item,
      }),
    end: () =>
      dispatch({
        type: 'SET_DRAGGED_ITEM',
        payload: undefined,
      }),
  });
  return { drag };
};
