<template>
    <h1>Companies list:</h1>
    <hr />
    <div v-if="companiesData.length" class="list-container">
        <company-item v-for="company in companiesData" :key="company.id" :company="company" />
    </div>
    <div v-else>No Results</div>
    <hr />
    <div class="create-btn">
        <button type="button" @click="onCreateClick">Create Company</button>
    </div>
</template>
<script>
import CompanyItem from './CompanyItem'

export default {
    name: 'CompaniesList',

    components: { CompanyItem },

    props: {
        companiesData: {
            type: Array,
            default: () => [],
        },
    },

    methods: {
        onCreateClick() {
            this.$router.push({
                name: 'company',
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.list-container {
    max-width: 700px;
    padding-left: 50px;
}
.create-btn {
    margin-top: 10px;
    float: left;
    padding-left: 50px;
    button {
        cursor: pointer;
        padding: 5px;
    }
    button:hover {
        background-color: rgb(77, 77, 77);
        color: white;
    }
}
h1 {
    text-align: left;
    padding-left: 50px;
}
</style>
