import "./TimelinePaginator.scss";
import { useState } from "react";
import dayjs from "dayjs";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

import Timeline from "../Timeline/Timeline";

function TimelinePaginator(props) {
  const { pages, groups } = props;
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div id="timeline-paginator">
      <div id="timeline-paginator__header">
        <button
          className={
            "timeline-paginator__button " +
            (currentPage === 0 && "timeline-paginator__button--disabled")
          }
          id="timeline-paginator__button--prev"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          <HiOutlineChevronLeft size={16} />
          {pages[currentPage - 1] &&
            dayjs(pages[currentPage - 1]).format("DD MMM YYYY")}
        </button>

        <span id="timeline-paginator__current">
          {dayjs(pages[currentPage]).format("DD MMM YYYY")}
        </span>

        <button
          className={
            "timeline-paginator__button " +
            (currentPage === pages.length - 1 &&
              "timeline-paginator__button--disabled")
          }
          id="timeline-paginator__button--next"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pages.length - 1}
        >
          {pages[currentPage + 1] &&
            dayjs(pages[currentPage + 1]).format("DD MMM YYYY")}
          <HiOutlineChevronRight size={16} />
        </button>
      </div>

      <div className="timeline-paginator__body">
        <Timeline
          key={pages[currentPage]}
          locations={groups[pages[currentPage]]}
        />
      </div>
    </div>
  );
}

export default TimelinePaginator;
