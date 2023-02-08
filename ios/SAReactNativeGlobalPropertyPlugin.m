#if ! __has_feature(objc_arc)
#error This file must be compiled with ARC. Either turn on ARC for the project or use -fobjc-arc flag on this file.
#endif

#import "SAReactNativeGlobalPropertyPlugin.h"

@interface SAReactNativeGlobalPropertyPlugin()
@property (nonatomic, copy) NSDictionary<NSString *, id> *globalProperties;
@end

@implementation SAReactNativeGlobalPropertyPlugin

- (instancetype)initWithProperties:(NSDictionary *)properties {
    self = [super init];
    if (self) {
        self.globalProperties = properties;
    }
    return self;
}

- (BOOL)isMatchedWithFilter:(id<SAPropertyPluginEventFilter>)filter {
    // 支持 track、Signup、Bind、Unbind
    return filter.type & SAEventTypeDefault;
}

- (SAPropertyPluginPriority)priority {
    return SAPropertyPluginPriorityLow;
}

- (NSDictionary<NSString *,id> *)properties {
    return [self.globalProperties copy];
}

@end
