<script setup lang="ts">
  const colorMode = useColorMode();

  const isDark = computed({
    get: () => colorMode.value === 'dark',
    set: (_isDark) => (colorMode.preference = _isDark ? 'dark' : 'light'),
  });
</script>

<template>
  <SButton
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    size="icon"
    @click="isDark = !isDark"
  >
    <Icon :name="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" />
  </SButton>
</template>
