import Chrome from "chrome";

declare namespace chrome {
  export default Chrome;
}

interface ClipboardCopyProps {
  "aria-label"?: string;
  "data-copy-feedback"?: string;
  "data-view-component"?: boolean;
  value: string;
  className?: string;
  tabIndex?: number;
  role?: string;
  style?: object;
  children?: React.ReactNode;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "clipboard-copy": ClipboardCopyProps;
    }
  }
}
