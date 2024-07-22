<template>
    <div class="container">
      <div class="request-detail">
        <h2>Detalji Naloga</h2>
        <p><strong>Broj Naloga:</strong> {{ request.number }}</p>
        <p><strong>Period:</strong> {{ request.period }}</p>
        <p><strong>Ime i Prezime Zaposlenika:</strong> {{ request.employeeName }}</p>
        <p><strong>Ime i Prezime Osobe Koja Je Registrovala:</strong> {{ request.createdBy }}</p>
        <p><strong>Datum Kreiranja:</strong> {{ request.createdDate }}</p>
        <p><strong>Status:</strong> {{ request.status }}</p>
        <button @click="goBack" class="btn btn-primary">Nazad</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
  
      const request = ref({
        number: route.params.id,
        period: '2024-07-01 to 2024-07-15',
        employeeName: 'John Doe',
        createdBy: 'Jane Smith',
        createdDate: new Date().toLocaleDateString(),
        status: 'Na obradi'
      });
  
      const goBack = () => {
        router.go(-1);
      };
  
      return {
        request,
        goBack
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .request-detail {
    max-width: 600px;
    width: 100%;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    text-align: center;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: white;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  </style>
  