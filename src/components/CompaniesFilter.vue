<template>
    <h1>Filters:</h1>
    <div class="filter-container">
        <label
            >Name:
            <input v-model="nameInp" type="text" />
        </label>
        <label
            >Tax:
            <input v-model="taxInp" type="number" />
        </label>
        <label
            >Year:
            <input v-model="yearInp" type="number" />
        </label>
        <label
            >Owner:
            <input v-model="ownerInp" type="text" />
        </label>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CompaniesFilter',

    computed: {
        ...mapGetters(['getNameVal', 'getTaxVal', 'getYearVal', 'getOwnerVal']),
        nameInp: {
            get() {
                return this.getNameVal
            },
            set(val) {
                return this.setNameVal(val)
            },
        },
        taxInp: {
            get() {
                return this.getTaxVal
            },
            set(val) {
                return this.setTaxVal(val)
            },
        },
        yearInp: {
            get() {
                return this.getYearVal
            },
            set(val) {
                return this.setYearVal(val)
            },
        },
        ownerInp: {
            get() {
                return this.getOwnerVal
            },
            set(val) {
                return this.setOwnerVal(val)
            },
        },
    },
    methods: {
        ...mapActions(['setNameVal', 'setTaxVal', 'setYearVal', 'setOwnerVal']),
    },
}
</script>
<style lang="scss" scoped>
h1 {
    text-align: left;
    padding-left: 50px;
}
.filter-container {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 50px;
}
</style>
