<template>
  <div>
    <div class="calendar-header">
      <h3>Moje satnice</h3>
      <router-link to="/zahtjev-za-sluzbeno-putovanje" class="btn btn-primary">Registruj odsustvo</router-link>
    </div>
    <div class="calendar-container">
      <Calendar
        ref="calendar"
        expanded
        :attributes="attrs"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Calendar } from 'v-calendar';

const today = new Date();
const endDate = new Date(2024, 6, 26); 

const attrs = ref([
  {
    key: 'highlight-range',
    highlight: true,
    dates: { start: today, end: endDate },
    color: 'blue', 
  }
]);
</script>

<style scoped>
.calendar-container {
  margin: 70px;
}
.calendar-header {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: 70px;
  margin-right: 70px;
  margin-bottom: -40px;
}
</style>
