export const state = () => ({
  departments: [],
  categories: {},
  products: {}
})

export const mutations = {
  addDepartment(state, dept) {
    state.departments.push(dept)
  },
  emptyDepartments(state) {
    state.departments = []
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  emptyCategories(state) {
    state.categories = {}
  },
  addProducts(state, products) {
    state.products = products
  }
}

export const actions = {
  addDepartments({ commit }, departments) {
    commit('emptyDepartments')
    departments.forEach(department => {
      commit('addDepartment', department)
    })
  }
}

export const getters = {
  departments(state) {
    return state.departments
  },
  categories(state) {
    return state.categories
  },
  products(state) {
    return state.products
  }
}
