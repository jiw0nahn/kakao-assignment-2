import { useState } from "react";

export default function TodoItem({ todo, onDelete, onToggle, onEdit}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };
  
  return (
    <li className="flex items-center justify-between gap-2.5 p-3.75 mb-3 border border-solid border-[#ececec] rounded-xl bg-white">
      {
        isEditing ? (
          <input
            value={editText}
            className="focus:outline-none flex-1 border border-solid border-gray-300 rounded-sm px-2 py-1 mr-10"
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <span
            className={
              todo.completed
                ? "line-through text-gray-400"
                : ""
            }
          >
            {todo.text}
          </span>
        )
      }
      <div className="flex gap-2">
        {
          isEditing? (
            <button
              className="cursor-pointer rounded-lg px-3 py-2 text-[13px] bg-[#ece8ff] text-[#672be0]"
              onClick={handleSave}
            >
              저장
            </button>
          ) : (
            <>
              <button
                className="cursor-pointer rounded-lg px-3 py-2 text-[13px] bg-[#ece8ff] text-[#672be0]"
                onClick={() => {
                  setEditText(todo.text);
                  setIsEditing(true);
                }}
              >
                수정
              </button>
              <button
                className="cursor-pointer rounded-lg px-3 py-2 text-[13px] bg-[#672be0] text-white"
                onClick={() => onToggle(todo.id)}>
                완료
              </button>
              <button
                className="cursor-pointer rounded-lg px-3 py-2 text-[13px] bg-[#ffe7e7] text-[#e53935]"
                onClick={() => onDelete(todo.id)}
              >
                삭제
              </button>
            </>
          )
        }
      </div>
    </li>
  );
}
