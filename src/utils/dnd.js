export const onDragStart = (dragItem, idx) => {
  dragItem.current = idx
}

export const onDragEnter = (dragOver, idx) => {
  dragOver.current = idx
}

export const onDragEnd = (list, dragItem, dragOver, setList) => {
  const copyList = [...list]
  const getDragItem = copyList[dragItem.current]
  copyList.splice(dragItem.current, 1);
  copyList.splice(dragOver.current, 0, getDragItem); 
  dragItem.current = null;
  dragOver.current = null;
  setList(copyList);
}

export const onDragOver = (e) => {
  e.preventDefault()
}