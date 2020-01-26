<template>
    <div>
      <AppNavigator/>
    </div>
</template>

<script>
  //import Login from './pages/Login.vue';
  import AppNavigator from './AppNavigator.vue';

  export default{
    name: 'login',
    components: {
      AppNavigator
    }
  };
</script>