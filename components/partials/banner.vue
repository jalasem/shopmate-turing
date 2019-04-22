<template>
  <div class="banner">
    <img src="/img/banner.png" alt="banner">
    <slot>
      <h1>New Arrival</h1>
      <p>Be the first to know</p>
      <!-- <button class="white small round">View All</button> -->
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15vh 2vw 10vh;

  h1,
  p {
    color: $white;
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 200%;
  }

  button {
    margin-top: 2rem;
  }

  img {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
