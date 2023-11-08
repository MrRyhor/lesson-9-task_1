import { createStore } from 'vuex'

export default createStore({
    state: {
        companiesList: [
            {
                id: 1,
                name: 'Company A',
                incomeTax: 10,
                year: 2013,
                owner: 'Owner 1',
            },
            {
                id: 2,
                name: 'Company B',
                incomeTax: 15,
                year: 2019,
                owner: 'Owner 2',
            },
            {
                id: 3,
                name: 'Company C',
                incomeTax: 18,
                year: 2003,
                owner: 'Owner 3',
            },
            {
                id: 4,
                name: 'Company D',
                incomeTax: 15,
                year: 1990,
                owner: 'Owner 4',
            },
            {
                id: 5,
                name: 'Company E',
                incomeTax: 10,
                year: 2023,
                owner: 'Owner 5',
            },
        ],
        nameVal: null,
        taxVal: null,
        yearVal: null,
        ownerVal: null,
    },
    getters: {
        getCompaniesList: ({ companiesList }) => companiesList,
        getNameVal: ({ nameVal }) => nameVal,
        getTaxVal: ({ taxVal }) => taxVal,
        getYearVal: ({ yearVal }) => yearVal,
        getOwnerVal: ({ ownerVal }) => ownerVal,
        getFilteredByNameCompaniesList: ({ companiesList, nameVal }) => {
            if (!nameVal) return companiesList
            return companiesList.filter((company) => company.name.toLowerCase().includes(nameVal.toLowerCase()))
        },
        getFilteredByTaxCompaniesList: (state, getters) => {
            const list = getters.getFilteredByNameCompaniesList
            if (!state.taxVal) return list
            return list.filter((el) => el.incomeTax === state.taxVal)
        },
        getFilteredByYearCompaniesList: (state, getters) => {
            const list = getters.getFilteredByTaxCompaniesList
            if (!state.yearVal) return list
            return list.filter((el) => el.year === state.yearVal)
        },
        getFilteredByOwnerCompaniesList: (state, getters) => {
            const list = getters.getFilteredByYearCompaniesList
            if (!state.ownerVal) return list
            return list.filter((el) => el.owner.toLowerCase().includes(state.ownerVal.toLowerCase()))
        },
        getCompanyById:
            ({ companiesList }) =>
            (id) => {
                return { ...companiesList.find((company) => company.id == id) }
            },
    },
    mutations: {
        setCompaniesList(state, companies) {
            state.companiesList = companies
        },
        setNameVal(state, val) {
            state.nameVal = val
        },
        setTaxVal(state, val) {
            state.taxVal = val
        },
        setYearVal(state, val) {
            state.yearVal = val
        },
        setOwnerVal(state, val) {
            state.ownerVal = val
        },
        removeCompanyFromCompaniesList(state, id) {
            state.companiesList = [...state.companiesList].filter((el) => el.id !== id)
        },
        addToCompaniesList(state, companyData) {
            state.companiesList.push(companyData)
        },
        updateCompanyInCompaniesList(state, companyData) {
            const companyIndex = state.companiesList.findIndex((company) => company.id === companyData.id)
            state.companiesList[companyIndex] = { ...companyData }
        },
    },
    actions: {
        setCompaniesList({ commit }, companies) {
            commit('setCompaniesList', companies)
        },
        setNameVal({ commit }, val) {
            commit('setNameVal', val)
        },
        setTaxVal({ commit }, val) {
            commit('setTaxVal', val)
        },
        setYearVal({ commit }, val) {
            commit('setYearVal', val)
        },
        setOwnerVal({ commit }, val) {
            commit('setOwnerVal', val)
        },
        deleteCompany({ commit }, id) {
            commit('removeCompanyFromCompaniesList', id)
        },
        addCompany({ commit }, companyData) {
            commit('addToCompaniesList', companyData)
        },
        updateCompany({ commit }, companyData) {
            commit('updateCompanyInCompaniesList', companyData)
        },
    },
    modules: {},
})
