<template>
  <form class="add__form">
    <h1 class="add__title">Форма заявки</h1>
    <div class="add__punct">
      <p class="add__subtitle">Заявитель:</p>
      <input class="add__input" type="text" placeholder="Имя Фамилия" />
    </div>
    <div class="add__punct">
      <p class="add__subtitle">Адрес:</p>
      <input class="add__input" type="text" placeholder="Адрес" />
    </div>
    <div class="add__punct">
      <p class="add__subtitle">Место положение:</p>
      <maps :dataPoint="[]" :trueAddMarker="true" classMap="map__form"/>
    </div>
    <div class="add__punct">
      <p class="add__subtitle">Телефон:</p>
      <input class="add__input" type="text" placeholder="Адрес аварии" />
    </div>
    <div class="add__punct">
      <p class="add__subtitle">Тип аварии:</p>
      <select class="add__input" name="" id="">
        <option value="">Выберите вариант</option>
        <option value="">Порыв</option>
        <option value="">Утечка</option>
        <option value="">Колонка уличная</option>
        <option value="">Некачественная вода</option>
        <option value="">Закупорка</option>
        <option value="">Другое</option>
      </select>
    </div>
    <div class="add__punct">
      <p class="add__subtitle">Приоритет:</p>
      <select class="add__input" name="" id="">
        <option value="">Выберите вариант</option>
        <option value="">Незамедлительно</option>
        <option value="">Высокий</option>
        <option value="">Средний</option>
        <option value="">Низкий</option>
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
  props: ['classMap'],
  components: { maps }
}
</script>
