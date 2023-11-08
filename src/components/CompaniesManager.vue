<template>
    <companies-filter />
    <companies-list :companiesData="getFilteredByOwnerCompaniesList" />
</template>
<script>
import CompaniesList from './CompaniesList.vue'
import CompaniesFilter from './CompaniesFilter.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'CompaniesManager',
    components: { CompaniesList, CompaniesFilter },

    computed: {
        ...mapGetters(['getFilteredByOwnerCompaniesList']),
    },
}
</script>
<style lang="scss" scoped></style>
