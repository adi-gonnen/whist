export function getUsers(state) {
  const data = state.data?.clubs?.oded;
  return data?.users;
}

export function getLastLeague(state) {
  const data = state.data?.clubs?.oded;
  if (!data) {
    return null;
  }
  const leagues = data.leagues || {};
  const key = Object.keys(leagues).find((i) => {
    return !leagues[i].isCompleted;
  });
  return leagues[key];
}

export function getLastMeeting(state, getters) {
  const league = getters.getLastLeague;
  const meetings = Object.keys(league?.meetings || {});
  if (!league || !meetings.length) {
    return null;
  }
  const date = meetings.find((i) => {
    return !league.meetings[i].isCompleted;
  });
  return { [date]: league.meetings[date] };
}
