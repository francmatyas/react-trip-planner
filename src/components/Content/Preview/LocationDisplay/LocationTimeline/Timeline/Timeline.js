import "./Timeline.scss";
import flags from "../../../../../../data/flags.json";
import dayjs from "dayjs";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography } from "@mui/material";

function TripTimeline(props) {
  const { locations } = props;
  return (
    <Timeline position="alternate">
      {locations.map((location, index) => {
        const {
          display_name,
          note,
          date,
          address: { country_code },
        } = location;
        const { name: country_name, flag } = flags[country_code];

        return (
          <TimelineItem key={index + "a"}>
            <TimelineOppositeContent>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ mt: "12px" }}
              >
                {dayjs(date).format("DD MMM YYYY")}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="info">
                <img alt={country_name} src={flag} width="24px" />
              </TimelineDot>
              {index !== locations.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                <strong>{display_name}</strong>
              </Typography>
              <Typography>{note}</Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

export default TripTimeline;
