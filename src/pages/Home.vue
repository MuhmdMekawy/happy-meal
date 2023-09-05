<script >
import axios from 'axios'
export default {
  name: 'Home',
  data() {
    return {
      meals: null,
    }
  },
  methods: {
    fetchData() {
      axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res) => {
        return this.meals = res.data.categories
      })
    }
  },
  created() {
    this.fetchData();
  }  
}
</script>

<template>
  <div class="loading" v-if="meals === null">
    <div class="spinner">
      <div></div>   
      <div></div>    
      <div></div>    
      <div></div>    
      <div></div>    
      <div></div>    
      <div></div>    
      <div></div>    
      <div></div>    
      <div></div>    
    </div>
  </div>
  <div class="home-page" v-if="meals !== null">
    <div class="container">
      <h1>All Categories</h1>
      <div class="content">
        <router-link :to="'/category/' + meal.strCategory" class="cont" v-for="meal in meals" :key="meal.idCategory">
          <div class="image">
            <img :src="meal.strCategoryThumb" alt="img" loading="lazy">
          </div>
          <div class="text">
            <h3>{{meal.strCategory}}</h3>
            <p>{{meal.strCategoryDescription}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50% , -50%);
  .spinner {
  position: absolute;
  width: 9px;
  height: 9px;
}

.spinner div {
  position: absolute;
  width: 50%;
  height: 150%;
  background: #000000;
  transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  animation: spinner-fzua35 1s calc(var(--delay) * 1s) infinite ease;
}

.spinner div:nth-child(1) {
  --delay: 0.1;
  --rotation: 36;
  --translation: 150;
}

.spinner div:nth-child(2) {
  --delay: 0.2;
  --rotation: 72;
  --translation: 150;
}

.spinner div:nth-child(3) {
  --delay: 0.3;
  --rotation: 108;
  --translation: 150;
}

.spinner div:nth-child(4) {
  --delay: 0.4;
  --rotation: 144;
  --translation: 150;
}

.spinner div:nth-child(5) {
  --delay: 0.5;
  --rotation: 180;
  --translation: 150;
}

.spinner div:nth-child(6) {
  --delay: 0.6;
  --rotation: 216;
  --translation: 150;
}

.spinner div:nth-child(7) {
  --delay: 0.7;
  --rotation: 252;
  --translation: 150;
}

.spinner div:nth-child(8) {
  --delay: 0.8;
  --rotation: 288;
  --translation: 150;
}

.spinner div:nth-child(9) {
  --delay: 0.9;
  --rotation: 324;
  --translation: 150;
}

.spinner div:nth-child(10) {
  --delay: 1;
  --rotation: 360;
  --translation: 150;
}

@keyframes spinner-fzua35 {
  0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  }

  50% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
  }
}
}
.home-page{
  padding: 50px 0;
  h1{
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 30px;
  }
  .content{
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    gap: 20px;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width : 1200px){
      grid-template-columns: repeat(3 , 1fr);
    }
    @media (max-width : 991px){
      grid-template-columns: repeat(2 , 1fr);
    }
    @media (max-width : 500px){
      grid-template-columns: repeat(1 , 1fr);
    }
    .cont{
      border: 1px solid #333;
      border-radius: 3px;
      overflow: hidden;
      height: 350px;
      padding: 15px 0;
      text-overflow: ellipsis;
      @media(max-width:500px){
        max-width: 355px;
        margin: 0 auto;
      }
      .text{
        padding: 10px;
        h3{
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        p{
          margin-bottom: 0;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.8;
        }
      }
      .image{
        max-width: 250px;
        margin: 0 auto;
        img{
          object-fit: contain;
        }
      }
    }
  }
}
</style>