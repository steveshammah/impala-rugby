import React from "react";

const DeleteModal = ({
  modalOpen,
  handleClose,
  activeArticle,
  handleDelete,
  setModalOpen,
}: any) => {
  return (
    <div
      className={`${
        modalOpen ? "flex" : "hidden"
      } flex-col items-center justify-between bg-white border-red-400 border-2 p-4 h-32 w-1/4 absolute top-0 left-1/2 rounded-md shadow-md  -translate-x-1/2 translate-y-1/2`}
    >
      <h2 className="">
        Are you sure you want to delete
        <br />
        <i className="capitalize font-semibold">{activeArticle?.title}</i>
      </h2>
      <div className="flex justify-between sm:w-2/3 w-full text-sm">
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
