import "./Content.scss"

import Preview from "./Preview/Preview";
import QuickAccess from "./QuickAccess/QuickAccess";

function Content() {
  return (
    <div className="content">
        <Preview />
        <QuickAccess />
    </div>
  );
}

export default Content;