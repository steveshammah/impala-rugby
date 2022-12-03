import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] place-content-center w-full bg-whiteX bg-opacity-10">
      <div className="flex justify-center items-center gap-2 text-primaryRed">
        <span className="h-8 w-8 block rounded-full border-4 border-t-primaryRed animate-spin"></span>
        Content is loading
        <span className="animate-bounce">...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
