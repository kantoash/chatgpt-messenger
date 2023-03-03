import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isChatGPT = message.user.name === "ChatGPT";
  console.log(message);
  
  return (
    <div className={`py-2.5 text-white ${isChatGPT && 'bg-[#434654]'} rounded-xl m-3  `}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} className="h-8 w-8" alt="" />
        <p className="pt-1 text-sm ">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
