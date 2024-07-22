<template>
    <div class="trip-expenses-form">
      <div :class="['header', { collapsed: isCollapsed }]">
        <h5>Troškovi prevoza</h5>
        <button @click="toggleCollapse" class="collapse-btn">
          {{ isCollapsed ? '+' : '-' }}
        </button>
      </div>
      <div v-if="!isCollapsed" class="form-content">
        <form @input="emitDrivingExpenseData">
          <div v-for="(expense, index) in expenses" :key="index" class="mb-3">
            <div class="d-flex">
              <div class="me-3">
                <label class="form-label">Prevozno sredstvo:</label>
                <select v-model="expense.transport" class="form-select">
                  <option value="" disabled selected>Odaberite</option>
                  <option value="avion">Avion</option>
                  <option value="auto">Auto</option>
                  <option value="bus">Bus</option>
                </select>
              </div>
              <div class="me-3">
                <label class="form-label">Količina:</label>
                <input v-model="expense.quantity" type="number" class="form-control" />
              </div>
              <div>
                <label class="form-label">Iznos u KM:</label>
                <input v-model="expense.amount" type="number" class="form-control" />
              </div>
              <button @click.prevent="removeExpense(index)" class="btn btn-danger remove-btn">-</button>
            </div>
            <button v-if="index === expenses.length - 1" @click.prevent="addExpense" class="btn btn-primary mt-2">+</button>
          </div>
        </form>
        <div class="mb-3">
          <label class="form-label">U slučaju da ste koristili vlasitit automobil molimo Vas popunite pređene kilometre:</label>
          <input v-model="mileage" type="number" class="form-control" placeholder="Unesite pređene kilometre (km)" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        expenses: [
          { transport: 'avion', quantity: 0, amount: 0 }
        ],
        isCollapsed: false
      };
    },
    methods: {
      emitDrivingExpenseData() {
        this.$emit('driving-expense-data', this.expenses);
      },
      toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
      },
      addExpense() {
        this.expenses.push({ transport: 'avion', quantity: 0, amount: 0 });
        this.emitDrivingExpenseData();
      },
      removeExpense(index) {
        if (this.expenses.length > 1) {
          this.expenses.splice(index, 1);
          this.emitdrivingExpenseData();
        }
      }
    },
    watch: {
      expenses: 'emitDrivingExpenseData'
    }
  };
  </script>
  
  <style scoped>
  .trip-expenses-form {
    padding: 1rem;
    max-width: 800px;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background: #fff;
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
    color: #494949;
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
  
  .d-flex > div {
    margin-right: 1rem;
  }
  
  .d-flex > div:last-child {
    margin-right: 0;
  }
  .remove-btn {
  width: 30px;
  height: 30px;
  padding: 0;
  font-size: 10px;
  line-height: 10px;
  text-align: center;
  border-radius: 4px; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
}

  </style>
  