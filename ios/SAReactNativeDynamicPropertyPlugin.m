#import "SAReactNativeDynamicPropertyPlugin.h"

@implementation SAReactNativeDynamicPropertyPlugin

- (BOOL)isMatchedWithFilter:(id<SAPropertyPluginEventFilter>)filter {
    return filter.type & SAEventTypeDefault;
}

- (SAPropertyPluginPriority)priority {
    return SAPropertyPluginPriorityLow;
}

@end
