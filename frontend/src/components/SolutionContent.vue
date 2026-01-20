<template>
  <div class="solution-content">
    <div class="image-container">
      <img :src="solution.image" :alt="solution.title" />
    </div>
    <div class="description">
      <h2>{{ solution.title }}</h2>
      <p>{{ solution.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionContent',
  props: {
    solution: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.solution-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fafafa;
}

.image-container {
  margin-bottom: 1.5rem;
}

.image-container img {
  max-width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.description h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.description p {
  color: #7f8c8d;
  line-height: 1.6;
  max-width: 600px;
}

@media (min-width: 768px) {
  .solution-content {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }
  
  .image-container {
    margin-right: 2rem;
    margin-bottom: 0;
    flex: 1;
  }
  
  .description {
    flex: 2;
  }
}
</style>