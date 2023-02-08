#import <Foundation/Foundation.h>
#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif

extern NSString *const kSAReactNativePluginVersion;

@interface RNSensorsAnalyticsModule : NSObject<RCTBridgeModule>

@end

