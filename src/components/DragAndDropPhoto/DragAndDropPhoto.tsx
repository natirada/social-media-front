import React, { FC, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FcAddImage } from "react-icons/fc";
import { VscChromeClose } from "react-icons/vsc";

import * as Styles from "./DragAndDropPhoto.style";

interface Props {
  handleClose: () => void;
  setAsset: (image: Blob) => void;
}

export const DragAndDropPhoto: FC<Props> = ({ handleClose, setAsset }) => {
  const [image, setImage] = useState("");
  const onDrop = useCallback((acceptedFiles) => {
    console.log({ acceptedFiles });
    const myBlob = acceptedFiles[0];
    setImage(URL.createObjectURL(myBlob));
    setAsset(myBlob);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Styles.Container>
      <Styles.CloseBtn onClick={handleClose}>
        <VscChromeClose size={20} />
      </Styles.CloseBtn>
      <div {...getRootProps()}>
        {image ? (
          <Styles.Image src={image} alt="" />
        ) : (
          <>
            <input {...getInputProps()} />
            {isDragActive ? (
              <div>
                <p>Drop the files here ...</p>
              </div>
            ) : (
              <div>
                <FcAddImage size={40} />
                <h3>Add Photos/Videos</h3>
                <p>or drag and drop</p>
              </div>
            )}
          </>
        )}
      </div>
    </Styles.Container>
  );
};
