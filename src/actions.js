const FETCH_NEARBY_STOPS_REQUEST = 'FETCH_NEARBY_STOPS_REQUEST';
const FETCH_NEARBY_STOPS_SUCCESS = 'FETCH_NEARBY_STOPS_SUCCESS';
const FETCH_NEARBY_STOPS_ERROR   = 'FETCH_NEARBY_STOPS_ERROR';

const ACTION_TYPES = {
  FETCH_NEARBY_STOPS_REQUEST,
  FETCH_NEARBY_STOPS_SUCCESS,
  FETCH_NEARBY_STOPS_ERROR
};

export default ACTION_TYPES;

const fetchNearbyStopsRequest = () => ({
  type: FETCH_NEARBY_STOPS_REQUEST
});

const fetchNearbyStopsSuccess = (stops) => ({
  type: FETCH_NEARBY_STOPS_SUCCESS,
  stops
});

const fetchNearbyStopsError = (err = new Error('Unknown error')) => ({
  type: FETCH_NEARBY_STOPS_ERROR,
  error: err
});

const getCoordinates = () => {
  return new Promise(
    (resolve, reject) => {

      // TODO: refreshPosition UX?
      navigator.geolocation.getCurrentPosition(
        (geoposition) => {
          resolve(geoposition.coords);
        },
        (err) => { reject(err); }
      );
    }
  );
};

export const fetchNearbyStops = () => {
  return (dispatch) => {
    return getCoordinates().then(
      (coordinates) => {
        dispatch(fetchNearbyStopsRequest(coordinates));
        return window.fetch(
          `http://localhost:4000/api/stops/near-me?lat=${coordinates.latitude}1&lon=${coordinates.longitude}`
        ).then(
          resp => resp.json()
        ).then(
          (nearbyStopsResponse) => {
            return window.fetch(
              `http://localhost:4000/api/stops/with-routes?stop-ids=${nearbyStopsResponse.data.map(stop => stop.stop_id).join(',')}`
            ).then(
              resp => resp.json()
            ).then(
              stopsWithRoutesResponse => {
                return nearbyStopsResponse.data.map(
                  nearbyStop => {
                    nearbyStop.route_names = stopsWithRoutesResponse.data[nearbyStop.stop_id];
                    return nearbyStop;
                  }
                );
              }
            );
          }
        ).then(
          (nearbyStopsWithRoutes) => {
            return dispatch(fetchNearbyStopsSuccess(nearbyStopsWithRoutes));
          }
        );
      }
    ).catch(
      (err) => {
        fetchNearbyStopsError();
      }
    );
  };
};
