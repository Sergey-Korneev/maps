<template>
  <li class="application__list">
    <div class="application__punct">
      <p class="application__contact">
        Заявитель:<br />
        {{dataPoint.name}}
      </p>
      <p class="application__contact">
        Адрес:<br />
        {{dataPoint.addres}}
      </p>
      <p class="application__contact">
        Телефон:<br />
        {{dataPoint.tel}}
      </p>
      <p class="application__contact">
        Тип аварии:<br />
        {{dataPoint.tupe}}
      </p>
      <p class="application__contact">
        Приоритет:<br />
        {{dataPoint.priorit}}
      </p>
    </div>
    <maps :dataPoint="dataPoint" :classMap="calssMap"/>
  </li>
</template>

<script>
import maps from '@/components/componentMap.vue'

export default {
  props: ['dataPoint', 'calssMap'],
  components: { maps }
}
</script>
