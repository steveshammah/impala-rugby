import React from "react";
import { useAppStore } from "@stores/appStore";

const DeleteModal = ({
  modalOpen,
  handleClose,
  activeArticle,
  handleDelete,
  setModalOpen,
}: any) => {
  const user = useAppStore((state) => state.user);
  return (
    <div
      className={`${
        modalOpen ? "flex" : "hidden"
      } flex-col items-end justify-between bg-white border-red-400 border-2 p-2 h-32 w-1/4 absolute top-0 left-1/2 rounded-md shadow-md  -translate-x-1/2 translate-y-1/2`}
    >
      <svg
        className={`fill-current h-5 w-5 cursor-pointer text-black text-xs`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        onClick={() => setModalOpen(false)}
      >
        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
      </svg>
      <h2 className="w-full flex-1">
        {user?.username != "@guest"
          ? "Are you sure you want to delete"
          : "Contact admin to perform this action"}
        <br />
        <i className="capitalize font-semibold">{activeArticle?.title}</i>
      </h2>
      <div
        className={`${
          user?.username != "@guest" ? "flex" : "hidden"
        } justify-between sm:w-2/3 w-full text-sm`}
      >
        <button
          className="bg-primaryRed text-white w-20 py-1 px-2 rounded-md"
          onClick={() => handleDelete(activeArticle.label)}
        >
          Yes
        </button>
        <button
          onClick={() => setModalOpen(false)}
          className="bg-blackX text-white py-1 px-2 rounded-md w-20"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
