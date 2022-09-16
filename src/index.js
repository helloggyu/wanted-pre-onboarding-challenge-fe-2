//@ts-check
 
/** 
 * @description 할 일
 * @typedef {Object} todo
 * @property {number} id - 할일 아이디
 * @property {string} content - 할일 내용
 * @property {boolean} done - 할일 완료여부
 * @property {string} category - 할일 대표 카테고리
 * @property {string[]} tags -관련 태그
 */

/**
 * @description 할 일 목록
 * @name todoList
 * @type {todo[]}
 */

// let todoList=[];

//test
let todoList=[
  { id: 1, content: '타운홀미팅', done: false, category:'회사' ,tags:['미팅'] },
  { id: 2, content: '엄마생일파티', done: false  ,category:'집' ,tags:['생일' , '선물']},
  { id: 3, content: '미용실예약', done: true, category:'기타' ,tags:['생일' , '선물']},
];


/**
 * @description 할 일 추가
 * @function createTodo
 * @param {todo=} todoParams
 */

const createTodo = (todoParams) => {
  if (!todoParams) return;
  todoList.push(todoParams);
}


/**
 * @description 특정 id 기반으로 할 일 조회
 * @function getTodo
 * @param {number=} idParams - 조회하고싶은 할일 아이디
 * @returns todoList
 */

 const  getTodo = (idParams) => {
  if (!idParams) return todoList;
  let newTodoList = todoList.filter( (todo) => (todo.id !== idParams) );
  todoList = newTodoList;
 }


 /**
 * @description 할 일 수정
 * @function updateTodo
 * @param {todo} todoParams
 * @returns todoList
 */

  const updateTodo = (todoParams) => {
    return todoList;
  }


/**
 * @description 특정 할 일 삭제
 * @function deleteTodo
 * @param {todo} todoParams
 * @returns todoList
 * @example deleteTodo(todo)
 */

  const deleteTodo = ({id}) => {
    todoList = todoList.filter( (todo) => (todo.id !== id) );
  }

  /**
 * @description 모든 할 일 삭제
 * @function deleteAllTodo
 * @returns todoList
 * @example deleteTodo()
 */

  const deleteAllTodo = () => {
    todoList = [];
  }

    /**
 * @description 특정할일의 특정태그 삭제
 * @function deleteTodoTag
 * @param {todo} todoParams
 * @param {string} deletedTagName - 삭제하고 싶은 태그명
 * @returns todoList
 */

  const deleteTodoTag = ({ id }, deletedTagName) => {
    const filteredTodoList = todoList.filter( (todo) => (todo.id === id) );
    if(!filteredTodoList) return ;
    const todoIndex = todoList.findIndex((todo) => (todo.id === id));
    const todoTags = filteredTodoList[todoIndex].tags;
    const deletedTagIndex = todoTags.indexOf(deletedTagName);
    todoList[todoIndex].tags.splice(deletedTagIndex,1);
  }
  
    /**
 * @description 특정할일의 태그 전체를 삭제
 * @function deleteALLTodoTag
 * @param {todo} todoParams
 * @returns todoList
 */

  const deleteALLTodoTag = ({ id }) => {
    const filteredTodoList = todoList.filter( (todo) => (todo.id === id) );
    if(!filteredTodoList) return;
    const todoIndex = todoList.findIndex((todo) => (todo.id === id));
    todoList[todoIndex].tags=[];
  }
  






