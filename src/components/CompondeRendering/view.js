import Tabs from "./Tabs";
import { useState } from "react";

export default function View() {
  const [currentIndex, setCurrentIndex] = useState(1);
  function handleChange(index) {
    console.log("handleChange", index);
    setCurrentIndex(index);
    return currentIndex;
  }
  return (
    <Tabs value={currentIndex} onChange={handleChange}>
      <Tabs.Heads>
        <Tabs.Items name={"Tab 1"} ind={1} onChange={handleChange} />
        <Tabs.Items name={"Tab 2"} ind={2} onChange={handleChange} />
        <Tabs.Items name={"Tab 3"} ind={3} onChange={handleChange} />
      </Tabs.Heads>

      <Tabs.ContentWrapper>
        <Tabs.ContentItems
          content={"This is Item 1"}
          ind={1}
          currentIndex={currentIndex}
        />
        <Tabs.ContentItems
          content={"This is Item 2"}
          ind={2}
          currentIndex={currentIndex}
        />
        <Tabs.ContentItems
          content={"This is Item 3"}
          ind={3}
          currentIndex={currentIndex}
        />
      </Tabs.ContentWrapper>
    </Tabs>
  );
}
