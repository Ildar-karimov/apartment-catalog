<script setup lang="ts">
import type { IAgent } from '~/types/user';

defineProps<{
  agent: IAgent
}>();
</script>

<template>
<div class="agent-card">
  <div class="agent-card__icon">
    <Icon name="mdi-light:account" />
  </div>
  <div>
    <UiText tag="p" theme="secondary">{{ agent.name }}</UiText>
    <UiText tag="p" theme="secondary">{{ agent.email }}</UiText>
  </div>
</div>
</template>

<style scoped lang="scss">
.agent-card {
  display: flex;
  gap: rem(8);


  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: rem(8);

    font-size: rem(32);
    color: rootVar(bg-main);

    background-color: rootVar(bg-third);
    border-radius: 50%;
  }
}
</style>