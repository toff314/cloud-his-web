/**
 * 数据库访问模块
 * 提供对SQLite数据库的统一访问接口
 */

class DatabaseService {
  constructor() {
    this.dbPath = '/data/cloud-his.db';
    this.data = null;
  }

  /**
   * 获取数据库中的所有数据
   * 在实际生产环境中，这里应该连接到SQLite数据库
   * 由于浏览器环境限制，这里使用本地存储模拟
   */
  async getAllData() {
    if (this.data) {
      return this.data;
    }

    // 从本地存储获取数据
    const stored = localStorage.getItem('cloud_his_data');
    if (stored) {
      this.data = JSON.parse(stored);
      return this.data;
    }

    // 如果本地存储没有数据，返回默认数据
    this.data = this.getDefaultData();
    this.saveToLocalStorage();
    return this.data;
  }

  /**
   * 保存数据到本地存储
   */
  saveToLocalStorage() {
    localStorage.setItem('cloud_his_data', JSON.stringify(this.data));
  }

  /**
   * 获取默认数据
   */
  getDefaultData() {
    return {
      banners: [
        { id: 1, title: '智慧云门诊 - 开启医疗数字化新时代', image_url: '', link_url: '', sort_order: 1 },
        { id: 2, title: '一站式医疗服务解决方案', image_url: '', link_url: '', sort_order: 2 },
        { id: 3, title: 'AI智能辅诊 提升诊疗效率', image_url: '', link_url: '', sort_order: 3 }
      ],
      products: [
        { id: 1, name: '智慧云药房', description: '门诊无需配备实体药房，实现药品智能管理和配送', sort_order: 1 },
        { id: 2, name: '智慧云门诊', description: '全流程数字化门诊管理系统，提升就诊效率', sort_order: 2 },
        { id: 3, name: 'AI在线开方服务', description: '智能辅助开方，精准诊断，提升医疗质量', sort_order: 3 },
        { id: 4, name: '社区医院统管平台', description: '统一管理多个社区医院，实现资源优化配置', sort_order: 4 },
        { id: 5, name: '互联网医院', description: '线上问诊、复诊开方，连接医患两端', sort_order: 5 },
        { id: 6, name: '库房管理', description: '智能库存管理，自动预警，降低运营成本', sort_order: 6 }
      ],
      solutions: [
        { id: 1, name: '智慧云门诊', description: '全流程数字化门诊管理，从挂号到结算一站式服务', sort_order: 1 },
        { id: 2, name: '智慧云药房', description: '智慧药房管理系统，实现药品智能调配和配送', sort_order: 2 },
        { id: 3, name: '医院HIS对接', description: '无缝对接医院现有HIS系统，数据互通共享', sort_order: 3 },
        { id: 4, name: 'AI辅诊', description: 'AI智能辅助诊断系统，提供精准诊断建议', sort_order: 4 },
        { id: 5, name: '社区医院合作', description: '与社区医院深度合作，实现分级诊疗', sort_order: 5 },
        { id: 6, name: '中医馆一键部署', description: '专为中医馆定制，一键部署即可使用', sort_order: 6 }
      ],
      customers: [
        { id: 1, name: '北京市朝阳区社区卫生服务中心', description: '通过智慧云门诊系统实现了全流程数字化，就诊效率提升40%', sort_order: 1 },
        { id: 2, name: '上海市浦东新区人民医院', description: '通过AI辅诊系统，诊断准确率提升25%', sort_order: 2 },
        { id: 3, name: '广州市天河区中医馆', description: '中医药材智能管理，库存周转率提升50%', sort_order: 3 },
        { id: 4, name: '深圳市南山区社区医院', description: '智慧药房系统实现药品智能调配，配药时间缩短60%', sort_order: 4 },
        { id: 5, name: '杭州市西湖区卫生服务中心', description: '互联网医院模式，线上问诊量提升80%', sort_order: 5 },
        { id: 6, name: '成都市武侯区人民医院', description: 'HIS系统无缝对接，数据互通共享，患者满意度提升35%', sort_order: 6 },
        { id: 7, name: '南京市鼓楼区中医馆', description: '一键部署系统，快速上线，节省部署时间70%', sort_order: 7 },
        { id: 8, name: '武汉市江汉区卫生服务中心', description: '社区医院统管平台实现资源优化，运营成本降低30%', sort_order: 8 },
        { id: 9, name: '西安市雁塔区人民医院', description: '全流程数字化管理，患者等待时间缩短45%', sort_order: 9 }
      ],
      honors: [
        { id: 1, name: '社区医院多源处方智能审方与配送协同方法及系统', sort_order: 1 },
        { id: 2, name: '社区医院多源处方智能审方与尚配协同方法及系统', sort_order: 2 },
        { id: 3, name: '兴邦智慧云药房库存智能预警系统', sort_order: 3 },
        { id: 4, name: '软著证书二', sort_order: 4 }
      ],
      visions: [
        { id: 1, title: '服务至上', description: '以患者为中心，提供优质的医疗服务体验', sort_order: 1 },
        { id: 2, title: '中医文化传承', description: '传承中医药文化，推广中医药知识', sort_order: 2 },
        { id: 3, title: '提升门诊效率', description: '通过数字化手段，提升门诊运营效率', sort_order: 3 }
      ],
      packages: [
        { id: 1, name: '包月套餐', price: '100', duration: 30, description: '适合小型诊所，基础功能完整', sort_order: 1 },
        { id: 2, name: '包年套餐', price: '200', duration: 365, description: '适合成长型诊所，性价比更高', sort_order: 2 },
        { id: 3, name: 'VIP套餐', price: '500', duration: 365, description: '适合中型医院，全功能支持', sort_order: 3 },
        { id: 4, name: '尊享套餐', price: '1000', duration: 365, description: '适合大型医疗集团，专属定制服务', sort_order: 4 }
      ],
      config: {
        company_name: '智慧云门诊科技有限公司',
        company_address: '北京市朝阳区科技园区88号',
        icp_code: '京ICP备12345678号',
        company_introduction: '公司简介文案...',
        contact_phone: '400-888-8888',
        wechat_service: 'service_wechat'
      }
    };
  }

  /**
   * 获取轮播图数据
   */
  async getBanners() {
    const data = await this.getAllData();
    return data.banners.sort((a, b) => a.sort_order - b.sort_order);
  }

  /**
   * 获取产品数据
   */
  async getProducts() {
    const data = await this.getAllData();
    return data.products.sort((a, b) => a.sort_order - b.sort_order);
  }

  /**
   * 获取解决方案数据
   */
  async getSolutions() {
    const data = await this.getAllData();
    return data.solutions.sort((a, b) => a.sort_order - b.sort_order);
  }

  /**
   * 获取客户案例数据
   */
  async getCustomers() {
    const data = await this.getAllData();
    return data.customers.sort((a, b) => a.sort_order - b.sort_order);
  }

  /**
   * 获取荣誉证书数据
   */
  async getHonors() {
    const data = await this.getAllData();
    return data.honors.sort((a, b) => a.sort_order - b.sort_order);
  }

  /**
   * 获取公司愿景数据
   */
  async getVisions() {
    const data = await this.getAllData();
    return data.visions.sort((a, b) => a.sort_order - b.sort_order);
  }

  /**
   * 获取套餐数据
   */
  async getPackages() {
    const data = await this.getAllData();
    return data.packages.sort((a, b) => a.sort_order - b.sort_order);
  }

  /**
   * 获取系统配置数据
   */
  async getConfig() {
    const data = await this.getAllData();
    return data.config;
  }

  /**
   * 更新系统配置
   */
  updateConfig(key, value) {
    if (this.data) {
      this.data.config[key] = value;
      this.saveToLocalStorage();
    }
  }
}

// 导出单例
export default new DatabaseService();
