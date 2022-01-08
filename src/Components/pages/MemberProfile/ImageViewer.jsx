import { ArrowBackIos, ArrowForwardIos, Close } from "@material-ui/icons";
const ImageViewer = ({ img, setActiveImage }) => {
  return (
    <div id='slide' style={{ display: img && "flex" }} className='image-viewer'>
      <span className='close' onClick={() => setActiveImage("")}>
        <Close />
      </span>
      <img src={img} alt='' />

      <span className='arrow left'>
        <ArrowBackIos className='icon' />
      </span>
      <span className='arrow right'>
        <ArrowForwardIos className='icon' />
      </span>
    </div>
  );
};

export default ImageViewer;
