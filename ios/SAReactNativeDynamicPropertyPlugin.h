#import <Foundation/Foundation.h>
#if __has_include(<TechlabTrackSDK/TechlabTrackSDK.h>)
#import <TechlabTrackSDK/TechlabTrackSDK.h>
#else
#import "TechlabTrackSDK.h"
#endif

NS_ASSUME_NONNULL_BEGIN

@interface SAReactNativeDynamicPropertyPlugin : SAPropertyPlugin

@property (atomic, copy) NSDictionary *properties;

@end

NS_ASSUME_NONNULL_END
