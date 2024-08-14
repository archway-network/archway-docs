<script setup lang="ts">
import { PropType, computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

interface APIEndpoint {
  address: string;
  provider?: string;
}

interface ChainAPIs {
  rpc: APIEndpoint[];
  rest: APIEndpoint[];
  grpc?: APIEndpoint[];
}

interface ChainInfo {
  chain_name: string;
  apis: ChainAPIs;
}

// Props
const props = defineProps({
  file: { type: String, required: true },
  endpointType: { type: String as PropType<'rpc' | 'rest'>, default: 'rpc' }, // Prop to select RPC or REST
});

// Function to fetch chain info
const fetchChainInfo = async (url: string): Promise<ChainInfo> => {
  const response = await axios.get<ChainInfo>(url);
  return response.data;
};

// Use Vue Query to fetch the data
const { data: apiProviders, isLoading } = useQuery({
  queryKey: ['api-providers', props.file, props.endpointType],
  queryFn: () => fetchChainInfo(props.file),
});

// Computed property to generate the list of selected endpoints
const apiList = computed(() => {
  if (!apiProviders.value || !apiProviders.value.apis) {
    return [];
  }

  const selectedEndpoints = props.endpointType === 'rpc'
    ? apiProviders.value.apis.rpc
    : apiProviders.value.apis.rest;

  return (selectedEndpoints || []).map(api => ({
    provider: api.provider || 'Unknown',
    address: api.address,
  }));
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="apiList.length === 0">No {{ endpointType.toUpperCase() }} providers available.</div>
  <div v-else>
    <div class="scrollable-table">
      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(api, index) in apiList" :key="index">
            <td>{{ api.provider }}</td>
            <td>{{ api.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.scrollable-table {
  max-height: 200px; /* Adjust height as necessary */
  overflow-y: auto;
  border: 1px solid #ccc;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0;
  margin-bottom: 0;
}

th {
  font-weight: bold;
}

th, td {
  padding: 8px;
  text-align: left;
}

/* Sticky header */
thead th {
  position: sticky;
  top: 0;
  background-color: #f2f2f2; /* Ensure the header has a background */
  z-index: 1; /* Ensure the header stays above table rows */
}

tbody tr:nth-child(even) {
  
}

/* Dark mode styles */
.dark thead th {
  background-color: #333; /* Dark mode background for table header */
  color: white; /* Text color for dark mode */
}
</style>
