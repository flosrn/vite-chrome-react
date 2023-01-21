import { useEffect, useState } from "react";
import "./App.css";
import slackIcon from "./assets/slack.svg";
import ClipboardCopyButton from "./components/ClipboardCopyButton";

const toolbox = "eurosport-github-enhanced-toolbox";

const pullRequestTitle = document.querySelector(
  ".gh-header-title > .markdown-title"
);
const pullRequestIdNumber = document.querySelector(
  ".gh-header-title > span:nth-child(2)"
);

const pullRequestName = pullRequestTitle?.textContent
  ?.split(":")[1]
  .trimStart();
const pullRequestNumber = pullRequestIdNumber?.textContent?.split("#")[1];

function App() {
  const [count, setCount] = useState(0);
  console.log("count", count);

  return (
    <>
      <button
        aria-label="Copy pull request URL to clipboard"
        className="btn tooltipped tooltipped-s tooltipped-multiline BtnGroup-item d-flex ml-1"
        style={{ height: "28px", alignItems: "center" }}
      >
        <ClipboardCopyButton
          value={`${pullRequestName} - https://github.com/EurosportDigital/zephyr/pull/${pullRequestNumber}`}
          icon={slackIcon}
        />
      </button>
    </>
  );
}

export default App;
