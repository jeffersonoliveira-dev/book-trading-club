<template>
  <div class="row">
    <div class="col s12 m12">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{ book  }}</span>
        </div>
        <div class="card-action">
          <a href="#">{{name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ''
    }
  },
  props: {
    name: String,
    book: String
  }
}
</script>

<style>

</style>
