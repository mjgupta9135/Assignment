const Shimmer = () => {
  return (
    <div className="flex contain flex-wrap justify-around gap-8  px-11">
      {Array(15)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-[385px] card h-[380px] bg-gray-300 flex  justify-start flex-col rounded-xl cursor-pointer mb-8 p-2 pb-20 mx-[-8px] shadow-lg hover:scale-95 ease-in-out duration-100"
          >
            <div className="w-[230px] h-[180px] bg-gray-400 rounded-xl mt-[22px] mx-[64px] animate-pulse"></div>
            <div className="flex flex-col mt-10 mx-1 py-2 gap-1 rounded-md pt-4  justify-start animate-pulse items-start bg-gray-400"></div>
            <div className="flex flex-col ml-10 mr-10   py-1 gap-1 rounded-md pt-4 mt-3 justify-start animate-pulse items-start bg-gray-400"></div>
            <div className="flex flex-col mx-1 py-2 gap-1 rounded-md pt-4 mt-3 mb-[-50px] justify-start items-start animate-pulse bg-gray-400"></div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
