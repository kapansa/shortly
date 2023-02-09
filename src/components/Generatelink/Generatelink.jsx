import React from "react";
import "./Generatelink.css";

function Generatelink({
  setLinkItem,
  handlesubmit,
  isEmpty,
  linkItem,
  undefinedLink,
  setShortLinks,
}) {
  return (
    <section className="generateLink container">
      <div className="input-field">
        <input
          onChange={(e) => setLinkItem(e.target.value)}
          type="text"
          placeholder="Shorten a link here..."
          value={linkItem}
          className={`${isEmpty && "outline"}`}
        ></input>
        <button onClick={() => handlesubmit()}>Shorten It!</button>
        <button
          id="clear-list"
          onClick={() => {
            localStorage.clear();
            setShortLinks([]);
          }}
        >
          Clear List
        </button>
        <br />
        {isEmpty && <i>Please add a link</i>}
        {undefinedLink && <i>No short link found</i>}
      </div>
    </section>
  );
}

export default Generatelink;
