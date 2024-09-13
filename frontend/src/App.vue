<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getProducts } from './services/productService';

interface Product {
  id: number;
  prefix?: string;
  title: string;
  postfix?: string;
}

const products = ref<Product[]>([]);

const fetchProducts = async () => {
  const response = await getProducts();
  products.value = response.data;
};

onMounted(fetchProducts);
</script>

<template>
  <div>
    <h1>Products List</h1>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.prefix || '' }} {{ product.title }} {{ product.postfix || '' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
table, th, td {
  border: 1px solid black;
}
th, td {
  padding: 8px;
  text-align: left;
}
</style>
