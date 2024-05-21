import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Camera } from "./camera";
import { Root, Preview, Footer, GlobalStyle } from "./styles";

function App() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  useEffect(() => {
    if (cardImage) {
      console.log(URL.createObjectURL(cardImage));
    }
  }, [cardImage]);

  return (
    <Fragment>
      <Root>
        {isCameraOpen && (
          <Camera
            onCapture={(blob) => setCardImage(blob)}
            onClear={() => setCardImage(undefined)}
          />
        )}

        {cardImage && (
          <div>
            <h2>Preview</h2>
            <Preview src={cardImage && URL.createObjectURL(cardImage)} />
          </div>
        )}

        <Footer>
          <button
            onClick={() => setIsCameraOpen(true)}
            style={{ borderRadius: "5px" }}
          >
            Open Camera
          </button>
          <button
            onClick={() => {
              setIsCameraOpen(false);
              setCardImage(undefined);
            }}
            style={{ borderRadius: "5px" }}
          >
            Close Camera
          </button>
        </Footer>
      </Root>
      <GlobalStyle />
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
