<template>
  <div class="customer-case-item">
    <div class="logo-container">
      <img :src="logo" :alt="hospitalName" />
    </div>
    <div class="hospital-name">{{ hospitalName }}</div>
  </div>
</template>

<script>
export default {
  name: 'CustomerCaseItem',
  props: {
    hospitalName: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.customer-case-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.customer-case-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.logo-container {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}

.logo-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.hospital-name {
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
}
</style>