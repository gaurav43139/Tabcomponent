import { useEffect, useState } from "react";

export default function Tab({ children }) {
  console.log(children);
  const [headers, setHeaders] = useState([]);
  const [mapContent, setMapContent] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    const head = [];
    const map = {};
    children.map((item) => {
      head.push(item.props.header);
      map[item.props.header] = item.props.children;
    });
    setHeaders(head);
    setMapContent(map);
    setActiveTab(head[0]);
  }, []);
  console.log(headers, "h");
  console.log(mapContent, "m");
  console.log(activeTab, "a");
  function handleClick(item) {
    setActiveTab(item);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        {headers.map((item) => (
          <div
            style={{
              borderBottom: item === activeTab ? "1px solid black" : "",
            }}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
        <br></br>
      </div>
      <div style={{ marginTop: "10px" }}>{mapContent[activeTab]}</div>
    </div>
  );
}
