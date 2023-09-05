<script>
export default {
  name : 'Navbar',
}
</script>

<template>
  <div class="navigate">
    <div class="container">
      <div class="content">
        <h1 class="head">Happy Meal</h1>
        <a href="#">
          <img src="../assets/images/menu.png" alt="menu" loading="lazy">
          Menu
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigate{
  background: #e2e2e2;
  .content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    h1{
      font-size: 40px;
      margin-bottom: 0;
      font-weight: 500;
      @media (max-width : 400px){
        font-size: 30px;
      }
    }
    a{
      display: flex;
      flex-direction: row;
      gap: 5px;
      align-items: center;
      img{
        max-width: 40px;
      }
    }
  }
}
</style>