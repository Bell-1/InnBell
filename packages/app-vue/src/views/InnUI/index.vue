<template>
  <div :class="[ns.b()]">
    <div :class="ns.e('title')">This is a Vue demo that uses the Innbell-ui Button.</div>
    <div :class="[btnNs.b()]">
      <div :class="[btnNs.e('group')]">
        <div :class="btnNs.e('title')">base</div>
        <inn-button>default</inn-button>
        <inn-button type="primary">primary</inn-button>
        <inn-button type="success">success</inn-button>
        <inn-button type="warning">warning</inn-button>
        <inn-button type="danger">danger</inn-button>
        <inn-button type="dashed">dashed</inn-button>
        <inn-button type="text">text</inn-button>
        <inn-button type="link">link</inn-button>
      </div>
      <div :class="[btnNs.e('group')]">
        <div :class="btnNs.e('title')">ghost</div>
        <inn-button ghost>default</inn-button>
        <inn-button type="primary" ghost>primary</inn-button>
        <inn-button type="success" ghost>success</inn-button>
        <inn-button type="warning" ghost>warning</inn-button>
        <inn-button type="danger" ghost>danger</inn-button>
      </div>

      <div :class="[btnNs.e('group')]">
        <div :class="btnNs.e('title')">ghost</div>
        <inn-button round>default</inn-button>
        <inn-button type="primary" round>primary</inn-button>
        <inn-button type="success" round>success</inn-button>
        <inn-button type="warning" round>warning</inn-button>
        <inn-button type="danger" round>danger</inn-button>
      </div>

      <div :class="[btnNs.e('group')]">
        <div :class="btnNs.e('title')">ghost + round</div>
        <inn-button ghost round>default</inn-button>
        <inn-button type="primary" ghost round>primary</inn-button>
        <inn-button type="success" ghost round>success</inn-button>
        <inn-button type="warning" ghost round>warning</inn-button>
        <inn-button type="danger" ghost round>danger</inn-button>
      </div>

      <div :class="[btnNs.e('group')]">
        <div :class="btnNs.e('title')">circle</div>
        <inn-button circle>B</inn-button>
        <inn-button type="primary" circle>P</inn-button>
        <inn-button type="success" circle>S</inn-button>
        <inn-button type="warning" circle>W</inn-button>
        <inn-button type="danger" circle>D</inn-button>
      </div>
    </div>

    <div :class="ns.e('title')">Calculator</div>
    <inn-calculator></inn-calculator>
  </div>
</template>
<script lang="ts">
export default {
  name: 'InnUI',
}
</script>

<script lang="ts" setup>
import { useNamespace } from '@innbell/utils'
import { InnCalculator } from '@/components/innbell-ui'

const ns = useNamespace('InnUI')
const btnNs = useNamespace('InnUI-btn')

</script>

<style lang="scss">
@include b('InnUI'){

  @include e('title'){
    padding: $padding-s 0;
    font-size: $font-size-large;
    color: $color-primary;
    font-weight: $font-weight-bold;
  }

}

@include b('InnUI-btn'){

  .inn-button{
    margin-right: $margin-s;
  }

  @include e('group'){
    margin-bottom: $margin-m;
  }

  @include e('title'){
    padding: $padding-s 0;
    font-weight: $font-weight-bold;
  }
}
</style>