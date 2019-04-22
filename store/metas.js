export const state = () => ({
  departments: [],
  categories: {}
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
  }
}
