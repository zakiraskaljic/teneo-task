<template>
  <div class="advance-payment-form">
    <div :class="['header', { collapsed: isCollapsed }]">
      <h5>Dodavanje akontacije</h5>
      <button @click="toggleCollapse" class="collapse-btn">
        {{ isCollapsed ? '+' : '-' }}
      </button>
    </div>
    <div v-if="!isCollapsed" class="form-content">
      <form @input="emitPaymentData">
        <div class="mb-3 d-flex">
          <div class="me-3">
            <label class="form-label">Vrijednost:</label>
            <input v-model="value" type="number" class="form-control" />
          </div>
          <div>
            <label class="form-label">Valuta:</label>
            <select v-model="currency" class="form-select">
              <option value="KM">KM</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
        <div class="mb-3 d-flex">
          <div class="me-3">
            <label class="form-label">Akontacija do datuma:</label>
            <input v-model="advancePaymentDate" type="date" class="form-control" />
          </div>
          <div>
            <label class="form-label">Način uplata akontacije:</label>
            <select v-model="paymentMethod" class="form-select">
              <option value="card">Kartica</option>
              <option value="cash">Gotovina</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <label for="specialNotes" class="form-label">Napomena:</label>
          <textarea id="specialNotes" v-model="specialNotes" class="form-control"></textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedDate: {
      type: String,
      default: '' 
    }
  },
  data() {
    return {
      value: 0,
      currency: 'KM',
      advancePaymentDate: '',
      paymentMethod: 'card',
      specialNotes: '',
      isCollapsed: false
    };
  },
  methods: {
    emitPaymentData() {
      this.$emit('payment-data', {
        value: this.value,
        currency: this.currency,
        advancePaymentDate: this.advancePaymentDate,
        paymentMethod: this.paymentMethod,
        specialNotes: this.specialNotes
      });
    },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    }
  },
  watch: {
    value: 'emitPaymentData',
    currency: 'emitPaymentData',
    advancePaymentDate: 'emitPaymentData',
    paymentMethod: 'emitPaymentData'
  }
};
</script>

<style scoped>
.advance-payment-form {
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
.header h5{
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

.d-flex > div {
  margin-right: 1rem; 
}

.d-flex > div:last-child {
  margin-right: 0; 
}
</style>
