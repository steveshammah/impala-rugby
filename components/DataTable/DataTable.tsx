import React, { ReactNode } from "react";

interface Column {
  label: string;
  type: string;
  hide?: "sm" | "md" | "lg";
}

interface Props {
  title?: string;
  columns: Column[];
  children: ReactNode;
}
const DataTable = ({ title, columns, children }: Props) => {
  return (
    <div className="league-standings  p-2 text-blackX flex flex-col items-center justify-center">
      <h2 className="uppercase text-2xl text-left w-full py-5">
        {title && title}
      </h2>
      <table className="table-fixed w-full border-2 border-slate-100">
        <thead className="text-left border-b-2 border-black-100">
          {columns.map((column, index) => (
            <th
              className={`cursor-pointer ${index === 0 && "p-2"} ${
                column.hide && `${column.hide}:table-cell hidden`
              }`}
            >
              {column.label}
            </th>
          ))}
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default DataTable;
