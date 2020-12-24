<template>
  <div>
    <div v-if="loading">
      <page-loading></page-loading>
    </div>
    <transition>
      <div v-if="api">
        <h1>Cursos</h1>
        <p>{{api}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js'
import PageLoading from '../components/PageLoading.vue';

export default {
  components: { PageLoading },
  name: 'cursos',
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  }
}
</script>
