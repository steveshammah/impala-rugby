import { Modal, Button, Typography, Box } from "@mui/material/";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
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
      <Modal
        keepMounted
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'>
        <Box sx={style}>
          <Typography id='keep-mounted-modal-title' variant='h6' component='h2'>
            Deleting post with ID: {activeArticle}
          </Typography>
          <Typography id='keep-mounted-modal-description' sx={{ mt: 2 }}>
            Are you sure you want to delete article?
            <span className="'delete-btn-wrapper">
              <Button
                variant='contained'
                color='error'
                onClick={() => handleDelete(activeArticle)}>
                Yes
              </Button>
              <Button
                color='primary'
                variant='contained'
                onClick={() => setModalOpen(false)}>
                No
              </Button>
            </span>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteModal;
