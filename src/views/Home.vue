<template>
  <div>
    <h1>Home</h1>
    <p>{{api}}</p>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js' 
export default {
  name: "home",
  mixins: [fetchData],
  created() {
    this.fetchData();
  }
};
</script>
