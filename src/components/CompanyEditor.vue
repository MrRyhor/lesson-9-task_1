<template>
    <div v-if="getParams" class="editor-container">
        <label
            >Name:
            <input v-model="editingCompany.name" type="text" />
        </label>
        <label
            >Tax:
            <input v-model="editingCompany.incomeTax" type="number" />
        </label>
        <label
            >Year:
            <input v-model="editingCompany.year" type="number" />
        </label>
        <label
            >Owner:
            <input v-model="editingCompany.owner" type="text" />
        </label>
        <button type="button" @click="onSaveClick(editingCompany)">Save</button>
    </div>
    <div v-else class="editor-container">
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
        <button type="button" @click="onCreateClick">Create</button>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CompanyEditor',
    data() {
        return {
            editingCompany: {},
            nameInp: null,
            taxInp: null,
            yearInp: null,
            ownerInp: null,
        }
    },

    computed: {
        ...mapGetters(['getCompanyById']),
        getParams() {
            return this.$route.params.id
        },
    },

    created() {
        this.editingCompany = this.getCompanyById(this.getParams)
    },

    methods: {
        ...mapActions(['addCompany', 'updateCompany']),
        onCreateClick() {
            const company = {
                id: Date.now(),
                name: this.nameInp,
                incomeTax: this.taxInp,
                year: this.yearInp,
                owner: this.ownerInp,
            }
            this.addCompany(company)
            this.$router.push({
                name: 'home',
            })
        },
        onSaveClick(companyData) {
            this.updateCompany(companyData)
            this.$router.push({
                name: 'home',
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.editor-container {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    gap: 5px;
}
</style>
