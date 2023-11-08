<template>
    <div class="item-container">
        <div>
            {{ company.name }}
        </div>
        <div>
            {{ company.incomeTax }}
        </div>
        <div>
            {{ company.year }}
        </div>
        <div>
            {{ company.owner }}
        </div>
        <div class="btns">
            <button type="button" @click="onDeleteHandler(company.id)">Delete</button>
            <button type="button" @click="onEditHandler(company.id)">Edit</button>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'CompanyItem',

    props: {
        company: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        ...mapActions(['deleteCompany']),
        onDeleteHandler(id) {
            this.deleteCompany(id)
        },
        onEditHandler(id) {
            this.$router.push({
                name: 'companyId',
                params: {
                    id,
                },
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;

    & .btns {
        display: flex;
        gap: 10px;

        button {
            cursor: pointer;
        }
        button:hover {
            background-color: rgb(77, 77, 77);
            color: white;
        }
    }
}
</style>
