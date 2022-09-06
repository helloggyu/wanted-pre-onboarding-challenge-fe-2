//@ts-check

/** 
 * @description 할 일
 * @typedef {Object} todo
 * @property {number} id - 할일 아이디
 * @property {string} content - 할일 내용
 * @property {boolean} done - 할일 완료여부
 * @property {string} category - 할일 대표 카테고리
 * @property {string[]=} tags -관련 태그
 */

/**
 * @description 할 일 목록
 * @name todoList
 * @type {todo[]}
 */

let todoList=[]


/**
 * @description 할 일 추가
 * @function createTodo
 * @param {todo} [todoParams]
 * @example createTodo(todo)
 */

const createTodo = (todoParams) => {}


/**
 * @description 특정 id 기반으로 할 일 조회
 * @function getTodo
 * @param {todo} todoParams
 * @returns todoList
 * @example getTodo({todo.id})
 */

 const  getTodo = ({id}) => {
  return todoList;
 }


 /**
 * @description 할 일 수정
 * @function updateTodo
 * @param {todo} todoParams
 * @returns todoList
 * @example updateTodo(todo)
 */

  const updateTodo = (todoParams) => {
    return todoList;
  }


/**
 * @description 할 일 삭제
 * @function deleteTodo
 * @param {todo} todoParams
 * @returns todoList
 * @example deleteTodo(todo)
 */

  const deleteTodo = ({id, tags}) => {
     return todoList;
  }






