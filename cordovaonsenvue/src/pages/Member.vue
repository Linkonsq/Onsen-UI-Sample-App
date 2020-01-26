<template>
    <v-ons-page>
        <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
        <!-- <v-ons-toolbar>
            <div class="center">Member</div>
            <div class="left">
                <ons-back-button @click="goBack">Back</ons-back-button>
            </div>
        </v-ons-toolbar> -->
        <form action="">
            <v-ons-list>
                <v-ons-list-header class="heading-title">Member</v-ons-list-header>
                <v-ons-list-item class="input-items">
                    <v-ons-input class="input-field" modifier="material" placeholder="Last Period" v-model="LastPeriod"></v-ons-input>
                </v-ons-list-item>
                <v-ons-list-item>
                    <v-ons-input class="input-field" modifier="material" placeholder="Target" v-model="Target"></v-ons-input>
                </v-ons-list-item>
                <v-ons-list-item>
                    <v-ons-input class="input-field" modifier="material" placeholder="Actual" v-model="Actual"></v-ons-input>
                </v-ons-list-item>
                <v-ons-list-item>
                    <v-ons-input class="input-field" modifier="material" placeholder="Increased" v-model="Increased"></v-ons-input>
                </v-ons-list-item>
                <v-ons-list-item>
                    <v-ons-input class="input-field" modifier="material" placeholder="Decreased" v-model="Decreased"></v-ons-input>
                </v-ons-list-item>
                <v-ons-list-item>
                    <v-ons-input class="input-field" modifier="material" placeholder="Member Contact" v-model="MemberContact"></v-ons-input>
                </v-ons-list-item>
                <v-ons-list-item>
                    <v-ons-input class="input-field" modifier="material" placeholder="Comment" v-model="Comment"></v-ons-input>
                </v-ons-list-item>

                <v-ons-button class="button-margin next-button" type="submit" @click="pushPage">
                    Save
                </v-ons-button>
            </v-ons-list>
        </form>
    </v-ons-page>
</template>

<script>
import Member from './Member.vue';
import ReportLandingPage from './ReportLandingPage.vue';

export default {
    data() {
        return {
            LastPeriod: '',
            Target: '',
            Actual: '',
            Increased: '',
            Decreased: '',
            MemberContact: '',
            Comment: ''
        }
    },
    mounted() {

    },
    methods: {
        pushPage() {
            this.$store.commit('navigator/push', Member);
        },
        goBack() {
            this.$store.commit('navigator/push', ReportLandingPage);
        }
    }
}
</script>