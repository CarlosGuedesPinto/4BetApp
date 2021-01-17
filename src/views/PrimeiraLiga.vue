<template>
    <div class="container">
        <table v-if="!loading">
            <tr>
                <th>League Name</th>
                <th>League Id</th>
                <th>Country Id</th>
            </tr>
            <template v-for="league in leagues">
                <tr :key="league.league_id">
                    <td @click="listSeasons(league.league_id, league.name, league.country_id)">
                        {{ league.name }}
                    </td>
                    <td>{{ league.league_id }}</td>
                    <td>{{ league.country_id }}</td>
                </tr>
            </template>
        </table>
        <template v-if="leagueChosen">
            <p>Current League: {{ leagueSelected.name }} ---> {{ countrySelected.country }} / {{ countrySelected.continent }}</p>
            <table>
                <tr>
                    <th>Season</th>
                    <th>Start Date</th>
                    <th>Ending Date</th>
                </tr>
                <template v-for="season in seasons">
                    <tr :key="season.season_id">
                        <td>{{ season.name }}</td>
                        <td>{{ season.start_date }}</td>
                        <td>{{ season.end_date }}</td>
                    </tr>
                </template>
            </table>

            <table>
                <tr>
                    <th>Team</th>
                    <th>Logo</th>
                    <th>Country</th>
                </tr>
                <template v-for="team in teams">
                    <tr :key="team.team_id">
                        <td>{{ team.name }}</td>
                        <td>
                            <img
                                :src="team.logo"
                                width="20"
                                height="20">
                        </td>
                        <td>{{ team.country.name }}</td>
                    </tr>
                </template>
            </table>
        </template>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    import 'ts-replace-all'

    @Component({})
    export default class PrimeiraLiga extends Vue {
        private leagues: string[] = []
        private loading: boolean = true
        private leagueChosen: boolean = false
        private seasonChosen: boolean = false
        private leagueSelected: any = {}
        private countrySelected: string = ''
        private seasonSelected: string = ''
        private seasons: string[] = []
        private teams: string[] = []

        async created () {
            this.leagues = await this.$store.dispatch('getLeaguesFromAPI')
            this.loading = false
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        public async listSeasons (leagueId: string, leagueName: string, countryId: string) {
            this.leagueSelected = {
                name: leagueName,
                id: leagueId
            }
            // this.countrySelected = await this.$store.dispatch('getCountryFromId', countryId)
            this.seasons = await this.$store.dispatch('getSeasonsFromLeague', leagueId)

            this.teams = await this.$store.dispatch('getTeamsFromCountry', countryId)

            this.leagueChosen = true
        }
    }
</script>
