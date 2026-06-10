const getWeekDates = (date) => {
  const current = new Date(date);
  const day = current.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  const monday = new Date(current);
  monday.setDate(current.getDate() + mondayOffset);

  return Array.from(
    { length: 7 },
    (_, i) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      return date;
    }
  );
};

// 날짜 비교
const isSameDate = (a, b) => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};

export default function WeeklyCalendar({ selectedDate, setSelectedDate, currentWeek, setCurrentWeek, todos }) {
  const weekDates = getWeekDates(currentWeek);
  const dayNames = ["월", "화", "수", "목", "금", "토", "일"];

  const formatDate = (date) => {
    return `${date.getFullYear()}.${
      String(date.getMonth() + 1).padStart(2, "0")
    }.${
      String(date.getDate()).padStart(2, "0")
    }`;
  };

  const getTodoCount = (date) => {
    return todos.filter((todo) => {
      const todoDate = new Date(todo.date);

      return isSameDate(todoDate, date);
    }).length;
  };
  
  return (
    <div>
      <div className="flex items-center justify-center gap-5 mb-6">
        <button
          className="w-10 h-10 rounded-lg cursor-pointer bg-[#672be0] text-white hover:opacity-80"
          onClick={() => {
            const prevWeek = new Date(currentWeek);
            prevWeek.setDate(prevWeek.getDate() - 7);
            setCurrentWeek(prevWeek);
          }}  
        >
          ◀
        </button>

        <h1 className="min-w-45 text-2xl font-bold text-center text-gray-600">
          {formatDate(weekDates[0])}
          {" ~ "}
          {formatDate(weekDates[6])}
        </h1>

        <button
          className="w-10 h-10 rounded-lg cursor-pointer bg-[#672be0] text-white hover:opacity-80"
          onClick={() => {
            const nextWeek = new Date(currentWeek);
            nextWeek.setDate(nextWeek.getDate() + 7);
            setCurrentWeek(nextWeek);
          }}  
        >
          ▶
        </button>
      </div>

      <div className="flex flex-row items-center justify-center gap-5 text-gray-500">
        {weekDates.map((date, index) => {
          const isSelected = isSameDate(date, selectedDate);

          const isToday = isSameDate(date, new Date());
          
          const todoCount = getTodoCount(date);
          
          const cardClass = isSelected
            ? "bg-[#672be0] text-white shadow-xl"
            : todoCount > 0
              ? "bg-[#f1ebff] hover:bg-purple-200"
              : "bg-white hover:bg-purple-50";

          return (
            <button
              key={index}
              onClick={() => setSelectedDate(date)}
              className={`
                flex flex-col items-center justify-center w-20 h-25 rounded-xl pt-3 pb-4 px-8 cursor-pointer transition-colors duration-100
                ${cardClass}
              `}
            >
              <>
              {isToday && (
                <p className="text-[10px] font-bold text-purple-400">
                  TODAY
                </p>
              )}

              <p>
                {dayNames[index]}
              </p>
            </>

              <p className="font-bold">
                {date.getDate()}
              </p>

              <p className="text-gray-400 text-xs">
                {todoCount}
              </p>
            </button>
          );
        })}
      </div>
      <p className="mt-5 text-center text-gray-500  mb-5">
        {formatDate(selectedDate)}{"의 할 일"}
      </p>
    </div>
  );
}
