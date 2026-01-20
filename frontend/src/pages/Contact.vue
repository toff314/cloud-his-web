<template>
  <div class="contact">
    <h1>联系我们</h1>
    <div class="contact-content">
      <div class="contact-info">
        <h2>公司信息</h2>
        <p><strong>地址：</strong>北京市朝阳区某某街道某某号</p>
        <p><strong>电话：</strong>+86 10 1234 5678</p>
        <p><strong>邮箱：</strong>info@example.com</p>
        <p><strong>工作时间：</strong>周一至周五 9:00-18:00</p>
      </div>
      <div class="contact-form">
        <h2>发送消息</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">姓名 *</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label for="email">邮箱 *</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label for="subject">主题</label>
            <input type="text" id="subject" v-model="form.subject" />
          </div>
          <div class="form-group">
            <label for="message">消息 *</label>
            <textarea id="message" v-model="form.message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-btn">发送消息</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // 在实际应用中，这里应该调用API发送表单数据
      alert('表单提交成功！我们会尽快回复您。');
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
};
</script>

<style scoped>
.contact {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #2c3e50;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-info,
.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-info h2,
.contact-form h2 {
  margin-top: 0;
  color: #2c3e50;
  border-bottom: 2px solid #42b983;
  padding-bottom: 0.5rem;
}

.contact-info p {
  line-height: 1.8;
  color: #333;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #42b983;
}

.submit-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #359c6d;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>