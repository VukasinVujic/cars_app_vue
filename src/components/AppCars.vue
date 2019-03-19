<template>
  <div>
    <h1>Car list</h1>
    <div v-for="car in cars" :key="car.id">
      <p>brand: {{ car.brand }}</p>
      <p>model: {{ car.model }}</p>
      <p>year: {{ car.year }}</p>
      <p>maxSpeed: {{ car.maxSpeed }}</p>
      <p>isAutomatic: {{ car.isAutomatic }}</p>
      <p>engine: {{ car.engine }}</p>
      <p>numberOfDoors: {{ car.numberOfDoors }}</p>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
import { cars } from "../services/Cars";
export default {
  data() {
    return {
      cars: []
      // brand: "",
      // model: "",
      // year: "",
      // maxSpeed: "",
      // isAutomatic: "",
      // engine: "",
      // numberOfDoors: ""
    };
  },
  async created() {
    try {
      const { data } = await cars.getCars();
      this.cars = data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
</style>
