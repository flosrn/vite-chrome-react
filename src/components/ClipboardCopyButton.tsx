import React from "react";
import checkIcon from "../assets/check.svg";

const ClipboardCopyButton = ({
  value,
  icon,
}: {
  value: string;
  icon: string;
}) => {
  return (
    <clipboard-copy
      role="button"
      tabIndex={0}
      aria-label="Copy"
      data-copy-feedback="Copied!"
      value={value}
      data-view-component
      className="Link--onHover js-copy-branch color-fg-muted"
      style={{ height: "16px" }}
    >
      <img
        src={chrome.runtime.getURL(icon)}
        alt="slack"
        aria-hidden="true"
        data-view-component="true"
        className="octicon octicon-copy"
        style={{ verticalAlign: "baseline", marginRight: 0 }}
      />
      <img
        src={chrome.runtime.getURL(checkIcon)}
        alt="check"
        aria-hidden="true"
        data-view-component="true"
        className="octicon octicon-check color-fg-success"
        style={{
          display: "none",
          verticalAlign: "baseline",
          marginRight: 0,
        }}
      />
    </clipboard-copy>
  );
};

export default ClipboardCopyButton;
