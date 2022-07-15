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
