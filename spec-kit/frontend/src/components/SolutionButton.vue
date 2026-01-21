<template>
  <button 
    class="solution-button"
    :class="{ active: active }"
    @click="$emit('click')"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'SolutionButton',
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click']
};
</script>

<style scoped>
.solution-button {
  padding: 0.75rem 1.5rem;
  border: 2px solid #ddd;
  background-color: white;
  color: #333;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.solution-button:hover {
  border-color: #3498db;
  color: #3498db;
}

.solution-button.active {
  background-color: #3498db;
  color: white;
  border-color: #3498db;
}
</style>