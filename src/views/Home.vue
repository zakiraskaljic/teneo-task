<template>
    <div>
      <Calendar />
      <RequestsList :requests="requests" />
    </div>
  </template>
  
  <script>
  import Calendar from '../components/Calendar.vue';
  import RequestsList from '../components/RequestsList.vue';
  
  export default {
    components: {
      Calendar,
      RequestsList
    },
    data() {
      return {
        selectedDate: null,
        requests: []
      };
    },
    created() {
      const combinedData = JSON.parse(this.$route.params.combinedData || '{}');
      
      if (combinedData) {
        this.requests.push({
          ...combinedData,
          period : `Od ${new Date().toISOString().split('T')[0]} do ${new Date(new Date().setDate(new Date().getDate() + 4)).toISOString().split('T')[0]}`,
          employeeName: 'John Doe', 
          createdBy: 'Jane Smith', 
          createdDate: new Date().toLocaleDateString(),
          status: 'Na obradi'
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    margin-top: 2rem;
  }
  </style>
  