import leagueService from "./service";

export function getUsers({ state, commit, dispatch }) {
  const users = leagueService.getUsers();
  commit("set", { name: "users", val: users });
}
