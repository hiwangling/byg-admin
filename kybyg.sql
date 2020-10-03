/*
Navicat MySQL Data Transfer

Source Server         : 快云-殡仪馆基础版
Source Server Version : 50725
Source Host           : rm-wz9321r2tp5e59648qo.mysql.rds.aliyuncs.com:3306
Source Database       : kybyg

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2020-02-22 14:43:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ky_action_log
-- ----------------------------
DROP TABLE IF EXISTS `ky_action_log`;
CREATE TABLE `ky_action_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `member_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '执行会员id',
  `username` char(30) NOT NULL DEFAULT '' COMMENT '用户名',
  `ip` char(30) NOT NULL DEFAULT '' COMMENT '执行行为者ip',
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '行为名称',
  `describe` varchar(255) NOT NULL DEFAULT '' COMMENT '描述',
  `url` varchar(255) NOT NULL DEFAULT '' COMMENT '执行的URL',
  `status` tinyint(2) NOT NULL DEFAULT '1' COMMENT '状态',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '执行行为的时间',
  `oid` int(100) DEFAULT NULL COMMENT '死者ID',
  `logtype` tinyint(2) NOT NULL COMMENT '1:表示是系统日志，2：表示任务执行情况日志',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=69385 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='行为日志表';

-- ----------------------------
-- Records of ky_action_log
-- ----------------------------
INSERT INTO `ky_action_log` VALUES ('68611', '103', 'admin', '119.103.160.97', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1580976153', null, '0');
INSERT INTO `ky_action_log` VALUES ('68612', '103', 'admin', '119.103.160.97', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1580977177', null, '0');
INSERT INTO `ky_action_log` VALUES ('68613', '103', 'admin', '27.20.136.29', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1580977182', null, '0');
INSERT INTO `ky_action_log` VALUES ('68614', '103', 'admin', '27.20.136.29', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1580977190', null, '0');
INSERT INTO `ky_action_log` VALUES ('68615', '103', 'admin', '119.103.160.97', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1580977193', null, '0');
INSERT INTO `ky_action_log` VALUES ('68616', '103', 'admin', '119.103.160.97', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1580977251', null, '0');
INSERT INTO `ky_action_log` VALUES ('68617', '103', 'admin', '27.20.136.29', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1580977290', null, '0');
INSERT INTO `ky_action_log` VALUES ('68618', '103', 'admin', '27.20.136.29', '新增', '新增部门，name：业务部', '/api/v1/branch/add', '1', '0', '1580978198', null, '0');
INSERT INTO `ky_action_log` VALUES ('68619', '103', 'admin', '27.20.136.29', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1580981103', null, '0');
INSERT INTO `ky_action_log` VALUES ('68620', '103', 'admin', '27.20.136.29', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1580998877', null, '0');
INSERT INTO `ky_action_log` VALUES ('68621', '103', 'admin', '27.20.136.29', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581039350', null, '0');
INSERT INTO `ky_action_log` VALUES ('68622', '103', 'admin', '119.103.160.97', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581045453', null, '0');
INSERT INTO `ky_action_log` VALUES ('68623', '103', 'admin', '119.103.160.97', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581050924', null, '0');
INSERT INTO `ky_action_log` VALUES ('68624', '103', 'admin', '119.103.160.97', '新增', '新增部门，name：办公室', '/api/v1/dept/add', '1', '0', '1581051436', null, '0');
INSERT INTO `ky_action_log` VALUES ('68625', '103', 'admin', '119.103.160.97', '新增', '新增部门，name：办公室', '/api/v1/dept/add', '1', '0', '1581051484', null, '0');
INSERT INTO `ky_action_log` VALUES ('68626', '103', 'admin', '119.103.160.97', '编辑', '编辑部门，name：所办公室', '/api/v1/dept/edit', '1', '0', '1581051602', null, '0');
INSERT INTO `ky_action_log` VALUES ('68627', '103', 'admin', '119.103.160.97', '删除', '部门删除，where：id=3', '/api/v1/dept/del?id=3', '1', '0', '1581051645', null, '0');
INSERT INTO `ky_action_log` VALUES ('68628', '103', 'admin', '119.103.160.97', '新增', '新增车辆，name：123123', '/api/v1/car/add', '1', '0', '1581052009', null, '0');
INSERT INTO `ky_action_log` VALUES ('68629', '103', 'admin', '119.103.160.97', '新增', '新增车辆，name：0001', '/api/v1/car/add', '1', '0', '1581052050', null, '0');
INSERT INTO `ky_action_log` VALUES ('68630', '103', 'admin', '119.103.160.97', '新增', '新增车辆，name：0002', '/api/v1/car/add', '1', '0', '1581052054', null, '0');
INSERT INTO `ky_action_log` VALUES ('68631', '103', 'admin', '119.103.160.97', '编辑', '编辑车辆，name：00000', '/api/v1/car/edit', '1', '0', '1581052240', null, '0');
INSERT INTO `ky_action_log` VALUES ('68632', '103', 'admin', '119.103.160.97', '删除', '车辆删除，where：id=14', '/api/v1/car/del?id=14', '1', '0', '1581052342', null, '0');
INSERT INTO `ky_action_log` VALUES ('68633', '103', 'admin', '27.20.136.29', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581053496', null, '0');
INSERT INTO `ky_action_log` VALUES ('68634', '103', 'admin', '27.20.136.29', '编辑', '编辑部门，name：所办公室', '/api/v1/dept/edit', '1', '0', '1581055596', null, '0');
INSERT INTO `ky_action_log` VALUES ('68635', '103', 'admin', '27.20.136.29', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581055718', null, '0');
INSERT INTO `ky_action_log` VALUES ('68636', '103', 'admin', '119.103.160.97', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581059117', null, '0');
INSERT INTO `ky_action_log` VALUES ('68637', '103', 'admin', '119.103.160.97', '新增', '新增部门，name：1号柜', '/api/v1/locker/add', '1', '0', '1581059443', null, '0');
INSERT INTO `ky_action_log` VALUES ('68638', '103', 'admin', '119.103.160.97', '新增', '新增部门，name：1号柜', '/api/v1/locker/add', '1', '0', '1581059468', null, '0');
INSERT INTO `ky_action_log` VALUES ('68639', '103', 'admin', '119.103.160.97', '新增', '新增部门，name：1号柜', '/api/v1/locker/add', '1', '0', '1581059470', null, '0');
INSERT INTO `ky_action_log` VALUES ('68640', '103', 'admin', '119.103.160.97', '编辑', '编辑部门，name：1231', '/api/v1/locker/edit', '1', '0', '1581059627', null, '0');
INSERT INTO `ky_action_log` VALUES ('68641', '103', 'admin', '119.103.160.97', '删除', '部门删除，where：id=3', '/api/v1/locker/del?id=3', '1', '0', '1581059708', null, '0');
INSERT INTO `ky_action_log` VALUES ('68642', '103', 'admin', '27.20.136.29', '编辑', '编辑部门，name：1231', '/api/v1/locker/edit', '1', '0', '1581061347', null, '0');
INSERT INTO `ky_action_log` VALUES ('68643', '103', 'admin', '27.20.136.29', '编辑', '编辑部门，name：1231', '/api/v1/locker/edit', '1', '0', '1581061351', null, '0');
INSERT INTO `ky_action_log` VALUES ('68644', '103', 'admin', '27.20.136.29', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581127529', null, '0');
INSERT INTO `ky_action_log` VALUES ('68645', '103', 'admin', '171.82.10.186', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581141326', null, '0');
INSERT INTO `ky_action_log` VALUES ('68646', '103', 'admin', '171.82.10.186', '编辑', '编辑配置，name：servicesType', '/api/v1/config/edit', '1', '0', '1581145570', null, '0');
INSERT INTO `ky_action_log` VALUES ('68647', '103', 'admin', '171.82.10.186', '新增', '新增逝者信息，name:123', '/api/v1/carsend/add', '1', '0', '1581146763', null, '0');
INSERT INTO `ky_action_log` VALUES ('68648', '103', 'admin', '171.82.10.186', '新增', '新增财务信息，name:123,类型:1', '/api/v1/carsend/add', '1', '0', '1581146763', null, '0');
INSERT INTO `ky_action_log` VALUES ('68649', '103', 'admin', '171.82.10.186', '新增', '新增接运，name:123', '/api/v1/carsend/add', '1', '0', '1581146763', null, '0');
INSERT INTO `ky_action_log` VALUES ('68650', '103', 'admin', '171.82.10.186', '新增', '新增逝者信息，name:测试123', '/api/v1/carsend/add', '1', '0', '1581151234', null, '0');
INSERT INTO `ky_action_log` VALUES ('68651', '103', 'admin', '171.82.10.186', '新增', '新增财务信息，name:测试123,类型:1', '/api/v1/carsend/add', '1', '0', '1581151234', null, '0');
INSERT INTO `ky_action_log` VALUES ('68652', '103', 'admin', '171.82.10.186', '新增', '新增接运，name:测试123', '/api/v1/carsend/add', '1', '0', '1581151234', null, '0');
INSERT INTO `ky_action_log` VALUES ('68653', '103', 'admin', '117.150.0.107', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581152335', null, '0');
INSERT INTO `ky_action_log` VALUES ('68654', '103', 'admin', '117.150.0.107', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581152338', null, '0');
INSERT INTO `ky_action_log` VALUES ('68655', '103', 'admin', '117.150.0.107', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581152359', null, '0');
INSERT INTO `ky_action_log` VALUES ('68656', '103', 'admin', '117.150.0.107', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581152453', null, '0');
INSERT INTO `ky_action_log` VALUES ('68657', '103', 'admin', '171.82.10.186', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581311493', null, '0');
INSERT INTO `ky_action_log` VALUES ('68658', '103', 'admin', '171.82.10.186', '新增', '新增悼念厅，name：瑞福堂', '/api/v1/mourn/add', '1', '0', '1581311573', null, '0');
INSERT INTO `ky_action_log` VALUES ('68659', '103', 'admin', '171.82.10.186', '新增', '新增悼念厅，name：赐福堂', '/api/v1/mourn/add', '1', '0', '1581311589', null, '0');
INSERT INTO `ky_action_log` VALUES ('68660', '103', 'admin', '171.82.10.186', '新增', '新增悼念厅，name：测试', '/api/v1/mourn/add', '1', '0', '1581311606', null, '0');
INSERT INTO `ky_action_log` VALUES ('68661', '103', 'admin', '171.82.10.186', '编辑', '编辑悼念厅，name：测试123', '/api/v1/mourn/edit', '1', '0', '1581311618', null, '0');
INSERT INTO `ky_action_log` VALUES ('68662', '103', 'admin', '171.82.10.186', '新增', '新增服务，name:鲜花', '/api/v1/services/add', '1', '0', '1581312156', null, '0');
INSERT INTO `ky_action_log` VALUES ('68663', '103', 'admin', '171.82.10.186', '新增', '新增部门，name：123', '/api/v1/locker/add', '1', '0', '1581312463', null, '0');
INSERT INTO `ky_action_log` VALUES ('68664', '103', 'admin', '171.82.10.186', '编辑', '编辑部门，name：123111111', '/api/v1/locker/edit', '1', '0', '1581312476', null, '0');
INSERT INTO `ky_action_log` VALUES ('68665', '103', 'admin', '171.82.10.186', '新增', '新增，name：1号柜', '/api/v1/cold/add', '1', '0', '1581312493', null, '0');
INSERT INTO `ky_action_log` VALUES ('68666', '103', 'admin', '171.82.10.186', '新增', '新增，name：2', '/api/v1/cold/add', '1', '0', '1581312499', null, '0');
INSERT INTO `ky_action_log` VALUES ('68667', '103', 'admin', '171.82.10.186', '新增', '新增，name：123', '/api/v1/cold/add', '1', '0', '1581312509', null, '0');
INSERT INTO `ky_action_log` VALUES ('68668', '103', 'admin', '171.82.10.186', '新增', '新增车辆，name：123', '/api/v1/car/add', '1', '0', '1581312527', null, '0');
INSERT INTO `ky_action_log` VALUES ('68669', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581312992', null, '0');
INSERT INTO `ky_action_log` VALUES ('68670', '103', 'admin', '27.20.138.152', '编辑', '编辑员工，name：admin', '/api/v1/manager/edit', '1', '0', '1581313357', null, '0');
INSERT INTO `ky_action_log` VALUES ('68671', '103', 'admin', '171.82.10.186', '新增', '新增员工，name：123', '/api/v1/manager/add', '1', '0', '1581313417', null, '0');
INSERT INTO `ky_action_log` VALUES ('68672', '103', 'admin', '27.20.138.152', '编辑', '编辑员工，name：123', '/api/v1/manager/edit', '1', '0', '1581313527', null, '0');
INSERT INTO `ky_action_log` VALUES ('68673', '103', 'admin', '171.82.10.186', '新增', '新增逝者信息，name:123', '/api/v1/carsend/add', '1', '0', '1581313537', null, '0');
INSERT INTO `ky_action_log` VALUES ('68674', '103', 'admin', '171.82.10.186', '新增', '新增财务信息，name:123,类型:1', '/api/v1/carsend/add', '1', '0', '1581313537', null, '0');
INSERT INTO `ky_action_log` VALUES ('68675', '103', 'admin', '171.82.10.186', '新增', '新增接运，name:123', '/api/v1/carsend/add', '1', '0', '1581313537', null, '0');
INSERT INTO `ky_action_log` VALUES ('68676', '103', 'admin', '27.20.138.152', '编辑', '编辑服务，name：鲜花', '/api/v1/services/edit', '1', '0', '1581314438', null, '0');
INSERT INTO `ky_action_log` VALUES ('68677', '103', 'admin', '27.20.138.152', '编辑', '编辑服务，name：鲜花', '/api/v1/services/edit', '1', '0', '1581315091', null, '0');
INSERT INTO `ky_action_log` VALUES ('68678', '103', 'admin', '27.20.138.152', '编辑', '编辑服务，name：鲜花', '/api/v1/services/edit', '1', '0', '1581315214', null, '0');
INSERT INTO `ky_action_log` VALUES ('68679', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581316017', null, '0');
INSERT INTO `ky_action_log` VALUES ('68680', '103', 'admin', '171.82.10.186', '编辑', '编辑逝者信息，name:123', '/api/v1/carsend/edit', '1', '0', '1581317278', null, '0');
INSERT INTO `ky_action_log` VALUES ('68681', '103', 'admin', '171.82.10.186', '编辑', '编辑财务信息，name:123', '/api/v1/carsend/edit', '1', '0', '1581317278', null, '0');
INSERT INTO `ky_action_log` VALUES ('68682', '103', 'admin', '27.20.138.152', '新增', '新增服务，name：鲜花套餐', '/api/v1/servicesCombo/add', '1', '0', '1581317417', null, '0');
INSERT INTO `ky_action_log` VALUES ('68683', '103', 'admin', '171.82.10.186', '新增', '新增服务，name:文明棺', '/api/v1/services/add', '1', '0', '1581317813', null, '0');
INSERT INTO `ky_action_log` VALUES ('68684', '103', 'admin', '171.82.10.186', '新增', '新增逝者信息，name:测试', '/api/v1/carsend/add', '1', '0', '1581323880', null, '0');
INSERT INTO `ky_action_log` VALUES ('68685', '103', 'admin', '171.82.10.186', '新增', '新增财务信息，name:测试,类型:1', '/api/v1/carsend/add', '1', '0', '1581323880', null, '0');
INSERT INTO `ky_action_log` VALUES ('68686', '103', 'admin', '171.82.10.186', '新增', '新增接运，name:测试', '/api/v1/carsend/add', '1', '0', '1581323880', null, '0');
INSERT INTO `ky_action_log` VALUES ('68687', '103', 'admin', '171.82.10.186', '新增', '新增逝者信息，name:测试', '/api/v1/carsend/add', '1', '0', '1581323885', null, '0');
INSERT INTO `ky_action_log` VALUES ('68688', '103', 'admin', '171.82.10.186', '新增', '新增财务信息，name:测试,类型:1', '/api/v1/carsend/add', '1', '0', '1581323885', null, '0');
INSERT INTO `ky_action_log` VALUES ('68689', '103', 'admin', '171.82.10.186', '新增', '新增接运，name:测试', '/api/v1/carsend/add', '1', '0', '1581323885', null, '0');
INSERT INTO `ky_action_log` VALUES ('68690', '103', 'admin', '171.82.10.186', '新增', '新增逝者信息，name:测试', '/api/v1/carsend/add', '1', '0', '1581324226', null, '0');
INSERT INTO `ky_action_log` VALUES ('68691', '103', 'admin', '171.82.10.186', '新增', '新增财务信息，name:测试,类型:1', '/api/v1/carsend/add', '1', '0', '1581324226', null, '0');
INSERT INTO `ky_action_log` VALUES ('68692', '103', 'admin', '171.82.10.186', '新增', '新增接运，name:测试', '/api/v1/carsend/add', '1', '0', '1581324226', null, '0');
INSERT INTO `ky_action_log` VALUES ('68693', '103', 'admin', '171.82.10.186', '新增', '新增逝者信息，name:测试', '/api/v1/carsend/add', '1', '0', '1581324351', null, '0');
INSERT INTO `ky_action_log` VALUES ('68694', '103', 'admin', '171.82.10.186', '新增', '新增财务信息，name:测试,类型:1', '/api/v1/carsend/add', '1', '0', '1581324351', null, '0');
INSERT INTO `ky_action_log` VALUES ('68695', '103', 'admin', '171.82.10.186', '新增', '新增接运，name:测试', '/api/v1/carsend/add', '1', '0', '1581324351', null, '0');
INSERT INTO `ky_action_log` VALUES ('68696', '103', 'admin', '171.82.10.186', '新增', '新增财务信息，name:测试,类型:2', '/api/v1/carsend/add', '1', '0', '1581324351', null, '0');
INSERT INTO `ky_action_log` VALUES ('68697', '103', 'admin', '171.82.10.186', '新增', '新增服务信息，name:测试,id：0=37020', '/api/v1/carsend/add', '1', '0', '1581324351', null, '0');
INSERT INTO `ky_action_log` VALUES ('68698', '103', 'admin', '171.82.10.186', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581402242', null, '0');
INSERT INTO `ky_action_log` VALUES ('68699', '103', 'admin', '117.136.53.65', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581405780', null, '0');
INSERT INTO `ky_action_log` VALUES ('68700', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:测试', '/api/v1/carsend/add', '1', '0', '1581407127', null, '0');
INSERT INTO `ky_action_log` VALUES ('68701', '103', 'admin', '117.136.53.65', '新增', '新增财务信息，name:测试,类型:1', '/api/v1/carsend/add', '1', '0', '1581407127', null, '0');
INSERT INTO `ky_action_log` VALUES ('68702', '103', 'admin', '117.136.53.65', '新增', '新增接运，name:测试', '/api/v1/carsend/add', '1', '0', '1581407127', null, '0');
INSERT INTO `ky_action_log` VALUES ('68703', '103', 'admin', '117.136.53.65', '新增', '新增财务信息，name:测试,类型:2', '/api/v1/carsend/add', '1', '0', '1581407127', null, '0');
INSERT INTO `ky_action_log` VALUES ('68704', '103', 'admin', '117.136.53.65', '新增', '新增服务信息，name:测试,id：0=37021&1=37022', '/api/v1/carsend/add', '1', '0', '1581407127', null, '0');
INSERT INTO `ky_action_log` VALUES ('68705', '103', 'admin', '117.136.53.65', '删除', '接运删除，where：id=385', '/api/v1/carsend/del?id=385&oid=2174&linkman=123&linkphone=123&outtime=2020-02-08+15:24:42&address=123&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=123123&state=1&status=1&create_time=2020-02-08+15:26:03&up', '1', '0', '1581407174', null, '0');
INSERT INTO `ky_action_log` VALUES ('68706', '103', 'admin', '117.136.53.65', '删除', '接运删除，where：id=386', '/api/v1/carsend/del?id=386&oid=2175&linkman=%E5%BC%A0%E4%B8%89&linkphone=110110&outtime=2020-02-08+16:40:16&address=%E6%B9%96%E5%8C%97%E5%AE%9C%E6%98%8C&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=12313&s', '1', '0', '1581407176', null, '0');
INSERT INTO `ky_action_log` VALUES ('68707', '103', 'admin', '117.136.53.65', '删除', '接运删除，where：id=392', '/api/v1/carsend/del?id=392&oid=2181&linkman=%E5%BC%A0%E4%B8%89&linkphone=123&outtime=2020-02-11+00:00:00&address=%E6%B9%96%E5%8C%97%E5%AE%9C%E6%98%8C&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=12312&stat', '1', '0', '1581407266', null, '0');
INSERT INTO `ky_action_log` VALUES ('68708', '103', 'admin', '117.136.53.65', '删除', '接运删除，where：id=391', '/api/v1/carsend/del?id=391&oid=2180&linkman=%E6%B5%8B%E8%AF%95123&linkphone=123&outtime=2020-02-10+16:37:51&address=%E6%B9%96%E5%8C%97%E5%AE%9C%E6%98%8C&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=12313&s', '1', '0', '1581407282', null, '0');
INSERT INTO `ky_action_log` VALUES ('68709', '103', 'admin', '117.136.53.65', '删除', '接运删除，where：id=390', '/api/v1/carsend/del?id=390&oid=2179&linkman=%E6%B5%8B%E8%AF%95123&linkphone=123&outtime=2020-02-10+16:37:51&address=%E6%B9%96%E5%8C%97%E5%AE%9C%E6%98%8C&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=12313&s', '1', '0', '1581407284', null, '0');
INSERT INTO `ky_action_log` VALUES ('68710', '103', 'admin', '117.136.53.65', '删除', '接运删除，where：id=389', '/api/v1/carsend/del?id=389&oid=2178&linkman=%E6%B5%8B%E8%AF%95123&linkphone=123&outtime=2020-02-10+16:37:51&address=%E6%B9%96%E5%8C%97%E5%AE%9C%E6%98%8C&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=12313&s', '1', '0', '1581407287', null, '0');
INSERT INTO `ky_action_log` VALUES ('68711', '103', 'admin', '117.136.53.65', '删除', '接运删除，where：id=388', '/api/v1/carsend/del?id=388&oid=2177&linkman=%E6%B5%8B%E8%AF%95123&linkphone=123&outtime=2020-02-10+16:37:51&address=%E6%B9%96%E5%8C%97%E5%AE%9C%E6%98%8C&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=12313&s', '1', '0', '1581407289', null, '0');
INSERT INTO `ky_action_log` VALUES ('68712', '103', 'admin', '117.136.53.65', '删除', '接运删除，where：id=387', '/api/v1/carsend/del?id=387&oid=2176&linkman=123&linkphone=123&outtime=2020-02-10+13:45:28&address=123&driver=0&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=123&state=1&status=1&create_time=2020-02-10+13:45:37&upda', '1', '0', '1581407291', null, '0');
INSERT INTO `ky_action_log` VALUES ('68713', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:张三', '/api/v1/carsend/add', '1', '0', '1581407472', null, '0');
INSERT INTO `ky_action_log` VALUES ('68714', '103', 'admin', '117.136.53.65', '新增', '新增财务信息，name:张三,类型:1', '/api/v1/carsend/add', '1', '0', '1581407472', null, '0');
INSERT INTO `ky_action_log` VALUES ('68715', '103', 'admin', '117.136.53.65', '新增', '新增接运，name:张三', '/api/v1/carsend/add', '1', '0', '1581407472', null, '0');
INSERT INTO `ky_action_log` VALUES ('68716', '103', 'admin', '117.136.53.65', '新增', '新增财务信息，name:张三,类型:2', '/api/v1/carsend/add', '1', '0', '1581407472', null, '0');
INSERT INTO `ky_action_log` VALUES ('68717', '103', 'admin', '117.136.53.65', '新增', '新增服务信息，name:张三,id：0=37023', '/api/v1/carsend/add', '1', '0', '1581407472', null, '0');
INSERT INTO `ky_action_log` VALUES ('68718', '103', 'admin', '117.136.53.65', '删除', '接运删除，where：id=393', '/api/v1/carsend/del?id=393&oid=2182&linkman=%E5%BC%A0%E4%B8%89123&linkphone=123456&outtime=2020-02-11+15:50:54&address=%E6%B9%96%E5%8C%97%E5%AE%9C%E6%98%8C&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=%E6%', '1', '0', '1581408103', null, '0');
INSERT INTO `ky_action_log` VALUES ('68719', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:张三123', '/api/v1/carsend/add', '1', '0', '1581408174', null, '0');
INSERT INTO `ky_action_log` VALUES ('68720', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:张三123', '/api/v1/carsend/add', '1', '0', '1581408825', null, '0');
INSERT INTO `ky_action_log` VALUES ('68721', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:张三123', '/api/v1/carsend/add', '1', '0', '1581409179', null, '0');
INSERT INTO `ky_action_log` VALUES ('68722', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:测试123', '/api/v1/carsend/add', '1', '0', '1581409426', null, '0');
INSERT INTO `ky_action_log` VALUES ('68723', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:测试123', '/api/v1/carsend/add', '1', '0', '1581409696', null, '0');
INSERT INTO `ky_action_log` VALUES ('68724', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:测试123', '/api/v1/carsend/add', '1', '0', '1581409696', null, '0');
INSERT INTO `ky_action_log` VALUES ('68725', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:测试123', '/api/v1/carsend/add', '1', '0', '1581409698', null, '0');
INSERT INTO `ky_action_log` VALUES ('68726', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:测试123', '/api/v1/carsend/add', '1', '0', '1581410011', null, '0');
INSERT INTO `ky_action_log` VALUES ('68727', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:测试', '/api/v1/carsend/add', '1', '0', '1581410322', null, '0');
INSERT INTO `ky_action_log` VALUES ('68728', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:测试', '/api/v1/carsend/add', '1', '0', '1581410956', null, '0');
INSERT INTO `ky_action_log` VALUES ('68729', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:张三', '/api/v1/carsend/add', '1', '0', '1581411461', null, '0');
INSERT INTO `ky_action_log` VALUES ('68730', '103', 'admin', '117.136.53.65', '新增', '新增接运，name:张三', '/api/v1/carsend/add', '1', '0', '1581411461', null, '0');
INSERT INTO `ky_action_log` VALUES ('68731', '103', 'admin', '117.136.53.65', '新增', '新增财务信息，name:张三,类型:2', '/api/v1/carsend/add', '1', '0', '1581411461', null, '0');
INSERT INTO `ky_action_log` VALUES ('68732', '103', 'admin', '117.136.53.65', '新增', '新增服务信息，name:张三,id：0=37024', '/api/v1/carsend/add', '1', '0', '1581411461', null, '0');
INSERT INTO `ky_action_log` VALUES ('68733', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:张三', '/api/v1/carsend/add', '1', '0', '1581411654', null, '0');
INSERT INTO `ky_action_log` VALUES ('68734', '103', 'admin', '117.136.53.65', '新增', '新增接运，name:张三', '/api/v1/carsend/add', '1', '0', '1581411654', null, '0');
INSERT INTO `ky_action_log` VALUES ('68735', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:测试123', '/api/v1/carsend/add', '1', '0', '1581412676', null, '0');
INSERT INTO `ky_action_log` VALUES ('68736', '103', 'admin', '117.136.53.65', '新增', '新增接运，name:测试123', '/api/v1/carsend/add', '1', '0', '1581412676', null, '0');
INSERT INTO `ky_action_log` VALUES ('68737', '103', 'admin', '117.136.53.65', '删除', '接运删除，where：id=396', '/api/v1/carsend/del?id=396&oid=2195&linkman=123&linkphone=123&outtime=2020-02-11+17:17:51&address=%E6%B9%96%E5%8C%97%E5%AE%9C%E6%98%8C&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=1231231&state=1&status=1&', '1', '0', '1581412680', null, '0');
INSERT INTO `ky_action_log` VALUES ('68738', '103', 'admin', '117.136.53.65', '删除', '接运删除，where：id=395', '/api/v1/carsend/del?id=395&oid=2194&linkman=%E6%B5%8B%E8%AF%9523&linkphone=123123&outtime=2020-02-11+17:00:46&address=%E6%B9%96%E5%8C%97%E5%AE%9C%E6%98%8C&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=&stat', '1', '0', '1581412684', null, '0');
INSERT INTO `ky_action_log` VALUES ('68739', '103', 'admin', '117.136.53.65', '新增', '新增逝者信息，name:张三123', '/api/v1/carsend/add', '1', '0', '1581412744', null, '0');
INSERT INTO `ky_action_log` VALUES ('68740', '103', 'admin', '117.136.53.65', '新增', '新增接运，name:张三123', '/api/v1/carsend/add', '1', '0', '1581412744', null, '0');
INSERT INTO `ky_action_log` VALUES ('68741', '103', 'admin', '117.136.53.65', '新增', '新增财务信息，name:张三123,类型:2', '/api/v1/carsend/add', '1', '0', '1581412744', null, '0');
INSERT INTO `ky_action_log` VALUES ('68742', '103', 'admin', '117.136.53.65', '新增', '新增服务信息，name:张三123,id：0=37025&1=37026', '/api/v1/carsend/add', '1', '0', '1581412744', null, '0');
INSERT INTO `ky_action_log` VALUES ('68743', '103', 'admin', '171.82.10.186', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581488590', null, '0');
INSERT INTO `ky_action_log` VALUES ('68744', '103', 'admin', '171.82.10.186', '编辑', '编辑逝者信息，name:张三123', '/api/v1/carsend/edit', '1', '0', '1581488632', null, '0');
INSERT INTO `ky_action_log` VALUES ('68745', '103', 'admin', '171.82.10.186', '编辑', '编辑逝者信息，name:张三123', '/api/v1/carsend/edit', '1', '0', '1581488696', null, '0');
INSERT INTO `ky_action_log` VALUES ('68746', '103', 'admin', '171.82.10.186', '编辑', '编辑逝者信息，name:张三123', '/api/v1/carsend/edit', '1', '0', '1581489675', null, '0');
INSERT INTO `ky_action_log` VALUES ('68747', '103', 'admin', '171.82.10.186', '编辑', '编辑逝者信息，name:张三123', '/api/v1/carsend/edit', '1', '0', '1581489915', null, '0');
INSERT INTO `ky_action_log` VALUES ('68748', '103', 'admin', '171.82.10.186', '删除', '服务信息删除，where：37025', '/api/v1/carsend/edit', '1', '0', '1581489915', null, '0');
INSERT INTO `ky_action_log` VALUES ('68749', '103', 'admin', '171.82.10.186', '删除', '服务信息删除，where：37026', '/api/v1/carsend/edit', '1', '0', '1581489915', null, '0');
INSERT INTO `ky_action_log` VALUES ('68750', '103', 'admin', '171.82.10.186', '编辑', '编辑逝者信息，name:张三123', '/api/v1/carsend/edit', '1', '0', '1581490021', null, '0');
INSERT INTO `ky_action_log` VALUES ('68751', '103', 'admin', '171.82.10.186', '删除', '服务信息删除，where：oid=2196&type=1&tid=397', '/api/v1/carsend/edit', '1', '0', '1581490021', null, '0');
INSERT INTO `ky_action_log` VALUES ('68752', '103', 'admin', '171.82.10.186', '删除', '服务信息删除，where：oid=2196&type=2&tid=397', '/api/v1/carsend/edit', '1', '0', '1581490021', null, '0');
INSERT INTO `ky_action_log` VALUES ('68753', '103', 'admin', '171.82.10.186', '编辑', '编辑财务信息，name:张三123', '/api/v1/carsend/edit', '1', '0', '1581490021', null, '0');
INSERT INTO `ky_action_log` VALUES ('68754', '103', 'admin', '171.82.10.186', '新增', '新增服务信息，name:张三123,id：0=37027', '/api/v1/carsend/edit', '1', '0', '1581490021', null, '0');
INSERT INTO `ky_action_log` VALUES ('68755', '103', 'admin', '171.82.10.186', '编辑', '编辑接运，name：张三123', '/api/v1/carsend/edit', '1', '0', '1581490021', null, '0');
INSERT INTO `ky_action_log` VALUES ('68756', '103', 'admin', '171.82.10.186', '删除', '接运删除，where：id=397', '/api/v1/carsend/del?id=397&oid=2196&linkman=123123&linkphone=123123&outtime=2020-02-11+17:18:52&address=%E6%B9%96%E5%8C%97%E5%AE%9C%E6%98%8C&driver=0&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=1231&state=1&statu', '1', '0', '1581490479', null, '0');
INSERT INTO `ky_action_log` VALUES ('68757', '103', 'admin', '117.136.53.48', '新增', '新增逝者信息，name:张胜利', '/api/v1/carsend/add', '1', '0', '1581490857', null, '0');
INSERT INTO `ky_action_log` VALUES ('68758', '103', 'admin', '117.136.53.48', '新增', '新增接运，name:张胜利', '/api/v1/carsend/add', '1', '0', '1581490857', null, '0');
INSERT INTO `ky_action_log` VALUES ('68759', '103', 'admin', '117.136.53.48', '新增', '新增财务信息，name:张胜利,类型:2', '/api/v1/carsend/add', '1', '0', '1581490857', null, '0');
INSERT INTO `ky_action_log` VALUES ('68760', '103', 'admin', '117.136.53.48', '新增', '新增服务信息，name:张胜利,id：0=37028&1=37029', '/api/v1/carsend/add', '1', '0', '1581490857', null, '0');
INSERT INTO `ky_action_log` VALUES ('68761', '103', 'admin', '117.136.53.48', '新增', '新增逝者信息，name:王你理', '/api/v1/carsend/add', '1', '0', '1581492124', null, '0');
INSERT INTO `ky_action_log` VALUES ('68762', '103', 'admin', '117.136.53.48', '新增', '新增财务信息，name:王你理,类型:1', '/api/v1/carsend/add', '1', '0', '1581492124', null, '0');
INSERT INTO `ky_action_log` VALUES ('68763', '103', 'admin', '117.136.53.48', '新增', '新增接运，name:王你理', '/api/v1/carsend/add', '1', '0', '1581492124', null, '0');
INSERT INTO `ky_action_log` VALUES ('68764', '103', 'admin', '117.136.53.48', '新增', '新增逝者信息，name:李思思', '/api/v1/carsend/add', '1', '0', '1581492175', null, '0');
INSERT INTO `ky_action_log` VALUES ('68765', '103', 'admin', '117.136.53.48', '新增', '新增财务信息，name:李思思,类型:1', '/api/v1/carsend/add', '1', '0', '1581492175', null, '0');
INSERT INTO `ky_action_log` VALUES ('68766', '103', 'admin', '117.136.53.48', '新增', '新增接运，name:李思思', '/api/v1/carsend/add', '1', '0', '1581492175', null, '0');
INSERT INTO `ky_action_log` VALUES ('68767', '103', 'admin', '117.136.53.48', '删除', '接运删除，where：id=400', '/api/v1/carsend/del?id=400&oid=2199&linkman=%E6%9D%9C%E4%BC%8A%E6%98%AF&linkphone=123&outtime=2020-02-12+15:22:35&address=%E6%B9%96%E5%8C%97%E5%AE%9C%E6%98%8C%E4%B8%89%E5%8C%BB%E9%99%A2&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsign', '1', '0', '1581492181', null, '0');
INSERT INTO `ky_action_log` VALUES ('68768', '103', 'admin', '117.136.53.48', '新增', '新增逝者信息，name:李思思', '/api/v1/carsend/add', '1', '0', '1581492223', null, '0');
INSERT INTO `ky_action_log` VALUES ('68769', '103', 'admin', '117.136.53.48', '新增', '新增财务信息，name:李思思,类型:1', '/api/v1/carsend/add', '1', '0', '1581492223', null, '0');
INSERT INTO `ky_action_log` VALUES ('68770', '103', 'admin', '117.136.53.48', '新增', '新增接运，name:李思思', '/api/v1/carsend/add', '1', '0', '1581492223', null, '0');
INSERT INTO `ky_action_log` VALUES ('68771', '103', 'admin', '117.136.53.48', '新增', '新增逝者信息，name:李思思', '/api/v1/carsend/add', '1', '0', '1581492384', null, '0');
INSERT INTO `ky_action_log` VALUES ('68772', '103', 'admin', '117.136.53.48', '新增', '新增财务信息，name:李思思,类型:1', '/api/v1/carsend/add', '1', '0', '1581492384', null, '0');
INSERT INTO `ky_action_log` VALUES ('68773', '103', 'admin', '117.136.53.48', '新增', '新增接运，name:李思思', '/api/v1/carsend/add', '1', '0', '1581492384', null, '0');
INSERT INTO `ky_action_log` VALUES ('68774', '103', 'admin', '117.136.53.48', '新增', '新增逝者信息，name:李思思', '/api/v1/carsend/add', '1', '0', '1581492426', null, '0');
INSERT INTO `ky_action_log` VALUES ('68775', '103', 'admin', '117.136.53.48', '新增', '新增财务信息，name:李思思,类型:1', '/api/v1/carsend/add', '1', '0', '1581492426', null, '0');
INSERT INTO `ky_action_log` VALUES ('68776', '103', 'admin', '117.136.53.48', '新增', '新增接运，name:李思思', '/api/v1/carsend/add', '1', '0', '1581492426', null, '0');
INSERT INTO `ky_action_log` VALUES ('68777', '103', 'admin', '117.136.53.48', '新增', '新增财务信息，name:李思思,类型:2', '/api/v1/carsend/add', '1', '0', '1581492426', null, '0');
INSERT INTO `ky_action_log` VALUES ('68778', '103', 'admin', '117.136.53.48', '新增', '新增服务信息，name:李思思,id：0=37032&1=37033', '/api/v1/carsend/add', '1', '0', '1581492426', null, '0');
INSERT INTO `ky_action_log` VALUES ('68779', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:张胜利', '/api/v1/carsend/edit', '1', '0', '1581493102', null, '0');
INSERT INTO `ky_action_log` VALUES ('68780', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:张胜利', '/api/v1/carsend/edit', '1', '0', '1581493536', null, '0');
INSERT INTO `ky_action_log` VALUES ('68781', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:张胜利', '/api/v1/carsend/edit', '1', '0', '1581493903', null, '0');
INSERT INTO `ky_action_log` VALUES ('68782', '103', 'admin', '117.136.53.48', '删除', '服务信息删除，where：37028', '/api/v1/carsend/edit', '1', '0', '1581493903', null, '0');
INSERT INTO `ky_action_log` VALUES ('68783', '103', 'admin', '117.136.53.48', '删除', '服务信息删除，where：37029', '/api/v1/carsend/edit', '1', '0', '1581493903', null, '0');
INSERT INTO `ky_action_log` VALUES ('68784', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:张胜利', '/api/v1/carsend/edit', '1', '0', '1581493957', null, '0');
INSERT INTO `ky_action_log` VALUES ('68785', '103', 'admin', '117.136.53.48', '删除', '服务信息删除，where：oid=2197&type=1&tid=398', '/api/v1/carsend/edit', '1', '0', '1581493957', null, '0');
INSERT INTO `ky_action_log` VALUES ('68786', '103', 'admin', '117.136.53.48', '删除', '服务信息删除，where：oid=2197&type=2&tid=398', '/api/v1/carsend/edit', '1', '0', '1581493957', null, '0');
INSERT INTO `ky_action_log` VALUES ('68787', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:张胜利', '/api/v1/carsend/edit', '1', '0', '1581494039', null, '0');
INSERT INTO `ky_action_log` VALUES ('68788', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:张胜利', '/api/v1/carsend/edit', '1', '0', '1581494124', null, '0');
INSERT INTO `ky_action_log` VALUES ('68789', '103', 'admin', '117.136.53.48', '新增', '新增服务信息，name:张胜利,id：', '/api/v1/carsend/edit', '1', '0', '1581494124', null, '0');
INSERT INTO `ky_action_log` VALUES ('68790', '103', 'admin', '117.136.53.48', '编辑', '编辑接运，name：张胜利', '/api/v1/carsend/edit', '1', '0', '1581494124', null, '0');
INSERT INTO `ky_action_log` VALUES ('68791', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:张胜利', '/api/v1/carsend/edit', '1', '0', '1581494155', null, '0');
INSERT INTO `ky_action_log` VALUES ('68792', '103', 'admin', '117.136.53.48', '新增', '新增服务信息，name:张胜利,id：', '/api/v1/carsend/edit', '1', '0', '1581494155', null, '0');
INSERT INTO `ky_action_log` VALUES ('68793', '103', 'admin', '117.136.53.48', '编辑', '编辑接运，name：张胜利', '/api/v1/carsend/edit', '1', '0', '1581494155', null, '0');
INSERT INTO `ky_action_log` VALUES ('68794', '103', 'admin', '117.136.53.48', '删除', '接运删除，where：id=403', '/api/v1/carsend/del?id=403&oid=2202&linkman=%E6%9D%9C%E5%8C%BB%E7%94%9F&linkphone=123&outtime=2020-02-12+15:23:17&address=%E4%B8%89%E5%8C%BB%E9%99%A2&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=%E8%82%BA%', '1', '0', '1581494209', null, '0');
INSERT INTO `ky_action_log` VALUES ('68795', '103', 'admin', '117.136.53.48', '删除', '接运删除，where：id=402', '/api/v1/carsend/del?id=402&oid=2201&linkman=%E6%9D%9C%E5%8C%BB%E7%94%9F&linkphone=123&outtime=2020-02-12+15:23:17&address=%E4%B8%89%E5%8C%BB%E9%99%A2&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=%E8%82%BA%', '1', '0', '1581494215', null, '0');
INSERT INTO `ky_action_log` VALUES ('68796', '103', 'admin', '117.136.53.48', '删除', '接运删除，where：id=401', '/api/v1/carsend/del?id=401&oid=2200&linkman=%E6%9D%9C%E5%8C%BB%E7%94%9F&linkphone=123&outtime=2020-02-12+15:23:17&address=%E4%B8%89%E5%8C%BB%E9%99%A2&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=%E8%82%BA%', '1', '0', '1581494217', null, '0');
INSERT INTO `ky_action_log` VALUES ('68797', '103', 'admin', '117.136.53.48', '删除', '接运删除，where：id=399', '/api/v1/carsend/del?id=399&oid=2198&linkman=%E5%BC%A0%E5%8C%BB%E7%94%9F&linkphone=07281231&outtime=2020-02-12+15:18:10&address=%E4%BB%99%E6%A1%83%E4%B8%80%E5%8C%BB%E9%99%A2&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recet', '1', '0', '1581494219', null, '0');
INSERT INTO `ky_action_log` VALUES ('68798', '103', 'admin', '117.136.53.48', '删除', '接运删除，where：id=398', '/api/v1/carsend/del?id=398&oid=2197&linkman=%E6%B5%8B%E8%AF%95&linkphone=0717110&outtime=2020-02-12+15:00:26&address=%E6%B9%96%E5%8C%97%E5%AE%9C%E6%98%8C&driver=0&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=&stat', '1', '0', '1581494220', null, '0');
INSERT INTO `ky_action_log` VALUES ('68799', '103', 'admin', '117.136.53.48', '新增', '新增逝者信息，name:测试', '/api/v1/carsend/add', '1', '0', '1581494297', null, '0');
INSERT INTO `ky_action_log` VALUES ('68800', '103', 'admin', '117.136.53.48', '新增', '新增财务信息，name:测试,类型:1', '/api/v1/carsend/add', '1', '0', '1581494297', null, '0');
INSERT INTO `ky_action_log` VALUES ('68801', '103', 'admin', '117.136.53.48', '新增', '新增接运，name:测试', '/api/v1/carsend/add', '1', '0', '1581494297', null, '0');
INSERT INTO `ky_action_log` VALUES ('68802', '103', 'admin', '117.136.53.48', '新增', '新增财务信息，name:测试,类型:2', '/api/v1/carsend/add', '1', '0', '1581494297', null, '0');
INSERT INTO `ky_action_log` VALUES ('68803', '103', 'admin', '117.136.53.48', '新增', '新增服务信息，name:测试,id：0=37034&1=37035', '/api/v1/carsend/add', '1', '0', '1581494297', null, '0');
INSERT INTO `ky_action_log` VALUES ('68804', '103', 'admin', '117.136.53.48', '新增', '新增逝者信息，name:测试123', '/api/v1/carsend/add', '1', '0', '1581494341', null, '0');
INSERT INTO `ky_action_log` VALUES ('68805', '103', 'admin', '117.136.53.48', '新增', '新增财务信息，name:测试123,类型:1', '/api/v1/carsend/add', '1', '0', '1581494341', null, '0');
INSERT INTO `ky_action_log` VALUES ('68806', '103', 'admin', '117.136.53.48', '新增', '新增接运，name:测试123', '/api/v1/carsend/add', '1', '0', '1581494341', null, '0');
INSERT INTO `ky_action_log` VALUES ('68807', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:测试123', '/api/v1/carsend/edit', '1', '0', '1581494581', null, '0');
INSERT INTO `ky_action_log` VALUES ('68808', '103', 'admin', '117.136.53.48', '新增', '新增服务信息，name:测试123,id：', '/api/v1/carsend/edit', '1', '0', '1581494581', null, '0');
INSERT INTO `ky_action_log` VALUES ('68809', '103', 'admin', '117.136.53.48', '编辑', '编辑接运，name：测试123', '/api/v1/carsend/edit', '1', '0', '1581494581', null, '0');
INSERT INTO `ky_action_log` VALUES ('68810', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:测试123', '/api/v1/carsend/edit', '1', '0', '1581494918', null, '0');
INSERT INTO `ky_action_log` VALUES ('68811', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:测试123', '/api/v1/carsend/edit', '1', '0', '1581494934', null, '0');
INSERT INTO `ky_action_log` VALUES ('68812', '103', 'admin', '117.136.53.48', '新增', '新增服务信息，name:测试123,id：0=37036&1=37037', '/api/v1/carsend/edit', '1', '0', '1581494934', null, '0');
INSERT INTO `ky_action_log` VALUES ('68813', '103', 'admin', '117.136.53.48', '编辑', '编辑接运，name：测试123', '/api/v1/carsend/edit', '1', '0', '1581494934', null, '0');
INSERT INTO `ky_action_log` VALUES ('68814', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:测试123', '/api/v1/carsend/edit', '1', '0', '1581495139', null, '0');
INSERT INTO `ky_action_log` VALUES ('68815', '103', 'admin', '117.136.53.48', '新增', '新增服务信息，name:测试123,id：0=37038', '/api/v1/carsend/edit', '1', '0', '1581495139', null, '0');
INSERT INTO `ky_action_log` VALUES ('68816', '103', 'admin', '117.136.53.48', '编辑', '编辑接运，name：测试123', '/api/v1/carsend/edit', '1', '0', '1581495139', null, '0');
INSERT INTO `ky_action_log` VALUES ('68817', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:测试123', '/api/v1/carsend/edit', '1', '0', '1581495255', null, '0');
INSERT INTO `ky_action_log` VALUES ('68818', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:测试123', '/api/v1/carsend/edit', '1', '0', '1581495475', null, '0');
INSERT INTO `ky_action_log` VALUES ('68819', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:测试123', '/api/v1/carsend/edit', '1', '0', '1581495502', null, '0');
INSERT INTO `ky_action_log` VALUES ('68820', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:测试123', '/api/v1/carsend/edit', '1', '0', '1581495763', null, '0');
INSERT INTO `ky_action_log` VALUES ('68821', '103', 'admin', '117.136.53.48', '新增', '新增服务信息，name:测试123,id：0=37039', '/api/v1/carsend/edit', '1', '0', '1581495763', null, '0');
INSERT INTO `ky_action_log` VALUES ('68822', '103', 'admin', '117.136.53.48', '编辑', '编辑接运，name：测试123', '/api/v1/carsend/edit', '1', '0', '1581495763', null, '0');
INSERT INTO `ky_action_log` VALUES ('68823', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:测试456', '/api/v1/carsend/edit', '1', '0', '1581495947', null, '0');
INSERT INTO `ky_action_log` VALUES ('68824', '103', 'admin', '117.136.53.48', '编辑', '编辑接运，name：测试456', '/api/v1/carsend/edit', '1', '0', '1581495947', null, '0');
INSERT INTO `ky_action_log` VALUES ('68825', '103', 'admin', '117.136.53.48', '添加', '添加火化信息，逝者ID:2204 火化ID1858', '/api/v1/obituary/edit', '1', '0', '1581498857', null, '0');
INSERT INTO `ky_action_log` VALUES ('68826', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:测试456', '/api/v1/obituary/edit', '1', '0', '1581499014', null, '0');
INSERT INTO `ky_action_log` VALUES ('68827', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:测试456', '/api/v1/obituary/edit', '1', '0', '1581499165', null, '0');
INSERT INTO `ky_action_log` VALUES ('68828', '103', 'admin', '117.136.53.48', '新增', '新增财务信息，name:测试456,类型:3', '/api/v1/obituary/edit', '1', '0', '1581499165', null, '0');
INSERT INTO `ky_action_log` VALUES ('68829', '103', 'admin', '117.136.53.48', '新增', '新增租用信息，name:测试456，租用ID：3606', '/api/v1/obituary/edit', '1', '0', '1581499165', null, '0');
INSERT INTO `ky_action_log` VALUES ('68830', '103', 'admin', '117.136.53.48', '删除', '服务信息删除，where：37039', '/api/v1/obituary/edit', '1', '0', '1581499165', null, '0');
INSERT INTO `ky_action_log` VALUES ('68831', '103', 'admin', '117.136.53.48', '新增', '新增服务信息，name:测试456,id：0=37040&1=37041', '/api/v1/obituary/edit', '1', '0', '1581499165', null, '0');
INSERT INTO `ky_action_log` VALUES ('68832', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:测试456', '/api/v1/obituary/edit', '1', '0', '1581499193', null, '0');
INSERT INTO `ky_action_log` VALUES ('68833', '103', 'admin', '117.136.53.48', '删除', '设备信息删除，where：id=3606', '/api/v1/obituary/edit', '1', '0', '1581499193', null, '0');
INSERT INTO `ky_action_log` VALUES ('68834', '103', 'admin', '117.136.53.48', '删除', '财务信息删除，where：tid=3606&oid=2204', '/api/v1/obituary/edit', '1', '0', '1581499193', null, '0');
INSERT INTO `ky_action_log` VALUES ('68835', '103', 'admin', '117.136.53.48', '新增', '新增财务信息，name:测试456,类型:3', '/api/v1/obituary/edit', '1', '0', '1581499193', null, '0');
INSERT INTO `ky_action_log` VALUES ('68836', '103', 'admin', '117.136.53.48', '新增', '新增租用信息，name:测试456，租用ID：3607', '/api/v1/obituary/edit', '1', '0', '1581499193', null, '0');
INSERT INTO `ky_action_log` VALUES ('68837', '103', 'admin', '117.136.53.48', '删除', '服务信息删除，where：37040', '/api/v1/obituary/edit', '1', '0', '1581499193', null, '0');
INSERT INTO `ky_action_log` VALUES ('68838', '103', 'admin', '117.136.53.48', '删除', '服务信息删除，where：37041', '/api/v1/obituary/edit', '1', '0', '1581499193', null, '0');
INSERT INTO `ky_action_log` VALUES ('68839', '103', 'admin', '117.136.53.48', '新增', '新增服务信息，name:测试456,id：0=37042&1=37043', '/api/v1/obituary/edit', '1', '0', '1581499193', null, '0');
INSERT INTO `ky_action_log` VALUES ('68840', '103', 'admin', '117.136.53.48', '编辑', '编辑逝者信息，name:测试456', '/api/v1/obituary/edit', '1', '0', '1581499266', null, '0');
INSERT INTO `ky_action_log` VALUES ('68841', '103', 'admin', '117.136.53.48', '删除', '设备信息删除，where：id=3607', '/api/v1/obituary/edit', '1', '0', '1581499266', null, '0');
INSERT INTO `ky_action_log` VALUES ('68842', '103', 'admin', '117.136.53.48', '删除', '财务信息删除，where：tid=3607&oid=2204', '/api/v1/obituary/edit', '1', '0', '1581499266', null, '0');
INSERT INTO `ky_action_log` VALUES ('68843', '103', 'admin', '117.136.53.48', '新增', '新增财务信息，name:测试456,类型:3', '/api/v1/obituary/edit', '1', '0', '1581499266', null, '0');
INSERT INTO `ky_action_log` VALUES ('68844', '103', 'admin', '117.136.53.48', '新增', '新增租用信息，name:测试456，租用ID：3608', '/api/v1/obituary/edit', '1', '0', '1581499266', null, '0');
INSERT INTO `ky_action_log` VALUES ('68845', '103', 'admin', '117.136.53.48', '删除', '服务信息删除，where：37042', '/api/v1/obituary/edit', '1', '0', '1581499266', null, '0');
INSERT INTO `ky_action_log` VALUES ('68846', '103', 'admin', '117.136.53.48', '删除', '服务信息删除，where：37043', '/api/v1/obituary/edit', '1', '0', '1581499266', null, '0');
INSERT INTO `ky_action_log` VALUES ('68847', '103', 'admin', '117.136.53.48', '新增', '新增服务信息，name:测试456,id：0=37044&1=37045', '/api/v1/obituary/edit', '1', '0', '1581499266', null, '0');
INSERT INTO `ky_action_log` VALUES ('68848', '103', 'admin', '171.82.10.186', '编辑', '编辑逝者信息，name:测试456', '/api/v1/obituary/edit', '1', '0', '1581503890', null, '0');
INSERT INTO `ky_action_log` VALUES ('68849', '103', 'admin', '171.82.10.186', '删除', '设备信息删除，where：id=3608', '/api/v1/obituary/edit', '1', '0', '1581503890', null, '0');
INSERT INTO `ky_action_log` VALUES ('68850', '103', 'admin', '171.82.10.186', '删除', '财务信息删除，where：tid=3608&oid=2204', '/api/v1/obituary/edit', '1', '0', '1581503890', null, '0');
INSERT INTO `ky_action_log` VALUES ('68851', '103', 'admin', '171.82.10.186', '新增', '新增财务信息，name:测试456,类型:3', '/api/v1/obituary/edit', '1', '0', '1581503890', null, '0');
INSERT INTO `ky_action_log` VALUES ('68852', '103', 'admin', '171.82.10.186', '新增', '新增租用信息，name:测试456，租用ID：3609', '/api/v1/obituary/edit', '1', '0', '1581503890', null, '0');
INSERT INTO `ky_action_log` VALUES ('68853', '103', 'admin', '171.82.10.186', '删除', '服务信息删除，where：37044', '/api/v1/obituary/edit', '1', '0', '1581503890', null, '0');
INSERT INTO `ky_action_log` VALUES ('68854', '103', 'admin', '171.82.10.186', '删除', '服务信息删除，where：37045', '/api/v1/obituary/edit', '1', '0', '1581503890', null, '0');
INSERT INTO `ky_action_log` VALUES ('68855', '103', 'admin', '171.82.10.186', '新增', '新增服务信息，name:测试456,id：0=37046&1=37047', '/api/v1/obituary/edit', '1', '0', '1581503890', null, '0');
INSERT INTO `ky_action_log` VALUES ('68856', '103', 'admin', '171.82.10.186', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581504620', null, '0');
INSERT INTO `ky_action_log` VALUES ('68857', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581558253', null, '0');
INSERT INTO `ky_action_log` VALUES ('68858', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581563501', null, '0');
INSERT INTO `ky_action_log` VALUES ('68859', '103', 'admin', '117.136.81.100', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581563614', null, '0');
INSERT INTO `ky_action_log` VALUES ('68860', '103', 'admin', '117.136.81.100', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581563646', null, '0');
INSERT INTO `ky_action_log` VALUES ('68861', '103', 'admin', '117.136.81.100', '编辑', '编辑逝者信息，name:测试456', '/api/v1/obituary/edit', '1', '0', '1581563683', null, '0');
INSERT INTO `ky_action_log` VALUES ('68862', '103', 'admin', '117.136.81.100', '删除', '设备信息删除，where：id=3609', '/api/v1/obituary/edit', '1', '0', '1581563683', null, '0');
INSERT INTO `ky_action_log` VALUES ('68863', '103', 'admin', '117.136.81.100', '删除', '财务信息删除，where：tid=3609&oid=2204', '/api/v1/obituary/edit', '1', '0', '1581563683', null, '0');
INSERT INTO `ky_action_log` VALUES ('68864', '103', 'admin', '117.136.81.100', '新增', '新增财务信息，name:测试456,类型:3', '/api/v1/obituary/edit', '1', '0', '1581563683', null, '0');
INSERT INTO `ky_action_log` VALUES ('68865', '103', 'admin', '117.136.81.100', '新增', '新增租用信息，name:测试456，租用ID：3610', '/api/v1/obituary/edit', '1', '0', '1581563683', null, '0');
INSERT INTO `ky_action_log` VALUES ('68866', '103', 'admin', '117.136.81.100', '删除', '服务信息删除，where：37046', '/api/v1/obituary/edit', '1', '0', '1581563683', null, '0');
INSERT INTO `ky_action_log` VALUES ('68867', '103', 'admin', '117.136.81.100', '删除', '服务信息删除，where：37047', '/api/v1/obituary/edit', '1', '0', '1581563683', null, '0');
INSERT INTO `ky_action_log` VALUES ('68868', '103', 'admin', '117.136.81.100', '新增', '新增服务信息，name:测试456,id：0=37048&1=37049', '/api/v1/obituary/edit', '1', '0', '1581563683', null, '0');
INSERT INTO `ky_action_log` VALUES ('68869', '103', 'admin', '117.136.81.100', '添加', '添加火化信息，逝者ID:2203 火化ID1859', '/api/v1/obituary/edit', '1', '0', '1581564096', null, '0');
INSERT INTO `ky_action_log` VALUES ('68870', '103', 'admin', '117.136.81.100', '编辑', '编辑逝者信息，name:测试', '/api/v1/obituary/edit', '1', '0', '1581564096', null, '0');
INSERT INTO `ky_action_log` VALUES ('68871', '103', 'admin', '117.136.81.100', '新增', '新增财务信息，name:测试,类型:4', '/api/v1/obituary/edit', '1', '0', '1581564096', null, '0');
INSERT INTO `ky_action_log` VALUES ('68872', '103', 'admin', '117.136.81.100', '新增', '新增租用信息，name:测试，租用ID：3611', '/api/v1/obituary/edit', '1', '0', '1581564096', null, '0');
INSERT INTO `ky_action_log` VALUES ('68873', '103', 'admin', '117.136.81.100', '删除', '服务信息删除，where：37034', '/api/v1/obituary/edit', '1', '0', '1581564096', null, '0');
INSERT INTO `ky_action_log` VALUES ('68874', '103', 'admin', '117.136.81.100', '删除', '服务信息删除，where：37035', '/api/v1/obituary/edit', '1', '0', '1581564096', null, '0');
INSERT INTO `ky_action_log` VALUES ('68875', '103', 'admin', '117.136.81.100', '新增', '新增服务信息，name:测试,id：0=37050&1=37051', '/api/v1/obituary/edit', '1', '0', '1581564096', null, '0');
INSERT INTO `ky_action_log` VALUES ('68876', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581564335', null, '0');
INSERT INTO `ky_action_log` VALUES ('68877', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581571771', null, '0');
INSERT INTO `ky_action_log` VALUES ('68878', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581577259', null, '0');
INSERT INTO `ky_action_log` VALUES ('68879', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581577992', null, '0');
INSERT INTO `ky_action_log` VALUES ('68880', '103', 'admin', '27.20.138.152', '编辑', '编辑逝者信息，name:测试', '/api/v1/obituary/edit', '1', '0', '1581580122', null, '0');
INSERT INTO `ky_action_log` VALUES ('68881', '103', 'admin', '27.20.138.152', '删除', '设备信息删除，where：id=3611', '/api/v1/obituary/edit', '1', '0', '1581580122', null, '0');
INSERT INTO `ky_action_log` VALUES ('68882', '103', 'admin', '27.20.138.152', '删除', '财务信息删除，where：tid=3611&oid=2203', '/api/v1/obituary/edit', '1', '0', '1581580122', null, '0');
INSERT INTO `ky_action_log` VALUES ('68883', '103', 'admin', '27.20.138.152', '新增', '新增财务信息，name:测试,类型:4', '/api/v1/obituary/edit', '1', '0', '1581580122', null, '0');
INSERT INTO `ky_action_log` VALUES ('68884', '103', 'admin', '27.20.138.152', '新增', '新增租用信息，name:测试，租用ID：3612', '/api/v1/obituary/edit', '1', '0', '1581580122', null, '0');
INSERT INTO `ky_action_log` VALUES ('68885', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：37050', '/api/v1/obituary/edit', '1', '0', '1581580122', null, '0');
INSERT INTO `ky_action_log` VALUES ('68886', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：37051', '/api/v1/obituary/edit', '1', '0', '1581580122', null, '0');
INSERT INTO `ky_action_log` VALUES ('68887', '103', 'admin', '27.20.138.152', '新增', '新增服务信息，name:测试,id：0=37052', '/api/v1/obituary/edit', '1', '0', '1581580122', null, '0');
INSERT INTO `ky_action_log` VALUES ('68888', '103', 'admin', '27.20.138.152', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581580131', null, '0');
INSERT INTO `ky_action_log` VALUES ('68889', '103', 'admin', '27.20.138.152', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581580131', null, '0');
INSERT INTO `ky_action_log` VALUES ('68890', '103', 'admin', '27.20.138.152', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581580157', null, '0');
INSERT INTO `ky_action_log` VALUES ('68891', '103', 'admin', '27.20.138.152', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581580157', null, '0');
INSERT INTO `ky_action_log` VALUES ('68892', '103', 'admin', '27.20.138.152', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581580171', null, '0');
INSERT INTO `ky_action_log` VALUES ('68893', '103', 'admin', '27.20.138.152', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581580171', null, '0');
INSERT INTO `ky_action_log` VALUES ('68894', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581580231', null, '0');
INSERT INTO `ky_action_log` VALUES ('68895', '103', 'admin', '117.136.81.100', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581580244', null, '0');
INSERT INTO `ky_action_log` VALUES ('68896', '103', 'admin', '117.136.81.100', '新增', '新增服务信息，name:测试,id：0=37053', '/api/v1/carsend/edit', '1', '0', '1581580244', null, '0');
INSERT INTO `ky_action_log` VALUES ('68897', '103', 'admin', '117.136.81.100', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581580244', null, '0');
INSERT INTO `ky_action_log` VALUES ('68898', '103', 'admin', '27.20.138.152', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581580259', null, '0');
INSERT INTO `ky_action_log` VALUES ('68899', '103', 'admin', '27.20.138.152', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581580259', null, '0');
INSERT INTO `ky_action_log` VALUES ('68900', '103', 'admin', '27.20.138.152', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581580266', null, '0');
INSERT INTO `ky_action_log` VALUES ('68901', '103', 'admin', '27.20.138.152', '新增', '新增服务信息，name:测试,id：0=37054&1=37055', '/api/v1/carsend/edit', '1', '0', '1581580266', null, '0');
INSERT INTO `ky_action_log` VALUES ('68902', '103', 'admin', '27.20.138.152', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581580266', null, '0');
INSERT INTO `ky_action_log` VALUES ('68903', '103', 'admin', '27.20.138.152', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581580273', null, '0');
INSERT INTO `ky_action_log` VALUES ('68904', '103', 'admin', '27.20.138.152', '新增', '新增服务信息，name:测试,id：0=37056', '/api/v1/carsend/edit', '1', '0', '1581580273', null, '0');
INSERT INTO `ky_action_log` VALUES ('68905', '103', 'admin', '27.20.138.152', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581580273', null, '0');
INSERT INTO `ky_action_log` VALUES ('68906', '103', 'admin', '117.136.81.100', '编辑', '编辑逝者信息，name:测试456', '/api/v1/obituary/edit', '1', '0', '1581582008', null, '0');
INSERT INTO `ky_action_log` VALUES ('68907', '103', 'admin', '117.136.81.100', '删除', '设备信息删除，where：id=3610', '/api/v1/obituary/edit', '1', '0', '1581582008', null, '0');
INSERT INTO `ky_action_log` VALUES ('68908', '103', 'admin', '117.136.81.100', '删除', '财务信息删除，where：tid=3610&oid=2204', '/api/v1/obituary/edit', '1', '0', '1581582008', null, '0');
INSERT INTO `ky_action_log` VALUES ('68909', '103', 'admin', '117.136.81.100', '新增', '新增财务信息，name:测试456,类型:3', '/api/v1/obituary/edit', '1', '0', '1581582008', null, '0');
INSERT INTO `ky_action_log` VALUES ('68910', '103', 'admin', '117.136.81.100', '新增', '新增租用信息，name:测试456，租用ID：3613', '/api/v1/obituary/edit', '1', '0', '1581582008', null, '0');
INSERT INTO `ky_action_log` VALUES ('68911', '103', 'admin', '117.136.81.100', '删除', '服务信息删除，where：37048', '/api/v1/obituary/edit', '1', '0', '1581582008', null, '0');
INSERT INTO `ky_action_log` VALUES ('68912', '103', 'admin', '117.136.81.100', '删除', '服务信息删除，where：37049', '/api/v1/obituary/edit', '1', '0', '1581582008', null, '0');
INSERT INTO `ky_action_log` VALUES ('68913', '103', 'admin', '117.136.81.100', '新增', '新增服务信息，name:测试456,id：0=37057', '/api/v1/obituary/edit', '1', '0', '1581582008', null, '0');
INSERT INTO `ky_action_log` VALUES ('68914', '103', 'admin', '117.136.81.100', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581582033', null, '0');
INSERT INTO `ky_action_log` VALUES ('68915', '103', 'admin', '117.136.81.100', '新增', '新增服务信息，name:测试,id：0=37058', '/api/v1/carsend/edit', '1', '0', '1581582033', null, '0');
INSERT INTO `ky_action_log` VALUES ('68916', '103', 'admin', '117.136.81.100', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581582033', null, '0');
INSERT INTO `ky_action_log` VALUES ('68917', '103', 'admin', '117.136.81.100', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581582063', null, '0');
INSERT INTO `ky_action_log` VALUES ('68918', '103', 'admin', '117.136.81.100', '新增', '新增服务信息，name:测试,id：0=37059', '/api/v1/carsend/edit', '1', '0', '1581582063', null, '0');
INSERT INTO `ky_action_log` VALUES ('68919', '103', 'admin', '117.136.81.100', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581582063', null, '0');
INSERT INTO `ky_action_log` VALUES ('68920', '103', 'admin', '117.136.81.100', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581582305', null, '0');
INSERT INTO `ky_action_log` VALUES ('68921', '103', 'admin', '117.136.81.100', '新增', '新增服务信息，name:测试,id：0=37060', '/api/v1/carsend/edit', '1', '0', '1581582305', null, '0');
INSERT INTO `ky_action_log` VALUES ('68922', '103', 'admin', '117.136.81.100', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581582305', null, '0');
INSERT INTO `ky_action_log` VALUES ('68923', '103', 'admin', '117.136.81.100', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581582344', null, '0');
INSERT INTO `ky_action_log` VALUES ('68924', '103', 'admin', '117.136.81.100', '新增', '新增服务信息，name:测试,id：0=37061&1=37062', '/api/v1/carsend/edit', '1', '0', '1581582344', null, '0');
INSERT INTO `ky_action_log` VALUES ('68925', '103', 'admin', '117.136.81.100', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581582344', null, '0');
INSERT INTO `ky_action_log` VALUES ('68926', '103', 'admin', '117.136.81.100', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581582373', null, '0');
INSERT INTO `ky_action_log` VALUES ('68927', '103', 'admin', '117.136.81.100', '新增', '新增服务信息，name:测试,id：0=37063', '/api/v1/carsend/edit', '1', '0', '1581582373', null, '0');
INSERT INTO `ky_action_log` VALUES ('68928', '103', 'admin', '117.136.81.100', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581582373', null, '0');
INSERT INTO `ky_action_log` VALUES ('68929', '103', 'admin', '117.136.81.100', '编辑', '编辑逝者信息，name:测试456', '/api/v1/obituary/edit', '1', '0', '1581582715', null, '0');
INSERT INTO `ky_action_log` VALUES ('68930', '103', 'admin', '117.136.81.100', '删除', '设备信息删除，where：id=3613', '/api/v1/obituary/edit', '1', '0', '1581582715', null, '0');
INSERT INTO `ky_action_log` VALUES ('68931', '103', 'admin', '117.136.81.100', '删除', '财务信息删除，where：tid=3613&oid=2204', '/api/v1/obituary/edit', '1', '0', '1581582715', null, '0');
INSERT INTO `ky_action_log` VALUES ('68932', '103', 'admin', '117.136.81.100', '新增', '新增财务信息，name:测试456,类型:3', '/api/v1/obituary/edit', '1', '0', '1581582715', null, '0');
INSERT INTO `ky_action_log` VALUES ('68933', '103', 'admin', '117.136.81.100', '新增', '新增租用信息，name:测试456，租用ID：3614', '/api/v1/obituary/edit', '1', '0', '1581582715', null, '0');
INSERT INTO `ky_action_log` VALUES ('68934', '103', 'admin', '117.136.81.100', '新增', '新增服务信息，name:测试456,id：0=37064', '/api/v1/obituary/edit', '1', '0', '1581582715', null, '0');
INSERT INTO `ky_action_log` VALUES ('68935', '103', 'admin', '117.136.81.100', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581582818', null, '0');
INSERT INTO `ky_action_log` VALUES ('68936', '103', 'admin', '117.136.81.100', '新增', '新增服务信息，name:测试,id：0=37065&1=37066', '/api/v1/carsend/edit', '1', '0', '1581582818', null, '0');
INSERT INTO `ky_action_log` VALUES ('68937', '103', 'admin', '117.136.81.100', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581582818', null, '0');
INSERT INTO `ky_action_log` VALUES ('68938', '103', 'admin', '117.136.81.100', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581582835', null, '0');
INSERT INTO `ky_action_log` VALUES ('68939', '103', 'admin', '117.136.81.100', '删除', '服务信息删除，where：37065', '/api/v1/carsend/edit', '1', '0', '1581582835', null, '0');
INSERT INTO `ky_action_log` VALUES ('68940', '103', 'admin', '117.136.81.100', '删除', '服务信息删除，where：37066', '/api/v1/carsend/edit', '1', '0', '1581582835', null, '0');
INSERT INTO `ky_action_log` VALUES ('68941', '103', 'admin', '117.136.81.100', '新增', '新增服务信息，name:测试,id：0=37067', '/api/v1/carsend/edit', '1', '0', '1581582835', null, '0');
INSERT INTO `ky_action_log` VALUES ('68942', '103', 'admin', '117.136.81.100', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581582835', null, '0');
INSERT INTO `ky_action_log` VALUES ('68943', '103', 'admin', '27.20.138.152', '新增', '新增逝者信息，name:测试2', '/api/v1/carsend/add', '1', '0', '1581583468', null, '0');
INSERT INTO `ky_action_log` VALUES ('68944', '103', 'admin', '27.20.138.152', '新增', '新增财务信息，name:测试2,类型:1', '/api/v1/carsend/add', '1', '0', '1581583468', null, '0');
INSERT INTO `ky_action_log` VALUES ('68945', '103', 'admin', '27.20.138.152', '新增', '新增接运，name:测试2', '/api/v1/carsend/add', '1', '0', '1581583468', null, '0');
INSERT INTO `ky_action_log` VALUES ('68946', '103', 'admin', '27.20.138.152', '新增', '新增服务信息，name:测试2,id：0=37068&1=37069', '/api/v1/carsend/add', '1', '0', '1581583468', null, '0');
INSERT INTO `ky_action_log` VALUES ('68947', '103', 'admin', '27.20.138.152', '添加', '添加火化信息，逝者ID:2205 火化ID1860', '/api/v1/obituary/edit', '1', '0', '1581583507', null, '0');
INSERT INTO `ky_action_log` VALUES ('68948', '103', 'admin', '27.20.138.152', '编辑', '编辑逝者信息，name:测试2', '/api/v1/obituary/edit', '1', '0', '1581583507', null, '0');
INSERT INTO `ky_action_log` VALUES ('68949', '103', 'admin', '27.20.138.152', '新增', '新增财务信息，name:测试2,类型:3', '/api/v1/obituary/edit', '1', '0', '1581583507', null, '0');
INSERT INTO `ky_action_log` VALUES ('68950', '103', 'admin', '27.20.138.152', '新增', '新增租用信息，name:测试2，租用ID：3615', '/api/v1/obituary/edit', '1', '0', '1581583507', null, '0');
INSERT INTO `ky_action_log` VALUES ('68951', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：37068', '/api/v1/obituary/edit', '1', '0', '1581583507', null, '0');
INSERT INTO `ky_action_log` VALUES ('68952', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：37069', '/api/v1/obituary/edit', '1', '0', '1581583507', null, '0');
INSERT INTO `ky_action_log` VALUES ('68953', '103', 'admin', '27.20.138.152', '新增', '新增套餐服务，name：鲜花套餐 逝者ID:2205', '/api/v1/obituary/edit', '1', '0', '1581583507', null, '0');
INSERT INTO `ky_action_log` VALUES ('68954', '103', 'admin', '27.20.138.152', '新增', '新增服务信息，name:测试2,id：0=37070&1=37071&2=203', '/api/v1/obituary/edit', '1', '0', '1581583507', null, '0');
INSERT INTO `ky_action_log` VALUES ('68955', '103', 'admin', '27.20.138.152', '编辑', '编辑逝者信息，name:测试2', '/api/v1/carsend/edit', '1', '0', '1581583541', null, '0');
INSERT INTO `ky_action_log` VALUES ('68956', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：37070', '/api/v1/carsend/edit', '1', '0', '1581583541', null, '0');
INSERT INTO `ky_action_log` VALUES ('68957', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：37071', '/api/v1/carsend/edit', '1', '0', '1581583541', null, '0');
INSERT INTO `ky_action_log` VALUES ('68958', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：oid=2205', '/api/v1/carsend/edit', '1', '0', '1581583541', null, '0');
INSERT INTO `ky_action_log` VALUES ('68959', '103', 'admin', '27.20.138.152', '新增', '新增套餐服务，name：鲜花套餐 逝者ID:2205', '/api/v1/carsend/edit', '1', '0', '1581583541', null, '0');
INSERT INTO `ky_action_log` VALUES ('68960', '103', 'admin', '27.20.138.152', '新增', '新增服务信息，name:测试2,id：0=37073&1=204', '/api/v1/carsend/edit', '1', '0', '1581583541', null, '0');
INSERT INTO `ky_action_log` VALUES ('68961', '103', 'admin', '27.20.138.152', '编辑', '编辑接运，name：测试2', '/api/v1/carsend/edit', '1', '0', '1581583541', null, '0');
INSERT INTO `ky_action_log` VALUES ('68962', '103', 'admin', '27.20.138.152', '编辑', '编辑逝者信息，name:测试2', '/api/v1/carsend/edit', '1', '0', '1581583551', null, '0');
INSERT INTO `ky_action_log` VALUES ('68963', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：oid=2205&type=1&tid=406', '/api/v1/carsend/edit', '1', '0', '1581583551', null, '0');
INSERT INTO `ky_action_log` VALUES ('68964', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：37073', '/api/v1/carsend/edit', '1', '0', '1581583551', null, '0');
INSERT INTO `ky_action_log` VALUES ('68965', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：oid=2205', '/api/v1/carsend/edit', '1', '0', '1581583551', null, '0');
INSERT INTO `ky_action_log` VALUES ('68966', '103', 'admin', '27.20.138.152', '新增', '新增套餐服务，name：鲜花套餐 逝者ID:2205', '/api/v1/carsend/edit', '1', '0', '1581583551', null, '0');
INSERT INTO `ky_action_log` VALUES ('68967', '103', 'admin', '27.20.138.152', '新增', '新增服务信息，name:测试2,id：0=37075&1=37076&2=205', '/api/v1/carsend/edit', '1', '0', '1581583551', null, '0');
INSERT INTO `ky_action_log` VALUES ('68968', '103', 'admin', '27.20.138.152', '编辑', '编辑接运，name：测试2', '/api/v1/carsend/edit', '1', '0', '1581583551', null, '0');
INSERT INTO `ky_action_log` VALUES ('68969', '103', 'admin', '27.20.138.152', '编辑', '编辑逝者信息，name:测试2', '/api/v1/carsend/edit', '1', '0', '1581583558', null, '0');
INSERT INTO `ky_action_log` VALUES ('68970', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：37075', '/api/v1/carsend/edit', '1', '0', '1581583558', null, '0');
INSERT INTO `ky_action_log` VALUES ('68971', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：37076', '/api/v1/carsend/edit', '1', '0', '1581583558', null, '0');
INSERT INTO `ky_action_log` VALUES ('68972', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：oid=2205', '/api/v1/carsend/edit', '1', '0', '1581583558', null, '0');
INSERT INTO `ky_action_log` VALUES ('68973', '103', 'admin', '27.20.138.152', '新增', '新增套餐服务，name：鲜花套餐 逝者ID:2205', '/api/v1/carsend/edit', '1', '0', '1581583558', null, '0');
INSERT INTO `ky_action_log` VALUES ('68974', '103', 'admin', '27.20.138.152', '新增', '新增服务信息，name:测试2,id：0=206', '/api/v1/carsend/edit', '1', '0', '1581583558', null, '0');
INSERT INTO `ky_action_log` VALUES ('68975', '103', 'admin', '27.20.138.152', '编辑', '编辑接运，name：测试2', '/api/v1/carsend/edit', '1', '0', '1581583558', null, '0');
INSERT INTO `ky_action_log` VALUES ('68976', '103', 'admin', '27.20.138.152', '编辑', '编辑逝者信息，name:测试2', '/api/v1/obituary/edit', '1', '0', '1581583583', null, '0');
INSERT INTO `ky_action_log` VALUES ('68977', '103', 'admin', '27.20.138.152', '删除', '设备信息删除，where：id=3615', '/api/v1/obituary/edit', '1', '0', '1581583583', null, '0');
INSERT INTO `ky_action_log` VALUES ('68978', '103', 'admin', '27.20.138.152', '删除', '财务信息删除，where：tid=3615&oid=2205', '/api/v1/obituary/edit', '1', '0', '1581583583', null, '0');
INSERT INTO `ky_action_log` VALUES ('68979', '103', 'admin', '27.20.138.152', '新增', '新增财务信息，name:测试2,类型:3', '/api/v1/obituary/edit', '1', '0', '1581583583', null, '0');
INSERT INTO `ky_action_log` VALUES ('68980', '103', 'admin', '27.20.138.152', '新增', '新增租用信息，name:测试2，租用ID：3616', '/api/v1/obituary/edit', '1', '0', '1581583583', null, '0');
INSERT INTO `ky_action_log` VALUES ('68981', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：oid=2205&type=1', '/api/v1/obituary/edit', '1', '0', '1581583583', null, '0');
INSERT INTO `ky_action_log` VALUES ('68982', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：oid=2205&type=2', '/api/v1/obituary/edit', '1', '0', '1581583583', null, '0');
INSERT INTO `ky_action_log` VALUES ('68983', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：oid=2205', '/api/v1/obituary/edit', '1', '0', '1581583583', null, '0');
INSERT INTO `ky_action_log` VALUES ('68984', '103', 'admin', '27.20.138.152', '删除', '服务信息删除，where：37078,37072,37077,37074', '/api/v1/obituary/edit', '1', '0', '1581583583', null, '0');
INSERT INTO `ky_action_log` VALUES ('68985', '103', 'admin', '27.20.138.152', '新增', '新增套餐服务，name：鲜花套餐 逝者ID:2205', '/api/v1/obituary/edit', '1', '0', '1581583583', null, '0');
INSERT INTO `ky_action_log` VALUES ('68986', '103', 'admin', '27.20.138.152', '新增', '新增服务信息，name:测试2,id：0=37079&1=207', '/api/v1/obituary/edit', '1', '0', '1581583583', null, '0');
INSERT INTO `ky_action_log` VALUES ('68987', '103', 'admin', '117.136.81.13', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581655495', null, '0');
INSERT INTO `ky_action_log` VALUES ('68988', '103', 'admin', '117.136.81.13', '状态操作', '状态操作，oid:2205 state15', '/api/v1/obituary/state', '1', '0', '1581655615', null, '0');
INSERT INTO `ky_action_log` VALUES ('68989', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581655680', null, '0');
INSERT INTO `ky_action_log` VALUES ('68990', '103', 'admin', '117.136.81.13', '编辑', '编辑逝者信息，name:测试456', '/api/v1/obituary/edit', '1', '0', '1581656484', null, '0');
INSERT INTO `ky_action_log` VALUES ('68991', '103', 'admin', '117.136.81.13', '删除', '设备信息删除，where：id=3614', '/api/v1/obituary/edit', '1', '0', '1581656484', null, '0');
INSERT INTO `ky_action_log` VALUES ('68992', '103', 'admin', '117.136.81.13', '删除', '财务信息删除，where：tid=3614&oid=2204', '/api/v1/obituary/edit', '1', '0', '1581656484', null, '0');
INSERT INTO `ky_action_log` VALUES ('68993', '103', 'admin', '117.136.81.13', '新增', '新增财务信息，name:测试456,类型:3', '/api/v1/obituary/edit', '1', '0', '1581656484', null, '0');
INSERT INTO `ky_action_log` VALUES ('68994', '103', 'admin', '117.136.81.13', '新增', '新增租用信息，name:测试456，租用ID：3617', '/api/v1/obituary/edit', '1', '0', '1581656484', null, '0');
INSERT INTO `ky_action_log` VALUES ('68995', '103', 'admin', '117.136.81.13', '新增', '新增服务信息，name:测试456,id：0=37081&1=37082', '/api/v1/obituary/edit', '1', '0', '1581656484', null, '0');
INSERT INTO `ky_action_log` VALUES ('68996', '103', 'admin', '117.136.81.13', '添加', '添加火化信息，逝者ID:2206 火化ID1861', '/api/v1/obituary/add', '1', '0', '1581657762', null, '0');
INSERT INTO `ky_action_log` VALUES ('68997', '103', 'admin', '117.136.81.13', '新增', '新增逝者信息，name:张三', '/api/v1/obituary/add', '1', '0', '1581657762', null, '0');
INSERT INTO `ky_action_log` VALUES ('68998', '103', 'admin', '117.136.81.13', '新增', '新增财务信息，name:张三,类型:4', '/api/v1/obituary/add', '1', '0', '1581657762', null, '0');
INSERT INTO `ky_action_log` VALUES ('68999', '103', 'admin', '117.136.81.13', '新增', '新增租用信息，name:张三，租用ID：3618', '/api/v1/obituary/add', '1', '0', '1581657762', null, '0');
INSERT INTO `ky_action_log` VALUES ('69000', '103', 'admin', '117.136.81.13', '新增', '新增财务信息，name:张三,类型:3', '/api/v1/obituary/add', '1', '0', '1581657762', null, '0');
INSERT INTO `ky_action_log` VALUES ('69001', '103', 'admin', '117.136.81.13', '新增', '新增租用信息，name:张三，租用ID：3619', '/api/v1/obituary/add', '1', '0', '1581657762', null, '0');
INSERT INTO `ky_action_log` VALUES ('69002', '103', 'admin', '117.136.81.13', '新增', '新增服务信息，name:张三,id：0=37083&1=37084', '/api/v1/obituary/add', '1', '0', '1581657762', null, '0');
INSERT INTO `ky_action_log` VALUES ('69003', '103', 'admin', '117.136.81.13', '新增', '新增逝者信息，name:测试123', '/api/v1/carsend/add', '1', '0', '1581660991', null, '0');
INSERT INTO `ky_action_log` VALUES ('69004', '103', 'admin', '117.136.81.13', '新增', '新增财务信息，name:测试123,类型:1', '/api/v1/carsend/add', '1', '0', '1581660991', null, '0');
INSERT INTO `ky_action_log` VALUES ('69005', '103', 'admin', '117.136.81.13', '新增', '新增接运，name:测试123', '/api/v1/carsend/add', '1', '0', '1581660991', null, '0');
INSERT INTO `ky_action_log` VALUES ('69006', '103', 'admin', '117.136.81.13', '新增', '新增服务信息，name:测试123,id：0=37085', '/api/v1/carsend/add', '1', '0', '1581660991', null, '0');
INSERT INTO `ky_action_log` VALUES ('69007', '103', 'admin', '117.136.81.13', '新增', '新增逝者信息，name:张佳佳', '/api/v1/carsend/add', '1', '0', '1581661172', null, '0');
INSERT INTO `ky_action_log` VALUES ('69008', '103', 'admin', '117.136.81.13', '新增', '新增接运，name:张佳佳', '/api/v1/carsend/add', '1', '0', '1581661172', null, '0');
INSERT INTO `ky_action_log` VALUES ('69009', '103', 'admin', '117.136.81.13', '新增', '新增服务信息，name:张佳佳,id：0=37086', '/api/v1/carsend/add', '1', '0', '1581661172', null, '0');
INSERT INTO `ky_action_log` VALUES ('69010', '103', 'admin', '117.136.81.13', '添加', '添加火化信息，逝者ID:2207 火化ID1862', '/api/v1/obituary/edit', '1', '0', '1581661209', null, '0');
INSERT INTO `ky_action_log` VALUES ('69011', '103', 'admin', '117.136.81.13', '编辑', '编辑逝者信息，name:测试123', '/api/v1/obituary/edit', '1', '0', '1581661209', null, '0');
INSERT INTO `ky_action_log` VALUES ('69012', '103', 'admin', '117.136.81.13', '删除', '服务信息删除，where：37085', '/api/v1/obituary/edit', '1', '0', '1581661209', null, '0');
INSERT INTO `ky_action_log` VALUES ('69013', '103', 'admin', '117.136.81.13', '新增', '新增服务信息，name:测试123,id：0=37087&1=37088', '/api/v1/obituary/edit', '1', '0', '1581661209', null, '0');
INSERT INTO `ky_action_log` VALUES ('69014', '103', 'admin', '117.136.81.13', '新增', '新增逝者信息，name:wqew', '/api/v1/obituary/add', '1', '0', '1581661286', null, '0');
INSERT INTO `ky_action_log` VALUES ('69015', '103', 'admin', '117.136.81.13', '新增', '新增服务信息，name:wqew,id：0=37089', '/api/v1/obituary/add', '1', '0', '1581661286', null, '0');
INSERT INTO `ky_action_log` VALUES ('69016', '103', 'admin', '117.136.81.13', '状态操作', '状态操作，oid:2203 state15', '/api/v1/obituary/state', '1', '0', '1581662721', null, '0');
INSERT INTO `ky_action_log` VALUES ('69017', '103', 'admin', '27.20.138.152', '状态操作', '状态操作，oid:2204 state15', '/api/v1/obituary/state', '1', '0', '1581663644', null, '0');
INSERT INTO `ky_action_log` VALUES ('69018', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581664212', null, '0');
INSERT INTO `ky_action_log` VALUES ('69019', '103', 'admin', '117.136.81.13', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581673040', null, '0');
INSERT INTO `ky_action_log` VALUES ('69020', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581673044', null, '0');
INSERT INTO `ky_action_log` VALUES ('69021', '103', 'admin', '117.136.81.40', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581746974', null, '0');
INSERT INTO `ky_action_log` VALUES ('69022', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581749523', null, '0');
INSERT INTO `ky_action_log` VALUES ('69023', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581751536', null, '0');
INSERT INTO `ky_action_log` VALUES ('69024', '103', 'admin', '117.136.81.25', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1581916570', null, '0');
INSERT INTO `ky_action_log` VALUES ('69025', '103', 'admin', '117.136.81.25', '删除', '逝者信息删除，where：id=2207', '/api/v1/obituary/del?id=2207&serial=202002140001&name=%E6%B5%8B%E8%AF%95123&sex=&age=0&nation=&reason=&dietime=&card=&registered=&linkman=%E5%BC%A0%E4%B8%89&relation=&linkphone=123&linksex=&linkaddress=&linkcard=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90', '1', '0', '1581916873', null, '0');
INSERT INTO `ky_action_log` VALUES ('69026', '103', 'admin', '117.136.81.25', '删除', '接运删除，where：id=406', '/api/v1/carsend/del?id=406&oid=2205&linkman=&linkphone=&address=%E6%97%A0&driver=0&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=&state=1&status=1&create_time=2020-02-13+16:44:28&update_time=2020-02-13+16:45:58&ser', '1', '0', '1581916877', null, '0');
INSERT INTO `ky_action_log` VALUES ('69027', '103', 'admin', '117.136.81.25', '删除', '接运删除，where：id=404', '/api/v1/carsend/del?id=404&oid=2203&linkman=%E5%BC%A0%E4%B8%89&linkphone=123&outtime=2020-02-12+15:57:59&address=%E5%AE%9C%E6%98%8C&driver=0&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=%E8%82%BA%E7%82%8E&state=1&', '1', '0', '1581916880', null, '0');
INSERT INTO `ky_action_log` VALUES ('69028', '103', 'admin', '117.136.81.25', '新增', '新增部门，name：收费处', '/api/v1/branch/add', '1', '0', '1581918659', null, '0');
INSERT INTO `ky_action_log` VALUES ('69029', '103', 'admin', '117.136.81.25', '编辑', '编辑悼念厅，name：测试123', '/api/v1/mourn/edit', '1', '0', '1581921869', null, '0');
INSERT INTO `ky_action_log` VALUES ('69030', '103', 'admin', '117.136.81.25', '编辑', '编辑，name：1号', '/api/v1/furnace/edit', '1', '0', '1581921952', null, '0');
INSERT INTO `ky_action_log` VALUES ('69031', '103', 'admin', '117.136.81.25', '新增', '新增服务，name:接运费', '/api/v1/services/add', '1', '0', '1581922062', null, '0');
INSERT INTO `ky_action_log` VALUES ('69032', '103', 'admin', '117.136.81.25', '新增', '新增服务，name:卫生棺', '/api/v1/services/add', '1', '0', '1581922098', null, '0');
INSERT INTO `ky_action_log` VALUES ('69033', '103', 'admin', '117.136.81.25', '新增', '新增服务，name:法检服务', '/api/v1/services/add', '1', '0', '1581922117', null, '0');
INSERT INTO `ky_action_log` VALUES ('69034', '103', 'admin', '117.136.81.25', '新增', '新增服务，name:防护袋', '/api/v1/services/add', '1', '0', '1581922136', null, '0');
INSERT INTO `ky_action_log` VALUES ('69035', '103', 'admin', '117.136.81.25', '新增', '新增服务，name:礼厅服务', '/api/v1/services/add', '1', '0', '1581922159', null, '0');
INSERT INTO `ky_action_log` VALUES ('69036', '103', 'admin', '117.136.81.25', '新增', '新增服务，name:鲜花服务', '/api/v1/services/add', '1', '0', '1581922176', null, '0');
INSERT INTO `ky_action_log` VALUES ('69037', '103', 'admin', '117.136.81.25', '新增', '新增服务，name:绢花服务', '/api/v1/services/add', '1', '0', '1581922191', null, '0');
INSERT INTO `ky_action_log` VALUES ('69038', '103', 'admin', '117.136.81.25', '新增', '新增服务，name:遗体消毒', '/api/v1/services/add', '1', '0', '1581922206', null, '0');
INSERT INTO `ky_action_log` VALUES ('69039', '103', 'admin', '117.136.81.25', '新增', '新增服务，name:平板炉', '/api/v1/services/add', '1', '0', '1581922230', null, '0');
INSERT INTO `ky_action_log` VALUES ('69040', '103', 'admin', '117.136.81.25', '新增', '新增服务，name:拣灰炉', '/api/v1/services/add', '1', '0', '1581922250', null, '0');
INSERT INTO `ky_action_log` VALUES ('69041', '103', 'admin', '117.136.81.25', '新增', '新增逝者信息，name:测试', '/api/v1/carsend/add', '1', '0', '1581922310', null, '0');
INSERT INTO `ky_action_log` VALUES ('69042', '103', 'admin', '117.136.81.25', '新增', '新增接运，name:测试', '/api/v1/carsend/add', '1', '0', '1581922310', null, '0');
INSERT INTO `ky_action_log` VALUES ('69043', '103', 'admin', '117.136.81.25', '新增', '新增服务信息，name:测试,id：0=37092&1=37093', '/api/v1/carsend/add', '1', '0', '1581922310', null, '0');
INSERT INTO `ky_action_log` VALUES ('69044', '103', 'admin', '117.136.81.25', '编辑', '编辑逝者信息，name:测试', '/api/v1/carsend/edit', '1', '0', '1581922420', null, '0');
INSERT INTO `ky_action_log` VALUES ('69045', '103', 'admin', '117.136.81.25', '删除', '服务信息删除，where：37093,37092', '/api/v1/carsend/edit', '1', '0', '1581922420', null, '0');
INSERT INTO `ky_action_log` VALUES ('69046', '103', 'admin', '117.136.81.25', '新增', '新增服务信息，name:测试,id：0=37094&1=37095', '/api/v1/carsend/edit', '1', '0', '1581922420', null, '0');
INSERT INTO `ky_action_log` VALUES ('69047', '103', 'admin', '117.136.81.25', '编辑', '编辑接运，name：测试', '/api/v1/carsend/edit', '1', '0', '1581922420', null, '0');
INSERT INTO `ky_action_log` VALUES ('69048', '103', 'admin', '117.136.81.25', '新增', '新增逝者信息，name:张珊珊', '/api/v1/carsend/add', '1', '0', '1581922937', null, '0');
INSERT INTO `ky_action_log` VALUES ('69049', '103', 'admin', '117.136.81.25', '新增', '新增接运，name:张珊珊', '/api/v1/carsend/add', '1', '0', '1581922937', null, '0');
INSERT INTO `ky_action_log` VALUES ('69050', '103', 'admin', '117.136.81.25', '新增', '新增服务信息，name:张珊珊,id：0=37096', '/api/v1/carsend/add', '1', '0', '1581922937', null, '0');
INSERT INTO `ky_action_log` VALUES ('69051', '103', 'admin', '117.136.81.25', '删除', '接运删除，where：id=410', '/api/v1/carsend/del?id=410&oid=2215&linkman=%E5%BC%A0%E6%84%8F%E4%B9%89&linkphone=123&outtime=2020-02-17+15:02:03&address=%E6%B9%96%E5%8C%97%E6%AD%A6%E6%B1%89&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=&', '1', '0', '1581922953', null, '0');
INSERT INTO `ky_action_log` VALUES ('69052', '103', 'admin', '117.136.81.25', '新增', '新增逝者信息，name:测试', '/api/v1/carsend/add', '1', '0', '1581923686', null, '0');
INSERT INTO `ky_action_log` VALUES ('69053', '103', 'admin', '117.136.81.25', '新增', '新增接运，name:测试', '/api/v1/carsend/add', '1', '0', '1581923686', null, '0');
INSERT INTO `ky_action_log` VALUES ('69054', '103', 'admin', '117.136.81.25', '新增', '新增服务信息，name:测试,id：0=37097', '/api/v1/carsend/add', '1', '0', '1581923686', null, '0');
INSERT INTO `ky_action_log` VALUES ('69055', '103', 'admin', '117.136.81.25', '删除', '接运删除，where：id=411', '/api/v1/carsend/del?id=411&oid=2216&linkman=123&linkphone=123&outtime=2020-02-17+15:14:39&address=123&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=&state=1&status=1&create_time=2020-02-17+15:14:46&update_t', '1', '0', '1581923934', null, '0');
INSERT INTO `ky_action_log` VALUES ('69056', '103', 'admin', '117.136.81.25', '新增', '新增逝者信息，name:账上上123123', '/api/v1/carsend/add', '1', '0', '1581924077', null, '0');
INSERT INTO `ky_action_log` VALUES ('69057', '103', 'admin', '117.136.81.25', '新增', '新增接运，name:账上上123123', '/api/v1/carsend/add', '1', '0', '1581924077', null, '0');
INSERT INTO `ky_action_log` VALUES ('69058', '103', 'admin', '117.136.81.25', '删除', '接运删除，where：id=412&oid=2217&linkman=123&linkphone=123&outtime=2020-02-17+15%3A21%3A11&address=1231&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=&state=1&status=1&create_time=2020-02-17+15%3A21%3A17&update_t', '/api/v1/carsend/del?id=412&oid=2217&linkman=123&linkphone=123&outtime=2020-02-17+15:21:11&address=1231&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=&state=1&status=1&create_time=2020-02-17+15:21:17&update_', '1', '0', '1581924079', null, '0');
INSERT INTO `ky_action_log` VALUES ('69059', '103', 'admin', '117.136.81.25', '添加', '添加火化信息，逝者ID:2216 火化ID1863', '/api/v1/obituary/edit', '1', '0', '1581937220', null, '0');
INSERT INTO `ky_action_log` VALUES ('69060', '103', 'admin', '117.136.81.25', '编辑', '编辑逝者信息，name:测试', '/api/v1/obituary/edit', '1', '0', '1581937220', null, '0');
INSERT INTO `ky_action_log` VALUES ('69061', '103', 'admin', '117.136.81.25', '新增', '新增租用信息，name:测试，租用ID：3620', '/api/v1/obituary/edit', '1', '0', '1581937220', null, '0');
INSERT INTO `ky_action_log` VALUES ('69062', '103', 'admin', '117.136.81.25', '删除', '服务信息删除，where：37097', '/api/v1/obituary/edit', '1', '0', '1581937220', null, '0');
INSERT INTO `ky_action_log` VALUES ('69063', '103', 'admin', '117.136.81.25', '新增', '新增服务信息，name:测试,id：0=37098', '/api/v1/obituary/edit', '1', '0', '1581937220', null, '0');
INSERT INTO `ky_action_log` VALUES ('69064', '103', 'admin', '117.136.81.25', '添加', '添加火化信息，逝者ID:2214 火化ID1864', '/api/v1/obituary/edit', '1', '0', '1581938019', null, '0');
INSERT INTO `ky_action_log` VALUES ('69065', '103', 'admin', '117.136.81.25', '编辑', '编辑逝者信息，name:测试', '/api/v1/obituary/edit', '1', '0', '1581938019', null, '0');
INSERT INTO `ky_action_log` VALUES ('69066', '103', 'admin', '117.136.81.25', '删除', '服务信息删除，where：37094,37095', '/api/v1/obituary/edit', '1', '0', '1581938019', null, '0');
INSERT INTO `ky_action_log` VALUES ('69067', '103', 'admin', '117.136.81.25', '新增', '新增服务信息，name:测试,id：0=37099&1=37100', '/api/v1/obituary/edit', '1', '0', '1581938019', null, '0');
INSERT INTO `ky_action_log` VALUES ('69068', '103', 'admin', '117.136.81.25', '编辑', '编辑逝者信息，name:测试', '/api/v1/obituary/edit', '1', '0', '1581938031', null, '0');
INSERT INTO `ky_action_log` VALUES ('69069', '103', 'admin', '117.136.81.25', '删除', '服务信息删除，where：37099,37100', '/api/v1/obituary/edit', '1', '0', '1581938031', null, '0');
INSERT INTO `ky_action_log` VALUES ('69070', '103', 'admin', '117.136.81.25', '新增', '新增服务信息，name:测试,id：0=37101&1=37102&2=37103&3=37104', '/api/v1/obituary/edit', '1', '0', '1581938031', null, '0');
INSERT INTO `ky_action_log` VALUES ('69071', '103', 'admin', '27.20.138.152', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582007334', null, '0');
INSERT INTO `ky_action_log` VALUES ('69072', '103', 'admin', '117.136.81.46', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582007454', null, '0');
INSERT INTO `ky_action_log` VALUES ('69073', '103', 'admin', '117.136.81.46', '新增', '新增逝者信息，name:逝者姓名', '/api/v1/carsend/add', '1', '0', '1582018911', null, '0');
INSERT INTO `ky_action_log` VALUES ('69074', '103', 'admin', '117.136.81.46', '新增', '新增接运，name:逝者姓名', '/api/v1/carsend/add', '1', '0', '1582018911', null, '0');
INSERT INTO `ky_action_log` VALUES ('69075', '103', 'admin', '117.136.81.64', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582095331', null, '0');
INSERT INTO `ky_action_log` VALUES ('69076', '103', 'admin', '117.136.81.64', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582096018', null, '0');
INSERT INTO `ky_action_log` VALUES ('69077', '103', 'admin', '27.20.137.213', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582103396', null, '0');
INSERT INTO `ky_action_log` VALUES ('69078', '103', 'admin', '119.102.232.41', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582169662', null, '0');
INSERT INTO `ky_action_log` VALUES ('69079', '103', 'admin', '27.20.137.213', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582169669', null, '0');
INSERT INTO `ky_action_log` VALUES ('69080', '103', 'admin', '183.95.169.15', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582169734', null, '0');
INSERT INTO `ky_action_log` VALUES ('69081', '103', 'admin', '27.21.149.96', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582169752', null, '0');
INSERT INTO `ky_action_log` VALUES ('69082', '103', 'admin', '119.102.232.41', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582169776', null, '0');
INSERT INTO `ky_action_log` VALUES ('69083', '103', 'admin', '117.150.19.107', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582169777', null, '0');
INSERT INTO `ky_action_log` VALUES ('69084', '103', 'admin', '171.114.53.22', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582169802', null, '0');
INSERT INTO `ky_action_log` VALUES ('69085', '103', 'admin', '27.21.149.96', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582169969', null, '0');
INSERT INTO `ky_action_log` VALUES ('69086', '103', 'admin', '122.190.208.45', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582170282', null, '0');
INSERT INTO `ky_action_log` VALUES ('69087', '103', 'admin', '27.20.137.213', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582170834', null, '0');
INSERT INTO `ky_action_log` VALUES ('69088', '103', 'admin', '27.21.149.96', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582173784', null, '0');
INSERT INTO `ky_action_log` VALUES ('69089', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李多', '/api/v1/obituary/edit', '1', '0', '1582174444', null, '0');
INSERT INTO `ky_action_log` VALUES ('69090', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：37112,37111', '/api/v1/obituary/edit', '1', '0', '1582174444', null, '0');
INSERT INTO `ky_action_log` VALUES ('69091', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李多', '/api/v1/obituary/edit', '1', '0', '1582174521', null, '0');
INSERT INTO `ky_action_log` VALUES ('69092', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李多，租用ID：3621', '/api/v1/obituary/edit', '1', '0', '1582174521', null, '0');
INSERT INTO `ky_action_log` VALUES ('69093', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2243&type=1', '/api/v1/obituary/edit', '1', '0', '1582174521', null, '0');
INSERT INTO `ky_action_log` VALUES ('69094', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李多', '/api/v1/obituary/edit', '1', '0', '1582174523', null, '0');
INSERT INTO `ky_action_log` VALUES ('69095', '103', 'admin', '27.21.149.96', '删除', '设备信息删除，where：id=3621', '/api/v1/obituary/edit', '1', '0', '1582174523', null, '0');
INSERT INTO `ky_action_log` VALUES ('69096', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李多，租用ID：3622', '/api/v1/obituary/edit', '1', '0', '1582174523', null, '0');
INSERT INTO `ky_action_log` VALUES ('69097', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2243&type=1', '/api/v1/obituary/edit', '1', '0', '1582174523', null, '0');
INSERT INTO `ky_action_log` VALUES ('69098', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李多', '/api/v1/obituary/edit', '1', '0', '1582174620', null, '0');
INSERT INTO `ky_action_log` VALUES ('69099', '103', 'admin', '27.21.149.96', '删除', '设备信息删除，where：id=3622', '/api/v1/obituary/edit', '1', '0', '1582174620', null, '0');
INSERT INTO `ky_action_log` VALUES ('69100', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李多，租用ID：3623', '/api/v1/obituary/edit', '1', '0', '1582174620', null, '0');
INSERT INTO `ky_action_log` VALUES ('69101', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2243&type=1', '/api/v1/obituary/edit', '1', '0', '1582174620', null, '0');
INSERT INTO `ky_action_log` VALUES ('69102', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李多', '/api/v1/obituary/edit', '1', '0', '1582174622', null, '0');
INSERT INTO `ky_action_log` VALUES ('69103', '103', 'admin', '27.21.149.96', '删除', '设备信息删除，where：id=3623', '/api/v1/obituary/edit', '1', '0', '1582174622', null, '0');
INSERT INTO `ky_action_log` VALUES ('69104', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李多，租用ID：3624', '/api/v1/obituary/edit', '1', '0', '1582174622', null, '0');
INSERT INTO `ky_action_log` VALUES ('69105', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2243&type=1', '/api/v1/obituary/edit', '1', '0', '1582174622', null, '0');
INSERT INTO `ky_action_log` VALUES ('69106', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李多', '/api/v1/obituary/edit', '1', '0', '1582174656', null, '0');
INSERT INTO `ky_action_log` VALUES ('69107', '103', 'admin', '27.21.149.96', '删除', '设备信息删除，where：id=3624', '/api/v1/obituary/edit', '1', '0', '1582174656', null, '0');
INSERT INTO `ky_action_log` VALUES ('69108', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李多，租用ID：3625', '/api/v1/obituary/edit', '1', '0', '1582174656', null, '0');
INSERT INTO `ky_action_log` VALUES ('69109', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2243&type=1', '/api/v1/obituary/edit', '1', '0', '1582174656', null, '0');
INSERT INTO `ky_action_log` VALUES ('69110', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李多', '/api/v1/obituary/edit', '1', '0', '1582174658', null, '0');
INSERT INTO `ky_action_log` VALUES ('69111', '103', 'admin', '27.21.149.96', '删除', '设备信息删除，where：id=3625', '/api/v1/obituary/edit', '1', '0', '1582174658', null, '0');
INSERT INTO `ky_action_log` VALUES ('69112', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李多，租用ID：3626', '/api/v1/obituary/edit', '1', '0', '1582174658', null, '0');
INSERT INTO `ky_action_log` VALUES ('69113', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2243&type=1', '/api/v1/obituary/edit', '1', '0', '1582174658', null, '0');
INSERT INTO `ky_action_log` VALUES ('69114', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李多', '/api/v1/obituary/edit', '1', '0', '1582174709', null, '0');
INSERT INTO `ky_action_log` VALUES ('69115', '103', 'admin', '27.21.149.96', '删除', '设备信息删除，where：id=3626', '/api/v1/obituary/edit', '1', '0', '1582174709', null, '0');
INSERT INTO `ky_action_log` VALUES ('69116', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李多，租用ID：3627', '/api/v1/obituary/edit', '1', '0', '1582174709', null, '0');
INSERT INTO `ky_action_log` VALUES ('69117', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2243&type=1', '/api/v1/obituary/edit', '1', '0', '1582174709', null, '0');
INSERT INTO `ky_action_log` VALUES ('69118', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李多', '/api/v1/obituary/edit', '1', '0', '1582175103', null, '0');
INSERT INTO `ky_action_log` VALUES ('69119', '103', 'admin', '27.21.149.96', '删除', '设备信息删除，where：id=3627', '/api/v1/obituary/edit', '1', '0', '1582175103', null, '0');
INSERT INTO `ky_action_log` VALUES ('69120', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2243&type=1', '/api/v1/obituary/edit', '1', '0', '1582175103', null, '0');
INSERT INTO `ky_action_log` VALUES ('69121', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李多', '/api/v1/obituary/edit', '1', '0', '1582175129', null, '0');
INSERT INTO `ky_action_log` VALUES ('69122', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2243&type=1', '/api/v1/obituary/edit', '1', '0', '1582175129', null, '0');
INSERT INTO `ky_action_log` VALUES ('69123', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李多', '/api/v1/obituary/edit', '1', '0', '1582175181', null, '0');
INSERT INTO `ky_action_log` VALUES ('69124', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2243&type=1', '/api/v1/obituary/edit', '1', '0', '1582175181', null, '0');
INSERT INTO `ky_action_log` VALUES ('69125', '103', 'admin', '27.21.149.96', '添加', '添加火化信息，逝者ID:2242 火化ID1865', '/api/v1/obituary/edit', '1', '0', '1582175458', null, '0');
INSERT INTO `ky_action_log` VALUES ('69126', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李三', '/api/v1/obituary/edit', '1', '0', '1582175458', null, '0');
INSERT INTO `ky_action_log` VALUES ('69127', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李三，租用ID：3628', '/api/v1/obituary/edit', '1', '0', '1582175458', null, '0');
INSERT INTO `ky_action_log` VALUES ('69128', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：37110,37109', '/api/v1/obituary/edit', '1', '0', '1582175458', null, '0');
INSERT INTO `ky_action_log` VALUES ('69129', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李三', '/api/v1/obituary/edit', '1', '0', '1582175486', null, '0');
INSERT INTO `ky_action_log` VALUES ('69130', '103', 'admin', '27.21.149.96', '删除', '设备信息删除，where：id=3628', '/api/v1/obituary/edit', '1', '0', '1582175486', null, '0');
INSERT INTO `ky_action_log` VALUES ('69131', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李三，租用ID：3629', '/api/v1/obituary/edit', '1', '0', '1582175486', null, '0');
INSERT INTO `ky_action_log` VALUES ('69132', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2242&type=1', '/api/v1/obituary/edit', '1', '0', '1582175486', null, '0');
INSERT INTO `ky_action_log` VALUES ('69133', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李三', '/api/v1/obituary/edit', '1', '0', '1582175493', null, '0');
INSERT INTO `ky_action_log` VALUES ('69134', '103', 'admin', '27.21.149.96', '删除', '设备信息删除，where：id=3629', '/api/v1/obituary/edit', '1', '0', '1582175493', null, '0');
INSERT INTO `ky_action_log` VALUES ('69135', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李三，租用ID：3630', '/api/v1/obituary/edit', '1', '0', '1582175493', null, '0');
INSERT INTO `ky_action_log` VALUES ('69136', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2242&type=1', '/api/v1/obituary/edit', '1', '0', '1582175493', null, '0');
INSERT INTO `ky_action_log` VALUES ('69137', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李三', '/api/v1/obituary/edit', '1', '0', '1582175547', null, '0');
INSERT INTO `ky_action_log` VALUES ('69138', '103', 'admin', '27.21.149.96', '删除', '设备信息删除，where：id=3630', '/api/v1/obituary/edit', '1', '0', '1582175547', null, '0');
INSERT INTO `ky_action_log` VALUES ('69139', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李三，租用ID：3631', '/api/v1/obituary/edit', '1', '0', '1582175547', null, '0');
INSERT INTO `ky_action_log` VALUES ('69140', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2242&type=1', '/api/v1/obituary/edit', '1', '0', '1582175547', null, '0');
INSERT INTO `ky_action_log` VALUES ('69141', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李三', '/api/v1/obituary/edit', '1', '0', '1582175618', null, '0');
INSERT INTO `ky_action_log` VALUES ('69142', '103', 'admin', '27.21.149.96', '删除', '设备信息删除，where：id=3631', '/api/v1/obituary/edit', '1', '0', '1582175618', null, '0');
INSERT INTO `ky_action_log` VALUES ('69143', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李三，租用ID：3632', '/api/v1/obituary/edit', '1', '0', '1582175618', null, '0');
INSERT INTO `ky_action_log` VALUES ('69144', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2242&type=1', '/api/v1/obituary/edit', '1', '0', '1582175618', null, '0');
INSERT INTO `ky_action_log` VALUES ('69145', '103', 'admin', '27.21.149.96', '添加', '添加火化信息，逝者ID:2241 火化ID1866', '/api/v1/obituary/edit', '1', '0', '1582176887', null, '0');
INSERT INTO `ky_action_log` VALUES ('69146', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李六', '/api/v1/obituary/edit', '1', '0', '1582176887', null, '0');
INSERT INTO `ky_action_log` VALUES ('69147', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李六，租用ID：3633', '/api/v1/obituary/edit', '1', '0', '1582176887', null, '0');
INSERT INTO `ky_action_log` VALUES ('69148', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：37107,37108', '/api/v1/obituary/edit', '1', '0', '1582176887', null, '0');
INSERT INTO `ky_action_log` VALUES ('69149', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李六', '/api/v1/obituary/edit', '1', '0', '1582176900', null, '0');
INSERT INTO `ky_action_log` VALUES ('69150', '103', 'admin', '27.21.149.96', '删除', '设备信息删除，where：id=3633', '/api/v1/obituary/edit', '1', '0', '1582176900', null, '0');
INSERT INTO `ky_action_log` VALUES ('69151', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李六，租用ID：3634', '/api/v1/obituary/edit', '1', '0', '1582176900', null, '0');
INSERT INTO `ky_action_log` VALUES ('69152', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2241&type=1', '/api/v1/obituary/edit', '1', '0', '1582176900', null, '0');
INSERT INTO `ky_action_log` VALUES ('69153', '103', 'admin', '27.21.149.96', '编辑', '编辑逝者信息，name:李六', '/api/v1/obituary/edit', '1', '0', '1582176935', null, '0');
INSERT INTO `ky_action_log` VALUES ('69154', '103', 'admin', '27.21.149.96', '删除', '设备信息删除，where：id=3634', '/api/v1/obituary/edit', '1', '0', '1582176935', null, '0');
INSERT INTO `ky_action_log` VALUES ('69155', '103', 'admin', '27.21.149.96', '新增', '新增租用信息，name:李六，租用ID：3635', '/api/v1/obituary/edit', '1', '0', '1582176935', null, '0');
INSERT INTO `ky_action_log` VALUES ('69156', '103', 'admin', '27.21.149.96', '删除', '服务信息删除，where：oid=2241&type=1', '/api/v1/obituary/edit', '1', '0', '1582176935', null, '0');
INSERT INTO `ky_action_log` VALUES ('69157', '103', 'admin', '122.190.208.44', '删除', '接运删除，where：id=418&oid=2224&linkman=%E6%88%91&linkphone=131222222&outtime=2020-02-19+05%3A19%3A57&address=%E8%8D%86%E5%B7%9E%E5%B8%82&driver=&operator=%E5%87%8C&ifsignature=0&recetype=2&remark=%E6%88%91&state=1&status=1&create_time=2020-02-19+17%3A20%3A57&', '/api/v1/carsend/del?id=418&oid=2224&linkman=%E6%88%91&linkphone=131222222&outtime=2020-02-19+05:19:57&address=%E8%8D%86%E5%B7%9E%E5%B8%82&driver=&operator=%E5%87%8C&ifsignature=0&recetype=2&remark=%E6%88%91&state=1&status=1&create_time=2020-02-19+17:20:57', '1', '0', '1582185043', null, '0');
INSERT INTO `ky_action_log` VALUES ('69158', '103', 'admin', '122.190.208.44', '删除', '接运删除，where：id=436&oid=2242&linkman=%E6%88%91&linkphone=1313132212&outtime=2020-02-19+17%3A53%3A27&address=%E5%AE%9C%E6%98%8C%E5%B8%82&driver=&operator=%E5%87%8C&ifsignature=0&recetype=1&remark=%E6%97%A0&state=1&status=1&create_time=2020-02-19+17%3A54%3A56', '/api/v1/carsend/del?id=436&oid=2242&linkman=%E6%88%91&linkphone=1313132212&outtime=2020-02-19+17:53:27&address=%E5%AE%9C%E6%98%8C%E5%B8%82&driver=&operator=%E5%87%8C&ifsignature=0&recetype=1&remark=%E6%97%A0&state=1&status=1&create_time=2020-02-19+17:54:5', '1', '0', '1582185050', null, '0');
INSERT INTO `ky_action_log` VALUES ('69159', '103', 'admin', '122.190.208.44', '新增', '新增逝者信息，name:哈哈哈', '/api/v1/carsend/add', '1', '0', '1582185125', null, '0');
INSERT INTO `ky_action_log` VALUES ('69160', '103', 'admin', '122.190.208.44', '新增', '新增接运，name:哈哈哈', '/api/v1/carsend/add', '1', '0', '1582185125', null, '0');
INSERT INTO `ky_action_log` VALUES ('69161', '103', 'admin', '122.190.208.44', '新增', '新增服务信息，name:哈哈哈,id：0=37113&1=37114&2=37115&3=37116&4=37117&5=37118&6=37119&7=37120&8=37121&9=37122', '/api/v1/carsend/add', '1', '0', '1582185125', null, '0');
INSERT INTO `ky_action_log` VALUES ('69162', '103', 'admin', '122.190.208.44', '删除', '接运删除，where：id=438&oid=2244&linkman=&linkphone=&address=&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=&state=1&status=1&create_time=2020-02-20+15%3A52%3A05&update_time=1970-01-01+08%3A00%3A00&servertype=1&u', '/api/v1/carsend/del?id=438&oid=2244&linkman=&linkphone=&address=&driver=&operator=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&ifsignature=0&recetype=1&remark=&state=1&status=1&create_time=2020-02-20+15:52:05&update_time=1970-01-01+08:00:00&servertype=1&', '1', '0', '1582185188', null, '0');
INSERT INTO `ky_action_log` VALUES ('69163', '103', 'admin', '122.190.208.44', '删除', '接运删除，where：id=433&oid=2239&linkman=%E6%88%91&linkphone=131222222&outtime=2020-02-19+05%3A19%3A57&address=%E8%8D%86%E5%B7%9E%E5%B8%82&driver=&operator=%E5%87%8C&ifsignature=0&recetype=2&remark=%E6%88%91&state=1&status=1&create_time=2020-02-19+17%3A42%3A10&', '/api/v1/carsend/del?id=433&oid=2239&linkman=%E6%88%91&linkphone=131222222&outtime=2020-02-19+05:19:57&address=%E8%8D%86%E5%B7%9E%E5%B8%82&driver=&operator=%E5%87%8C&ifsignature=0&recetype=2&remark=%E6%88%91&state=1&status=1&create_time=2020-02-19+17:42:10', '1', '0', '1582185193', null, '0');
INSERT INTO `ky_action_log` VALUES ('69164', '103', 'admin', '122.190.208.44', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582250091', null, '0');
INSERT INTO `ky_action_log` VALUES ('69165', '103', 'admin', '117.136.81.107', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582266483', null, '0');
INSERT INTO `ky_action_log` VALUES ('69166', '103', 'admin', '27.20.137.213', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582266598', null, '0');
INSERT INTO `ky_action_log` VALUES ('69167', '103', 'admin', '27.20.137.213', '新增', '新增服务，name：大明宫', '/api/v1/servicesCombo/add', '1', '0', '1582266621', null, '0');
INSERT INTO `ky_action_log` VALUES ('69168', '103', 'admin', '27.20.137.213', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582267974', null, '0');
INSERT INTO `ky_action_log` VALUES ('69169', '103', 'admin', '27.20.137.213', '删除', '服务删除，where：id=1003', '/api/v1/servicesCombo/del?id=1003&title=%E5%A4%A7%E6%98%8E%E5%AE%AB&price=1380.00&status=1&create_time=2020-02-21+14:30:21&update_time=1970-01-01+08:00:00', '1', '0', '1582268503', null, '0');
INSERT INTO `ky_action_log` VALUES ('69170', '103', 'admin', '27.20.137.213', '新增', '新增服务，name:测试1', '/api/v1/services/add', '1', '0', '1582268520', null, '0');
INSERT INTO `ky_action_log` VALUES ('69171', '103', 'admin', '27.20.137.213', '新增', '新增服务，name:测试2', '/api/v1/services/add', '1', '0', '1582268528', null, '0');
INSERT INTO `ky_action_log` VALUES ('69172', '103', 'admin', '27.20.137.213', '新增', '新增服务，name:测试3', '/api/v1/services/add', '1', '0', '1582268538', null, '0');
INSERT INTO `ky_action_log` VALUES ('69173', '103', 'admin', '27.20.137.213', '新增', '新增服务，name:测试4', '/api/v1/services/add', '1', '0', '1582268588', null, '0');
INSERT INTO `ky_action_log` VALUES ('69174', '103', 'admin', '27.20.137.213', '新增', '新增服务，name：套餐1', '/api/v1/servicesCombo/add', '1', '0', '1582268600', null, '0');
INSERT INTO `ky_action_log` VALUES ('69175', '103', 'admin', '27.20.137.213', '编辑', '编辑服务，name：测试4', '/api/v1/services/edit', '1', '0', '1582268625', null, '0');
INSERT INTO `ky_action_log` VALUES ('69176', '103', 'admin', '27.20.137.213', '编辑', '编辑服务，name：测试3', '/api/v1/services/edit', '1', '0', '1582268628', null, '0');
INSERT INTO `ky_action_log` VALUES ('69177', '103', 'admin', '27.20.137.213', '编辑', '编辑服务，name：测试2', '/api/v1/services/edit', '1', '0', '1582268632', null, '0');
INSERT INTO `ky_action_log` VALUES ('69178', '103', 'admin', '27.20.137.213', '编辑', '编辑服务，name：测试1', '/api/v1/services/edit', '1', '0', '1582268636', null, '0');
INSERT INTO `ky_action_log` VALUES ('69179', '103', 'admin', '27.20.137.213', '编辑', '编辑服务，name：套餐1', '/api/v1/servicesCombo/edit', '1', '0', '1582268643', null, '0');
INSERT INTO `ky_action_log` VALUES ('69180', '103', 'admin', '27.20.137.213', '新增', '新增逝者信息，name:', '/api/v1/obituary/add', '1', '0', '1582268656', null, '0');
INSERT INTO `ky_action_log` VALUES ('69181', '103', 'admin', '27.20.137.213', '新增', '新增套餐服务，name：套餐1 逝者ID:2247', '/api/v1/obituary/add', '1', '0', '1582268656', null, '0');
INSERT INTO `ky_action_log` VALUES ('69182', '103', 'admin', '27.20.137.213', '新增', '新增服务信息，name:,id：0=208', '/api/v1/obituary/add', '1', '0', '1582268656', null, '0');
INSERT INTO `ky_action_log` VALUES ('69183', '103', 'admin', '27.20.137.213', '编辑', '编辑逝者信息，name:', '/api/v1/obituary/edit', '1', '0', '1582268679', null, '0');
INSERT INTO `ky_action_log` VALUES ('69184', '103', 'admin', '27.20.137.213', '编辑', '编辑逝者信息，name:', '/api/v1/obituary/edit', '1', '0', '1582268686', null, '0');
INSERT INTO `ky_action_log` VALUES ('69185', '103', 'admin', '27.20.137.213', '编辑', '编辑逝者信息，name:', '/api/v1/obituary/edit', '1', '0', '1582268759', null, '0');
INSERT INTO `ky_action_log` VALUES ('69186', '103', 'admin', '117.136.81.107', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582268769', null, '0');
INSERT INTO `ky_action_log` VALUES ('69187', '103', 'admin', '117.136.81.107', '编辑', '编辑逝者信息，name:', '/api/v1/obituary/edit', '1', '0', '1582268789', null, '0');
INSERT INTO `ky_action_log` VALUES ('69188', '103', 'admin', '117.136.81.107', '编辑', '编辑逝者信息，name:', '/api/v1/obituary/edit', '1', '0', '1582268794', null, '0');
INSERT INTO `ky_action_log` VALUES ('69189', '103', 'admin', '117.136.81.107', '编辑', '编辑逝者信息，name:', '/api/v1/obituary/edit', '1', '0', '1582269055', null, '0');
INSERT INTO `ky_action_log` VALUES ('69190', '103', 'admin', '117.136.81.107', '删除', '服务信息删除，where：oid=2247', '/api/v1/obituary/edit', '1', '0', '1582269055', null, '0');
INSERT INTO `ky_action_log` VALUES ('69191', '103', 'admin', '117.136.81.107', '删除', '服务信息删除，where：37127,37128', '/api/v1/obituary/edit', '1', '0', '1582269055', null, '0');
INSERT INTO `ky_action_log` VALUES ('69192', '103', 'admin', '117.136.81.107', '新增', '新增套餐服务，name：套餐1 逝者ID:2247', '/api/v1/obituary/edit', '1', '0', '1582269055', null, '0');
INSERT INTO `ky_action_log` VALUES ('69193', '103', 'admin', '117.136.81.107', '新增', '新增服务信息，name:,id：0=37129&1=37130&2=37131&3=209', '/api/v1/obituary/edit', '1', '0', '1582269055', null, '0');
INSERT INTO `ky_action_log` VALUES ('69194', '103', 'admin', '27.20.137.213', '编辑', '编辑逝者信息，name:', '/api/v1/obituary/edit', '1', '0', '1582269233', null, '0');
INSERT INTO `ky_action_log` VALUES ('69195', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37129', '/api/v1/obituary/edit', '1', '0', '1582269233', null, '0');
INSERT INTO `ky_action_log` VALUES ('69196', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37131,37130', '/api/v1/obituary/edit', '1', '0', '1582269233', null, '0');
INSERT INTO `ky_action_log` VALUES ('69197', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：oid=2247', '/api/v1/obituary/edit', '1', '0', '1582269233', null, '0');
INSERT INTO `ky_action_log` VALUES ('69198', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37132,37133', '/api/v1/obituary/edit', '1', '0', '1582269233', null, '0');
INSERT INTO `ky_action_log` VALUES ('69199', '103', 'admin', '27.20.137.213', '新增', '新增套餐服务，name：套餐1 逝者ID:2247', '/api/v1/obituary/edit', '1', '0', '1582269233', null, '0');
INSERT INTO `ky_action_log` VALUES ('69200', '103', 'admin', '27.20.137.213', '新增', '新增服务信息，name:,id：0=37134&1=37135&2=37136&3=210', '/api/v1/obituary/edit', '1', '0', '1582269233', null, '0');
INSERT INTO `ky_action_log` VALUES ('69201', '103', 'admin', '27.20.137.213', '编辑', '编辑逝者信息，name:', '/api/v1/obituary/edit', '1', '0', '1582269246', null, '0');
INSERT INTO `ky_action_log` VALUES ('69202', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37134', '/api/v1/obituary/edit', '1', '0', '1582269246', null, '0');
INSERT INTO `ky_action_log` VALUES ('69203', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37136,37135', '/api/v1/obituary/edit', '1', '0', '1582269246', null, '0');
INSERT INTO `ky_action_log` VALUES ('69204', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：oid=2247', '/api/v1/obituary/edit', '1', '0', '1582269246', null, '0');
INSERT INTO `ky_action_log` VALUES ('69205', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37137', '/api/v1/obituary/edit', '1', '0', '1582269246', null, '0');
INSERT INTO `ky_action_log` VALUES ('69206', '103', 'admin', '27.20.137.213', '新增', '新增套餐服务，name：套餐1 逝者ID:2247', '/api/v1/obituary/edit', '1', '0', '1582269246', null, '0');
INSERT INTO `ky_action_log` VALUES ('69207', '103', 'admin', '27.20.137.213', '新增', '新增服务信息，name:,id：0=37138&1=37139&2=37140&3=37141&4=211', '/api/v1/obituary/edit', '1', '0', '1582269246', null, '0');
INSERT INTO `ky_action_log` VALUES ('69208', '103', 'admin', '27.20.137.213', '编辑', '编辑逝者信息，name:', '/api/v1/obituary/edit', '1', '0', '1582269257', null, '0');
INSERT INTO `ky_action_log` VALUES ('69209', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37138', '/api/v1/obituary/edit', '1', '0', '1582269257', null, '0');
INSERT INTO `ky_action_log` VALUES ('69210', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37139,37140', '/api/v1/obituary/edit', '1', '0', '1582269257', null, '0');
INSERT INTO `ky_action_log` VALUES ('69211', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37141', '/api/v1/obituary/edit', '1', '0', '1582269257', null, '0');
INSERT INTO `ky_action_log` VALUES ('69212', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：oid=2247', '/api/v1/obituary/edit', '1', '0', '1582269257', null, '0');
INSERT INTO `ky_action_log` VALUES ('69213', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37142', '/api/v1/obituary/edit', '1', '0', '1582269257', null, '0');
INSERT INTO `ky_action_log` VALUES ('69214', '103', 'admin', '27.20.137.213', '新增', '新增套餐服务，name：套餐1 逝者ID:2247', '/api/v1/obituary/edit', '1', '0', '1582269257', null, '0');
INSERT INTO `ky_action_log` VALUES ('69215', '103', 'admin', '27.20.137.213', '新增', '新增服务信息，name:,id：0=37143&1=37144&2=37145&3=212', '/api/v1/obituary/edit', '1', '0', '1582269257', null, '0');
INSERT INTO `ky_action_log` VALUES ('69216', '103', 'admin', '27.20.137.213', '编辑', '编辑逝者信息，name:', '/api/v1/obituary/edit', '1', '0', '1582269458', null, '0');
INSERT INTO `ky_action_log` VALUES ('69217', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37143', '/api/v1/obituary/edit', '1', '0', '1582269458', null, '0');
INSERT INTO `ky_action_log` VALUES ('69218', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37144', '/api/v1/obituary/edit', '1', '0', '1582269458', null, '0');
INSERT INTO `ky_action_log` VALUES ('69219', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37145', '/api/v1/obituary/edit', '1', '0', '1582269458', null, '0');
INSERT INTO `ky_action_log` VALUES ('69220', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：oid=2247', '/api/v1/obituary/edit', '1', '0', '1582269458', null, '0');
INSERT INTO `ky_action_log` VALUES ('69221', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37146', '/api/v1/obituary/edit', '1', '0', '1582269458', null, '0');
INSERT INTO `ky_action_log` VALUES ('69222', '103', 'admin', '27.20.137.213', '新增', '新增套餐服务，name：套餐1 逝者ID:2247', '/api/v1/obituary/edit', '1', '0', '1582269458', null, '0');
INSERT INTO `ky_action_log` VALUES ('69223', '103', 'admin', '27.20.137.213', '新增', '新增服务信息，name:,id：0=37147&1=37148&2=213', '/api/v1/obituary/edit', '1', '0', '1582269458', null, '0');
INSERT INTO `ky_action_log` VALUES ('69224', '103', 'admin', '27.20.137.213', '编辑', '编辑逝者信息，name:', '/api/v1/obituary/edit', '1', '0', '1582269471', null, '0');
INSERT INTO `ky_action_log` VALUES ('69225', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37147', '/api/v1/obituary/edit', '1', '0', '1582269471', null, '0');
INSERT INTO `ky_action_log` VALUES ('69226', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：oid=2247&type=2', '/api/v1/obituary/edit', '1', '0', '1582269471', null, '0');
INSERT INTO `ky_action_log` VALUES ('69227', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37148', '/api/v1/obituary/edit', '1', '0', '1582269471', null, '0');
INSERT INTO `ky_action_log` VALUES ('69228', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：oid=2247', '/api/v1/obituary/edit', '1', '0', '1582269471', null, '0');
INSERT INTO `ky_action_log` VALUES ('69229', '103', 'admin', '27.20.137.213', '删除', '服务信息删除，where：37149', '/api/v1/obituary/edit', '1', '0', '1582269471', null, '0');
INSERT INTO `ky_action_log` VALUES ('69230', '103', 'admin', '27.20.137.213', '新增', '新增套餐服务，name：套餐1 逝者ID:2247', '/api/v1/obituary/edit', '1', '0', '1582269471', null, '0');
INSERT INTO `ky_action_log` VALUES ('69231', '103', 'admin', '27.20.137.213', '新增', '新增服务信息，name:,id：0=37150&1=37151&2=214', '/api/v1/obituary/edit', '1', '0', '1582269471', null, '0');
INSERT INTO `ky_action_log` VALUES ('69232', '103', 'admin', '111.176.180.69', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582271025', null, '0');
INSERT INTO `ky_action_log` VALUES ('69233', '103', 'admin', '117.136.81.107', '新增', '新增逝者信息，name:ces ', '/api/v1/carsend/add', '1', '0', '1582271335', null, '0');
INSERT INTO `ky_action_log` VALUES ('69234', '103', 'admin', '117.136.81.107', '新增', '新增接运，name:ces ', '/api/v1/carsend/add', '1', '0', '1582271335', null, '0');
INSERT INTO `ky_action_log` VALUES ('69235', '103', 'admin', '117.136.81.107', '新增', '新增服务信息，name:ces ,id：0=37161', '/api/v1/carsend/add', '1', '0', '1582271335', null, '0');
INSERT INTO `ky_action_log` VALUES ('69236', '103', 'admin', '111.176.180.69', '新增', '新增逝者信息，name:w', '/api/v1/carsend/add', '1', '0', '1582271346', null, '0');
INSERT INTO `ky_action_log` VALUES ('69237', '103', 'admin', '111.176.180.69', '新增', '新增接运，name:w', '/api/v1/carsend/add', '1', '0', '1582271346', null, '0');
INSERT INTO `ky_action_log` VALUES ('69238', '103', 'admin', '111.176.180.69', '编辑', '编辑逝者信息，name:w', '/api/v1/obituary/edit', '1', '0', '1582271842', null, '0');
INSERT INTO `ky_action_log` VALUES ('69239', '103', 'admin', '111.176.180.69', '新增', '新增租用信息，name:w，租用ID：3636', '/api/v1/obituary/edit', '1', '0', '1582271842', null, '0');
INSERT INTO `ky_action_log` VALUES ('69240', '103', 'admin', '111.176.180.69', '编辑', '编辑逝者信息，name:w', '/api/v1/obituary/edit', '1', '0', '1582271895', null, '0');
INSERT INTO `ky_action_log` VALUES ('69241', '103', 'admin', '111.176.180.69', '删除', '设备信息删除，where：id=3636', '/api/v1/obituary/edit', '1', '0', '1582271895', null, '0');
INSERT INTO `ky_action_log` VALUES ('69242', '103', 'admin', '111.176.180.69', '新增', '新增租用信息，name:w，租用ID：3637', '/api/v1/obituary/edit', '1', '0', '1582271895', null, '0');
INSERT INTO `ky_action_log` VALUES ('69243', '103', 'admin', '111.176.180.69', '新增', '新增套餐服务，name：套餐1 逝者ID:2253', '/api/v1/obituary/edit', '1', '0', '1582271895', null, '0');
INSERT INTO `ky_action_log` VALUES ('69244', '103', 'admin', '111.176.180.69', '新增', '新增服务信息，name:w,id：0=37162&1=215', '/api/v1/obituary/edit', '1', '0', '1582271895', null, '0');
INSERT INTO `ky_action_log` VALUES ('69245', '103', 'admin', '122.190.203.229', '编辑', '编辑逝者信息，name:李六', '/api/v1/carsend/edit', '1', '0', '1582272512', null, '0');
INSERT INTO `ky_action_log` VALUES ('69246', '103', 'admin', '122.190.203.229', '新增', '新增服务信息，name:李六,id：0=37165&1=37166', '/api/v1/carsend/edit', '1', '0', '1582272512', null, '0');
INSERT INTO `ky_action_log` VALUES ('69247', '103', 'admin', '122.190.203.229', '编辑', '编辑接运，name：李六', '/api/v1/carsend/edit', '1', '0', '1582272512', null, '0');
INSERT INTO `ky_action_log` VALUES ('69248', '103', 'admin', '122.190.203.229', '编辑', '编辑逝者信息，name:礼物三四吧', '/api/v1/carsend/edit', '1', '0', '1582272568', null, '0');
INSERT INTO `ky_action_log` VALUES ('69249', '103', 'admin', '122.190.203.229', '编辑', '编辑接运，name：礼物三四吧', '/api/v1/carsend/edit', '1', '0', '1582272568', null, '0');
INSERT INTO `ky_action_log` VALUES ('69250', '103', 'admin', '122.190.203.229', '编辑', '编辑逝者信息，name:礼物三四吧', '/api/v1/carsend/edit', '1', '0', '1582272594', null, '0');
INSERT INTO `ky_action_log` VALUES ('69251', '103', 'admin', '122.190.203.229', '新增', '新增服务信息，name:礼物三四吧,id：0=37167&1=37168', '/api/v1/carsend/edit', '1', '0', '1582272594', null, '0');
INSERT INTO `ky_action_log` VALUES ('69252', '103', 'admin', '122.190.203.229', '编辑', '编辑接运，name：礼物三四吧', '/api/v1/carsend/edit', '1', '0', '1582272594', null, '0');
INSERT INTO `ky_action_log` VALUES ('69253', '103', 'admin', '122.190.203.229', '编辑', '编辑逝者信息，name:礼物三四吧', '/api/v1/carsend/edit', '1', '0', '1582272638', null, '0');
INSERT INTO `ky_action_log` VALUES ('69254', '103', 'admin', '122.190.203.229', '删除', '服务信息删除，where：37167', '/api/v1/carsend/edit', '1', '0', '1582272638', null, '0');
INSERT INTO `ky_action_log` VALUES ('69255', '103', 'admin', '122.190.203.229', '删除', '服务信息删除，where：37168', '/api/v1/carsend/edit', '1', '0', '1582272638', null, '0');
INSERT INTO `ky_action_log` VALUES ('69256', '103', 'admin', '122.190.203.229', '新增', '新增服务信息，name:礼物三四吧,id：0=37169', '/api/v1/carsend/edit', '1', '0', '1582272638', null, '0');
INSERT INTO `ky_action_log` VALUES ('69257', '103', 'admin', '122.190.203.229', '编辑', '编辑接运，name：礼物三四吧', '/api/v1/carsend/edit', '1', '0', '1582272638', null, '0');
INSERT INTO `ky_action_log` VALUES ('69258', '103', 'admin', '122.190.203.229', '编辑', '编辑逝者信息，name:ces ', '/api/v1/carsend/edit', '1', '0', '1582272711', null, '0');
INSERT INTO `ky_action_log` VALUES ('69259', '103', 'admin', '122.190.203.229', '删除', '服务信息删除，where：37161', '/api/v1/carsend/edit', '1', '0', '1582272711', null, '0');
INSERT INTO `ky_action_log` VALUES ('69260', '103', 'admin', '122.190.203.229', '新增', '新增服务信息，name:ces ,id：0=37170', '/api/v1/carsend/edit', '1', '0', '1582272711', null, '0');
INSERT INTO `ky_action_log` VALUES ('69261', '103', 'admin', '122.190.203.229', '编辑', '编辑接运，name：ces ', '/api/v1/carsend/edit', '1', '0', '1582272711', null, '0');
INSERT INTO `ky_action_log` VALUES ('69262', '103', 'admin', '122.190.203.229', '编辑', '编辑逝者信息，name:ces ', '/api/v1/carsend/edit', '1', '0', '1582272738', null, '0');
INSERT INTO `ky_action_log` VALUES ('69263', '103', 'admin', '122.190.203.229', '删除', '服务信息删除，where：37170', '/api/v1/carsend/edit', '1', '0', '1582272738', null, '0');
INSERT INTO `ky_action_log` VALUES ('69264', '103', 'admin', '122.190.203.229', '新增', '新增服务信息，name:ces ,id：0=37171', '/api/v1/carsend/edit', '1', '0', '1582272738', null, '0');
INSERT INTO `ky_action_log` VALUES ('69265', '103', 'admin', '122.190.203.229', '编辑', '编辑接运，name：ces ', '/api/v1/carsend/edit', '1', '0', '1582272738', null, '0');
INSERT INTO `ky_action_log` VALUES ('69266', '103', 'admin', '27.20.137.213', '编辑', '编辑服务，name：测试2', '/api/v1/services/edit', '1', '0', '1582276202', null, '0');
INSERT INTO `ky_action_log` VALUES ('69267', '103', 'admin', '27.20.137.213', '编辑', '编辑服务，name：文明棺', '/api/v1/services/edit', '1', '0', '1582276211', null, '0');
INSERT INTO `ky_action_log` VALUES ('69268', '103', 'admin', '27.20.137.213', '编辑', '编辑服务，name：尸袋', '/api/v1/services/edit', '1', '0', '1582276219', null, '0');
INSERT INTO `ky_action_log` VALUES ('69269', '103', 'admin', '27.20.137.213', '编辑', '编辑服务，name：鲜花', '/api/v1/services/edit', '1', '0', '1582276227', null, '0');
INSERT INTO `ky_action_log` VALUES ('69270', '103', 'admin', '117.136.81.107', '删除', '悼念厅删除，where：id=38', '/api/v1/mourn/del?id=38&title=%E6%B5%8B%E8%AF%95123&price=100.00&unit=%E5%85%83%2F%E5%B0%8F%E6%97%B6&type=1&cover_id=0&status=1&state=0&rid=0&create_time=2020-02-10+13:13:26&update_time=2020-02-21+09:55:06', '1', '0', '1582281255', null, '0');
INSERT INTO `ky_action_log` VALUES ('69271', '103', 'admin', '117.136.81.107', '删除', '悼念厅删除，where：id=37', '/api/v1/mourn/del?id=37&title=%E8%B5%90%E7%A6%8F%E5%A0%82&price=1.00&unit=%E5%85%83%2F%E5%B0%8F%E6%97%B6&type=1&cover_id=0&status=1&state=1&rid=0&create_time=2020-02-10+13:13:09&update_time=2020-02-21+15:58:15', '1', '0', '1582281257', null, '0');
INSERT INTO `ky_action_log` VALUES ('69272', '103', 'admin', '117.136.81.107', '删除', '悼念厅删除，where：id=36', '/api/v1/mourn/del?id=36&title=%E7%91%9E%E7%A6%8F%E5%A0%82&price=1.00&unit=%E5%85%83%2F%E5%A4%A9&type=1&cover_id=0&status=1&state=0&rid=0&create_time=2020-02-10+13:12:53&update_time=2020-02-21+09:55:06', '1', '0', '1582281259', null, '0');
INSERT INTO `ky_action_log` VALUES ('69273', '103', 'admin', '117.136.81.107', '新增', '新增悼念厅，name：承福堂', '/api/v1/mourn/add', '1', '0', '1582281308', null, '0');
INSERT INTO `ky_action_log` VALUES ('69274', '103', 'admin', '117.136.81.107', '新增', '新增悼念厅，name：载福堂', '/api/v1/mourn/add', '1', '0', '1582281323', null, '0');
INSERT INTO `ky_action_log` VALUES ('69275', '103', 'admin', '117.136.81.107', '新增', '新增悼念厅，name：佑福堂', '/api/v1/mourn/add', '1', '0', '1582281349', null, '0');
INSERT INTO `ky_action_log` VALUES ('69276', '103', 'admin', '117.136.81.107', '新增', '新增悼念厅，name：传福堂', '/api/v1/mourn/add', '1', '0', '1582281367', null, '0');
INSERT INTO `ky_action_log` VALUES ('69277', '103', 'admin', '117.136.81.107', '新增', '新增悼念厅，name：贻福堂', '/api/v1/mourn/add', '1', '0', '1582281390', null, '0');
INSERT INTO `ky_action_log` VALUES ('69278', '103', 'admin', '117.136.81.107', '删除', '冷柜删除，where：id=34', '/api/v1/cold/del?id=34&rid=0&title=1%E5%8F%B7%E6%9F%9C&price=1.00&type=0&state=0&status=1&create_time=2020-02-10+13:28:13&update_time=2020-02-15+14:52:06', '1', '0', '1582281411', null, '0');
INSERT INTO `ky_action_log` VALUES ('69279', '103', 'admin', '117.136.81.107', '删除', '冷柜删除，where：id=35', '/api/v1/cold/del?id=35&rid=0&title=2&price=1.00&type=0&state=0&status=1&create_time=2020-02-10+13:28:19&update_time=2020-02-15+14:52:06', '1', '0', '1582281412', null, '0');
INSERT INTO `ky_action_log` VALUES ('69280', '103', 'admin', '117.136.81.107', '删除', '冷柜删除，where：id=36', '/api/v1/cold/del?id=36&rid=0&title=123&price=123.00&type=1&state=0&status=1&create_time=2020-02-10+13:28:29&update_time=1970-01-01+08:00:00', '1', '0', '1582281415', null, '0');
INSERT INTO `ky_action_log` VALUES ('69281', '103', 'admin', '117.136.81.107', '新增', '新增，name：1', '/api/v1/cold/add', '1', '0', '1582281421', null, '0');
INSERT INTO `ky_action_log` VALUES ('69282', '103', 'admin', '117.136.81.107', '编辑', '编辑冷柜，name：1号', '/api/v1/cold/edit', '1', '0', '1582281468', null, '0');
INSERT INTO `ky_action_log` VALUES ('69283', '103', 'admin', '117.136.81.107', '新增', '新增，name：2号', '/api/v1/cold/add', '1', '0', '1582281474', null, '0');
INSERT INTO `ky_action_log` VALUES ('69284', '103', 'admin', '117.136.81.107', '新增', '新增，name：3号', '/api/v1/cold/add', '1', '0', '1582281481', null, '0');
INSERT INTO `ky_action_log` VALUES ('69285', '103', 'admin', '117.136.81.107', '新增', '新增，name：1号柜', '/api/v1/cold/add', '1', '0', '1582281634', null, '0');
INSERT INTO `ky_action_log` VALUES ('69286', '103', 'admin', '117.136.81.107', '编辑', '编辑冷柜，name：1号', '/api/v1/cold/edit', '1', '0', '1582281641', null, '0');
INSERT INTO `ky_action_log` VALUES ('69287', '103', 'admin', '117.136.81.107', '新增', '新增，name：2号', '/api/v1/cold/add', '1', '0', '1582281652', null, '0');
INSERT INTO `ky_action_log` VALUES ('69288', '103', 'admin', '117.136.81.107', '新增', '新增，name：3号', '/api/v1/cold/add', '1', '0', '1582281660', null, '0');
INSERT INTO `ky_action_log` VALUES ('69289', '103', 'admin', '117.136.81.107', '删除', '服务删除，where：347', '/api/v1/services/del?id=347&title=%E6%96%87%E6%98%8E%E6%A3%BA&price=150.00&unit=%2F%E5%B0%8F%E6%97%B6&deptid=2&type=1&remark=&iorder=0&status=1&create_time=2020-02-21+15:02:00&update_time=2020-02-21+17:10:11', '1', '0', '1582281726', null, '0');
INSERT INTO `ky_action_log` VALUES ('69290', '103', 'admin', '117.136.81.107', '删除', '服务删除，where：348', '/api/v1/services/del?id=348&title=%E5%B0%B8%E8%A2%8B&price=20.00&unit=%2F%E5%B0%8F%E6%97%B6&deptid=2&type=1&remark=&iorder=0&status=1&create_time=2020-02-21+15:02:08&update_time=2020-02-21+17:10:19', '1', '0', '1582281727', null, '0');
INSERT INTO `ky_action_log` VALUES ('69291', '103', 'admin', '117.136.81.107', '删除', '服务删除，where：349', '/api/v1/services/del?id=349&title=%E9%B2%9C%E8%8A%B1&price=50.00&unit=&deptid=2&type=1&remark=&iorder=0&status=1&create_time=2020-02-21+15:02:18&update_time=2020-02-21+17:10:27', '1', '0', '1582281729', null, '0');
INSERT INTO `ky_action_log` VALUES ('69292', '103', 'admin', '117.136.81.107', '删除', '服务删除，where：350', '/api/v1/services/del?id=350&title=%E6%B5%8B%E8%AF%954&price=100.00&unit=&deptid=0&type=2&remark=&iorder=0&status=1&create_time=2020-02-21+15:03:08&update_time=2020-02-21+15:03:45', '1', '0', '1582281730', null, '0');
INSERT INTO `ky_action_log` VALUES ('69293', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:接运服务', '/api/v1/services/add', '1', '0', '1582281752', null, '0');
INSERT INTO `ky_action_log` VALUES ('69294', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:抬尸费', '/api/v1/services/add', '1', '0', '1582281798', null, '0');
INSERT INTO `ky_action_log` VALUES ('69295', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:尸袋', '/api/v1/services/add', '1', '0', '1582281831', null, '0');
INSERT INTO `ky_action_log` VALUES ('69296', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:整容化妆缝合', '/api/v1/services/add', '1', '0', '1582281849', null, '0');
INSERT INTO `ky_action_log` VALUES ('69297', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:悼念厅租用', '/api/v1/services/add', '1', '0', '1582281867', null, '0');
INSERT INTO `ky_action_log` VALUES ('69298', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:冷藏棺租用', '/api/v1/services/add', '1', '0', '1582281885', null, '0');
INSERT INTO `ky_action_log` VALUES ('69299', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:纸棺', '/api/v1/services/add', '1', '0', '1582281920', null, '0');
INSERT INTO `ky_action_log` VALUES ('69300', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:消毒费', '/api/v1/services/add', '1', '0', '1582281940', null, '0');
INSERT INTO `ky_action_log` VALUES ('69301', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:金刚', '/api/v1/services/add', '1', '0', '1582281955', null, '0');
INSERT INTO `ky_action_log` VALUES ('69302', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:司仪服务', '/api/v1/services/add', '1', '0', '1582281994', null, '0');
INSERT INTO `ky_action_log` VALUES ('69303', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:平板炉', '/api/v1/services/add', '1', '0', '1582282012', null, '0');
INSERT INTO `ky_action_log` VALUES ('69304', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:拣灰炉', '/api/v1/services/add', '1', '0', '1582282029', null, '0');
INSERT INTO `ky_action_log` VALUES ('69305', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:平板炉寿垫', '/api/v1/services/add', '1', '0', '1582282055', null, '0');
INSERT INTO `ky_action_log` VALUES ('69306', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:骨灰盒封膜', '/api/v1/services/add', '1', '0', '1582282076', null, '0');
INSERT INTO `ky_action_log` VALUES ('69307', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:电子鞭炮', '/api/v1/services/add', '1', '0', '1582282096', null, '0');
INSERT INTO `ky_action_log` VALUES ('69308', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:平安盒', '/api/v1/services/add', '1', '0', '1582282128', null, '0');
INSERT INTO `ky_action_log` VALUES ('69309', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:帝皇棺', '/api/v1/services/add', '1', '0', '1582282161', null, '0');
INSERT INTO `ky_action_log` VALUES ('69310', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:蝴蝶棺', '/api/v1/services/add', '1', '0', '1582282178', null, '0');
INSERT INTO `ky_action_log` VALUES ('69311', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:袜子', '/api/v1/services/add', '1', '0', '1582282247', null, '0');
INSERT INTO `ky_action_log` VALUES ('69312', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:鲜花', '/api/v1/services/add', '1', '0', '1582282275', null, '0');
INSERT INTO `ky_action_log` VALUES ('69313', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:花篮', '/api/v1/services/add', '1', '0', '1582282290', null, '0');
INSERT INTO `ky_action_log` VALUES ('69314', '103', 'admin', '117.136.81.107', '新增', '新增服务，name:简易花圈', '/api/v1/services/add', '1', '0', '1582282312', null, '0');
INSERT INTO `ky_action_log` VALUES ('69315', '103', 'admin', '117.136.81.107', '删除', '服务删除，where：id=1004', '/api/v1/servicesCombo/del?id=1004&title=%E5%A5%97%E9%A4%901&price=120.00&status=1&create_time=2020-02-21+15:03:20&update_time=2020-02-21+15:04:03', '1', '0', '1582282333', null, '0');
INSERT INTO `ky_action_log` VALUES ('69316', '103', 'admin', '117.136.81.107', '新增', '新增服务，name：小厅告别', '/api/v1/servicesCombo/add', '1', '0', '1582282364', null, '0');
INSERT INTO `ky_action_log` VALUES ('69317', '103', 'admin', '117.136.81.107', '新增', '新增服务，name：大厅告别', '/api/v1/servicesCombo/add', '1', '0', '1582282375', null, '0');
INSERT INTO `ky_action_log` VALUES ('69318', '103', 'admin', '117.136.81.107', '新增', '新增逝者信息，name:张大大', '/api/v1/carsend/add', '1', '0', '1582283422', null, '0');
INSERT INTO `ky_action_log` VALUES ('69319', '103', 'admin', '117.136.81.107', '新增', '新增接运，name:张大大', '/api/v1/carsend/add', '1', '0', '1582283422', null, '0');
INSERT INTO `ky_action_log` VALUES ('69320', '103', 'admin', '117.136.81.107', '编辑', '编辑逝者信息，name:张大大', '/api/v1/carsend/edit', '1', '0', '1582283463', null, '0');
INSERT INTO `ky_action_log` VALUES ('69321', '103', 'admin', '117.136.81.107', '新增', '新增服务信息，name:张大大,id：0=37227&1=37228&2=37229', '/api/v1/carsend/edit', '1', '0', '1582283463', null, '0');
INSERT INTO `ky_action_log` VALUES ('69322', '103', 'admin', '117.136.81.107', '编辑', '编辑接运，name：张大大', '/api/v1/carsend/edit', '1', '0', '1582283463', null, '0');
INSERT INTO `ky_action_log` VALUES ('69323', '103', 'admin', '117.136.81.107', '编辑', '编辑逝者信息，name:张大大', '/api/v1/obituary/edit', '1', '0', '1582283652', null, '0');
INSERT INTO `ky_action_log` VALUES ('69324', '103', 'admin', '117.136.81.107', '删除', '服务信息删除，where：37229,37228,37227', '/api/v1/obituary/edit', '1', '0', '1582283652', null, '0');
INSERT INTO `ky_action_log` VALUES ('69325', '103', 'admin', '117.136.81.107', '新增', '新增服务信息，name:张大大,id：0=37230&1=37231&2=37232', '/api/v1/obituary/edit', '1', '0', '1582283652', null, '0');
INSERT INTO `ky_action_log` VALUES ('69326', '103', 'admin', '117.136.81.107', '编辑', '编辑逝者信息，name:张大大', '/api/v1/obituary/edit', '1', '0', '1582283741', null, '0');
INSERT INTO `ky_action_log` VALUES ('69327', '103', 'admin', '117.136.81.107', '新增', '新增租用信息，name:张大大，租用ID：3638', '/api/v1/obituary/edit', '1', '0', '1582283741', null, '0');
INSERT INTO `ky_action_log` VALUES ('69328', '103', 'admin', '117.136.81.107', '删除', '服务信息删除，where：37230,37231,37232', '/api/v1/obituary/edit', '1', '0', '1582283741', null, '0');
INSERT INTO `ky_action_log` VALUES ('69329', '103', 'admin', '117.136.81.107', '新增', '新增服务信息，name:张大大,id：0=37233&1=37234&2=37235&3=37236&4=37237', '/api/v1/obituary/edit', '1', '0', '1582283741', null, '0');
INSERT INTO `ky_action_log` VALUES ('69330', '103', 'admin', '117.136.81.107', '编辑', '编辑逝者信息，name:测试412', '/api/v1/obituary/edit', '1', '0', '1582284033', null, '0');
INSERT INTO `ky_action_log` VALUES ('69331', '103', 'admin', '117.136.81.107', '新增', '新增租用信息，name:测试412，租用ID：3639', '/api/v1/obituary/edit', '1', '0', '1582284033', null, '0');
INSERT INTO `ky_action_log` VALUES ('69332', '103', 'admin', '117.136.81.107', '删除', '服务信息删除，where：37225,37226', '/api/v1/obituary/edit', '1', '0', '1582284033', null, '0');
INSERT INTO `ky_action_log` VALUES ('69333', '103', 'admin', '117.136.81.107', '新增', '新增服务信息，name:测试412,id：0=37238&1=37239&2=37240&3=37241&4=37242', '/api/v1/obituary/edit', '1', '0', '1582284033', null, '0');
INSERT INTO `ky_action_log` VALUES ('69334', '103', 'admin', '117.136.81.107', '添加', '添加火化信息，逝者ID:2258 火化ID1867', '/api/v1/obituary/edit', '1', '0', '1582284039', null, '0');
INSERT INTO `ky_action_log` VALUES ('69335', '103', 'admin', '117.136.81.107', '编辑', '编辑逝者信息，name:测试412', '/api/v1/obituary/edit', '1', '0', '1582284039', null, '0');
INSERT INTO `ky_action_log` VALUES ('69336', '103', 'admin', '117.136.81.107', '删除', '设备信息删除，where：id=3639', '/api/v1/obituary/edit', '1', '0', '1582284039', null, '0');
INSERT INTO `ky_action_log` VALUES ('69337', '103', 'admin', '117.136.81.107', '新增', '新增租用信息，name:测试412，租用ID：3640', '/api/v1/obituary/edit', '1', '0', '1582284039', null, '0');
INSERT INTO `ky_action_log` VALUES ('69338', '103', 'admin', '117.136.81.107', '删除', '服务信息删除，where：37238,37239,37240', '/api/v1/obituary/edit', '1', '0', '1582284039', null, '0');
INSERT INTO `ky_action_log` VALUES ('69339', '103', 'admin', '117.136.81.107', '删除', '服务信息删除，where：37241,37242', '/api/v1/obituary/edit', '1', '0', '1582284039', null, '0');
INSERT INTO `ky_action_log` VALUES ('69340', '103', 'admin', '117.136.81.107', '新增', '新增服务信息，name:测试412,id：0=37243&1=37244&2=37245&3=37246&4=37247', '/api/v1/obituary/edit', '1', '0', '1582284039', null, '0');
INSERT INTO `ky_action_log` VALUES ('69341', '103', 'admin', '117.136.81.107', '编辑', '编辑逝者信息，name:00010001', '/api/v1/obituary/edit', '1', '0', '1582284106', null, '0');
INSERT INTO `ky_action_log` VALUES ('69342', '103', 'admin', '117.136.81.107', '删除', '设备信息删除，where：id=3640', '/api/v1/obituary/edit', '1', '0', '1582284106', null, '0');
INSERT INTO `ky_action_log` VALUES ('69343', '103', 'admin', '117.136.81.107', '新增', '新增租用信息，name:00010001，租用ID：3641', '/api/v1/obituary/edit', '1', '0', '1582284106', null, '0');
INSERT INTO `ky_action_log` VALUES ('69344', '103', 'admin', '117.136.81.107', '删除', '服务信息删除，where：37243,37244,37245', '/api/v1/obituary/edit', '1', '0', '1582284106', null, '0');
INSERT INTO `ky_action_log` VALUES ('69345', '103', 'admin', '117.136.81.107', '删除', '服务信息删除，where：37246,37247', '/api/v1/obituary/edit', '1', '0', '1582284106', null, '0');
INSERT INTO `ky_action_log` VALUES ('69346', '103', 'admin', '117.136.81.107', '新增', '新增服务信息，name:00010001,id：0=37248&1=37249&2=37250&3=37251&4=37252', '/api/v1/obituary/edit', '1', '0', '1582284106', null, '0');
INSERT INTO `ky_action_log` VALUES ('69347', '103', 'admin', '117.136.81.107', '编辑', '编辑逝者信息，name:00010001', '/api/v1/obituary/edit', '1', '0', '1582286629', null, '0');
INSERT INTO `ky_action_log` VALUES ('69348', '103', 'admin', '117.136.81.107', '删除', '设备信息删除，where：id=3641', '/api/v1/obituary/edit', '1', '0', '1582286629', null, '0');
INSERT INTO `ky_action_log` VALUES ('69349', '103', 'admin', '117.136.81.107', '新增', '新增租用信息，name:00010001，租用ID：3642', '/api/v1/obituary/edit', '1', '0', '1582286629', null, '0');
INSERT INTO `ky_action_log` VALUES ('69350', '103', 'admin', '117.136.81.107', '删除', '服务信息删除，where：37249,37248,37250', '/api/v1/obituary/edit', '1', '0', '1582286629', null, '0');
INSERT INTO `ky_action_log` VALUES ('69351', '103', 'admin', '117.136.81.107', '删除', '服务信息删除，where：37252,37251', '/api/v1/obituary/edit', '1', '0', '1582286629', null, '0');
INSERT INTO `ky_action_log` VALUES ('69352', '103', 'admin', '117.136.81.107', '新增', '新增服务信息，name:00010001,id：0=37253&1=37254&2=37255&3=37256&4=37257', '/api/v1/obituary/edit', '1', '0', '1582286629', null, '0');
INSERT INTO `ky_action_log` VALUES ('69353', '103', 'admin', '117.136.81.107', '编辑', '编辑逝者信息，name:测试3', '/api/v1/obituary/edit', '1', '0', '1582288135', null, '0');
INSERT INTO `ky_action_log` VALUES ('69354', '103', 'admin', '117.136.81.107', '新增', '新增租用信息，name:测试3，租用ID：3643', '/api/v1/obituary/edit', '1', '0', '1582288135', null, '0');
INSERT INTO `ky_action_log` VALUES ('69355', '103', 'admin', '117.136.81.107', '编辑', '编辑逝者信息，name:测试', '/api/v1/obituary/edit', '1', '0', '1582288999', null, '0');
INSERT INTO `ky_action_log` VALUES ('69356', '103', 'admin', '117.136.81.107', '新增', '新增租用信息，name:测试，租用ID：3644', '/api/v1/obituary/edit', '1', '0', '1582288999', null, '0');
INSERT INTO `ky_action_log` VALUES ('69357', '103', 'admin', '117.136.81.107', '删除', '服务信息删除，where：37174', '/api/v1/obituary/edit', '1', '0', '1582288999', null, '0');
INSERT INTO `ky_action_log` VALUES ('69358', '103', 'admin', '117.136.81.107', '新增', '新增服务信息，name:测试,id：0=37261&1=37262&2=37263', '/api/v1/obituary/edit', '1', '0', '1582288999', null, '0');
INSERT INTO `ky_action_log` VALUES ('69359', '103', 'admin', '27.20.137.213', '编辑', '编辑逝者信息，name:测试3', '/api/v1/obituary/edit', '1', '0', '1582293106', null, '0');
INSERT INTO `ky_action_log` VALUES ('69360', '103', 'admin', '27.20.137.213', '删除', '设备信息删除，where：id=3643', '/api/v1/obituary/edit', '1', '0', '1582293106', null, '0');
INSERT INTO `ky_action_log` VALUES ('69361', '103', 'admin', '27.20.137.213', '新增', '新增租用信息，name:测试3，租用ID：3645', '/api/v1/obituary/edit', '1', '0', '1582293106', null, '0');
INSERT INTO `ky_action_log` VALUES ('69362', '103', 'admin', '27.20.137.213', '新增', '新增逝者信息，name:测试2', '/api/v1/carsend/add', '1', '0', '1582293713', null, '0');
INSERT INTO `ky_action_log` VALUES ('69363', '103', 'admin', '27.20.137.213', '新增', '新增接运，name:测试2', '/api/v1/carsend/add', '1', '0', '1582293713', null, '0');
INSERT INTO `ky_action_log` VALUES ('69364', '103', 'admin', '117.136.81.110', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582328741', null, '0');
INSERT INTO `ky_action_log` VALUES ('69365', '103', 'admin', '183.95.169.251', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582329258', null, '0');
INSERT INTO `ky_action_log` VALUES ('69366', '103', 'admin', '111.176.180.69', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582329662', null, '0');
INSERT INTO `ky_action_log` VALUES ('69367', '103', 'admin', '117.136.81.110', '新增', '新增逝者信息，name:张三', '/api/v1/carsend/add', '1', '0', '1582329723', null, '0');
INSERT INTO `ky_action_log` VALUES ('69368', '103', 'admin', '117.136.81.110', '新增', '新增接运，name:张三', '/api/v1/carsend/add', '1', '0', '1582329723', null, '0');
INSERT INTO `ky_action_log` VALUES ('69369', '103', 'admin', '117.136.81.110', '新增', '新增服务信息，name:张三,id：0=37306', '/api/v1/carsend/add', '1', '0', '1582329723', null, '0');
INSERT INTO `ky_action_log` VALUES ('69370', '103', 'admin', '27.20.137.213', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582330377', null, '0');
INSERT INTO `ky_action_log` VALUES ('69371', '103', 'admin', '183.95.169.251', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582330380', null, '0');
INSERT INTO `ky_action_log` VALUES ('69372', '103', 'admin', '122.190.203.229', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582330398', null, '0');
INSERT INTO `ky_action_log` VALUES ('69373', '103', 'admin', '119.102.232.41', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582330398', null, '0');
INSERT INTO `ky_action_log` VALUES ('69374', '103', 'admin', '171.114.53.22', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582330402', null, '0');
INSERT INTO `ky_action_log` VALUES ('69375', '103', 'admin', '27.31.21.174', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582330448', null, '0');
INSERT INTO `ky_action_log` VALUES ('69376', '103', 'admin', '171.114.6.188', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582330685', null, '0');
INSERT INTO `ky_action_log` VALUES ('69377', '103', 'admin', '111.182.205.19', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582330702', null, '0');
INSERT INTO `ky_action_log` VALUES ('69378', '103', 'admin', '27.20.137.213', '新增', '新增员工，name：王凌', '/api/v1/manager/add', '1', '0', '1582331454', null, '0');
INSERT INTO `ky_action_log` VALUES ('69379', '103', 'admin', '27.31.21.174', '新增', '新增员工，name：zhouqin', '/api/v1/manager/add', '1', '0', '1582333753', null, '0');
INSERT INTO `ky_action_log` VALUES ('69380', '103', 'admin', '27.31.21.174', '编辑', '编辑员工，name：zhouqin', '/api/v1/manager/edit', '1', '0', '1582333786', null, '0');
INSERT INTO `ky_action_log` VALUES ('69381', '103', 'admin', '117.150.12.122', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582337638', null, '0');
INSERT INTO `ky_action_log` VALUES ('69382', '103', 'admin', '27.20.137.213', '登录', '登录成功', '/api/v1/token/app', '1', '0', '1582338393', null, '0');
INSERT INTO `ky_action_log` VALUES ('69383', '103', 'admin', '27.20.137.213', '新增', '新增逝者信息，name:测试', '/api/v1/obituary/add', '1', '0', '1582338960', null, '0');
INSERT INTO `ky_action_log` VALUES ('69384', '103', 'admin', '27.20.137.213', '新增', '新增服务信息，name:测试,id：0=37307&1=37308', '/api/v1/obituary/add', '1', '0', '1582338960', null, '0');

-- ----------------------------
-- Table structure for ky_auth_rule
-- ----------------------------
DROP TABLE IF EXISTS `ky_auth_rule`;
CREATE TABLE `ky_auth_rule` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '父级id',
  `type` varchar(4) DEFAULT '' COMMENT '请求类型',
  `url` varchar(100) DEFAULT '' COMMENT '规则唯一标识',
  `title` varchar(20) DEFAULT '' COMMENT '规则中文名称',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态：为1正常，为0禁用',
  `ismenu` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ordernum` int(11) unsigned DEFAULT '0',
  `code` varchar(20) DEFAULT '',
  `webui_url` varchar(100) DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=179 DEFAULT CHARSET=utf8 COMMENT='部门权限表';

-- ----------------------------
-- Records of ky_auth_rule
-- ----------------------------
INSERT INTO `ky_auth_rule` VALUES ('82', '0', '', '', '接待中心', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('83', '111', 'post', '/api/v1/carsend/list', '接运列表列表', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('84', '112', 'post', '/api/v1/obituary/list', '业务办理列表', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('87', '115', 'post', '/api/v1/finance/list', '业务结算列表', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('88', '0', '', '', '统计分析', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('90', '109', 'post', '/api/v1/statistics/services', '统计列表', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('91', '117', 'post', '/api/v1/statistics/carsend', '接运统计', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('93', '119', 'post', '/api/v1/statistics/unknown', '无名尸统计', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('94', '120', 'post', '/api/v1/statistics/obituary', '完结业务统计', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('95', '0', '', '', '基础配置', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('96', '121', 'post', '/api/v1/mourn/list', '悼念厅管理列表', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('97', '122', 'post', '/api/v1/cold/list', '冷柜管理列表', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('98', '123', 'post', '/api/v1/services/list', '服务管理列表', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('99', '124', 'post', '/api/v1/config/list', '系统配置列表', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('100', '0', '', '', '任务中心', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('101', '125', 'post', '/api/v1/carsend/task', '接运管理列表', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('102', '126', 'post', '/api/v1/cremation/list', '火化管理列表', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('104', '0', '', '', '系统设置', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('105', '128', 'post', '/api/v1/branch/list', '部门管理列表', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('106', '129', 'get', '/api/v1/manager/list', '员工管理列表', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('109', '88', '', '', '服务统计', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('111', '82', '', '', '接运管理', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('112', '82', '', '', '业务办理', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('115', '82', '', '', '业务管理', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('117', '88', '', '', '接运统计', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('119', '88', '', '', '无名尸统计', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('120', '88', '', '', '完结业务统计', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('121', '95', '', '', '悼念厅管理', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('122', '95', '', '', '冷柜管理', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('123', '95', '', '', '服务管理', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('124', '95', '', '', '系统配置', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('125', '100', '', '', '接运管理', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('126', '100', '', '', '火化管理', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('128', '104', '', '', '部门管理', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('129', '104', '', '', '员工管理', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('130', '88', '', '', '火化统计', '1', '0', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('131', '88', '', '', '冷柜管理', '1', '0', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('132', '130', 'post', '/api/v1/statistics/gather', '列表', '1', '0', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('133', '131', 'post', '/api/v1/cold/obituary', '列表', '1', '0', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('134', '117', 'post', '/api/v1/carsend/per', '编辑', '1', '0', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('135', '95', '', '', '火化炉管理', '1', '0', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('136', '135', 'post', '/api/v1/furnace/list', '列表', '1', '0', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('146', '120', 'post', '/api/v1/obituary/state', '撤销', '1', '0', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('155', '88', '', '', '财务统计', '1', '0', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('156', '155', 'post', '/api/v1/statistics/financeList', '财务统计列表', '1', '0', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('163', '129', 'get', '/api/v1/manager/del', '员工删除', '1', '0', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('173', '104', '', '', '权限控制', '1', '1', '0', '', '');
INSERT INTO `ky_auth_rule` VALUES ('178', '173', 'post', '/api/v1/auth_rule/list', '权限控制列表', '1', '1', '0', '', '');

-- ----------------------------
-- Table structure for ky_branch
-- ----------------------------
DROP TABLE IF EXISTS `ky_branch`;
CREATE TABLE `ky_branch` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `branch_name` varchar(20) DEFAULT '' COMMENT '部门名称',
  `status` tinyint(2) DEFAULT '1' COMMENT '状态',
  `rules` varchar(255) DEFAULT '',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COMMENT='部门表';

-- ----------------------------
-- Records of ky_branch
-- ----------------------------
INSERT INTO `ky_branch` VALUES ('1', '超级管理员', '1', '15,6,7,13,9,10,14,24,23,25,26,28,29,30,31,33,34,35,36,38,39,40,41,43,44,45,46,49,50,51,52,54,55,56,57', null, null);
INSERT INTO `ky_branch` VALUES ('33', '业务部', '1', '158', '1580978198', '1581047417');
INSERT INTO `ky_branch` VALUES ('34', '收费处', '1', '', '1581918659', null);

-- ----------------------------
-- Table structure for ky_cabinet
-- ----------------------------
DROP TABLE IF EXISTS `ky_cabinet`;
CREATE TABLE `ky_cabinet` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `serial` varchar(50) DEFAULT NULL COMMENT '编号',
  `name` varchar(50) DEFAULT NULL COMMENT '购买者姓名',
  `totalprice` decimal(10,2) DEFAULT NULL COMMENT '总价',
  `operator` varchar(50) DEFAULT NULL COMMENT '操作人',
  `phone` varchar(50) DEFAULT NULL COMMENT '联系电话',
  `remark` text COMMENT '备注',
  `status` tinyint(3) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ky_cabinet
-- ----------------------------
INSERT INTO `ky_cabinet` VALUES ('1', 'D20200001', 'Cehis 1231', '380.00', '超级管理员', '1231', '213', null, '1581671229', null);
INSERT INTO `ky_cabinet` VALUES ('2', 'D20200001', 'Cehis 1231', '380.00', '超级管理员', '1231', '213', null, '1581671234', null);

-- ----------------------------
-- Table structure for ky_car
-- ----------------------------
DROP TABLE IF EXISTS `ky_car`;
CREATE TABLE `ky_car` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `number` varchar(50) NOT NULL COMMENT '车牌号',
  `cartype` varchar(50) DEFAULT NULL COMMENT '车型',
  `chauffeur` varchar(50) DEFAULT NULL COMMENT '司机',
  `price` decimal(10,2) DEFAULT NULL COMMENT '单价',
  `unit` char(10) DEFAULT NULL COMMENT '单位',
  `state` tinyint(1) DEFAULT '0' COMMENT '0空闲 1占用',
  `remark` text COMMENT '备注',
  `status` tinyint(4) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ky_car
-- ----------------------------
INSERT INTO `ky_car` VALUES ('12', '00000', '业务车123', '测试', '150.00', '趟', '1', '拖运遗体', '1', '1581052009', '1581052240');
INSERT INTO `ky_car` VALUES ('13', '0001', '业务车', '张三', '100.00', '趟', '0', '拖运遗体', '1', '1581052050', null);
INSERT INTO `ky_car` VALUES ('15', '123', null, '123', '123.00', '元/小时', '0', '123', '1', '1581312527', null);

-- ----------------------------
-- Table structure for ky_carsend
-- ----------------------------
DROP TABLE IF EXISTS `ky_carsend`;
CREATE TABLE `ky_carsend` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `oid` int(11) NOT NULL COMMENT '逝者ID',
  `linkman` char(10) DEFAULT NULL COMMENT '联系人',
  `linkphone` char(15) DEFAULT NULL COMMENT '联系电话',
  `outtime` varchar(50) DEFAULT NULL COMMENT '预约出车时间',
  `signtime` int(11) DEFAULT NULL COMMENT '签收时间',
  `gotime` int(11) DEFAULT NULL COMMENT '实际出车时间',
  `backtime` int(11) DEFAULT NULL COMMENT '回馆时间',
  `address` varchar(225) DEFAULT NULL COMMENT '预约地址',
  `cid` int(11) DEFAULT NULL COMMENT '车辆ID',
  `driver` varchar(50) DEFAULT NULL COMMENT '司机',
  `sealiftperson` varchar(255) DEFAULT NULL COMMENT '陪同人员',
  `operator` varchar(50) DEFAULT NULL COMMENT '操作人',
  `signature` text COMMENT '签字',
  `ifsignature` tinyint(2) DEFAULT '0' COMMENT '0未签字  1已签字',
  `recetype` tinyint(4) DEFAULT '1' COMMENT '1:接遗体 2：自送  3: ''送骨灰/送遗体',
  `copidea` varchar(255) DEFAULT NULL COMMENT '警察意见',
  `copname` text COMMENT '警察签字',
  `copphone` char(15) DEFAULT NULL COMMENT '警察电话',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `state` tinyint(4) DEFAULT '1' COMMENT '执行状态',
  `status` tinyint(4) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `ifsigntime` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=455 DEFAULT CHARSET=utf8 COMMENT='出车表';

-- ----------------------------
-- Records of ky_carsend
-- ----------------------------

-- ----------------------------
-- Table structure for ky_carsendmsg
-- ----------------------------
DROP TABLE IF EXISTS `ky_carsendmsg`;
CREATE TABLE `ky_carsendmsg` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `oid` int(11) DEFAULT NULL COMMENT '服务ID',
  `remark` text COMMENT '备注',
  `signtime` int(11) DEFAULT '1' COMMENT '签字时间',
  `operator` varchar(4) DEFAULT NULL COMMENT '操作人',
  `state` tinyint(5) DEFAULT NULL COMMENT '1：待签收，2：已签收，3：已经完成',
  `status` tinyint(2) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=709 DEFAULT CHARSET=utf8 COMMENT='殡葬用品管理';

-- ----------------------------
-- Records of ky_carsendmsg
-- ----------------------------

-- ----------------------------
-- Table structure for ky_check
-- ----------------------------
DROP TABLE IF EXISTS `ky_check`;
CREATE TABLE `ky_check` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `serial` varchar(50) DEFAULT NULL COMMENT '编号',
  `oid` int(11) DEFAULT NULL COMMENT '逝者ID',
  `name` varchar(50) DEFAULT NULL COMMENT '逝者姓名',
  `card` varchar(255) DEFAULT NULL COMMENT '逝者身份证',
  `startime` varchar(100) DEFAULT NULL COMMENT '寄存时间',
  `signature` text COMMENT '签字',
  `ifsignature` tinyint(255) DEFAULT '0' COMMENT '0未签字 已签字',
  `linkman` varchar(50) DEFAULT NULL COMMENT '联系人',
  `linkcard` varchar(255) DEFAULT NULL COMMENT '联系人身份证',
  `linkphone` varchar(50) DEFAULT NULL COMMENT 'l联系电话',
  `linkaddress` varchar(255) DEFAULT NULL COMMENT '联系地址',
  `endtime` varchar(100) DEFAULT NULL COMMENT '领走日期',
  `taketime` varchar(50) DEFAULT NULL COMMENT '领走时间',
  `takename` varchar(100) DEFAULT NULL COMMENT '领走人',
  `take_signature` text COMMENT '领走签字',
  `take_ifsignature` tinyint(255) DEFAULT '0' COMMENT '0未签字 已签字',
  `takeoperator` varchar(255) DEFAULT NULL COMMENT '取走操作人',
  `operator` varchar(255) DEFAULT NULL COMMENT '操作人',
  `savestate` tinyint(2) DEFAULT NULL COMMENT '寄存状态：1 新增寄存，2 ：续交  3：退费 4：取走',
  `status` tinyint(4) DEFAULT '1' COMMENT '1 寄存中  2完结',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `ispay` int(11) DEFAULT NULL COMMENT '寄存状态，1:未寄存  2:寄存中，3：已取走',
  `totalprice` decimal(10,2) DEFAULT NULL COMMENT '价格',
  `paytype` tinyint(3) DEFAULT NULL COMMENT '付款类型',
  `lockername` varchar(255) DEFAULT NULL COMMENT '寄存位置',
  `boxtype` varchar(255) DEFAULT NULL COMMENT '骨灰盒类型',
  `iskye` varchar(255) DEFAULT NULL COMMENT '寄存柜名称',
  `lockid` int(10) DEFAULT NULL COMMENT '寄存箱ID',
  `expireddate` date DEFAULT NULL COMMENT '到期日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ky_check
-- ----------------------------

-- ----------------------------
-- Table structure for ky_cold
-- ----------------------------
DROP TABLE IF EXISTS `ky_cold`;
CREATE TABLE `ky_cold` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `rid` int(11) DEFAULT '0' COMMENT '冷柜ID',
  `title` varchar(500) CHARACTER SET utf8 DEFAULT NULL COMMENT '冷藏柜编号',
  `price` decimal(10,2) DEFAULT NULL COMMENT '单价',
  `type` tinyint(10) DEFAULT '0' COMMENT '类型 0普通 1特殊',
  `state` int(11) DEFAULT '0' COMMENT '状态',
  `status` tinyint(2) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC COMMENT='冷柜表';

-- ----------------------------
-- Records of ky_cold
-- ----------------------------
INSERT INTO `ky_cold` VALUES ('37', '0', '1号', '1.00', '0', '0', '1', '1582281421', '1582281468');
INSERT INTO `ky_cold` VALUES ('38', '0', '2号', '0.00', '0', '0', '1', '1582281474', null);
INSERT INTO `ky_cold` VALUES ('39', '0', '3号', '0.00', '0', '0', '1', '1582281481', '1582289020');
INSERT INTO `ky_cold` VALUES ('40', '0', '1号', '0.00', '1', '0', '1', '1582281634', '1582281641');
INSERT INTO `ky_cold` VALUES ('41', '0', '2号', '0.00', '1', '0', '1', '1582281652', null);
INSERT INTO `ky_cold` VALUES ('42', '0', '3号', '0.00', '1', '0', '1', '1582281660', null);

-- ----------------------------
-- Table structure for ky_combo_services
-- ----------------------------
DROP TABLE IF EXISTS `ky_combo_services`;
CREATE TABLE `ky_combo_services` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cid` int(11) DEFAULT NULL COMMENT '套餐ID',
  `sid` int(11) DEFAULT NULL COMMENT '服务ID',
  `number` int(11) DEFAULT NULL COMMENT '数量',
  `price` decimal(10,2) DEFAULT NULL COMMENT '价格',
  `status` tinyint(4) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ky_combo_services
-- ----------------------------
INSERT INTO `ky_combo_services` VALUES ('31', '1002', '335', '1', '200.00', '1', '1581317417', null);
INSERT INTO `ky_combo_services` VALUES ('32', '1003', '341', '1', '800.00', '1', '1582266621', null);
INSERT INTO `ky_combo_services` VALUES ('33', '1003', '342', '1', '580.00', '1', '1582266621', null);
INSERT INTO `ky_combo_services` VALUES ('36', '1004', '350', '1', '100.00', '1', '1582268643', null);
INSERT INTO `ky_combo_services` VALUES ('37', '1004', '348', '1', '20.00', '1', '1582268643', null);
INSERT INTO `ky_combo_services` VALUES ('38', '1005', '354', '1', '150.00', '1', '1582282364', null);
INSERT INTO `ky_combo_services` VALUES ('39', '1005', '355', '1', '500.00', '1', '1582282364', null);
INSERT INTO `ky_combo_services` VALUES ('40', '1006', '354', '1', '150.00', '1', '1582282375', null);
INSERT INTO `ky_combo_services` VALUES ('41', '1006', '355', '1', '500.00', '1', '1582282375', null);
INSERT INTO `ky_combo_services` VALUES ('42', '1006', '357', '1', '380.00', '1', '1582282375', null);

-- ----------------------------
-- Table structure for ky_config
-- ----------------------------
DROP TABLE IF EXISTS `ky_config`;
CREATE TABLE `ky_config` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '配置ID',
  `name` varchar(30) NOT NULL DEFAULT '' COMMENT '配置名称',
  `type` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '配置类型',
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '配置标题',
  `group` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '配置分组',
  `extra` varchar(255) NOT NULL DEFAULT '' COMMENT '配置选项',
  `describe` varchar(255) NOT NULL DEFAULT '' COMMENT '配置说明',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态',
  `value` text NOT NULL COMMENT '配置值',
  `sort` smallint(3) unsigned NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `uk_name` (`name`) USING BTREE,
  KEY `type` (`type`) USING BTREE,
  KEY `group` (`group`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='配置表';

-- ----------------------------
-- Records of ky_config
-- ----------------------------
INSERT INTO `ky_config` VALUES ('1', 'seo_title', '1', '网站标题', '1', '', '网站标题前台显示标题，优先级低于SEO模块', '1378898976', '1533218362', '1', '荆门殡仪馆', '3');
INSERT INTO `ky_config` VALUES ('2', 'seo_description', '2', '网站描述', '1', '', '网站搜索引擎描述，优先级低于SEO模块', '1378898976', '1533218362', '1', '荆门殡仪馆', '100');
INSERT INTO `ky_config` VALUES ('3', 'seo_keywords', '2', '网站关键字', '1', '', '网站搜索引擎关键字，优先级低于SEO模块', '1378898976', '1533218362', '1', '荆门殡仪馆', '99');
INSERT INTO `ky_config` VALUES ('9', 'config_type_list', '3', '配置类型列表', '3', '', '主要用于数据解析和页面表单的生成', '1378898976', '1512982406', '1', '0:数字\r\n1:字符\r\n2:文本\r\n3:数组\r\n4:枚举\r\n5:图片\r\n6:文件\r\n7:富文本\r\n8:单选\r\n9:多选\r\n10:日期\r\n11:时间\r\n12:颜色', '100');
INSERT INTO `ky_config` VALUES ('20', 'config_group_list', '3', '配置分组', '3', '', '配置分组', '1379228036', '1512982406', '1', '1:基础\r\n2:数据\r\n3:系统\r\n4:API', '100');
INSERT INTO `ky_config` VALUES ('25', 'list_rows', '0', '每页数据记录数', '2', '', '数据每页显示记录数', '1379503896', '1507197630', '1', '10', '10');
INSERT INTO `ky_config` VALUES ('29', 'data_backup_part_size', '0', '数据库备份卷大小', '2', '', '该值用于限制压缩后的分卷最大长度。单位：B', '1381482488', '1507197630', '1', '52428800', '7');
INSERT INTO `ky_config` VALUES ('30', 'data_backup_compress', '4', '数据库备份文件是否启用压缩', '2', '0:不压缩\r\n1:启用压缩', '压缩备份文件需要PHP环境支持gzopen,gzwrite函数', '1381713345', '1507197630', '1', '1', '9');
INSERT INTO `ky_config` VALUES ('31', 'data_backup_compress_level', '4', '数据库备份文件压缩级别', '2', '1:普通\r\n4:一般\r\n9:最高', '数据库备份文件的压缩级别，该配置在开启压缩时生效', '1381713408', '1507197630', '1', '9', '10');
INSERT INTO `ky_config` VALUES ('33', 'allow_url', '3', '不受权限验证的url', '3', '', '', '1386644047', '1559005592', '1', '0:file/pictureupload\r\n1:addon/execute\r\n2:carsend/carsenddetails\r\n3:carsend/carsendprint\r\n4:freezer/freezerprint\r\n5:finance/financedetails\r\n6:finance/financeprint\r\n7:refund/refunddetails\r\n8:refund/refundprint\r\n9:finance/getservices_ajax\r\n10:refund/getservices_ajax\r\n11:record/getcarlist_ajax\r\n12:record/getservices_ajax\r\n13:cindercheck/checkdetails\r\n14:finance/financeproof\r\n15:finance/openlist\r\n16:finance/financeAccount\r\n17:carsend/carsendOutList_ajax\r\n18:member/getMemberList\r\n19:cremation/cremationOutList_ajax\r\n20:record/freeOccupy\r\n21:Serviceorder/exportOrderList\r\n22:freezer/freezerdetails\r\n23:finance/replaceproofprint\r\n24:finance/financecover\r\n25:finance/getServicesdis_ajax\r\n26:serviceorder/exportOutsideStat\r\n', '100');
INSERT INTO `ky_config` VALUES ('43', 'empty_list_describe', '1', '数据列表为空时的描述信息', '2', '', '', '1492278127', '1507197630', '1', 'aOh! 暂时还没有数据~', '0');
INSERT INTO `ky_config` VALUES ('44', 'trash_config', '3', '回收站配置', '3', '', 'key为模型名称，值为显示列。', '1492312698', '1512982406', '1', 'Config:name\r\nAuthGroup:name\r\nMember:nickname\r\nMenu:name\r\nArticle:name\r\nArticleCategory:name\r\nAddon:name\r\nPicture:name\r\nFile:name\r\nActionLog:describe\r\nApi:name\r\nApiGroup:name\r\nBlogroll:name\r\nExeLog:exe_url\r\nSeo:name', '0');
INSERT INTO `ky_config` VALUES ('49', 'static_domain', '1', '静态资源域名', '1', '', '若静态资源为本地资源则此项为空，若为外部资源则为存放静态资源的域名', '1502430387', '1533218362', '1', '', '0');
INSERT INTO `ky_config` VALUES ('52', 'team_developer', '3', '研发团队人员', '4', '', '', '1504236453', '1510894595', '1', '0:Bigotry\r\n1:扫地僧', '0');
INSERT INTO `ky_config` VALUES ('53', 'api_status_option', '3', 'API接口状态', '4', '', '', '1504242433', '1510894595', '1', '0:待研发\r\n1:研发中\r\n2:测试中\r\n3:已完成', '0');
INSERT INTO `ky_config` VALUES ('54', 'api_data_type_option', '3', 'API数据类型', '4', '', '', '1504328208', '1510894595', '1', '0:字符\r\n1:文本\r\n2:数组\r\n3:文件', '0');
INSERT INTO `ky_config` VALUES ('55', 'frontend_theme', '1', '前端主题', '1', '', '', '1504762360', '1533218362', '1', 'default', '0');
INSERT INTO `ky_config` VALUES ('56', 'api_domain', '1', 'API部署域名', '4', '', '', '1504779094', '1563586277', '-1', 'https://demo.onebase.org', '0');
INSERT INTO `ky_config` VALUES ('57', 'api_key', '1', 'API加密KEY', '4', '', '泄露后API将存在安全隐患', '1505302112', '1510894595', '1', 'l2V|gfZp{8`;jzR~6Y1_', '0');
INSERT INTO `ky_config` VALUES ('58', 'loading_icon', '4', '页面Loading图标设置', '1', '1:图标1\r\n2:图标2\r\n3:图标3\r\n4:图标4\r\n5:图标5\r\n6:图标6\r\n7:图标7', '页面Loading图标支持7种图标切换', '1505377202', '1533218362', '1', '7', '80');
INSERT INTO `ky_config` VALUES ('59', 'sys_file_field', '3', '文件字段配置', '3', '', 'key为模型名，值为文件列名。', '1505799386', '1512982406', '1', '0_article:file_id', '0');
INSERT INTO `ky_config` VALUES ('60', 'sys_picture_field', '3', '图片字段配置', '3', '', 'key为模型名，值为图片列名。', '1506315422', '1512982406', '1', '0_article:cover_id\r\n1_article:img_ids', '0');
INSERT INTO `ky_config` VALUES ('61', 'jwt_key', '1', 'JWT加密KEY', '4', '', '', '1506748805', '1510894595', '1', 'l2V|DSFXXXgfZp{8`;FjzR~6Y1_', '0');
INSERT INTO `ky_config` VALUES ('64', 'is_write_exe_log', '4', '是否写入执行记录', '3', '0:否\r\n1:是', '', '1510544340', '1512982406', '1', '0', '101');
INSERT INTO `ky_config` VALUES ('65', 'admin_allow_ip', '3', '超级管理员登录IP', '3', '', '后台超级管理员登录IP限制，其他角色不受限。', '1510995580', '1512982406', '1', '0:27.22.112.250', '0');
INSERT INTO `ky_config` VALUES ('66', 'pjax_mode', '8', 'PJAX模式', '3', '0:否\r\n1:是', '若为PJAX模式则浏览器不会刷新，若为常规模式则为AJAX+刷新', '1512370397', '1512982406', '1', '1', '120');
INSERT INTO `ky_config` VALUES ('101', 'servicesType', '3', '服务类型', '2', '', '', '1512370397', '1581145570', '1', '1:接运服务\n2:礼厅服务\n3:火化服务\n4:殡葬用品\n5:其他服务\n6:套餐服务', '1');
INSERT INTO `ky_config` VALUES ('103', 'recetype', '3', '接运类型', '2', '', '', '1563847135', '1563847617', '1', '1:接遗体\n2:送骨灰', '0');
INSERT INTO `ky_config` VALUES ('104', 'carsendState', '3', '接运状态', '2', '', '', '1563847432', '1568616212', '1', '1:待出车\n2:已出车\n3:已回馆', '0');
INSERT INTO `ky_config` VALUES ('107', 'servicesState', '3', '服务状态', '2', '', '', '1564126488', '1568621724', '1', '1:待完成\n2:已完成', '0');
INSERT INTO `ky_config` VALUES ('108', 'obituaryState', '3', '逝者进度', '2', '', '', '1564366629', '1572831563', '1', '1:待签收\n2:已签收\n3:待出车\n4:已出车\n5:已回馆\n6:办理中\n7:冷冻中\n8:冷藏中\n9:守灵中\n10:待火化\n11:火化中\n12:待取灰\n13:已取灰\n14:待结算\n15:已完结', '0');
INSERT INTO `ky_config` VALUES ('109', 'cremationState', '3', '火化进度', '2', '', '', '1564561550', '0', '1', '1:待火化\n2:火化中\n3:待取灰\n4:已取灰\n5:已完结', '0');
INSERT INTO `ky_config` VALUES ('110', 'financeState', '3', '财务类型', '2', '', '', '1564726728', '0', '1', '1:接运服务\n2:服务项目\n3:悼念厅\n4:冷藏\n5:骨灰寄存\n6:骨灰续存', '0');
INSERT INTO `ky_config` VALUES ('111', 'drivername', '0', '司机', '2', '', '', '1568604467', '1568942578', '1', '1:姚文江\n2:朱城志\n3:朱继阳\n4:夏晓凯\n5:喻强', '0');

-- ----------------------------
-- Table structure for ky_cremation
-- ----------------------------
DROP TABLE IF EXISTS `ky_cremation`;
CREATE TABLE `ky_cremation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `oid` int(11) DEFAULT NULL COMMENT '逝者主表ID',
  `numberplate` char(50) DEFAULT NULL COMMENT '日期',
  `number` char(50) DEFAULT NULL COMMENT '火化牌',
  `serial` varchar(255) DEFAULT NULL COMMENT '收敛编号',
  `startime` varchar(255) DEFAULT NULL COMMENT '开始时间',
  `endtime` varchar(255) DEFAULT NULL COMMENT '结束时间',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `haulier` varchar(100) DEFAULT NULL COMMENT '承運人',
  `signature` mediumtext COMMENT '签字',
  `ifsignature` tinyint(2) DEFAULT '0' COMMENT '0未签  1已签',
  `signtime` int(11) DEFAULT NULL COMMENT '签字时间',
  `operator` varchar(50) DEFAULT NULL COMMENT '操作人',
  `state` tinyint(4) DEFAULT '1' COMMENT '火化状态\r\n1待火化 2火化中 3待取灰 4已取灰 5已完结',
  `status` tinyint(4) DEFAULT '1',
  `create_time` varchar(50) DEFAULT NULL,
  `update_time` varchar(50) DEFAULT NULL,
  `fid` int(100) DEFAULT NULL COMMENT '火化炉编号',
  `subscribedate` date DEFAULT NULL COMMENT '火化实际开始时间',
  `farewelltime` varchar(255) DEFAULT NULL COMMENT '火化时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1868 DEFAULT CHARSET=utf8 COMMENT='火化表';

-- ----------------------------
-- Records of ky_cremation
-- ----------------------------

-- ----------------------------
-- Table structure for ky_dept
-- ----------------------------
DROP TABLE IF EXISTS `ky_dept`;
CREATE TABLE `ky_dept` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vcname` varchar(20) DEFAULT NULL COMMENT '部门名称',
  `vcdesc` text COMMENT '描述',
  `status` tinyint(2) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ky_dept
-- ----------------------------
INSERT INTO `ky_dept` VALUES ('1', '所办公室', '发通知1', '1', '1581051237', '1581055596');
INSERT INTO `ky_dept` VALUES ('2', '办公室', '收发通知', '1', '1581051436', null);

-- ----------------------------
-- Table structure for ky_finance
-- ----------------------------
DROP TABLE IF EXISTS `ky_finance`;
CREATE TABLE `ky_finance` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tid` int(11) DEFAULT NULL COMMENT '相关ID',
  `rid` int(11) DEFAULT NULL COMMENT '支付记录',
  `bid` int(11) DEFAULT NULL COMMENT '增补服务ID',
  `oid` int(11) NOT NULL COMMENT '逝者ID',
  `totalprice` decimal(10,2) DEFAULT NULL COMMENT '总价',
  `inlet` int(5) DEFAULT NULL COMMENT ' 1接运 2.服务大厅财务 9餐饮, 30:寄存',
  `state` tinyint(4) DEFAULT '1' COMMENT '财务类型',
  `paytype` varchar(100) DEFAULT NULL COMMENT '付款方式',
  `payname` varchar(50) DEFAULT NULL COMMENT '付款人',
  `paytime` int(11) DEFAULT NULL COMMENT '付款时间',
  `signature` text COMMENT '签字',
  `ifsignature` tinyint(2) DEFAULT '0' COMMENT '0未签字  1已签字',
  `operator` varchar(50) DEFAULT NULL COMMENT '操作人',
  `ispay` tinyint(3) DEFAULT NULL COMMENT '结算状态，1:未结算  2:已结算，',
  `billno` varchar(50) DEFAULT NULL COMMENT '发票号码',
  `status` tinyint(4) DEFAULT '1' COMMENT '1:未结算  2:已结算',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6099 DEFAULT CHARSET=utf8 COMMENT='财务表';

-- ----------------------------
-- Records of ky_finance
-- ----------------------------

-- ----------------------------
-- Table structure for ky_finance_derate
-- ----------------------------
DROP TABLE IF EXISTS `ky_finance_derate`;
CREATE TABLE `ky_finance_derate` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `oid` int(11) DEFAULT NULL COMMENT '主表ID',
  `oneprice` decimal(10,2) DEFAULT NULL COMMENT '普通火化，遗体消毒费',
  `twoprice` decimal(10,2) DEFAULT NULL COMMENT '三日内普通冷藏费',
  `threeprice` decimal(10,2) DEFAULT NULL COMMENT '遗体接运费',
  `fourprice` decimal(10,2) DEFAULT NULL,
  `totalprice` decimal(10,2) DEFAULT NULL COMMENT '总价',
  `operator` varchar(255) DEFAULT NULL COMMENT '操作人',
  `signature` text COMMENT '签字',
  `ifsignature` tinyint(4) DEFAULT '0' COMMENT '0未签 1已签',
  `papers` varchar(255) DEFAULT NULL COMMENT '证件编号',
  `status` tinyint(4) DEFAULT '1' COMMENT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `objecttype` varchar(20) DEFAULT NULL COMMENT ' 减免对象',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ky_finance_derate
-- ----------------------------

-- ----------------------------
-- Table structure for ky_furnace
-- ----------------------------
DROP TABLE IF EXISTS `ky_furnace`;
CREATE TABLE `ky_furnace` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL COMMENT '名称',
  `oil` int(11) DEFAULT NULL COMMENT '油量',
  `status` tinyint(4) DEFAULT '1' COMMENT '0 维修 1空闲 2使用中',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ky_furnace
-- ----------------------------
INSERT INTO `ky_furnace` VALUES ('1', '1号', '21', '1', '1569040806', '1582287035');
INSERT INTO `ky_furnace` VALUES ('2', '2号', '21', '1', '1569040806', '1581666108');
INSERT INTO `ky_furnace` VALUES ('3', '3号', '9', '1', '1569040806', '1580957189');
INSERT INTO `ky_furnace` VALUES ('4', '4号', '9', '1', '1569040806', '1580796064');

-- ----------------------------
-- Table structure for ky_img
-- ----------------------------
DROP TABLE IF EXISTS `ky_img`;
CREATE TABLE `ky_img` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `oid` int(11) DEFAULT NULL COMMENT '死者ID',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `path` varchar(255) DEFAULT NULL COMMENT '文件保存的路径',
  `url` varchar(255) DEFAULT NULL COMMENT '远程地址',
  `sha1` varchar(50) DEFAULT NULL COMMENT '文件 sha1编码 （可以防止重复上传）',
  `img` mediumtext COMMENT '图片内容 base64编码的图片',
  `remark` text COMMENT '备注',
  `status` tinyint(3) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ky_img
-- ----------------------------

-- ----------------------------
-- Table structure for ky_locker
-- ----------------------------
DROP TABLE IF EXISTS `ky_locker`;
CREATE TABLE `ky_locker` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL COMMENT '寄存柜编号',
  `room` int(10) DEFAULT NULL COMMENT '室',
  `chest` int(10) DEFAULT NULL COMMENT '柜',
  `ix` int(5) DEFAULT NULL COMMENT '排',
  `iy` int(5) DEFAULT NULL COMMENT '号',
  `oid` int(100) DEFAULT NULL COMMENT '逝者编号',
  `usestate` tinyint(3) DEFAULT NULL COMMENT '1:空置 2:使用',
  `endday` date DEFAULT NULL COMMENT '到期日期',
  `vcdesc` text COMMENT '描述',
  `status` tinyint(3) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ky_locker
-- ----------------------------
INSERT INTO `ky_locker` VALUES ('1', '1231', '23123', '123', '12', '14', '100', '2', '2020-01-02', '1', '1', '1581059443', '1581061351');
INSERT INTO `ky_locker` VALUES ('2', '1号柜', '1', '10', '1', '1', '0', '1', '0000-00-00', '寄存柜1231', '1', '1581059468', null);
INSERT INTO `ky_locker` VALUES ('4', '123111111', '12311', '11111', '121111', '1111', '0', '1', null, '12311111', '1', '1581312463', '1581312476');

-- ----------------------------
-- Table structure for ky_manager
-- ----------------------------
DROP TABLE IF EXISTS `ky_manager`;
CREATE TABLE `ky_manager` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userno` varchar(20) DEFAULT '' COMMENT '员工编码',
  `nickname` varchar(20) DEFAULT '' COMMENT '昵称',
  `realname` varchar(20) DEFAULT '' COMMENT '真实姓名',
  `username` varchar(20) DEFAULT '' COMMENT '登录名称',
  `password` char(32) DEFAULT '' COMMENT '密码',
  `email` varchar(20) DEFAULT '' COMMENT '邮箱',
  `mobile` char(11) DEFAULT '' COMMENT '手机号',
  `branch` int(11) unsigned DEFAULT NULL COMMENT '角色D',
  `deptid` int(11) DEFAULT NULL COMMENT '部门表',
  `icard_no` varchar(20) DEFAULT '' COMMENT '身份证号码',
  `sex` varchar(2) DEFAULT '' COMMENT '性别',
  `grade_id` int(11) unsigned DEFAULT NULL COMMENT '岗位ID',
  `grade_name` varchar(20) DEFAULT '' COMMENT '岗位名称',
  `openid` varchar(255) DEFAULT NULL COMMENT '微信openid',
  `office` varchar(50) DEFAULT '' COMMENT '办公地址',
  `update_time` int(11) unsigned DEFAULT NULL COMMENT '更新时间',
  `create_time` int(11) unsigned DEFAULT NULL COMMENT '注册时间',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态:1:正常,2:禁用',
  `is_inside` tinyint(1) unsigned DEFAULT '1' COMMENT '是否为后台使用者',
  `is_business` tinyint(1) unsigned DEFAULT '0' COMMENT '是否是业务人员',
  `isadmin` tinyint(1) unsigned DEFAULT '0' COMMENT '是否是超级管理员',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8 COMMENT='员工表';

-- ----------------------------
-- Records of ky_manager
-- ----------------------------
INSERT INTO `ky_manager` VALUES ('103', '', '', '超级管理员', 'admin', '14e1b600b1fd579f47433b88e8d85291', '', '13117286095', '1', '1', '', '男', null, '', null, '', '1581313357', null, '1', '1', '0', '1');
INSERT INTO `ky_manager` VALUES ('104', '', '', '1231', '123', '14e1b600b1fd579f47433b88e8d85291', '', '123123', '33', '2', '', '男', null, '', null, '', '1581313527', '1581313417', '1', '1', '0', '0');
INSERT INTO `ky_manager` VALUES ('105', '', '', '', '王凌', '14e1b600b1fd579f47433b88e8d85291', '', '', '1', '2', '', '男', null, '', null, '', '1582331454', '1582331454', '1', '1', '0', '0');
INSERT INTO `ky_manager` VALUES ('106', '', '', '', 'zhouqin', 'cdb2ab8f7b40341620970b58408e77a5', '', '', '34', '2', '', '女', null, '', null, '', '1582333786', '1582333753', '1', '1', '0', '0');

-- ----------------------------
-- Table structure for ky_mourn
-- ----------------------------
DROP TABLE IF EXISTS `ky_mourn`;
CREATE TABLE `ky_mourn` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL COMMENT '名称',
  `price` decimal(10,2) NOT NULL COMMENT '价格',
  `unit` varchar(50) NOT NULL COMMENT '单位',
  `type` tinyint(4) DEFAULT '1',
  `cover_id` int(11) DEFAULT '0',
  `status` tinyint(4) DEFAULT '1',
  `state` tinyint(4) DEFAULT '0' COMMENT '1为占用',
  `rid` int(11) DEFAULT '0',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `iorder` int(3) DEFAULT NULL COMMENT '显示顺序',
  `area` int(3) DEFAULT NULL COMMENT '大厅面积',
  `is_vigil` tinyint(3) DEFAULT NULL COMMENT '1：准许守灵 0：不准许',
  `is_leave` tinyint(3) DEFAULT NULL COMMENT '1：准许告别 0：不准许',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of ky_mourn
-- ----------------------------
INSERT INTO `ky_mourn` VALUES ('39', '承福堂', '1.00', '元/天', '1', '0', '1', '0', '0', '1582281308', '1582289020', null, null, null, null);
INSERT INTO `ky_mourn` VALUES ('40', '载福堂', '1.00', '元/天', '1', '0', '1', '0', '0', '1582281323', '1582293106', null, null, null, null);
INSERT INTO `ky_mourn` VALUES ('41', '佑福堂', '1.00', '元/天', '1', '0', '1', '0', '0', '1582281349', null, null, null, null, null);
INSERT INTO `ky_mourn` VALUES ('42', '传福堂', '1.00', '元/天', '1', '0', '1', '0', '0', '1582281367', null, null, null, null, null);
INSERT INTO `ky_mourn` VALUES ('43', '贻福堂', '1.00', '元/天', '1', '0', '1', '0', '0', '1582281390', '1582293106', null, null, null, null);

-- ----------------------------
-- Table structure for ky_obituary
-- ----------------------------
DROP TABLE IF EXISTS `ky_obituary`;
CREATE TABLE `ky_obituary` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `serial` varchar(255) NOT NULL COMMENT '业务编号',
  `name` varchar(50) NOT NULL COMMENT '逝者姓名',
  `sex` char(10) DEFAULT NULL COMMENT '性别',
  `age` int(11) DEFAULT NULL COMMENT '年龄',
  `dateofbirth` date DEFAULT NULL COMMENT '出生日期',
  `nation` varchar(50) DEFAULT NULL COMMENT '民族',
  `reason` varchar(100) DEFAULT NULL COMMENT '去世原因',
  `dietime` varchar(100) DEFAULT NULL COMMENT '死亡时间',
  `dieaddress` varchar(50) DEFAULT NULL COMMENT '去世地址',
  `card` char(20) DEFAULT NULL COMMENT '身份证号码',
  `registered` varchar(100) DEFAULT NULL COMMENT '户籍所在地',
  `linkman` varchar(50) DEFAULT NULL COMMENT '经办人',
  `relation` varchar(50) DEFAULT NULL COMMENT '关系',
  `linkphone` char(15) DEFAULT NULL COMMENT '联系电话',
  `linksex` varchar(10) DEFAULT NULL COMMENT '联系人性别',
  `linkaddress` varchar(50) DEFAULT NULL,
  `linkcard` char(20) DEFAULT NULL COMMENT '家属身份证',
  `linkage` varchar(30) DEFAULT NULL COMMENT '联系人年龄',
  `cinderaddress` varchar(100) DEFAULT NULL COMMENT '骨灰去向',
  `operator` varchar(255) DEFAULT NULL COMMENT '操作人',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `starttime` varchar(50) DEFAULT NULL COMMENT '服务开始时间',
  `endtime` varchar(50) DEFAULT NULL COMMENT '服务结束时间',
  `farewelltime` date DEFAULT NULL COMMENT '告别时间',
  `ifcheck` tinyint(2) DEFAULT '0' COMMENT '0取出  1寄存',
  `servertype` tinyint(4) DEFAULT '0' COMMENT '1.冰冻 2守灵 3火化',
  `unknown` tinyint(4) DEFAULT '0' COMMENT '0否 1是',
  `signature` mediumtext COMMENT '签字',
  `ifsignature` tinyint(4) DEFAULT '0' COMMENT '0未签字  1已签字',
  `signtime` int(255) DEFAULT NULL COMMENT '签字时间',
  `object` varchar(255) DEFAULT NULL COMMENT '对象类型',
  `state` tinyint(4) DEFAULT '1' COMMENT '执行进度',
  `status` tinyint(4) DEFAULT '1',
  `qrcode` text COMMENT '二维码',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `goods` varchar(50) DEFAULT NULL COMMENT '贵重物品',
  `source` tinyint(3) DEFAULT NULL COMMENT '信息来源：1:大厅录入，火化的数据 ，2：骨灰寄存的来源，3：接运录入',
  `deadstatus` int(5) DEFAULT NULL COMMENT '遗体状态：1：正常 2：腐败  3：难处（大），4：难处（小）',
  `coldID` int(5) DEFAULT NULL COMMENT '冷藏柜编号',
  `ispay` tinyint(3) DEFAULT NULL COMMENT '付款状态。1：待付款。2已付款',
  `islight` tinyint(3) DEFAULT NULL COMMENT '是否有灵柩点灯 1：是 0：否 ',
  `receivehrm` varchar(50) DEFAULT NULL COMMENT '接收人员',
  `tomb` varchar(50) DEFAULT NULL COMMENT '墓号。当选择公墓的时候，设置墓号',
  `firecard` varchar(50) DEFAULT NULL COMMENT '火化证号',
  `burydate` date DEFAULT NULL COMMENT '安葬日期',
  `flowernote` varchar(255) DEFAULT NULL COMMENT '鲜花备注',
  `boxnote` varchar(255) DEFAULT NULL COMMENT '骨灰盒备注',
  `house` varchar(255) DEFAULT NULL COMMENT '户口',
  `dpxh` varchar(255) DEFAULT NULL COMMENT '大屏显示的序号  这是夷陵区特殊要求的，并不一定用',
  `deadcheck` tinyint(3) DEFAULT NULL COMMENT '0:无尸检 1:有尸检',
  `deadic` varchar(255) DEFAULT NULL COMMENT '死亡证明',
  `nonumber` tinyint(2) DEFAULT NULL COMMENT '''0 正常 1不进行编号  ''',
  `basic` tinyint(2) DEFAULT NULL COMMENT '低保类型',
  `nature` tinyint(2) DEFAULT NULL COMMENT '0,悼念厅，1馆外',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2263 DEFAULT CHARSET=utf8 COMMENT='逝者信息表';

-- ----------------------------
-- Records of ky_obituary
-- ----------------------------
INSERT INTO `ky_obituary` VALUES ('2262', '202002220001', '测试', '', '0', null, '汉', '', '', null, '', '', '', '', '', '', '', '', null, null, '超级管理员', '', '', null, '0000-00-00', '2', '1', '0', null, '0', null, null, '6', '1', null, '1582338960', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '1', '1');

-- ----------------------------
-- Table structure for ky_obituary_record
-- ----------------------------
DROP TABLE IF EXISTS `ky_obituary_record`;
CREATE TABLE `ky_obituary_record` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tid` int(11) DEFAULT NULL COMMENT '关联ID',
  `oid` int(11) DEFAULT NULL COMMENT '逝者ID',
  `title` varchar(50) DEFAULT NULL COMMENT '名称',
  `price` decimal(10,2) DEFAULT NULL COMMENT '单价',
  `startime` varchar(50) DEFAULT NULL COMMENT '开始时间',
  `endtime` varchar(50) DEFAULT NULL COMMENT '结束时间',
  `type` tinyint(2) DEFAULT '1' COMMENT '1.悼念厅 2冷柜',
  `sub` tinyint(4) DEFAULT '0' COMMENT '0.正常  1.被替换',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `hours` varchar(255) DEFAULT NULL COMMENT '小时',
  `operator` varchar(255) DEFAULT NULL COMMENT '操作人',
  `status` tinyint(4) DEFAULT '1' COMMENT '1.使用中  2结束使用',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3646 DEFAULT CHARSET=utf8 COMMENT='配套服务记录';

-- ----------------------------
-- Records of ky_obituary_record
-- ----------------------------

-- ----------------------------
-- Table structure for ky_restaurant
-- ----------------------------
DROP TABLE IF EXISTS `ky_restaurant`;
CREATE TABLE `ky_restaurant` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `oid` int(11) DEFAULT NULL COMMENT '服务ID',
  `remark` text COMMENT '备注',
  `signature` mediumtext COMMENT '签字',
  `ifsignature` tinyint(3) DEFAULT NULL COMMENT '0未签  1已签',
  `signtime` int(11) DEFAULT '1' COMMENT '签字时间',
  `operator` varchar(4) DEFAULT NULL COMMENT '操作人',
  `state` tinyint(5) DEFAULT NULL COMMENT '''1未结算，2已结算',
  `status` tinyint(2) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=709 DEFAULT CHARSET=utf8 COMMENT='殡葬用品管理';

-- ----------------------------
-- Records of ky_restaurant
-- ----------------------------

-- ----------------------------
-- Table structure for ky_services
-- ----------------------------
DROP TABLE IF EXISTS `ky_services`;
CREATE TABLE `ky_services` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL COMMENT '服务名称',
  `price` decimal(10,2) DEFAULT NULL COMMENT '单价',
  `unit` char(10) DEFAULT NULL COMMENT '单位',
  `deptid` int(11) DEFAULT NULL COMMENT '负责部门',
  `type` tinyint(2) DEFAULT '5' COMMENT '服务类型\r\n1.接运服务\r\n2.礼厅服务\r\n3.火化服务\r\n4.殡葬用品\r\n5.其他服务\r\n',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `iorder` int(11) DEFAULT '0' COMMENT '排序',
  `servertype` tinyint(2) DEFAULT NULL COMMENT '单据类型',
  `images` text COMMENT '图片',
  `star` varchar(50) DEFAULT NULL COMMENT '起始',
  `end` varchar(50) DEFAULT NULL COMMENT '止日期',
  `status` tinyint(4) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `costprice` decimal(10,2) DEFAULT NULL COMMENT '成本价',
  `factory` varchar(50) DEFAULT NULL COMMENT '厂家',
  `pricetype` tinyint(3) DEFAULT NULL COMMENT '1: 政府定价 2：政府指导价 3：商品定价',
  `isauto` tinyint(3) DEFAULT NULL COMMENT '0:选择 1：自动获取，不显示 ，系统自动根据servietype 来处理',
  `servietype` tinyint(3) DEFAULT NULL COMMENT '0:无无1：守灵费用 2：冷藏  3：告别',
  `mournID` int(5) DEFAULT NULL COMMENT '厅的ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=373 DEFAULT CHARSET=utf8 COMMENT='服务表';

-- ----------------------------
-- Records of ky_services
-- ----------------------------
INSERT INTO `ky_services` VALUES ('351', '接运服务', '200.00', '元/次', '2', '1', '', '0', null, null, null, null, '1', '1582281752', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('352', '抬尸费', '300.00', '元/次', '2', '1', '', '0', null, null, null, null, '1', '1582281798', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('353', '尸袋', '80.00', '元/个', '2', '1', '', '0', null, null, null, null, '1', '1582281831', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('354', '整容化妆缝合', '150.00', '元/具', '0', '2', '', '0', null, null, null, null, '1', '1582281849', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('355', '悼念厅租用', '500.00', '元/天', '2', '2', '', '0', null, null, null, null, '1', '1582281867', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('356', '冷藏棺租用', '0.00', '/小时', '2', '2', '', '0', null, null, null, null, '1', '1582281885', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('357', '纸棺', '380.00', '元/个', '2', '2', '', '0', null, null, null, null, '1', '1582281920', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('358', '消毒费', '80.00', '元/具', '2', '3', '', '0', null, null, null, null, '1', '1582281940', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('359', '金刚', '400.00', '元/次', '2', '2', '', '0', null, null, null, null, '1', '1582281955', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('360', '司仪服务', '600.00', '元/次', '2', '2', '', '0', null, null, null, null, '1', '1582281994', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('361', '平板炉', '300.00', '元/具', '2', '3', '', '0', null, null, null, null, '1', '1582282012', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('362', '拣灰炉', '900.00', '元/具', '0', '3', '', '0', null, null, null, null, '1', '1582282029', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('363', '平板炉寿垫', '200.00', '元/个', '0', '3', '', '0', null, null, null, null, '1', '1582282055', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('364', '骨灰盒封膜', '50.00', '元/次', '2', '3', '', '0', null, null, null, null, '1', '1582282076', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('365', '电子鞭炮', '50.00', '元/次', '2', '3', '', '0', null, null, null, null, '1', '1582282096', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('366', '平安盒', '100.00', '元/个', '2', '4', '', '0', null, null, null, null, '1', '1582282128', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('367', '帝皇棺', '580.00', '元/个', '0', '4', '', '0', null, null, null, null, '1', '1582282161', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('368', '蝴蝶棺', '380.00', '元/个', '0', '4', '', '0', null, null, null, null, '1', '1582282178', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('369', '袜子', '15.00', '元/对', '0', '4', '', '0', null, null, null, null, '1', '1582282247', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('370', '鲜花', '180.00', '元/个', '0', '5', '', '0', null, null, null, null, '1', '1582282275', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('371', '花篮', '200.00', '元/个', '2', '5', '', '0', null, null, null, null, '1', '1582282290', null, null, null, null, null, null, null);
INSERT INTO `ky_services` VALUES ('372', '简易花圈', '50.00', '元/个', '2', '5', '', '0', null, null, null, null, '1', '1582282312', null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for ky_servicesorder
-- ----------------------------
DROP TABLE IF EXISTS `ky_servicesorder`;
CREATE TABLE `ky_servicesorder` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `fid` int(11) DEFAULT NULL COMMENT '财务主表ID',
  `oid` int(11) DEFAULT NULL COMMENT '逝者信息ID',
  `tid` int(11) DEFAULT NULL,
  `bid` int(11) DEFAULT NULL COMMENT '增补服务ID',
  `sid` int(11) DEFAULT NULL COMMENT '服务表ID',
  `cid` int(11) DEFAULT NULL COMMENT '套餐ID',
  `inlet` tinyint(4) DEFAULT NULL COMMENT '服务入口',
  `type` tinyint(4) DEFAULT '0' COMMENT '服务类型',
  `title` varchar(100) DEFAULT NULL COMMENT '服务名称',
  `price` decimal(10,2) DEFAULT NULL COMMENT '购买价格',
  `number` varchar(50) DEFAULT NULL COMMENT '服务次数',
  `totalprice` decimal(10,2) DEFAULT NULL COMMENT '总价',
  `starttime` int(11) DEFAULT NULL COMMENT '开始时间',
  `endtime` int(11) DEFAULT NULL COMMENT '结束时间',
  `state` tinyint(255) DEFAULT '1' COMMENT '服务状态 1待签收 2已签收 3待完成 4已完成',
  `pay` tinyint(2) DEFAULT '0' COMMENT '0未结算  1结算',
  `maketime` varchar(50) DEFAULT NULL COMMENT '预约时间',
  `operator` varchar(100) DEFAULT NULL COMMENT '操作人',
  `status` tinyint(2) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `costprice` decimal(10,2) DEFAULT NULL COMMENT '结束时间',
  `isauto` tinyint(2) DEFAULT NULL COMMENT '0:选择 1：自动计算',
  `task` varchar(500) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37309 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ky_servicesorder
-- ----------------------------
INSERT INTO `ky_servicesorder` VALUES ('37307', null, '2262', '0', null, '351', '0', '2', '1', '接运服务', '200.00', '1', '200.00', null, null, '1', '0', null, '超级管理员', '1', '1582338960', null, null, null, '');
INSERT INTO `ky_servicesorder` VALUES ('37308', null, '2262', '0', null, '354', '0', '2', '2', '整容化妆缝合', '150.00', '1', '150.00', null, null, '1', '0', null, '超级管理员', '1', '1582338960', null, null, null, '');

-- ----------------------------
-- Table structure for ky_services_combo
-- ----------------------------
DROP TABLE IF EXISTS `ky_services_combo`;
CREATE TABLE `ky_services_combo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL COMMENT '套餐名称',
  `price` decimal(10,2) DEFAULT NULL COMMENT '单价',
  `service` varchar(255) DEFAULT NULL COMMENT '服务项目',
  `vcnote` varchar(255) DEFAULT NULL COMMENT '描述',
  `status` tinyint(2) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1007 DEFAULT CHARSET=utf8 COMMENT='服务套餐表';

-- ----------------------------
-- Records of ky_services_combo
-- ----------------------------
INSERT INTO `ky_services_combo` VALUES ('1005', '小厅告别', '650.00', null, null, '1', '1582282364', null);
INSERT INTO `ky_services_combo` VALUES ('1006', '大厅告别', '1030.00', null, null, '1', '1582282375', null);

-- ----------------------------
-- Table structure for ky_services_comboorder
-- ----------------------------
DROP TABLE IF EXISTS `ky_services_comboorder`;
CREATE TABLE `ky_services_comboorder` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `oid` int(11) DEFAULT NULL COMMENT '逝者ID',
  `sid` int(11) DEFAULT NULL COMMENT '套餐ID',
  `title` varchar(50) DEFAULT NULL COMMENT '名称',
  `price` decimal(10,2) DEFAULT NULL COMMENT '单价',
  `number` int(11) DEFAULT NULL COMMENT '次数',
  `totalprice` decimal(10,2) DEFAULT NULL COMMENT '总价',
  `operator` varchar(50) DEFAULT NULL COMMENT '操作人',
  `pay` tinyint(4) DEFAULT '0' COMMENT '0未结算  1结算',
  `status` tinyint(4) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=216 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ky_services_comboorder
-- ----------------------------
INSERT INTO `ky_services_comboorder` VALUES ('208', '2247', '1004', '套餐1', '120.00', '1', '120.00', '超级管理员', '0', '-1', '1582268656', '1582269471');
INSERT INTO `ky_services_comboorder` VALUES ('209', '2247', '1004', '套餐1', '120.00', '1', '120.00', '超级管理员', '0', '-1', '1582269055', '1582269471');
INSERT INTO `ky_services_comboorder` VALUES ('210', '2247', '1004', '套餐1', '100.00', '1', '100.00', '超级管理员', '0', '-1', '1582269233', '1582269471');
INSERT INTO `ky_services_comboorder` VALUES ('211', '2247', '1004', '套餐1', '100.00', '1', '100.00', '超级管理员', '0', '-1', '1582269246', '1582269471');
INSERT INTO `ky_services_comboorder` VALUES ('212', '2247', '1004', '套餐1', '100.00', '1', '100.00', '超级管理员', '0', '-1', '1582269257', '1582269471');
INSERT INTO `ky_services_comboorder` VALUES ('213', '2247', '1004', '套餐1', '100.00', '1', '100.00', '超级管理员', '0', '-1', '1582269458', '1582269471');
INSERT INTO `ky_services_comboorder` VALUES ('214', '2247', '1004', '套餐1', '120.00', '1', '120.00', '超级管理员', '0', '1', '1582269471', null);
INSERT INTO `ky_services_comboorder` VALUES ('215', '2253', '1004', '套餐1', '120.00', '1', '120.00', '超级管理员', '1', '1', '1582271895', '1582272008');

-- ----------------------------
-- Table structure for ky_supplies
-- ----------------------------
DROP TABLE IF EXISTS `ky_supplies`;
CREATE TABLE `ky_supplies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `oid` int(11) DEFAULT NULL COMMENT '主表ID',
  `uid` int(11) DEFAULT NULL COMMENT '录入人',
  `sid` int(11) DEFAULT NULL COMMENT '殡葬用品服务ID',
  `price` decimal(10,2) DEFAULT NULL COMMENT '进价',
  `number` int(11) DEFAULT NULL COMMENT '进货数量',
  `totalprice` decimal(10,2) DEFAULT NULL COMMENT '总价',
  `type` tinyint(2) DEFAULT '1' COMMENT '1入库  2出库',
  `inlet` tinyint(4) DEFAULT NULL COMMENT '入口',
  `status` tinyint(2) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=709 DEFAULT CHARSET=utf8 COMMENT='殡葬用品管理';

-- ----------------------------
-- Records of ky_supplies
-- ----------------------------

-- ----------------------------
-- Table structure for ky_wreath
-- ----------------------------
DROP TABLE IF EXISTS `ky_wreath`;
CREATE TABLE `ky_wreath` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sid` int(11) DEFAULT NULL COMMENT '殡葬用品服务ID',
  `price` decimal(10,2) DEFAULT NULL COMMENT '进价',
  `number` int(11) DEFAULT NULL COMMENT '进货数量',
  `totalprice` decimal(10,2) DEFAULT NULL COMMENT '总价',
  `type` tinyint(2) DEFAULT '1' COMMENT '1入库  2出库',
  `operator` varchar(4) DEFAULT NULL COMMENT '操作人',
  `status` tinyint(2) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=709 DEFAULT CHARSET=utf8 COMMENT='殡葬用品管理';

-- ----------------------------
-- Records of ky_wreath
-- ----------------------------
