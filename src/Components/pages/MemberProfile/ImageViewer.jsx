
const ImageViewer = ({ img, setActiveImage }) => {
  return (
    <div id='slide' style={{ display: img && "flex" }} className='image-viewer'>
      <span className='close' onClick={() => setActiveImage("")}>
        X
      </span>
      <img src={img} alt='' />

      <span className='arrow'>Left</span>
      <span className='arrow'>Right</span>
    </div>
  );
};

export default ImageViewer;
