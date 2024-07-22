<template>
    <div class="trip-expenses-form">
      <div :class="['header', { collapsed: isCollapsed }]">
        <h5>Izdaci za noćenje</h5>
        <button @click="toggleCollapse" class="collapse-btn">
          {{ isCollapsed ? '+' : '-' }}
        </button>
      </div>
      <div v-if="!isCollapsed" class="form-content">
        <form @input="emitSleepingExpenseData">
          <div v-for="(expense, index) in expenses" :key="index" class="mb-3">
            <div class="d-flex">
              <div class="me-3">
                <label class="form-label" >Vrsta smještaja:</label>
                <select v-model="expense.accomodation" class="form-select">
                  <option value="avion">Hotel</option>
                  <option value="auto">Apartman</option>
                  <option value="bus">Hostel</option>
                </select>
              </div>
              <div class="me-3">
                <label class="form-label">Broj noćenja:</label>
                <input v-model="expense.quantity" type="number" class="form-control" />
              </div>
              <div>
                <label class="form-label">Iznos u KM po noćenju:</label>
                <input v-model="expense.amount" type="number" class="form-control" />
              </div>
              <button @click.prevent="removeExpense(index)" class="btn btn-danger remove-btn">-</button>
            </div>
            <button v-if="index === expenses.length - 1" @click.prevent="addExpense" class="btn btn-primary mt-2">+</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        expenses: [
          { accomodation: 'hotel', quantity: 0, amount: 0 }
        ],
        isCollapsed: false
      };
    },
    methods: {
      emitSleepingExpenseData() {
        this.$emit('sleeping-expense-data', this.expenses);
      },
      toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
      },
      addExpense() {
        this.expenses.push({ accomodation: 'hotel', quantity: 0, amount: 0 });
        this.emitSLeepingExpenseData();
      },
      removeExpense(index) {
        if (this.expenses.length > 1) {
          this.expenses.splice(index, 1);
          this.emitSleepingExpenseData();
        }
      }
    },
    watch: {
      expenses: 'emitSleepingExpenseData'
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
  