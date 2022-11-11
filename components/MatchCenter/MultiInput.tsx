import React from "react";
import { IFixture } from "../../stores/gamesStore";
interface Props {
  entry: string;
  fixture: IFixture;
  team?: string;
  fields: any[];
  updateHandler: (
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: string
  ) => void;
}
const MultiInput = ({ entry, fixture, team, fields, updateHandler }: Props) => {
  return (
    <div className="w-full flex-wrap">
      {fields.map((field, index: number) => (
        <input
          name={field.name}
          className=" border-b-2 border-slate-200  outline-none text-lg w-2/5 m-4"
          aria-label={field.label}
          placeholder={field.placeholder}
          onChange={(e) =>
            updateHandler(
              entry,
              e.target.value.toString(),
              team ? team : "impala",
              field.name
            )
          }
          required
          value={fixture && fixture[entry]}
          key={index}
        />
      ))}
    </div>
  );
};

export default MultiInput;

// team list   shammah || impala || 8

// teamlist:
//  impala
// 1 : shammah
