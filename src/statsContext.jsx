import React from "react";

export let defaultStats = {
    guilds: 0,
    clusters: [],
    ram: 0,
    users: 0
}

export const StatsContext = React.createContext({stats: defaultStats, updateStats: async () => {}});