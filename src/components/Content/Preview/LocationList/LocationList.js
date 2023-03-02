import "./LocationList.scss";
import Location from "./Location/Location";
import { v4 as uuidv4 } from "uuid";

function LocationList(props) {
  function moveUpHandler(index) {
    if (index === 0) {
      return;
    }
    const updatedList = [...props.locations];
    const temp = updatedList[index];
    updatedList[index] = updatedList[index - 1];
    updatedList[index - 1] = temp;
    props.onListChange(updatedList);
  }

  function moveDownHandler(index) {
    if (index === props.locations.length - 1) {
      return;
    }
    const updatedList = [...props.locations];
    const temp = updatedList[index];
    updatedList[index] = updatedList[index + 1];
    updatedList[index + 1] = temp;
    props.onListChange(updatedList);
  }

  function deleteHandler(index) {
    const updatedList = [...props.locations];
    updatedList.splice(index, 1);
    props.onListChange(updatedList);
  }

  function onListChangeHandler(index, value) {
    const updatedList = [...props.locations];
    updatedList[index] = value;
    props.onListChange(updatedList);
  }

  return (
    <div className="location-list">
      <h2 className="location-list__title">Plan your trip</h2>
      <div className="location-list__list">
        {props.locations === undefined || props.locations.length === 0 ? (
          <span className="location-list__empty">
            Find, add place and plan your next trip.
          </span>
        ) : (
          <>
            {props.locations?.map((location, index) => {
              return (
                <Location
                  key={uuidv4()}
                  count={props.locations.length}
                  location={location}
                  index={index}
                  onMoveUp={moveUpHandler}
                  onMoveDown={moveDownHandler}
                  onDelete={deleteHandler}
                  onListChange={onListChangeHandler}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default LocationList;
