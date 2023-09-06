<script>
import axios from 'axios';

export default {
  name: 'Meal',
  data() {
    return {
      meal : null
    }
  },
  computed: {
    mealName() {
      return this.$route.params.name
    },
  },
  methods: {
    async fetchData() {
      await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.mealName.split(' ')[0]}`).then((res) => {
        return this.meal = res.data.meals.filter((f)=> f.strMeal === this.mealName)
      })
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<template>
  <div class="loading" v-if="meal === null">
    <img style="max-width: 100px; margin: 0 auto;" src="../assets/images/loading.gif" alt="image" loading="lazy">
  </div>
  <div  v-if="meal !== null" class="meal" v-for="item in meal" :key="item.idMeal">
    <div class="container">
      <div class="content">
        <div class="image"  data-aos="zoom-in" data-aos-duration="1000">
          <img :src="item.strMealThumb" alt="meal image" loading="lazy">
        </div>
        <div class="text">
          <h1  data-aos="fade-down" data-aos-duration="1000">{{ mealName }}</h1>
          <h2>Category : <span data-aos="fade-down" data-aos-duration="1000">{{ item.strCategory }}</span></h2>
          <h3>Country : <span data-aos="fade-down" data-aos-duration="1000">{{ item.strArea }}</span></h3>
          <p><span>Instructions : </span><br> {{ item.strInstructions }}</p>
          <ul>
            <p v-if=" item.strTags !== null">Tags: </p>
            <li v-if=" item.strTags !== null && item.strTags.split(',')[0] ">{{ item.strTags.split(',')[0] }}</li>
            <li v-if=" item.strTags !== null && item.strTags.split(',')[1] ">{{ item.strTags.split(',')[1] }}</li>
            <li v-if=" item.strTags !== null && item.strTags.split(',')[2] ">{{ item.strTags.split(',')[2] }}</li>
            <li v-if=" item.strTags !== null && item.strTags.split(',')[3] ">{{ item.strTags.split(',')[3] }}</li>
          </ul>
          <h4>Preparation method Video => <a target="_blank" :href="item.strYoutube">click here</a></h4>
          <h5>Ingredients</h5>
          <table class="table table-responsive table-bordered">
            <tbody>
              <tr v-if="item.strIngredient1 && item.strMeasure1">
                <td>{{ item.strIngredient1 }}</td>
                <td>{{ item.strMeasure1 }}</td>
              </tr>
              <tr v-if="item.strIngredient2 && item.strMeasure2">
                <td>{{ item.strIngredient2 }}</td>
                <td>{{ item.strMeasure2 }}</td>
              </tr>
              <tr v-if="item.strIngredient3 && item.strMeasure3">
                <td>{{ item.strIngredient3 }}</td>
                <td>{{ item.strMeasure3 }}</td>
              </tr>
              <tr v-if="item.strIngredient4 && item.strMeasure4">
                <td>{{ item.strIngredient4 }}</td>
                <td>{{ item.strMeasure4 }}</td>
              </tr>
              <tr v-if="item.strIngredient5 && item.strMeasure5">
                <td>{{ item.strIngredient5 }}</td>
                <td>{{ item.strMeasure5 }}</td>
              </tr>
              <tr v-if="item.strIngredient6 && item.strMeasure6">
                <td>{{ item.strIngredient6 }}</td>
                <td>{{ item.strMeasure6 }}</td>
              </tr>
              <tr v-if="item.strIngredient7 && item.strMeasure7">
                <td>{{ item.strIngredient7 }}</td>
                <td>{{ item.strMeasure7 }}</td>
              </tr>
              <tr v-if="item.strIngredient8 && item.strMeasure8">
                <td>{{ item.strIngredient8 }}</td>
                <td>{{ item.strMeasure8 }}</td>
              </tr>
              <tr v-if="item.strIngredient9 && item.strMeasure9">
                <td>{{ item.strIngredient9 }}</td>
                <td>{{ item.strMeasure9 }}</td>
              </tr>
              <tr v-if="item.strIngredient10 && item.strMeasure10">
                <td>{{ item.strIngredient10 }}</td>
                <td>{{ item.strMeasure10 }}</td>
              </tr>
              <tr v-if="item.strIngredient11 && item.strMeasure11">
                <td>{{ item.strIngredient11 }}</td>
                <td>{{ item.strMeasure11 }}</td>
              </tr>
              <tr v-if="item.strIngredient12 && item.strMeasure12">
                <td>{{ item.strIngredient12 }}</td>
                <td>{{ item.strMeasure12 }}</td>
              </tr>
              <tr v-if="item.strIngredient13 && item.strMeasure13">
                <td>{{ item.strIngredient13 }}</td>
                <td>{{ item.strMeasure13 }}</td>
              </tr>
              <tr v-if="item.strIngredient14 && item.strMeasure14">
                <td>{{ item.strIngredient14 }}</td>
                <td>{{ item.strMeasure14 }}</td>
              </tr>
              <tr v-if="item.strIngredient15 && item.strMeasure15">
                <td>{{ item.strIngredient15 }}</td>
                <td>{{ item.strMeasure15 }}</td>
              </tr>
              <tr v-if="item.strIngredient16 && item.strMeasure16">
                <td>{{ item.strIngredient16 }}</td>
                <td>{{ item.strMeasure16 }}</td>
              </tr>
              <tr v-if="item.strIngredient17 && item.strMeasure17">
                <td>{{ item.strIngredient17 }}</td>
                <td>{{ item.strMeasure17 }}</td>
              </tr>
              <tr v-if="item.strIngredient18 && item.strMeasure18">
                <td>{{ item.strIngredient18 }}</td>
                <td>{{ item.strMeasure18 }}</td>
              </tr>
              <tr v-if="item.strIngredient19 && item.strMeasure19">
                <td>{{ item.strIngredient19 }}</td>
                <td>{{ item.strMeasure19 }}</td>
              </tr>
              <tr v-if="item.strIngredient20 && item.strMeasure20">
                <td>{{ item.strIngredient20 }}</td>
                <td>{{ item.strMeasure20 }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.meal{
  padding: 50px 0;
  .container{
    @media (max-width : 767px){
      max-width: unset;
    }
  }
  .content{
    display: grid;
    grid-template-columns: 40% 59%;
    align-items: flex-start;
    justify-content: space-between;
    .image{
      position: sticky;
      left: 0;
      top: 0;
      border-radius: 5px;
      overflow: hidden;
    }
    .text{
      h1{
        font-size: 35px;
        font-weight: 700;
        margin-bottom: 0;
        color: #e88c38;
        padding: 0 0 20px;
        @media (max-width : 500px){
          font-size: 28px;
        }
      }
      h2 , h3{
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 20px;
        span{
          color: #e88c38;
        }
      }
      h3{
        margin-bottom: 40px;
      }
      p{
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 25px;
        line-height: 1.6;
        @media (max-width : 767px){
          font-size: 16px;
        }
        @media (max-width : 767px){
          font-size: 14px;
        }
        span{
          font-size: 28px;
          text-transform: uppercase;
        }
      }
      ul{
        display: flex;
        flex-direction: row;
        gap: 0px;
        margin-bottom: 30px;
        align-items: center;
        p{
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 0;
        }
        li{
          margin: 0 5px;
          border: 1px solid #e88c38;
          padding: 5px 10px;
          border-radius: 3px;
          background: #e88c38;
          color: #fff;
        }
        +h4{
          margin-bottom: 30px;
          font-size: 20px;
          font-weight: 500;
          a{
            color: #e88c38;
            font-weight: 500;
            transition: 0.3s;
            &:hover{
              text-decoration: underline;
            }
          }
          @media (max-width: 500px){
            font-size: 17px;
          }
        }
      }
    }
    @media (max-width : 991px){
      grid-template-columns: repeat(1 , 1fr);
      .image{
        position: static;
        max-width: 500px;
        // margin: 0 auto;
        margin-bottom: 20px;
      }
    }
  }
}
</style>