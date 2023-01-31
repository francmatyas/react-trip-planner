import "./LocationTree.scss";

import { HiArrowDown, HiArrowUp, HiOutlineTrash } from "react-icons/hi2";

function LocationTree(props) {
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

  return (
    <div className="location-tree">
      <h2 className="location-tree__title">Plan your trip</h2>
      <div className="location-tree__tree">
        {props.locations.length === 0 ? (
          <span className="location-tree__empty">
            Find, add place and plan your next trip.
          </span>
        ) : (
          <>
            {props.locations.map((location, index) => {
              return (
                <div className="location-tree__item" key={location.osm_id}>
                  <span>{index + 1 + "."}</span>
                  <span>{location.display_name}</span>

                  <button
                    onClick={() => deleteHandler(index)}
                    className="preview__button"
                  >
                    <HiOutlineTrash size={24} />
                  </button>
                  {props.locations.length > 1 && (
                    <div>
                      {index === 0 ? (
                        <></>
                      ) : (
                        <button
                          onClick={() => moveUpHandler(index)}
                          className="preview__button"
                        >
                          <HiArrowUp size={16} />
                        </button>
                      )}
                      {index === props.locations.length - 1 ? (
                        <></>
                      ) : (
                        <button
                          onClick={() => moveDownHandler(index)}
                          className="preview__button"
                        >
                          <HiArrowDown size={16} />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default LocationTree;
