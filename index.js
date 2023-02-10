import { NativeModules} from 'react-native';

const { RNTechlabTrackModule, RNSensorsDataModule } = NativeModules;

const SAAutoTrackType = {
  START : 1,
  END : 2,
  CLICK : 4,
  VIEW_SCREEN : 8
}
/**
 * 登录
 *
 * @param loginId
 */
function login (loginId) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.login &&
    RNTechlabTrackModule.login(loginId);
}

/**
 * 退出登录
 */
function logout () {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.logout &&
    RNTechlabTrackModule.logout();
}

/**
 * 设置用户属性
 *
 * @param profile 类型 {}
 * Sex
 * Age
 */
function profileSet (profile) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.profileSet &&
    RNTechlabTrackModule.profileSet(profile);
}

/**
 * 记录初次设定的属性
 *
 * @param profile 类型 {}
 */
function profileSetOnce (profile) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.profileSetOnce &&
    RNTechlabTrackModule.profileSetOnce(profile);
}


/**
 * 追踪事件
 *
 * @param event 事件名称，类型 String
 * @param properties 事件属性，类型 {}
 */
function track (event, properties) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.track &&
    RNTechlabTrackModule.track(event, properties);
}

/**
 * 事件开始
 *
 * @param event 事件名称，类型 String
 */
function trackTimerStart (event) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.trackTimerStart &&
    RNTechlabTrackModule.trackTimerStart(event);
}

/**
 * 事件结束
 *
 * @param event 事件名称，类型 String
 * @param properties 事件属性，类型 {}
 */
function trackTimerEnd (event, properties) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.trackTimerEnd &&
    RNTechlabTrackModule.trackTimerEnd(event, properties);
}

/**
 * 清除所有事件计时器
 */
function clearTrackTimer(){
  RNTechlabTrackModule &&
    RNTechlabTrackModule.clearTrackTimer &&
    RNTechlabTrackModule.clearTrackTimer();
}

/**
 * 用于记录首次安装激活、渠道追踪的事件.
 *
 * @param eventName 事件名称，类型 String
 * @param properties 事件属性，类型 {}
 */
function trackInstallation(eventName, properties){
  RNTechlabTrackModule &&
    RNTechlabTrackModule.trackInstallation &&
    RNTechlabTrackModule.trackInstallation(eventName, properties);
}

/**
 * 切换页面的时候调用，用于记录 $AppViewScreen 事件..
 *
 * @param url 类型 String
 * @param properties 事件属性，类型 {}
 */
function trackViewScreen(url, properties){
  RNTechlabTrackModule &&
    RNTechlabTrackModule.trackViewScreen &&
    RNTechlabTrackModule.trackViewScreen(url, properties);
}

/**
 * 给一个数值类型的 Profile 增加一个数值. 只能对数值型属性进行操作，若该属性
 * 未设置，则添加属性并设置默认值为 0.
 *
 * @param property 属性名称，类型 String
 * @param value 属性值，类型 Number
 */
function profileIncrement (property, value) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.profileIncrement &&
    RNTechlabTrackModule.profileIncrement(property, value);
}

/**
 * 给一个列表类型的 Profile 增加一个元素.
 *
 * @param property 属性名称，类型 String
 * @param strList 属性值，类型 []
 */
function profileAppend (property, strList) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.profileAppend &&
    RNTechlabTrackModule.profileAppend(property, strList);
}

/**
 * 删除用户的一个 Profile.
 *
 * @param property 属性名称，类型 String
 */
function profileUnset (property) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.profileUnset &&
    RNTechlabTrackModule.profileUnset(property);
}

/**
 * 删除用户所有 Profile.
 */
function profileDelete () {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.profileDelete &&
    RNTechlabTrackModule.profileDelete();
}

/**
 * Promise 方式，获取 distinctId
 */
async function getDistinctIdPromise (){
  if(RNTechlabTrackModule && RNTechlabTrackModule.getDistinctIdPromise){
    try{
      return await RNTechlabTrackModule.getDistinctIdPromise();
    }catch(e){
   	  console.log(e);
   	}
  }
}

/**
 * Promise 方式 getAnonymousId 获取匿名 ID.
 */
async function getAnonymousIdPromise () {
  if(RNTechlabTrackModule && RNTechlabTrackModule.getAnonymousIdPromise){
    try{
      return await RNTechlabTrackModule.getAnonymousIdPromise();
    }catch(e){
   	  console.log(e);
   	}
  }
}

/**
 * 设置的公共属性
 *
 * @param properties 公共属性，类型 {}
 */
function registerSuperProperties (properties) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.registerSuperProperties &&
    RNTechlabTrackModule.registerSuperProperties(properties);
}

/**
 * 删除某个公共属性
 *
 * @param property 要删除的公共属性属性名称，类型 String
 */
function unregisterSuperProperty (property) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.unregisterSuperProperty &&
    RNTechlabTrackModule.unregisterSuperProperty(property);
}

/**
 * 删除所有公共属性
 */
function clearSuperProperties () {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.clearSuperProperties &&
    RNTechlabTrackModule.clearSuperProperties();
}

/**
 * 强制发送数据到服务端
 */
function flush () {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.flush &&
    RNTechlabTrackModule.flush();
}

/**
 * 删除本地数据库的所有数据！！！请谨慎使用
 */
function deleteAll () {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.deleteAll &&
    RNTechlabTrackModule.deleteAll();
}

/**
 * 替换“匿名 ID”
 *
 * @param anonymousId 传入的的匿名 ID，仅接受数字、下划线和大小写字母，类型 String
 */
function identify (anonymousId) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.identify &&
    RNTechlabTrackModule.identify(anonymousId);
}
/**
 * 导出 trackTimerPause 方法给 RN 使用.
 *
 * <p>暂停事件计时器，计时单位为秒。
 *
 * @param eventName 事件的名称
 */
function trackTimerPause(eventName) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.trackTimerPause &&
    RNTechlabTrackModule.trackTimerPause(eventName);
}

/**
 * 导出 trackTimerResume 方法给 RN 使用.
 *
 * <p>恢复事件计时器，计时单位为秒。
 *
 * @param eventName 事件的名称
 */
function trackTimerResume(eventName) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.trackTimerResume &&
    RNTechlabTrackModule.trackTimerResume(eventName);
}

/**
 * 保存用户推送 ID 到用户表
 *
 * @param pushTypeKey 属性名称（例如 jgId）
 * @param pushId 推送 ID
 *     <p>使用 profilePushId("jgId", pushId) 例如极光 pushId
 *     获取方式：JPushModule.getRegistrationID(callback)
 */
function profilePushId(pushTypeKey, pushId) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.profilePushId &&
    RNTechlabTrackModule.profilePushId(pushTypeKey, pushId);
}

/**
 * 删除用户设置的 pushId
 *
 * @param pushTypeKey 属性名称（例如 jgId）
 */
function profileUnsetPushId(pushTypeKey) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.profileUnsetPushId &&
    RNTechlabTrackModule.profileUnsetPushId(pushTypeKey);
}

/**
 * 重置默认匿名 id
 */
function resetAnonymousId() {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.resetAnonymousId &&
    RNTechlabTrackModule.resetAnonymousId();
}

/**
 * 设置当前 serverUrl
 *
 * @param serverUrl 当前 serverUrl
 */
function setServerUrl(serverUrl) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.setServerUrl &&
    RNTechlabTrackModule.setServerUrl(serverUrl);
}

/**
 * 设置 item
 *
 * @param itemType item 类型
 * @param itemId item ID
 * @param properties item 相关属性
 */
function itemSet(itemType, itemId, properties) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.itemSet &&
    RNTechlabTrackModule.itemSet(itemType, itemId, properties);
}

/**
 * 删除 item
 *
 * @param itemType item 类型
 * @param itemId item ID
 */
function itemDelete(itemType, itemId) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.itemDelete &&
    RNTechlabTrackModule.itemDelete(itemType, itemId);
}

/**
 * 获取事件公共属性
 */
async function getSuperPropertiesPromise() {
  if (RNTechlabTrackModule && RNTechlabTrackModule.getSuperPropertiesPromise) {
    try{
      return await RNTechlabTrackModule.getSuperPropertiesPromise();
    }catch(e){
   	  console.log(e);
   	}
  }
}

/**
 * 返回预置属性
 */
async function getPresetPropertiesPromise() {
  if (RNTechlabTrackModule && RNTechlabTrackModule.getPresetPropertiesPromise) {
    try{
      return await RNTechlabTrackModule.getPresetPropertiesPromise();
    }catch(e){
   	  console.log(e);
   	}
  }
}

/**
 * 获取当前用户的 loginId 若调用前未调用 {@link #login(String)} 设置用户的 loginId，会返回 null
 *
 * @return 当前用户的 loginId
 */
async function getLoginIdPromise() {
  if (RNTechlabTrackModule && RNTechlabTrackModule.getLoginIdPromise) {
    try{
      return await RNTechlabTrackModule.getLoginIdPromise();
    }catch(e){
   	  console.log(e);
   	}
  }
}

/**
 * 是否开启 AutoTrack
 *
 * @return true: 开启 AutoTrack; false：没有开启 AutoTrack
 */
async function isAutoTrackEnabledPromise() {
  if (RNTechlabTrackModule && RNTechlabTrackModule.isAutoTrackEnabledPromise) {
	try{
	  return await RNTechlabTrackModule.isAutoTrackEnabledPromise();
	}catch(e){
	  console.log(e);
	}
  }
}

/**
 * 是否开启可视化全埋点
 *
 * @return true 代表开启了可视化全埋点， false 代表关闭了可视化全埋点
 */
async function isVisualizedAutoTrackEnabledPromise() {
  if (RNTechlabTrackModule && RNTechlabTrackModule.isVisualizedAutoTrackEnabledPromise) {
    try{
      return await RNTechlabTrackModule.isVisualizedAutoTrackEnabledPromise();
    }catch(e){
   	  console.log(e);
   	}
  }
}

/**
 * 是否开启点击图
 *
 * @return true 代表开启了点击图，false 代表关闭了点击图
 */
async function isHeatMapEnabledPromise() {
  if (RNTechlabTrackModule && RNTechlabTrackModule.isHeatMapEnabledPromise) {
    try{
      return await RNTechlabTrackModule.isHeatMapEnabledPromise();
    }catch(e){
   	  console.log(e);
   	}
  }
}

/**
 * 设置 flush 时网络发送策略，默认 3G、4G、WI-FI 环境下都会尝试 flush
 * TYPE_NONE = 0;//NULL
 * TYPE_2G = 1;//2G
 * TYPE_3G = 1 << 1;//3G 2
 * TYPE_4G = 1 << 2;//4G 4
 * TYPE_WIFI = 1 << 3;//WIFI 8
 * TYPE_5G = 1 << 4;//5G 16
 * TYPE_ALL = 0xFF;//ALL 255
 * 例：若需要开启 4G 5G 发送数据，则需要设置 4 + 16 = 20
 */

function setFlushNetworkPolicy(networkType) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.setFlushNetworkPolicy &&
    RNTechlabTrackModule.setFlushNetworkPolicy(networkType);
}

/**
 * 记录 $AppInstall 事件，用于在 App 首次启动时追踪渠道来源，并设置追踪渠道事件的属性。
 * 这是 Sensors Analytics 进阶功能，请参考文档 https://sensorsdata.cn/manual/track_installation.html
 *
 * @param properties 渠道追踪事件的属性
 */
function trackAppInstall(properties) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.trackAppInstall &&
    RNTechlabTrackModule.trackAppInstall(properties);
}

function registerDynamicSuperProperties() {
  var dynamicProxy = {};
  RNSensorsDataModule && RNSensorsDataModule.registerDynamicPlugin && RNSensorsDataModule.registerDynamicPlugin();
  try {
    Object.defineProperty(dynamicProxy,'properties', {
      set: function (value) {
        if (typeof value === 'object') {
          RNSensorsDataModule && RNSensorsDataModule.setDynamicSuperProperties && RNSensorsDataModule.setDynamicSuperProperties(value);
        }
      }
  });
  } catch (e) {
    console.log(e)
  }
  return dynamicProxy;
}

function bind(key, value){
      RNTechlabTrackModule &&
        RNTechlabTrackModule.bind &&
        RNTechlabTrackModule.bind(key, value);
}

function unbind(key, value){
      RNTechlabTrackModule &&
        RNTechlabTrackModule.unbind &&
        RNTechlabTrackModule.unbind(key, value);
}

function init(config){
  RNTechlabTrackModule &&
    RNTechlabTrackModule.init &&
    RNTechlabTrackModule.init(config);
    RNSensorsDataModule && RNSensorsDataModule.registerDynamicPlugin && RNSensorsDataModule.registerDynamicPlugin();
}

/************** Android only start *****************/
/**
 * 设置 App 切换到后台与下次事件的事件间隔
 * 默认值为 30*1000 毫秒
 * 若 App 在后台超过设定事件，则认为当前 Session 结束，发送 $AppEnd 事件
 *
 * @param sessionIntervalTime int
 */
function setSessionIntervalTime(sessionIntervalTime) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.setSessionIntervalTime &&
    RNTechlabTrackModule.setSessionIntervalTime(sessionIntervalTime);
}

/**
 * 获取 App 切换到后台与下次事件的事件间隔时长设置
 * 默认值为 30*1000 毫秒
 * 若 App 在后台超过设定事件，则认为当前 Session 结束，发送 $AppEnd 事件
 *
 * @return 返回设置的 SessionIntervalTime ，默认是 30s
 */
async function getSessionIntervalTimePromise() {
  if (RNTechlabTrackModule && RNTechlabTrackModule.getSessionIntervalTimePromise) {
	try{
	  return await RNTechlabTrackModule.getSessionIntervalTimePromise();
	}catch(e){
	  console.log(e);
	}
  }
}

/**
 * 设置是否允许请求网络，默认是 true
 *
 * @param isRequest boolean
 */
function enableNetworkRequest(isRequest) {
  RNTechlabTrackModule &&
    RNTechlabTrackModule.enableNetworkRequest &&
    RNTechlabTrackModule.enableNetworkRequest(isRequest);
}

/**
 * 是否允许请求网络，默认是 true
 *
 * @return 是否允许请求网络
 */
async function isNetworkRequestEnablePromise() {
  if (RNTechlabTrackModule && RNTechlabTrackModule.isNetworkRequestEnablePromise) {
	try{
	  return await RNTechlabTrackModule.isNetworkRequestEnablePromise();
	}catch(e){
	  console.log(e);
	}
  }
}

/**
 * 开启数据采集
 */
function enableDataCollect(){
  RNTechlabTrackModule &&
    RNTechlabTrackModule.enableDataCollect &&
    RNTechlabTrackModule.enableDataCollect();
}

/************** Android only end *****************/
export {SAAutoTrackType}

export default {
  login,
  logout,
  profileSet,
  profileSetOnce,
  profileIncrement,
  profileAppend,
  profileUnset,
  profileDelete,
  track,
  trackTimerStart,
  trackTimerEnd,
  clearTrackTimer,
  trackInstallation,
  trackViewScreen,
  getDistinctIdPromise,
  getAnonymousIdPromise,
  registerSuperProperties,
  unregisterSuperProperty,
  clearSuperProperties,
  flush,
  deleteAll,
  identify,
  trackTimerPause,
  trackTimerResume,
  profilePushId,
  profileUnsetPushId,
  resetAnonymousId,
  setServerUrl,
  itemSet,
  itemDelete,
  getSuperPropertiesPromise,
  getPresetPropertiesPromise,
  getLoginIdPromise,
  setSessionIntervalTime,
  getSessionIntervalTimePromise,
  isAutoTrackEnabledPromise,
  isVisualizedAutoTrackEnabledPromise,
  isHeatMapEnabledPromise,
  setFlushNetworkPolicy,
  enableNetworkRequest,
  isNetworkRequestEnablePromise,
  trackAppInstall,
  init,
  enableDataCollect,
  registerDynamicSuperProperties,
  bind,
  unbind,
  sa: RNTechlabTrackModule,
};
