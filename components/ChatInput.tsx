"use client";

import React, { FormEvent } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Message } from "../typings";
import { db } from "../firebase";
import axios from "axios";
import ModelSelection from "./ModelSelection";
import useSWR from "swr";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });
  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) {
      return;
    }

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    const docAdded = await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    console.log(docAdded);

    // const response = await fetch("/api/askQuestion", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     prompt: input,
    //     chatId,
    //     model,
    //     session,
    //   }),
    // });

    const result = await axios.post("/api/askQuestion", {
      prompt: input,
      chatId,
      model,
      session,
    });
    console.log("response", result);
  };

  return (
    <div className="bg-gray-700/50 text-gray-300 rounded-lg text-lg ">
      <form
        onSubmit={sendMessage}
        className="p-5 space-x-5 flex justify-between items-center"
      >
        <input
          value={prompt}
          disabled={!session}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your messeage here..."
          className="outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300 placeholder:text-gray-300 placeholder:text-lg "
        />
        <button
          type="submit"
          disabled={!prompt || !session}
          className="bg-[#11A37F] hover:opacity-40 text-white font-bold px-4 py-2 rounded disabled:bg-gray-600"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div className="md:hidden">
        <ModelSelection />
      </div>
    </div>
  );
}

export default ChatInput;
