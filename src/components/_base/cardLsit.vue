<template>
    <div class="w-44 h-44 m-3 p-3 rounded-md shadow-md bg-gray-50 box-border">
        <div class="color-place w-full h-20 rounded-md" :style="`background-color: ${dataList.color}`"></div>
        <div class="details font-light ml-1 mt-1 text-gray-500 text-sm">
            <p>Name: {{dataList.name}}</p>
            <p>Pantone: {{dataList.pantone_value}}</p>
            <p>Year: {{dataList.year}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    dataList: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
