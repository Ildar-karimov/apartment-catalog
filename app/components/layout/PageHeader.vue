<template>
  <header class="page-header">
    <UiLogo />
    <nav class="page-header__nav">
      <NuxtLink to="/buy-apart" class="page-header__link">Покупка</NuxtLink>
      <NuxtLink to="/rent-apart" class="page-header__link">Аренда</NuxtLink>
      <NuxtLink to="/build-house" class="page-header__link">Построить дом</NuxtLink>
    </nav>
    <UiButton class="page-header__btn">Войти</UiButton>
  </header>
</template>

<style scoped lang="scss">
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 rem(120);

  background-color: #fff;

  &__nav {
    display: flex;
    align-items: center;
    gap: rem(16);
  }

  &__link {
    display: inline-block;
    padding: rem(14);
    box-sizing: border-box;

    color: #738295;

    border-bottom: rem(2) solid transparent;

    transition: color, border-bottom-color 300ms;

    &:hover {
      color: #262626;

      border-bottom-color: #009e36;
    }

    &.router-link-active {
      color: #009e36;

      border-bottom-color: #009e36;
    }
  }

  &__btn {
    padding: rem(15) rem(14);
  }
}
</style>