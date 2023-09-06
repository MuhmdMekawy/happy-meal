<script>
export default {
  name : 'Notfound'
}
</script>

<template>
  <div>
    <img src="../assets/images/Error-404.png" alt="image" loading="lazy">
  </div>
</template>

<style lang="scss" scoped>
div{
  background: #ffe79f;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50% , -50%);
  text-align: center;
  img{
    max-width: 800px;
    margin: 0 auto;
    object-fit: contain;
  }
}
</style>