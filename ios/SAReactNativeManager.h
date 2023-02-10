#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface SAReactNativeManager : NSObject

+ (instancetype)sharedInstance;

/**
 @abstract
 可视化全埋点获取页面消息

 @return 页面信息字典
 */
- (NSDictionary *)visualizeProperties;

/**
 @abstract
 获取 View 的可点击状态

 @param view  获取状态的 View 对象
 @return 点击状态
 */
- (BOOL)clickableForView:(UIView *)view;

/**
@abstract
记录 View 的点击状态及自定义属性 (会关联到当前正在显示的 RCTRootView 上)

@param reactTag  React Native 分配的唯一标识符
@param clickable  是否可点击
@param parameters  自定义属性
*/
- (void)prepareView:(NSNumber *)reactTag clickable:(BOOL)clickable parameters:(NSDictionary *)parameters;

/**
@abstract
记录 View 的点击状态及自定义属性

@param reactTag  React Native 分配的唯一标识符
@param clickable  是否可点击
@param parameters  自定义属性
@param rootTag  RCTRootView 的 reactTag
*/
- (void)prepareView:(NSNumber *)reactTag clickable:(BOOL)clickable parameters:(NSDictionary *)parameters rootTag:(NSNumber *)rootTag;

/**
 @abstract
 触发 React Native 点击事件

 @param reactTag  React Native 分配的唯一标识符
 */
- (void)trackViewClick:(NSNumber *)reactTag;

/**
 @abstract
 触发 React Native 页面浏览事件

 @param url  页面路径
 @param properties  自定义页面属性
 @param autoTrack  是否为自动埋点
 */
- (void)trackViewScreen:(nullable NSString *)url properties:(nullable NSDictionary *)properties autoTrack:(BOOL)autoTrack;

/// 设置 React Native 的动态公共属性
/// @param properties 动态公共属性
- (void)setDynamicSuperProperties:(NSDictionary *)properties;


/// init SDK with settings
/// @param settings SDK init settings
+ (void)configureSDKWithSettings:(NSDictionary *)settings;

@end

NS_ASSUME_NONNULL_END
