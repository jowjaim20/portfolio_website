import React from "react";
import { schedule } from "../enums";
const Schedule = () => {
  return (
    <div className=" flex flex-col gap-3 p-2 bg-transparent border-2 border-green-900 rounded-lg">
      <div> Last Results</div>
      <div>
        {schedule.map((sched) => (
          <div className=" flex">
            <div className=" bg-orange-300 p-1 flex justify-center items-center w-10 rounded">
              {sched.day}
            </div>
            <div className="flex justify-center items-center">
              {sched.game.map((num) => (
                <div className=" w-2 h-2 flex justify-center items-center p-3 text-sm text-white font-medium rounded-full bg-slate-600">
                  {num}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
