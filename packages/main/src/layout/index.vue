<template>
  <div :class="ns.b()"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useNamespace } from '@innbell/utils'

export default defineComponent({
  name: '',
  setup() {
    const ns = useNamespace('app-layout')
    return {
      ns,
    }
  }
});
</script>
<style lang="scss">

</style>