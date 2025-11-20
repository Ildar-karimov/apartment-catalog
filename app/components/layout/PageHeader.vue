<script setup lang="ts">
import useTheme from '~/composables/useTheme';

const { changeTheme } = useTheme();
</script>

<template>
  <header class="page-header">
    <UiLogo />
    <nav class="page-header__nav">
      <NuxtLink to="/buy-apart" class="page-header__link">Покупка</NuxtLink>
      <NuxtLink to="/rent-apart" class="page-header__link">Аренда</NuxtLink>
      <NuxtLink to="/build-house" class="page-header__link">Построить дом</NuxtLink>
    </nav>
    <div class="page-header__right">
      <UiButton class="page-header__btn">Войти</UiButton>
      <UiButton class="page-header__btn" @click="changeTheme('default')">
        <Icon name="ph:sun" />
      </UiButton>
      <UiButton class="page-header__btn" @click="changeTheme('dark')">
        <Icon name="ph:moon" />
      </UiButton>
    </div>
  </header>
</template>

<style scoped lang="scss">
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 rem(120);

  background-color: rootVar(bg-main);

  &__nav {
    display: flex;
    align-items: center;
    gap: rem(16);
  }

  &__link {
    display: inline-block;
    padding: rem(14);
    box-sizing: border-box;

    color: rootVar(color-txt-secondary);

    border-bottom: rem(2) solid transparent;

    transition: color 300ms, border-bottom-color 300ms;

    &:hover {
      color: rootVar(color-txt-main);

      border-bottom-color: rootVar(bg-4);
    }

    &.router-link-active {
      color: rootVar(color-txt-4);

      border-bottom-color: rootVar(bg-4);
    }
  }

  &__btn {
    padding: rem(15) rem(14);
  }
}
</style>