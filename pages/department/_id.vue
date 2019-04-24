<template>
  <div class="page">
    <banner />
    <products-layout selected-category="" />
  </div>
</template>

<script>
import Banner from '~/components/partials/banner.vue'
import ProductsLayout from '~/components/partials/produtcsLayout.vue'
export default {
  layout: 'shop',
  components: {
    Banner,
    ProductsLayout
  },
  async fetch({ $axios: axios, store, params, query }) {
    const { page = 1 } = query
    const { id } = params

    try {
      const { data: categories } = await axios(`/categories/inDepartment/${id}`)
      const { data: products } = await axios(`/products/inDepartment/${id}/?page=${page}`)

      store.commit('metas/setCategories', categories)
      store.commit('metas/addProducts', products)
    } catch (err) {
      console.log({ err })
    }
  },
  created() {
    this.$eventBus.$on('goto-page', payload => {
      if (this.$route.query.page == payload) return
      this.gotoPage(payload)
    })
  },
  beforeDestroy() {
    this.$eventBus.$off('goto-page')
  },
  methods: {
    async gotoPage(page) {
      const { id } = this.$route.params
      try {
        const { data: products } = await this.$axios(`/products/inDepartment/${id}`)
        this.$store.commit('metas/addProducts', products)

        this.$router.push(`${this.$route.path}?page=${page}`)
      } catch (err) {
        console.log({ err })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
}
</style>
