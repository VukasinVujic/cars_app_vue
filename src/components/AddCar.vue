<template>
  <div>
    <form @submit.prevent="addCar()">
      <label for="brand">Brand:</label>
      <input v-model="car.brand" type="text" name="brand">
      <br>
      <label for="model">model:</label>
      <input v-model="car.model" type="text" name="model">
      <br>

      <select v-model="car.year">
        <option v-for="year in years" :key="year">{{ year }}</option>
      </select>
      <br>

      <label for="maxSpeed">maxSpeed:</label>
      <input v-model="car.maxSpeed" type="number" name="maxSpeed">
      <br>

      <label for="numberOfDoors">numberOfDoors:</label>
      <input v-model="car.numberOfDoors" type="number" name="numberOfDoors">
      <br>

      <label for="isAutomatic">isAutomatic:</label>
      <input v-model="car.isAutomatic" type="checkbox" name="isAutomatic">
      <br>

      <label for="engine">engine:</label>
      
      <input v-model="car.engine" type="radio" name="engine" value="diesel">
      diesel
      <input v-model="car.engine" type="radio" name="engine" value="petrol">
      petrol
      <input v-model="car.engine" type="radio" name="engine" value="electric">
      electric
      <input v-model="car.engine" type="radio" name="engine" value="hybrid">
      hybrid
      <button type="submit">submit</button>
      <br>
      <button type="reset">reset</button>
      <br>
      <button @click.prevent="preview()">Preview</button>
    
    </form>
  </div>
</template>

<script>
import { cars } from "../services/Cars";

export default {
  data() {
    return {
      car: {
        brand: "",
        model: "",
        year: "",
        maxSpeed: "",
        numberOfDoors: "",
        isAutomatic: "",
        engine: ""
      }
    };
  },
  methods: {
    // async addNewCar() {
    //   try {
    //     const { data } = await cars.add(this.car);
    //     this.cars = data;
    //   this.$router.push('cars');
    //   } catch (error) {
    //     console.log("error");
    //   }
    // }
    addCar(){
      cars.add(this.car);
      this.car={};
      this.$router.push('/cars');
    },
    preview(){
      let newCarnew = "";
      newCarnew+=this.car.brand + " "
               + this.car.model + " "
               + this.car.year + " "
               + this.car.maxSpeed + " "
               + this.car.numberOfDoors + " "
               + this.car.isAutomatic + " "
               + this.car.engine
      alert(newCarnew);    
    }
    

  },
  computed: {
    years() {
      let niz = [];
      let min = 1990;
      let max = 2018;
      for (let i = min; i <= max; i++) {
        niz.push(i);
      }
      return niz;
    }
  }
};
</script>

<style>
</style>
