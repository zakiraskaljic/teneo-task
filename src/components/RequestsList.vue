<template>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Broj Naloga</th>
            <th>Period</th>
            <th>Ime i Prezime Zaposlenika</th>
            <th>Ime i Prezime Osobe Koja Je Registrovala</th>
            <th>Datum Kreiranja</th>
            <th>Status</th>
            <th>Akcije</th>
            <th>Zaključavanje naloga</th>
            <th>Preuzimanje putng naloga</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(request, index) in requests" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ request.period }}</td>
            <td>{{ request.employeeName }}</td>
            <td>{{ request.createdBy }}</td>
            <td>{{ request.createdDate }}</td>
            <td>{{ request.status }}</td>
            <td>
              <button @click="viewRequest(request, index + 1)" class="btn btn-info">Pregled</button>
            </td>
            <td>
              <button @click="toggleLockRequest(index)" 
                      :class="['btn', isLocked[index] ? 'btn-primary' : 'btn-outline-primary']">
                <i :class="isLocked[index] ? 'fas fa-lock' : 'fas fa-unlock'"></i>
              </button>
            </td>
            <td>
                <button @click="exportToExcel" class="btn btn-export">Preuzimanje</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import * as XLSX from 'xlsx';
  
  export default {
    props: ['requests'],
    setup(props) {
      const router = useRouter();
      const isLocked = ref([]);
  
      onMounted(() => {
        isLocked.value = props.requests.map(() => false);
      });
  
      const viewRequest = (request, requestId) => {
        router.push({
          path: `/pregled-zahtjeva/${requestId}`,
          state: {
            employeeName: 'John Doe',
            createdBy: 'Jane Smith',
            createdDate: request.createdDate,
            status: request.status
          }
        });
      };
  
      const editRequest = (request) => {
        // Logic to edit request
      };
  
      const exportToExcel = () => {
        const wsData = props.requests.map((request, index) => ({
          'Broj Naloga': index + 1,
          'Period': request.period,
          'Ime i Prezime Zaposlenika': request.employeeName,
          'Ime i Prezime Osobe Koja Je Registrovala': request.createdBy,
          'Datum Kreiranja': request.createdDate,
          'Status': request.status
        }));
  
        const ws = XLSX.utils.json_to_sheet(wsData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Requests');
        XLSX.writeFile(wb, 'requests.xlsx');
      };
  
      const sendForCorrection = (request) => {
        // Implementacija logike za slanje zahtjeva na korekciju
      };
  
      const toggleLockRequest = (index) => {
        isLocked.value[index] = !isLocked.value[index]; 
      };
  
      return {
        isLocked,
        viewRequest,
        editRequest,
        exportToExcel,
        sendForCorrection,
        toggleLockRequest
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 2rem;
  }
  
  .table {
    width: 100%;
  }
  .table th{
    color: #494949;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    font-size: 0.875rem; 
    border-radius: 20px 20px 20px 20px;
  }
  
  .btn-info {
    background-color: #007bff;
    color: white;
    border-radius: 20px 20px 20px 20px;
  }
  
  .btn-export {
    background-color: white;
    color: #007bff;
    border: 2px solid #007bff;
  }
  
  .btn-export:hover {
    background-color: #f8f9fa;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: white;
  }
  
  .btn-primary {
    background-color: #007bff; 
    color: white;
  }
  
  .btn-outline-primary {
    background-color: transparent;
    color: #007bff; 
    border: 2px solid #007bff;
  }
  
  .btn-outline-primary .fa-lock, .btn-outline-primary .fa-unlock {
    color: #007bff; 
  }
  
  .btn-primary .fa-lock, .btn-primary .fa-unlock {
    color: white; 
  }
  </style>
  
  