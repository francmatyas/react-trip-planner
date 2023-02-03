import "./Timeline.scss";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

function TripTimeline(props) {
  return (
    <Timeline position="alternate">
      {props.locations.map((location, index) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            {index !== props.locations.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>{location.display_name}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default TripTimeline;
