<template>
<div>
  <nav class="navbar">
      <router-link :to="{ name: 'statement' }" class="navbar__list"> Журнал </router-link>
      <router-link :to="{ name: 'Map' }" class="navbar__list"> Карта </router-link>
    </nav>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({})
}
</script>

<style lang="sass">
@font-face
  font-family: 'Roboto'
  font-style: normal
  font-weight: 400
  src: local('Roboto'), local('Roboto-Regular'),
  url: ('../assets/fonts/roboto-v20-latin-regular.woff2') format('woff2'),
  url: ('../assets/fonts/roboto-v20-latin-regular.woff') format('woff')

@font-face
  font-family: 'Roboto-Black'
  font-style: normal
  font-weight: 400
  src: local('Roboto'), local('Roboto-Black'),
  url: ('../assets/fonts/roboto-v20-latin-900.woff2') format('woff2'),
  url: ('../assets/fonts/roboto-v20-latin-900.woff') format('woff')

%list
  list-style-type: none

%input__padding
  padding: 10px 0 10px 0

*
  font-family: Roboto

.navbar
  display: flex
  justify-content: space-evenly
  &__list
    @extend %list
    text-decoration: none
    color: #000
    font-size: 20px
    font-weight: 900
    transition: .2s
    padding: 20px
    &:hover
      color: #808080

.application
  &__contact
    padding: 0 0 10px 0
    font-size: 18px
  &__list
    display: flex
    margin: 10px 0 10px 0
    border-bottom: 1px solid
  &__punct
    padding: 0 30px
    min-width: 250px
    border-right: 1px solid

.add
  z-index: 10
  position: fixed
  top: 0
  left: 0
  padding: 50px
  width: 100%
  height: 100%
  background-color: #0000004f
  display: flex
  align-items: center
  justify-content: center
  &__button
    position: fixed
    background-color: #48b100
    width: 70px
    height: 70px
    top: 88%
    left: 92%
    border-radius: 50px
    color: #fff
    font-size: 60px
    transition: .2s
    &:hover
      background-color: #93ff4a

  &__punct
    margin: 0 0 15px 0
  &__input
    box-shadow: 2px 2px 8px #00000047
    max-width: 300px
    min-width: 940px
    padding: 8px
    border-radius: 10px
    min-height: 35px
  &__form
    background-color: #fff
    min-width: 340px
    min-height: 450px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    border-radius: 20px
    padding: 35px
  &__title
    margin: 0 0 20px 0
  &__subtitle
    margin: 0 0 5px 10px

.submit
  background-color: #6ad204
  max-width: 185px
  min-width: 290px
  min-height: 50px
  border-radius: 10px
  font-size: 22px
  font-weight: 900

.none
  display: none

</style>
