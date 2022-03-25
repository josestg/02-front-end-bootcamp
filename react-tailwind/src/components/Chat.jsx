import icon from "./icon.svg";

const Chat = () => {
  return (
    <div className="p-6  bg-white  rounded-xl shadow-lg flex items-center space-x-4 max-h-[100px] border-2 border-red-300 ">
      <div className="shrink-0">
        <img className="h-12 w-12" src={icon} alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
};

export default Chat;
