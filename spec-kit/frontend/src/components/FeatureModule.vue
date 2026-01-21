<template>
  <div class="feature-module">
    <div class="icon-circle">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'FeatureModule',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: '⚙️'
    }
  }
};
</script>

<style scoped>
.feature-module {
  text-align: center;
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-module:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.icon-circle {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

h3 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
}

p {
  color: #7f8c8d;
  margin: 0;
}
</style>