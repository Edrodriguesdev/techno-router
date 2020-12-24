<template>
  <div class="center">
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h1>{{api.titulo}}</h1>
        <p>{{api.descricao}}</p>
        <ul v-for="(item, index) in api.contato" :key="item.contato">
          <li><b>{{index}}</b> : {{item}}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js'

export default {
  name: "contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  }
}
</script>

<style>
.center {
  position: relative;
  top: 120px;
}
</style>