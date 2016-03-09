export const ELEVATOR_REQUEST = 'ELEVATOR_REQUEST';

export function elevatorRequest(floor, timestamp) {
  return {
    type: ELEVATOR_REQUEST,
    floor: floor,
    timestamp: timestamp
  };
}
