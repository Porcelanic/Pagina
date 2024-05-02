import React, { createContext, useContext, useState } from "react";

const OffcanvasContext = createContext();

export const OffcanvasProvider = ({ children }) => {
  const [show2, setShow2] = useState(false);
  const handleClose1 = () => {
    setShow2(false);
  };
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertState, setAlertState] = useState("");
  const [estampable, setEstampable] = useState(false);
  const [estampados, setEstampados] = useState([]);
  const [estampadoElegido, setEstampadoElegido] = useState(-1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [show, setShow] = useState(false);

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

  

  return (
    <OffcanvasContext.Provider
      value={{
        show,
        setShow,
        handleShow,
        handleClose,
        show2,
        setShow2,
        handleClose1,
        selectedImage,
        showAlert,
        setShowAlert,
        alertText,
        setAlertText,
        alertState,
        setAlertState,
        estampable,
        setEstampable,
        estampados,
        setEstampados,
        estampadoElegido,
        setEstampadoElegido,
      }}
    >
      {children}
    </OffcanvasContext.Provider>
  );
};

export const useOffcanvas = () => {
  return useContext(OffcanvasContext);
};
