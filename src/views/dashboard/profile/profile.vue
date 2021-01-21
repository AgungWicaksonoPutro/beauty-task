<template>
    <div class="container w-full box-border m-4">
        <h1 class="m-3 text-3xl tracking-wide font-semibold">Biodata</h1>
        <div class="details-profile">
            <div class="img-container w-48 h-52 p-2 border-gray-400 border-2 rounded-lg">
                <img class="w-full h-full object-cover" :src="getUser.avatar" alt="avatar">
            </div>
            <table class="w-10/12 my-5">
                <tbody>
                    <tr class="bg-gray-200 px-28">
                        <td  class="w-12 h-8">First Name</td>
                        <td class="w-12 h-8">: {{getUser.first_name}}</td>
                    </tr>
                    <tr class="bg-gray-50">
                        <td class="w-12 h-8">Last Name</td>
                        <td class="w-12 h-8">: {{getUser.last_name}}</td>
                    </tr>
                    <tr class="bg-gray-200">
                        <td class="w-12 h-8">Email</td>
                        <td class="w-12 h-8">: {{getUser.email}}</td>
                    </tr>
                    <tr class="bg-gray-50">
                        <td class="w-12 h-8">ID</td>
                        <td class="w-12 h-8">: {{getUser.id}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Profile',
  computed: {
    ...mapGetters(['getUser'])
  }
}
</script>

<style scoped>

</style>
