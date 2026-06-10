import FilterButtons from "./components/FilterButtons";
import TodoInput from "./components/TodoInput";
import WeeklyCalendar from "./components/WeeklyCalendar";
import TodoList from "./components/TodoList";

import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [currentWeek, setCurrentWeek] = useState(() => {
    const saved = localStorage.getItem("currentWeek");
    return saved ? new Date(saved) : new Date();
  });
  const [filter, setFilter] = useState("all");

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(() => {
    const saved = localStorage.getItem("selectedDate");
    return saved ? new Date(saved) : new Date();
  });

  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos]); // toods가 바뀔 때마다 로컬 스토리지에 자동 저장

  useEffect(() => {
  localStorage.setItem(
    "currentWeek",
    currentWeek.toISOString()
  );
}, [currentWeek]); // 현재 보고있는 주 저장

useEffect(() => {
  localStorage.setItem(
    "selectedDate",
    selectedDate.toISOString()
  );
}, [selectedDate]);

  // todo 추가
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      date: selectedDate,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  // todo 삭제
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };

  // todo 완료
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed:
                !todo.completed,
            }
          : todo
      )
    );
  };

  // todo 수정
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: newText,
            }
          : todo
      )
    );
  };

  // 날짜 비교용 함수
  const isSameDate = (a, b) => {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  };

  // 날짜+상태로 필터링된 배열 만들기
  const filteredTodos = todos.filter((todo) => {
      // 날짜 먼저 확인
    const sameDate = isSameDate(
      new Date(todo.date),
      selectedDate
    );
    if (!sameDate) {
      return false;
    }

    // 상태 필터
    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  })

  return (
    <div className="min-h-screen bg-purple-50 flex justify-center items-center font-[Pretendard]">
      <div className="min-w-200 bg-white rounded-2xl py-10 px-15 shadow-2xl">
        <h1 className="mb-5 text-[#672be0] text-4xl font-extrabold">
          Todo List
        </h1>

        <WeeklyCalendar
          currentWeek={currentWeek}
          setCurrentWeek={setCurrentWeek}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          todos={todos}
        />

        <TodoInput
          onAddTodo={addTodo}
        />

        <FilterButtons
          filter={filter}
          setFilter={setFilter}
        />

        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
