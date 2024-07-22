<template>
    <div class="container">
    <div class="header">
    <h2>Zahtjev za službeno putovanje</h2>
    </div>
    <button @click="goBack" class="btn btn-primary">Nazad</button>
      <DateSelectionModal 
      @trip-data="updateTripData" 
    />
    <AdvancePaymentForm
    @payment-data="updatePaymentData" 
       class="component-spacing"
    />
    <DrivingExpenses
    @driving-expenses-data="updateDrivingExpensesData" 
    class="component-spacing"
    />
    <SleepingExpenses
    @sleeping-expenses-data="updateSleepingExpensesData" 
    class="component-spacing"
    />
    <OtherExpenses
    @other-expenses-data="updateOtherExpensesData" 
    class="component-spacing"
    />
    <div class="button-container">
    <button @click="submitForm" class="btn btn-primary">Podnesi</button>
    </div>
    </div>
  </template>
  
  <script>
  import DateSelectionModal from '../components/DateSelectionModal.vue';
  import AdvancePaymentForm from '../components/AdvancePaymentForm.vue';
  import DrivingExpenses from '../components/DrivingExpenses.vue';
  import SleepingExpenses from '../components/SleepingExpenses.vue';
  import OtherExpenses from '@/components/OtherExpenses.vue';
  
  export default {
    components: {
      DateSelectionModal,
      AdvancePaymentForm,
      DrivingExpenses,
      SleepingExpenses,
      OtherExpenses
    },
    data() {
    return {
      showTripForm: false,
      tripData: {},
      paymentData: {},
      drivingExpensesData: {},
    };
  },
  methods: {
    updateTripData(data) {
      this.tripData = data;
    },
    updatePaymentData(data) {
      this.paymentData = data;
    },
    updateDrivingExpensesData(data) {
      this.drivingExpensesData = data;
    },
    updateSleepingExpensesData(data) {
      this.sleepingExpensesData = data;
    },
    updateOtherExpensesData(data) {
      this.otherExpensesData = data;
    },
    submitForm() {
        const combinedData = {
          ...this.tripData,
          ...this.paymentData
        };
        console.log('Combined Data:', combinedData);
        this.$router.push({ 
        name: 'Home', 
        params: { combinedData: JSON.stringify(combinedData) } 
      });
    },
    goBack() {
        this.$router.push('/');
    }
    }
  };
  </script>
  
<style scoped>
  .container {
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  padding: 1rem;
}

.header {
  text-align: center;
  margin-bottom: 20; 
}

.header h2 {
  padding-bottom: 0.5rem; 
  color:#494949;
}

.component-spacing {
  margin-top: 1rem; 
}

.btn btn-primary:hover {
  background-color: #0056b3; 
}

.button-container {
  display: flex; 
  justify-content: center; 
  margin-top: 2rem; 
  margin-bottom: 2rem;
}

</style>

  