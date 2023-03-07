import "./Timeline.scss";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography } from "@mui/material";

function TripTimeline(props) {
  return (
    <Timeline position="alternate">
      {props.locations.map((location, index) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            {index !== props.locations.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              <strong>{location.display_name}</strong>
            </Typography>
            <Typography>{location.note}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default TripTimeline;
