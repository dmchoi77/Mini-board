//action type
const MODE_REMOVE = 'REMOVE';
const MODE_SAVE = 'SAVE';
const MODE_SELECT = 'SELECT_ROW';

//action create function
export const boardSave = (saveData) => ({
  type: MODE_SAVE,
  saveData: {
    boardId: saveData.boardId,
    boardTitle: saveData.boardTitle,
    boardContent: saveData.boardContent
  }
});

export const boardRemove = (boardId) => ({
  type: MODE_REMOVE,
  boardId: boardId
});

export const boardSelectRow = (boardId) => ({
  type: MODE_SELECT,
  boardId: boardId
});

// initState
const initialState = {
  boards: [
    {
      boardId: 1,
      boardTitle: '제목1',
      boardContent: '내용내용내용1'
    },
    {
      boardId: 2,
      boardTitle: '제목2',
      boardContent: '내용내용내용2'
    },
    {
      boardId: 3,
      boardTitle: '제목3',
      boardContent: '내용내용내용3'
    },
    {
      boardId: 4,
      boardTitle: '제목4',
      boardContent: '내용내용내용4'
    },
    {
      boardId: 5,
      boardTitle: '제목5',
      boardContent: '내용내용내용5'
    }
  ],
  lastId: 5,
  selectRowData: {}
}

//Reducer
export default function boardReducer(state = initialState, action) {

  switch (action.type) {
    case MODE_REMOVE: //선택한 boardId를 가지지 않은 data만 return
      return {
        ...state, boards: state.boards.filter(row =>
          row.boardId !== action.boardId)
      };
    case MODE_SAVE:
      if (action.saveData.boardId === '') { //boardId가 없다면 신규 데이터 저장
        return {
          lastId: state.lastId + 1,
          boards: state.boards.concat({
            ...action.saveData,
            boardId: state.last + 1
          }),
          selectRowData: {} //??
        };
      } else { //boardId가 이미 존재하면 기존 데이터를 수정
        return { ...state, boards: state.boards.map(data => data.boardId === action.saveData.boardId ? { ...action.saveData } : data), selectRowData: {} }
      }
    case MODE_SELECT:
      return { //클릭한 열의 boardId를 가진 state만 찾아서 return
        ...state,
        selectRowData: state.boards.find(row => row.boardId === action.boardId)
      };
    default:
      return state;
  }
}