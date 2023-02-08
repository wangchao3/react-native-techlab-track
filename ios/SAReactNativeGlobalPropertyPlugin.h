#import <Foundation/Foundation.h>
#if __has_include(<SensorsAnalyticsSDK/SAPropertyPlugin.h>)
#import <SensorsAnalyticsSDK/SAPropertyPlugin.h>
#else
#import "SAPropertyPlugin.h"
#endif

NS_ASSUME_NONNULL_BEGIN

@interface SAReactNativeGlobalPropertyPlugin : SAPropertyPlugin

/// 全局属性插件
///
/// 全局属性，所有事件都会包含
///
/// @param properties 自定义属性
- (instancetype)initWithProperties:(NSDictionary *)properties NS_DESIGNATED_INITIALIZER;

- (instancetype)init NS_UNAVAILABLE;

@end

NS_ASSUME_NONNULL_END
