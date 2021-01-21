<template>
    <div class=" overflow-x-hidden">
      <transition name="page">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped>
.page-enter-active, .page-leave-active {
     transition: all 0.8s;
}
.page-enter, .page-leave-active {
     opacity: 0;
}
.page-enter {
     transform: translateX(-35px);
}
.page-leave-active {
     transform: translateX(35px);
}
.page-enter-active, .page-leave-active {
     transition: all 0.8s;
}
.page-enter, .page-leave-to {
     opacity: 0;
     transform: translateX(-35px);
}
</style>
