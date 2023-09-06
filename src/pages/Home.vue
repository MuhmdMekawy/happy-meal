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
    async fetchData() {
      await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res) => {
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
    <img style="max-width: 100px; margin: 0 auto;" src="../assets/images/loading.gif" alt="image" loading="lazy">
  </div>
  <div class="home-page" v-if="meals !== null">
    <div class="container">
      <h1>All Categories</h1>
      <div class="content">
        <router-link :to="'/category/' + meal.strCategory"  data-aos="zoom-in" data-aos-duration="1000" class="cont" v-for="meal in meals" :key="meal.idCategory">
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
    @media (max-width : 400px){
      grid-template-columns: repeat(1 , 1fr);
    }
    .cont{
      border: 1px solid #333;
      border-radius: 3px;
      overflow: hidden;
      // height: 350px;
      padding: 10px 0;
      text-overflow: ellipsis;
      @media(max-width:400px){
        // max-width: 355px;
        margin: 0 auto;
        width: 100%;
      }
      .text{
        padding: 10px;
        text-align: center;
        h3{
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 0px;
        }
        p{
          margin-bottom: 0;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.8;
          display: none;
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