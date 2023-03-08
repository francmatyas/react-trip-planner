import "./LocationTimeline.scss";
import Timeline from "./Timeline/Timeline";
import TimelinePaginator from "./TimelinePaginator/TimelinePaginator";

function LocationTimeline(props) {
  const { trip, groupByDate } = props;
  const locationGroups = trip.groupByDate();

  return (
    <div id="location-timeline">
      <div id="location-timeline__header"></div>
      <div id="location-timeline__body">
        {groupByDate ? (
          <TimelinePaginator
            pages={Object.keys(locationGroups)}
            groups={locationGroups}
          />
        ) : (
          <Timeline locations={trip.locations} />
        )}
      </div>
    </div>
  );
}

export default LocationTimeline;
