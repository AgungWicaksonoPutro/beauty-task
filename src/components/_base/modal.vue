<template>
 <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-40 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-40"></div>
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-md transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <button @click="$emit('event-close')" class="text-red-500 font-medium text-3xl hover:text-gray-800 focus:outline-none absolute top-1 right-1"><b-icon icon="x-circle"></b-icon></button>
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <form class="mb-1">
                        <h1 class=" font-bold text-2xl">Update Data</h1>
                        <div class="form-group mb-2">
                            <label class=" block" for="name">Nama</label>
                            <input v-model="dataUpdate.name" class="bg-gray-200 p-2 w-full" type="text" name="name" id="name">
                        </div>
                        <div class="form-group mb-2">
                            <label class=" block" for="name">Job</label>
                            <input v-model="dataUpdate.job" class="bg-gray-200 p-2 w-full" type="text" name="job" id="job">
                        </div>
                        <button @click.prevent="$emit('event-update', dataUpdate.id)" class="bg-gray-200 p-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    dataUpdate: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
