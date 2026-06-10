import { useState } from "react";

export default function TodoInput({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onAddTodo(text);
    setText("");
  }

  return (
    <div className="flex gap-3 mb-5">
      <input className="flex-1 p-3 border-solid border border-[#ddd] rounded-xl text-[15px] focus:outline-none focus:border-[#672be0]"
        type="text"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className = "bg-[#672be0] text-white rounded-lg px-6 cursor-pointer font-bold hover:opacity-90"
        onClick={handleSubmit}>
        추가
      </button>
    </div>
  );
}
