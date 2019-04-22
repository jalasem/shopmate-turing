
export const state = () => ({
})

export const mutations = () => ({
})

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { $axios: axios }) {
    try {
      const { data: departments } = await axios.get('/departments')
      const { data: categories } = await axios.get('/categories')
      dispatch('metas/addDepartments', departments)
      commit('metas/setCategories', categories)
    } catch (err) {
      console.log({ err })
    }
  }
}
