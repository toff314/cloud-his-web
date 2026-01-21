<template>
  <div class="package-card" :class="{ selected: isSelected }">
    <h3>{{ packageName }}</h3>
    <div class="price">{{ price }}</div>
    <div class="validity">{{ validity }}</div>
    <p class="description">{{ description }}</p>
    <button class="select-btn" @click="selectPackage">请选择</button>
  </div>
</template>

<script>
export default {
  name: 'PackageCard',
  props: {
    packageName: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    validity: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isSelected: false
    };
  },
  methods: {
    selectPackage() {
      this.isSelected = !this.isSelected;
      // In a real app, this would trigger a purchase flow
      console.log(`${this.packageName} selected`);
    }
  }
};
</script>

<style scoped>
.package-card {
  min-width: 250px;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.package-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.package-card.selected {
  border-color: #3498db;
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.3);
}

.price {
  font-size: 1.8rem;
  color: #e74c3c;
  font-weight: bold;
  margin: 0.5rem 0;
}

.validity {
  color: #7f8c8d;
  margin-bottom: 1rem;
}

.description {
  flex-grow: 1;
  color: #555;
  line-height: 1.5;
}

.select-btn {
  margin-top: auto;
  padding: 0.75rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.select-btn:hover {
  background-color: #2980b9;
}

.select-btn:active {
  background-color: #2573a7;
}
</style>