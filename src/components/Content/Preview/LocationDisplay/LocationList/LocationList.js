import "./LocationList.scss";
import Location from "./Location/Location";
import { v4 as uuidv4 } from "uuid";

function LocationList(props) {
  const {
    trip: { locations },
    onListChange,
  } = props;

  function moveUpHandler(index) {
    if (index === 0) {
      return;
    }
    const updatedList = [...locations];
    const temp = updatedList[index];
    updatedList[index] = updatedList[index - 1];
    updatedList[index - 1] = temp;
    onListChange(updatedList);
  }

  function moveDownHandler(index) {
    if (index === locations.length - 1) {
      return;
    }
    const updatedList = [...locations];
    const temp = updatedList[index];
    updatedList[index] = updatedList[index + 1];
    updatedList[index + 1] = temp;
    onListChange(updatedList);
  }

  function deleteHandler(index) {
    const updatedList = [...locations];
    updatedList.splice(index, 1);
    onListChange(updatedList);
  }

  function onListChangeHandler(index, value) {
    const updatedList = [...locations];
    updatedList[index] = value;
    onListChange(updatedList);
  }

  return (
    <div className="location-list">
      <div className="location-list__list">
        {locations?.map((location, index) => {
          return (
            <Location
              key={uuidv4()}
              count={locations.length}
              location={location}
              index={index}
              onMoveUp={moveUpHandler}
              onMoveDown={moveDownHandler}
              onDelete={deleteHandler}
              onListChange={onListChangeHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LocationList;
