import Vue from 'vue'
import Vuex from 'vuex'
import config from '../axiosConfig'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: {
        }
    },
    mutations: {
    },
    actions: {
        async getLeaguesFromAPI () {
            const response = await config.mainInstance.get('soccer/leagues', {
                params: {
                    subscribed: 'true'
                }
            })

            return response.data.data
        },
        // eslint-disable-next-line no-empty-pattern
        async getSeasonsFromLeague ({ }, args: { leagueId: string }) {
            const seasons = await config.mainInstance.get('soccer/seasons', {
                params: {
                    subscribed: 'true',
                    league_id: args
                }
            })

            return seasons.data.data
        },
        // eslint-disable-next-line no-empty-pattern
        async getCountryFromId ({ }, args: { countryId: string }) {
            const country = await config.mainInstance.get('soccer/countries', {
                params: {
                    subscribed: 'true',
                    country_id: args
                }
            })

            return country.data
        },
        // eslint-disable-next-line no-empty-pattern
        async getTeamsFromCountry ({ }, args: { countryId: string }) {
            const teams = await config.mainInstance.get('soccer/teams', {
                params: {
                    subscribed: 'true',
                    country_id: args
                }
            })

            return teams.data.data
        }
    },
    modules: {}
})
