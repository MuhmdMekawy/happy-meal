<script>
import axios from 'axios'
import '../assets/style/style.css'
export default {
  name: 'Category',
  data() {
    return {
      meals : null
    }
  },
  computed: {
    catName() {
      return this.$route.params.name
    }
  },
  methods: {
    fetchData() {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.catName}`).then((res) => {
        return this.meals = res.data.meals
      })
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<template>
  <div class="loading" v-if="meals === null">
    <img style="max-width: 100px; margin: 0 auto;" src="../assets/images/loading.gif" alt="image" loading="lazy">
  </div>
  <div class="category" v-if="meals !== null">
    <div class="container">
      <h1>{{ catName }} Meals</h1>
      <div class="content">
        <router-link :to="'/meal/'+meal.strMeal" class="cont" v-for="meal in meals" :key="meal.idMeal">
          <div class="image">
            <img :src="meal.strMealThumb" alt="img" loading="lazy">
          </div>
          <div class="text">
            <h3>{{meal.strMeal}}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category{
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
      // padding: 15px 0;
      text-overflow: ellipsis;
      transition: 0.3s;
      &:hover{
        border-radius: 15px;
      }
      @media(max-width:500px){
        max-width: 355px;
        margin: 0 auto;
      }
      .text{
        padding: 10px;
        h3{
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 0px;
        }
      }
      .image{
        // max-width: 250px;
        margin: 0 auto;
        img{
          object-fit: contain;
        }
      }
    }
  }
}
</style>