export const GET_STUFF = 'GET_STUFF';
export const GOT_STUFF = 'GOT_STUFF';
export const ELEVATOR_SENT = 'ELEVATOR_SENT';

export function elevatorRequest(floor) {
  console.log(floor);
  return elevatorSent({floor: floor});
}

function elevatorSent(data) {
  return {
    type: ELEVATOR_SENT,
    floor: data.floor
  };
}

function getStuffRequest() {
  return {
    type: GET_STUFF
  };
}

function gotStuff() {
  return {
    type: GOT_STUFF,
    data: {key: true}
  };
}
