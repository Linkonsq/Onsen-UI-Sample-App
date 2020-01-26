<template>
    <v-ons-page>
        <div class="center search">
            <v-ons-search-input id="search-input" placeholder="Search"></v-ons-search-input>
        </div>
        <v-ons-card class="card-radius plan-card">
            <div class="content">
                <p class="report-card" v-for="report in items" :key="report.value" @click="pushPage">
                    {{ report.text }}
                </p>
            </div>
        </v-ons-card>
    </v-ons-page>
</template>

<script>
import ReportLandingPage from './ReportLandingPage.vue';

export default {
    data() {
        return {
            items: [
                { text: '2019_Dec-2019_Dec_Unit_Traning Unit', value: 'Dec' },
                { text: '2019_Nov-2019_Nov_Unit_Traning Unit', value: 'Nov' },
                { text: '2019_Oct-2019_Oct_Unit_Traning Unit', value: 'Oct' }
            ]
        }
    },
    methods: {
        pushPage() {
            this.$store.commit('navigator/push', ReportLandingPage);
        }
    }    
}
</script>