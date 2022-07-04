import leagueService from "./service";

export function getPlayers({ state, commit, dispatch }) {
  const players = leagueService.getPlayers();
  commit("set", { name: "players", val: players });
}
