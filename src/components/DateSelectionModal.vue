<template>
    <div class="date-selection">
      <div :class="['header', { collapsed: isCollapsed }]">
        <h5>Odredište putovanja</h5>
        <button @click="toggleCollapse" class="collapse-btn">
          {{ isCollapsed ? '+' : '-' }}
        </button>
      </div>
      <div v-if="!isCollapsed" class="form-content">
        <form @input="emitTripData">
          <div class="mb-3">
            <label for="purpose" class="form-label">Svrha:</label>
            <input type="text" id="purpose" v-model="tripPurpose" class="form-control" />
          </div>
  
          <div class="mb-3 d-flex">
            <div class="me-4">
              <label for="departureCountry" class="form-label">Polazna država:</label>
              <input type="text" id="departureCountry" v-model="departureCountry" class="form-control" />
            </div>
  
            <div class="me-4">
              <label for="departureCity" class="form-label">Grad polaska:</label>
              <input type="text" id="departureCity" v-model="departureCity" class="form-control" />
            </div>
            <div class="me-4">
              <label for="departureDate" class="form-label">Datum polaska:</label>
              <input type="date" id="selectedDate" v-model="selectedDate" class="form-control" />
            </div>
          </div>
  
          <div class="mb-3 d-flex">
            <div class="me-4">
              <label for="destinationCountry1" class="form-label">Odredišna država 1:</label>
              <input type="text" id="destinationCountry1" v-model="destinationCountry1" class="form-control" />
            </div>
            <div class="me-4">
              <label for="destinationCity1" class="form-label">Grad odredišta 1:</label>
              <input type="text" id="destinationCity1" v-model="destinationCity1" class="form-control" />
            </div>
            <div class="me-4">
              <label for="departureDate" class="form-label">Krajnji datum u odredišnoj državi 1:</label>
              <input type="date" id="selectedReturnDate1" v-model="selectedReturnDate1" class="form-control" />
            </div>
          </div>
  
          <div class="mb-3 d-flex">
            <div class="me-4">
              <label for="destinationCountry2" class="form-label">Odredišna država 2:</label>
              <input type="text" id="destinationCountry2" v-model="destinationCountry2" class="form-control" />
            </div>
  
            <div class="me-4">
              <label for="destinationCity2" class="form-label">Grad odredišta 2:</label>
              <input type="text" id="destinationCity2" v-model="destinationCity2" class="form-control" />
            </div>
            <div class="me-4">
              <label for="returnDate" class="form-label">Krajnji datum u odredišnoj državi 2:</label>
              <input type="date" id="selectedReturnDate2" v-model="selectedReturnDate2" class="form-control" />
            </div>
          </div>
  
          <div class="mb-3">
            <label for="purpose" class="form-label">Razlog putovanja:</label>
            <input type="text" id="purpose" v-model="tripPurpose2" class="form-control" />
          </div>
  
          <div class="mb-3">
            <label for="specialNotes" class="form-label"> Napomena:</label>
            <textarea id="specialNotes" v-model="specialNotes" class="form-control"></textarea>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isCollapsed: false,
        selectedDate: '',
        selectedReturnDate1: '',
        selectedReturnDate2: '',
        tripPurpose: '',
        tripPurpose2: '',
        departureCountry: '',
        departureCity: '',
        destinationCountry1: '',
        destinationCity1: '',
        destinationCountry2: '',
        destinationCity2: '',
        specialNotes: ''
      };
    },
    methods: {
    emitTripData() {
      this.$emit('trip-data', {
        date: this.selectedDate,
        returnDate1: this.selectedReturnDate1,
        returnDate2: this.selectedReturnDate2,
        tripPurpose: this.tripPurpose,
        tripPurpose2: this.tripPurpose2,
        departureCountry: this.departureCountry,
        departureCity: this.departureCity,
        destinationCountry1: this.destinationCountry1,
        destinationCity1: this.destinationCity1,
        destinationCountry2: this.destinationCountry2,
        destinationCity2: this.destinationCity2,
        specialNotes: this.specialNotes
      });
    },
      toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
      }
    },
    watch: {
    selectedDate: 'emitTripData',
    selectedReturnDate1: 'emitTripData',
    selectedReturnDate2: 'emitTripData',
    tripPurpose: 'emitTripData',
    tripPurpose2: 'emitTripData',
    departureCountry: 'emitTripData',
    departureCity: 'emitTripData',
    destinationCountry1: 'emitTripData',
    destinationCity1: 'emitTripData',
    destinationCountry2: 'emitTripData',
    destinationCity2: 'emitTripData',
    specialNotes: 'emitTripData'
  }
  };
  </script>
  
  <style scoped>
  .date-selection {
    padding: 1rem;
    max-width: 800px;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    border-radius: 8px;
    background: #fff;
    width: 800px;
  }
  
  .header {
    background: #f8f9fa; 
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    color: #333; 
  }
  .header h5 {
    color:#494949; 
  }
  
  .collapse-btn {
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    color: #333; 
  }
  
  .form-content {
    margin-top: 1rem;
  }
  
  .header.collapsed {
    box-shadow: none; 
  }
  </style>
  