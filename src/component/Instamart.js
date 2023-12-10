import { useState } from "react";

function Section({ title, description, isVisible, setIsVisible, }) {
  return (
    <>
      <div className="border-4">
        <h1 className="m-2 p-2 font-bold text-2xl">{title}</h1>
        {isVisible ? (
          <>
            <button
              className=" font-bold underline ml-2"
              onClick={() => {
                setIsVisible(false);
              }}
            >
              Hide
            </button>
            <p className="m-2 p-2">{description}</p>
          </>
        ) : (
          <button
            className=" font-bold underline"
            onClick={(e) => {
              setIsVisible(true);
            }}
          >
            Show
          </button>
        )}
      </div>
    </>
  );
}

function Instamart() {
  const [visibleConfig, setVisibleConfig] = useState("about");
  return (
    <>
      <Section
        title="About page"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        isVisible={visibleConfig === "about"}
        setIsVisible={() => {
          setVisibleConfig('about');
        }}
      />
      <Section
        title="contact page"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        isVisible={visibleConfig === "contact"}
        setIsVisible={() => {
          setVisibleConfig("contact");
        }}
      />
      <Section
        title="carrier page"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        isVisible={visibleConfig === "carrier"}
        setIsVisible={() => {
          setVisibleConfig("carrier");
        }}
      />
    </>
  );
}

export default Instamart;
