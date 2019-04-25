<template>
  <div class="products-layout">
    <aside class="categories">
      <header>
        <span class="heading">Categories</span>
      </header>
      <div v-if="categories.rows">
        <div v-for="({ category_id, name }) in categories.rows" :key="category_id" class="category" :class="{ active : category_id == currentCategory }" @click="selectCategory(category_id)">
          <span v-text="name" />
        </div>
      </div>
      <div v-else>
        <div v-for="({ category_id, name }) in categories" :key="category_id" class="category" :class="{ active : category_id == currentCategory }" @click="selectCategory(category_id)">
          <span v-text="name" />
        </div>
      </div>
    </aside>
    <main class="products" v-if="products.count">
      <div class="pagination" v-if="numOfPages">
        <div class="navs">
          <img :class="{ inactive: !canPrev }" src="/svg/left-black.svg" alt="prev" @click="goPrevPage">
          <span v-for="page in numOfPages" :key="page" :class="{ active: page == currentPage }" @click="gotoPage(page)" v-text="page" />
          <img src="/svg/right-black.svg" :class="{ inactive: !canNext }" alt="next" @click="goNextPage">
        </div>
      </div>
      <div class="product-grid">
        <div v-for="({ name, product_id, thumbnail, price, discounted_price, description }) in products.rows" :key="product_id" class="product">
          <p class="product-name" v-text="name" />
          <img :src="`/img/product_images/${thumbnail}`" :alt="name" class="product-image">
          <div class="product-price">
            <strike v-if="parseInt(discounted_price)" class="actual-price">
              {{ price | money }}
            </strike>
            <span v-if="parseInt(discounted_price)" class="promo-price">
              {{ discounted_price | money }}
            </span>
            <span v-else class="price">
              {{ price | money }}
            </span>
          </div>
          <p class="product-description">
            {{ description | truncate }}
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    currentPage() {
      const { page } = this.$route.query
      return page || 1
    },
    currentCategory() {
      const { category } = this.$route.query
      return category
    },
    numOfPages() {
      let total = Math.floor(this.products.count / 20)
      if (this.products.count % 20) total += 1
      return total
    },
    canPrev() {
      const { page = 1 } = this.$route.query
      return this.numOfPages > 1 ? page > 1 : false
    },
    canNext() {
      const { page = 1 } = this.$route.query
      return page < this.numOfPages
    },
    ...mapGetters({
      categories: 'metas/categories',
      products: 'metas/products'
    })
  },
  methods: {
    gotoPage(page) {
      const { page: current } = this.$route.query
      if (page === current) return
      this.$eventBus.$emit('goto-page', page)
    },
    goNextPage() {
      if (!this.canNext) return
      const { page } = this.$route.query
      this.$eventBus.$emit('goto-page', parseInt(page) + 1)
    },
    goPrevPage() {
      if (!this.canPrev) return
      const { page } = this.$route.query
      this.$eventBus.$emit('goto-page', parseInt(page) - 1)
    },
    selectCategory(id) {
      console.log({ id })
      console.log('current', this.$route.query.category)
      this.$eventBus.$emit('get-category', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.products-layout {
  display: grid;
  grid-template-columns: minmax(12rem, 1fr) 9fr;
  padding: 1.5rem 2vw;

  header {
    margin-bottom: .5rem;
    .heading {
      font-size: 1.25rem;
      font-weight: 600;
      color: $dark;
      border-bottom: 1px solid $light-grey;
    }
  }

  aside {
    .category {
      padding: .25rem .25rem;

      span {
        cursor: pointer;
        padding: 0 1rem 0 0.25rem;
      }

      &:hover {
        span {
          color: $dark;
        }
      }

      &.active {
        span {
          color: $accent;
          border-bottom: 2px solid;
        }
      }
    }
  }

  .products {
    .pagination {
      &, .navs {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      * {
        cursor: pointer;
      }

      .navs {
        span {
          padding: 0 .5rem;
        }
        span.active {
          background: $accent;
          color: $white;
          border-radius: 2px;
        }
        img {
          &:first-child {
            margin-right: .5rem;
          }
          &:last-child {
            margin-left: .5rem;
          }
          &.inactive {
            filter: grayscale(1) contrast(0);
          }
        }
      }
    }
  }

  .product-grid {
    display: grid;
    grid-gap: 2vw;
    grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
    padding: 1rem 1vw;
    .product {
      background: $white;
      padding: 1rem;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.197803);

      .product-name {
        text-align: center;
      }
      .product-image {
        margin: .5rem auto .5rem;
        display: block;
        border-radius: 3px;
      }
      .product-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .25rem 1rem;
        font-size: .85rem;

        .actual-price {
          color: $accent;
          text-decoration: strkethrough;
        }
        .promo-price {
          background: $accent;
          color: white;
          padding: .05rem .5rem;
          border-radius: 3px;
        }
        .price {
          color: $dark;
          width: 100%;
          text-align: center;
        }
      }
      .product-description {
        font-size: .8rem;
      }
    }
  }
}
</style>
