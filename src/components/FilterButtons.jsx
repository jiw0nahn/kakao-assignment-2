export default function FilterButtons({ filter, setFilter }) {
  return (
    <div className="flex justify-between gap-6 mb-4">
      <button
        className={`flex-1 text-[15px] py-2.75 rounded-3xl cursor-pointer transition-colors duration-100
          ${filter === "all"
          ? "bg-[#672be0] text-white shadow-md"
          : "bg-[#f1ebff] text-[#555] hover:bg-[#672be0] hover:text-white"}
        `}
        onClick={() => setFilter("all")}  
      >
        전체
      </button>

      <button
        className={`flex-1 text-[15px] py-2.75 rounded-3xl cursor-pointer transition-colors duration-100
          ${filter === "active"
          ? "bg-[#672be0] text-white"
          : "bg-[#f1ebff] text-[#555] hover:bg-[#672be0] hover:text-white"}
        `}
        onClick={() => setFilter("active")}
      >
        진행 중
      </button>

      <button
        className={`flex-1 text-[15px] py-2.75 rounded-3xl cursor-pointer transition-colors duration-100
          ${filter === "completed"
          ? "bg-[#672be0] text-white"
          : "bg-[#f1ebff] text-[#555] hover:bg-[#672be0] hover:text-white"}
        `}
        onClick={() => setFilter("completed")}
      >
        완료
      </button>
    </div>
  );
}
