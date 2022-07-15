import leagueService from "./service";

export function getData({ state, commit, dispatch }) {
  const data = leagueService.getJsonData();
  commit("set", { name: "data", val: data });
}

export function getUsers({ state, commit, dispatch }) {
  const users = leagueService.getUsers();
  commit("set", { name: "users", val: users });
}
