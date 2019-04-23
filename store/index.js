
export const state = () => ({
})

export const mutations = () => ({
})

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { $axios: axios }) {
    try {
      const { data: departments } = await axios('/departments')
      // const { data: categories } = await axios('/categories')
      // const { data: products } = await axios('/products')

      dispatch('metas/addDepartments', departments)
      // commit('metas/setCategories', categories)
      // commit('metas/addProducts', products)
    } catch (err) {
      console.log({ err })
    }
  }
}
