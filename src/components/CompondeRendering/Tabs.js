import { createContext, useContext } from "react";
import "./Tabs.css";
const TabContext = createContext();
export default function Tabs({ children, value, onChange }) {
  return (
    <TabContext.Provider value={{ value: value, onChange: onChange }}>
      {children}
    </TabContext.Provider>
  );
}

Tabs.Heads = ({ children }) => {
  return <div className="head">{children}</div>;
};

Tabs.Items = ({ name, ind }) => {
  const { value, onChange } = useContext(TabContext);
  return (
    <div
      className={value == ind ? "headItem active" : "headItem"}
      onClick={() => {
        onChange(ind);
      }}
    >
      <h2>{name}</h2>
    </div>
  );
};

Tabs.ContentWrapper = ({ children }) => {
  return <div className="ContentWrapper">{children}</div>;
};

Tabs.ContentItems = ({ content, ind, currentIndex }) => {
  const { value } = useContext(TabContext);
  return <h2 className="ContentItems">{ind == value ? content : ``}</h2>;
};
