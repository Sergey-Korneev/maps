<template>
  <form class="add__form" @submit.prevent="addNewMarker">
    <h1 class="add__title">Форма заявки</h1>
    <div class="add__punct">
      <p class="add__subtitle">Заявитель:</p>
      <input class="add__input" v-model="dataPoint.name" type="text" placeholder="Имя Фамилия" />
    </div>
    <div class="add__punct">
      <p class="add__subtitle">Адрес:</p>
      <input class="add__input" v-model="dataPoint.addres" type="text" placeholder="Адрес" />
    </div>
    <div class="add__punct">
      <p class="add__subtitle">Место положение:</p>
      <maps :dataPoint="[]" @coordinatRedact="coordinatRedact" :trueAddMarker="true" classMap="map__form"/>
    </div>
    <div class="add__punct">
      <p class="add__subtitle">Телефон:</p>
      <input class="add__input" v-model="dataPoint.tel" type="" placeholder="Адрес аварии" />
    </div>
    <div class="add__punct">
      <p class="add__subtitle">Тип аварии:</p>
      <select class="add__input" v-model="dataPoint.tupe" name="" id="">
        <option>Выберите вариант</option>
        <option value="Порыв">Порыв</option>
        <option value="Утечка">Утечка</option>
        <option value="Колонка уличная">Колонка уличная</option>
        <option value="Некачественная вода">Некачественная вода</option>
        <option value="Закупорка">Закупорка</option>
        <option value="Другое">Другое</option>
      </select>
    </div>
    <div class="add__punct">
      <p class="add__subtitle">Приоритет:</p>
      <select class="add__input" v-model="dataPoint.src" name="" id="">
        <option value="">Выберите вариант</option>
        <option value="1">Незамедлительно</option>
        <option value="2">Высокий</option>
        <option value="3">Средний</option>
        <option value="4">Низкий</option>
      </select>
    </div>
    <input
      class="submit"
      type="submit"
      value="Отправить заявку"
      calssMap="calssMap"
    />
  </form>
</template>

<style lang="sass">
.map
  &__form
    max-width: 100%
    min-width: 940px
    height: 300px
</style>

<script>
import maps from '@/components/componentMap.vue'

export default {
  data () {
    return {
      dataPoint: {
        name: null,
        addres: null,
        tel: null,
        cord: null,
        tupe: null,
        src: null,
        priorit: 'Высокий'
      }
    }
  },
  props: ['classMap'],
  components: { maps },
  methods: {
    coordinatRedact (cord) {
      this.dataPoint.cord = cord
    },
    addNewMarker () {
      var newPoint = this.dataPoint
      this.$store.commit('addNewPoint', newPoint)
    }
  }
}
</script>
