import React, { createContext, useContext, useState } from "react";

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [show2, setShow2] = useState(false);
  const [show, setShow] = useState(false);
  const [estampable, setEstampable] = useState(false);
  const [estampados, setEstampados] = useState([]);
  const [estampadoElegido, setEstampadoElegido] = useState(-1);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShow = (data) => {
    if (localStorage.getItem("username") != null) {
      localStorage.setItem("selectedShirt", JSON.stringify(data));
      setSelectedImage(data.img);
      setShow(true);
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleClose1 = () => {
    setShow2(false);
  };

  return (
    <GeneralContext.Provider
      value={{
        show,
        setShow,
        handleShow,
        handleClose,
        show2,
        setShow2,
        handleClose1,
        estampable, 
        setEstampable,
        estampados,
        setEstampados,
        estampadoElegido,
        setEstampadoElegido,
        selectedImage,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneral = () => {
  return useContext(GeneralContext);
};
