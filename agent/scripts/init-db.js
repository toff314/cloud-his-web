/**
 * SQLite数据库初始化脚本
 * 用于初始化智慧云门诊官网所需的所有数据
 */

const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// 数据库文件路径
const dbPath = path.join(__dirname, '../data/cloud-his.db');

// 确保data目录存在
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 创建数据库连接
const db = new Database(dbPath);

// 创建表
const initTables = () => {
  // 轮播图表
  db.exec(`
    CREATE TABLE IF NOT EXISTS banner (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      image_url TEXT,
      link_url TEXT,
      sort_order INTEGER DEFAULT 0,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 产品模块表
  db.exec(`
    CREATE TABLE IF NOT EXISTS product (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      icon_url TEXT,
      sort_order INTEGER DEFAULT 0,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 解决方案表
  db.exec(`
    CREATE TABLE IF NOT EXISTS solution (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      image_url TEXT,
      detail_image_url TEXT,
      sort_order INTEGER DEFAULT 0,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 客户案例表
  db.exec(`
    CREATE TABLE IF NOT EXISTS customer (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      logo_url TEXT,
      description TEXT,
      case_image_url TEXT,
      sort_order INTEGER DEFAULT 0,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 荣誉证书表
  db.exec(`
    CREATE TABLE IF NOT EXISTS honor (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      certificate_url TEXT,
      sort_order INTEGER DEFAULT 0,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 公司愿景表
  db.exec(`
    CREATE TABLE IF NOT EXISTS vision (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      image_url TEXT,
      sort_order INTEGER DEFAULT 0,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 套餐表
  db.exec(`
    CREATE TABLE IF NOT EXISTS package_plan (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price TEXT NOT NULL,
      duration INTEGER NOT NULL,
      description TEXT,
      features TEXT,
      sort_order INTEGER DEFAULT 0,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 套餐功能对比表
  db.exec(`
    CREATE TABLE IF NOT EXISTS package_feature (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      feature_name TEXT NOT NULL,
      plan_id INTEGER NOT NULL,
      value TEXT,
      sort_order INTEGER DEFAULT 0,
      FOREIGN KEY (plan_id) REFERENCES package_plan(id)
    )
  `);

  // 系统配置表
  db.exec(`
    CREATE TABLE IF NOT EXISTS system_config (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      config_key TEXT UNIQUE NOT NULL,
      config_value TEXT,
      description TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
};

// 插入初始数据
const initData = () => {
  // 插入轮播图数据
  const banners = [
    { title: '智慧云门诊 - 开启医疗数字化新时代', image_url: '', link_url: '', sort_order: 1 },
    { title: '一站式医疗服务解决方案', image_url: '', link_url: '', sort_order: 2 },
    { title: 'AI智能辅诊 提升诊疗效率', image_url: '', link_url: '', sort_order: 3 }
  ];

  const insertBanner = db.prepare(`
    INSERT INTO banner (title, image_url, link_url, sort_order)
    VALUES (?, ?, ?, ?)
  `);

  // 清空现有数据
  db.prepare('DELETE FROM banner').run();
  banners.forEach(banner => {
    insertBanner.run(banner.title, banner.image_url, banner.link_url, banner.sort_order);
  });

  // 插入产品模块数据
  const products = [
    { name: '智慧云药房', description: '门诊无需配备实体药房，实现药品智能管理和配送', sort_order: 1 },
    { name: '智慧云门诊', description: '全流程数字化门诊管理系统，提升就诊效率', sort_order: 2 },
    { name: 'AI在线开方服务', description: '智能辅助开方，精准诊断，提升医疗质量', sort_order: 3 },
    { name: '社区医院统管平台', description: '统一管理多个社区医院，实现资源优化配置', sort_order: 4 },
    { name: '互联网医院', description: '线上问诊、复诊开方，连接医患两端', sort_order: 5 },
    { name: '库房管理', description: '智能库存管理，自动预警，降低运营成本', sort_order: 6 }
  ];

  const insertProduct = db.prepare(`
    INSERT INTO product (name, description, sort_order)
    VALUES (?, ?, ?)
  `);

  db.prepare('DELETE FROM product').run();
  products.forEach(product => {
    insertProduct.run(product.name, product.description, product.sort_order);
  });

  // 插入解决方案数据
  const solutions = [
    { name: '智慧云门诊', description: '全流程数字化门诊管理，从挂号到结算一站式服务', sort_order: 1 },
    { name: '智慧云药房', description: '智慧药房管理系统，实现药品智能调配和配送', sort_order: 2 },
    { name: '医院HIS对接', description: '无缝对接医院现有HIS系统，数据互通共享', sort_order: 3 },
    { name: 'AI辅诊', description: 'AI智能辅助诊断系统，提供精准诊断建议', sort_order: 4 },
    { name: '社区医院合作', description: '与社区医院深度合作，实现分级诊疗', sort_order: 5 },
    { name: '中医馆一键部署', description: '专为中医馆定制，一键部署即可使用', sort_order: 6 }
  ];

  const insertSolution = db.prepare(`
    INSERT INTO solution (name, description, sort_order)
    VALUES (?, ?, ?)
  `);

  db.prepare('DELETE FROM solution').run();
  solutions.forEach(solution => {
    insertSolution.run(solution.name, solution.description, solution.sort_order);
  });

  // 插入客户案例数据
  const customers = [
    { name: '北京市朝阳区社区卫生服务中心', description: '通过智慧云门诊系统实现了全流程数字化，就诊效率提升40%', sort_order: 1 },
    { name: '上海市浦东新区人民医院', description: '通过AI辅诊系统，诊断准确率提升25%', sort_order: 2 },
    { name: '广州市天河区中医馆', description: '中医药材智能管理，库存周转率提升50%', sort_order: 3 },
    { name: '深圳市南山区社区医院', description: '智慧药房系统实现药品智能调配，配药时间缩短60%', sort_order: 4 },
    { name: '杭州市西湖区卫生服务中心', description: '互联网医院模式，线上问诊量提升80%', sort_order: 5 },
    { name: '成都市武侯区人民医院', description: 'HIS系统无缝对接，数据互通共享，患者满意度提升35%', sort_order: 6 },
    { name: '南京市鼓楼区中医馆', description: '一键部署系统，快速上线，节省部署时间70%', sort_order: 7 },
    { name: '武汉市江汉区卫生服务中心', description: '社区医院统管平台实现资源优化，运营成本降低30%', sort_order: 8 },
    { name: '西安市雁塔区人民医院', description: '全流程数字化管理，患者等待时间缩短45%', sort_order: 9 }
  ];

  const insertCustomer = db.prepare(`
    INSERT INTO customer (name, description, sort_order)
    VALUES (?, ?, ?)
  `);

  db.prepare('DELETE FROM customer').run();
  customers.forEach(customer => {
    insertCustomer.run(customer.name, customer.description, customer.sort_order);
  });

  // 插入荣誉证书数据
  const honors = [
    { name: '社区医院多源处方智能审方与配送协同方法及系统', sort_order: 1 },
    { name: '社区医院多源处方智能审方与尚配协同方法及系统', sort_order: 2 },
    { name: '兴邦智慧云药房库存智能预警系统', sort_order: 3 },
    { name: '软著证书二', sort_order: 4 }
  ];

  const insertHonor = db.prepare(`
    INSERT INTO honor (name, sort_order)
    VALUES (?, ?)
  `);

  db.prepare('DELETE FROM honor').run();
  honors.forEach(honor => {
    insertHonor.run(honor.name, honor.sort_order);
  });

  // 插入公司愿景数据
  const visions = [
    { title: '服务至上', description: '以患者为中心，提供优质的医疗服务体验', sort_order: 1 },
    { title: '中医文化传承', description: '传承中医药文化，推广中医药知识', sort_order: 2 },
    { title: '提升门诊效率', description: '通过数字化手段，提升门诊运营效率', sort_order: 3 }
  ];

  const insertVision = db.prepare(`
    INSERT INTO vision (title, description, sort_order)
    VALUES (?, ?, ?)
  `);

  db.prepare('DELETE FROM vision').run();
  visions.forEach(vision => {
    insertVision.run(vision.title, vision.description, vision.sort_order);
  });

  // 插入套餐数据
  const packagePlans = [
    { name: '包月套餐', price: '100', duration: 30, description: '适合小型诊所，基础功能完整', sort_order: 1 },
    { name: '包年套餐', price: '200', duration: 365, description: '适合成长型诊所，性价比更高', sort_order: 2 },
    { name: 'VIP套餐', price: '500', duration: 365, description: '适合中型医院，全功能支持', sort_order: 3 },
    { name: '尊享套餐', price: '1000', duration: 365, description: '适合大型医疗集团，专属定制服务', sort_order: 4 }
  ];

  const insertPackagePlan = db.prepare(`
    INSERT INTO package_plan (name, price, duration, description, sort_order)
    VALUES (?, ?, ?, ?, ?)
  `);

  db.prepare('DELETE FROM package_plan').run();
  packagePlans.forEach(plan => {
    insertPackagePlan.run(plan.name, plan.price, plan.duration, plan.description, plan.sort_order);
  });

  // 插入系统配置数据
  const configs = [
    { config_key: 'company_name', config_value: '智慧云门诊科技有限公司', description: '公司名称' },
    { config_key: 'company_address', config_value: '北京市朝阳区科技园区88号', description: '公司地址' },
    { config_key: 'icp_code', config_value: '京ICP备12345678号', description: 'ICP备案号' },
    { config_key: 'company_introduction', config_value: '公司简介文案...', description: '公司简介' },
    { config_key: 'contact_phone', config_value: '400-888-8888', description: '联系电话' },
    { config_key: 'wechat_service', config_value: 'service_wechat', description: '客服微信号' },
    { config_key: 'wechat_qr_code', config_value: '/images/wechat-qr-code.png', description: '微信公众号二维码' }
  ];

  const insertConfig = db.prepare(`
    INSERT OR REPLACE INTO system_config (config_key, config_value, description)
    VALUES (?, ?, ?)
  `);

  configs.forEach(config => {
    insertConfig.run(config.config_key, config.config_value, config.description);
  });
};

// 初始化数据库
const init = () => {
  try {
    console.log('正在初始化数据库...');
    initTables();
    initData();
    console.log('数据库初始化完成！');
    console.log('数据库路径:', dbPath);
  } catch (error) {
    console.error('数据库初始化失败:', error);
    process.exit(1);
  } finally {
    db.close();
  }
};

// 执行初始化
init();
