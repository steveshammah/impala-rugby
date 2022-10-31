import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",

  p: 4,
  color: "black",
};

const DeleteModal = ({
  modalOpen,
  handleClose,
  activeArticle,
  handleDelete,
  setModalOpen,
}) => {
  return (
    <>
      <div
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <div>
          <h6 id="keep-mounted-modal-title">
            Deleting post with ID: {activeArticle}
          </h6>
          <h2 id="keep-mounted-modal-description">
            Are you sure you want to delete article?
            <span className="'delete-btn-wrapper">
              <button color="error" onClick={() => handleDelete(activeArticle)}>
                Yes
              </button>
              <button color="primary" onClick={() => setModalOpen(false)}>
                No
              </button>
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
