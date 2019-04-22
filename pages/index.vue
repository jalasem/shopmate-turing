<template>
  <div class="page">
  </div>
</template>

<style lang="scss" scoped>
.page {
  .banner {
    z-index: 1;
    position: relative;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10vh 2vw 5vh;

    h1, p {
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
}
</style>
