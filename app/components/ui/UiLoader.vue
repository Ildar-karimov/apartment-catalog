<script setup lang="ts">
interface IProps {
  size?: 'sm' | 'md' | 'lg';
}
withDefaults(defineProps<IProps>(), {
  size: 'md',
});
</script>

<template>
  <div class="ui-loader" :class="[`ui-loader--size-${size}`]">
    <div v-for="i in 8" :key="i" class="ui-loader__part" />
  </div>
</template>

<style lang="scss" scoped>
.ui-loader {
  display: flex;
  position: relative;
  width: rem(80);
  height: rem(80);
  margin: rem(50) auto;

  &--size-sm {
    transform: scale(0.65);
    margin: rem(10) auto;
  }

  &__part {
    animation: loader-anim 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: rem(40) rem(40);

    &:after {
      content: ' ';
      display: block;
      position: absolute;
      width: rem(7);
      height: rem(7);
      border-radius: 50%;
      background: #009e36;
      margin: rem(-4) 0 0 rem(-4);
    }

    &:nth-child(1) {
      animation-delay: -0.036s;

      &:after {
        top: rem(63);
        left: rem(63);
      }
    }

    &:nth-child(2) {
      animation-delay: -0.072s;

      &:after {
        top: rem(68);
        left: rem(56);
      }
    }

    &:nth-child(3) {
      animation-delay: -0.108s;

      &:after {
        top: rem(71);
        left: rem(48);
      }
    }

    &:nth-child(4) {
      animation-delay: -0.144s;

      &:after {
        top: rem(72);
        left: rem(40);
      }
    }

    &:nth-child(5) {
      animation-delay: -0.18s;

      &:after {
        top: rem(71);
        left: rem(32);
      }
    }

    &:nth-child(6) {
      animation-delay: -0.216s;

      &:after {
        top: rem(68);
        left: rem(24);
      }
    }

    &:nth-child(7) {
      animation-delay: -0.252s;

      &:after {
        top: rem(63);
        left: rem(17);
      }
    }

    &:nth-child(8) {
      animation-delay: -0.288s;

      &:after {
        top: rem(56);
        left: rem(12);
      }
    }
  }
}

@keyframes loader-anim {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
