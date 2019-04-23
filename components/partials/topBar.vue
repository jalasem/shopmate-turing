<template>
  <div class="top-bar">
    <div class="access">
      <span>Hi!</span>
      <nuxt-link :to="$route.path">
        Sign in
      </nuxt-link>
      <span>or</span>
      <nuxt-link :to="$route.path">
        Register
      </nuxt-link>
    </div>
    <div class="links">
      <nuxt-link :to="$route.path">
        Daily Deals
      </nuxt-link>
      <nuxt-link :to="$route.path">
        Sell
      </nuxt-link>
      <nuxt-link :to="$route.path">
        Help & Contact
      </nuxt-link>
    </div>
    <div class="curr-status">
      <div class="currency">
        <img src="/svg/gbr.svg" alt="GBR">
        <span>&pound; GBR</span>
      </div>
      <div class="cart">
        <div class="bag">
          <img src="/svg/bag-black.svg" alt="bag">
          <span class="item-count">6</span>
        </div>
        <p class="total">
          Your bag: <span class="accent">£3.99</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  color: $dark;
}
.top-bar {
  height: 48px;
  padding: 0 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  line-height: 240%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  background: $white;

  a {
    color: $accent;
  }

  .links {
    a {
      padding: 0 1.5vw;
    }
  }

  .curr-status {
    &, .currency, .cart {
      display: flex;
      align-items: center;
    }

    .cart {
      margin-left: 1.5rem;

      .bag {
        position: relative;

        .item-count {
          position: absolute;
          top: -7px;
          right: 0;
          width: 1.25rem;
          height: 1.25rem;
          font-size: .75rem;
          background: $accent;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
      }
    }

    .self-top {
      align-self: flex-start;
      margin-top: -0.25rem;
    }

    img {
      margin-right: .5rem;
    }
  }
}
</style>
