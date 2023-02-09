import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import IconBrand from "../../assets/icon-brand-recognition.svg";
import iconDetailed from "../../assets/icon-detailed-records.svg";
import IconFully from "../../assets/icon-fully-customizable.svg";
import Generatelink from "../Generatelink/Generatelink";
import copy from "copy-to-clipboard";
import Card from "./Card";

function Dashboard() {
  const [shortLinks, setShortLinks] = useState([]);
  const [linkItem, setLinkItem] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [undefinedLink, setUndefinedLink] = useState(false);

  useEffect(() => {
    const fetchShortLinks = () => {
      const response = localStorage.getItem("shortLinks");
      if (response != null) {
        const data = JSON.parse(response);
        setShortLinks(data);
      }
    };

    fetchShortLinks();
  }, []);

  const handlesubmit = () => {
    const fetchShortLinks = async () => {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${linkItem}`
      );
      const data = await response.json();
      const newArray = [data.result, ...shortLinks];
      setShortLinks(newArray);
      const dataString = JSON.stringify(newArray);
      localStorage.setItem("shortLinks", dataString);
      setLinkItem("");

      if (data.result === undefined) {
        setUndefinedLink(true);
        setTimeout(() => {
          setUndefinedLink(false);
        }, 3000);
      }

      console.log(data.result);
    };

    if (linkItem === "") {
      setIsEmpty(true);
      setTimeout(() => {
        setIsEmpty(false);
      }, 3000);
    } else {
      fetchShortLinks();
    }
  };

  const handleCopy = (copiedText, id) => {
    copy(copiedText);
    document.getElementById(`${id}`).innerHTML = "Copied!";
  };

  return (
    <section className="dashboard">
      <Generatelink
        setLinkItem={setLinkItem}
        handlesubmit={handlesubmit}
        isEmpty={isEmpty}
        linkItem={linkItem}
        undefinedLink={undefinedLink}
        setShortLinks={setShortLinks}
      />
      <div className="container">
        {shortLinks?.length !== 0 ? (
          <div>
            {shortLinks?.map((item, index) => (
              <div key={index}>
                {item != null && (
                  <div className="short-links">
                    <p>{item.original_link}</p>
                    <div className="clipboard">
                      <p>{item.short_link}</p>
                      <button
                        id={`${index}`}
                        onClick={() => handleCopy(item.short_link, index)}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        <div className="dashboard-text">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="dashboard-items">
          <Card
            IconUrl={IconBrand}
            AltText={"Brand"}
            title={"Brand Recognition"}
            subtitle={`Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.`}
          />
          <Card
            IconUrl={iconDetailed}
            AltText={"Brand"}
            title={"Detailed Records"}
            subtitle={`Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.`}
          />
          <Card
            IconUrl={IconFully}
            AltText={"Fully"}
            title={"Fully Customizable"}
            subtitle={`Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.`}
          />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
