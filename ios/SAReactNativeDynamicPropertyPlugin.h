#import <Foundation/Foundation.h>
#if __has_include(<SensorsAnalyticsSDK/SensorsAnalyticsSDK.h>)
#import <SensorsAnalyticsSDK/SensorsAnalyticsSDK.h>
#else
#import "SensorsAnalyticsSDK.h"
#endif

NS_ASSUME_NONNULL_BEGIN

@interface SAReactNativeDynamicPropertyPlugin : SAPropertyPlugin

@property (atomic, copy) NSDictionary *properties;

@end

NS_ASSUME_NONNULL_END
