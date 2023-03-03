import React from "react";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2  text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <section className=" flex flex-row space-x-3 justify-center   ">
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h3>Examples</h3>
          </div>
          <div className=" flex flex-col space-y-2">
            <p className="infoText">Explain Something To me</p>
            <p className="infoText">
              What is the difference between a dog and a cat?
            </p>
            <p className="infoText">What is the color of the sun?</p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h3>Examples</h3>
          </div>
          <div className=" flex flex-col space-y-2">
            <p className="infoText">Change the chat GPT model to use</p>
            <p className="infoText">
              Messenger are stored in firebase's Firestore
            </p>
            <p className="infoText">
              Hot Toast notifications when ChatGPT is thinking!
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h3>Examples</h3>
          </div>
          <div className=" flex flex-col space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">Limited knowlegde of world</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
