#if ! __has_feature(objc_arc)
#error This file must be compiled with ARC. Either turn on ARC for the project or use -fobjc-arc flag on this file.
#endif

#import "RNSensorsDataModule.h"
#import "SAReactNativeManager.h"

@implementation RNSensorsDataModule

RCT_EXPORT_MODULE(RNSensorsDataModule)

/**
 * React Native 自动采集点击事件
 *
 * @param reactTag  View 唯一标识符
 *
 */
RCT_EXPORT_METHOD(trackViewClick:(NSInteger)reactTag) {
    @try {
        [[SAReactNativeManager sharedInstance] trackViewClick:@(reactTag)];
    } @catch (NSException *exception) {
        NSLog(@"[RNSensorsAnalytics] error:%@",exception);
    }
}

/**
 * React Native 自动采集页面浏览事件
 *
 * @param properties  页面相关消息
 *
 */
RCT_EXPORT_METHOD(trackViewScreen:(NSDictionary *)params) {
    @try {
        // 自动采集页面浏览时 url 在 params
        NSString *url = params[@"sensorsdataurl"];
        NSDictionary *properties = params[@"sensorsdataparams"];
        [[SAReactNativeManager sharedInstance] trackViewScreen:url properties:properties autoTrack:YES];
    } @catch (NSException *exception) {
        NSLog(@"[RNSensorsAnalytics] error:%@",exception);
    }
}

/**
 * React Native 保存可点击控件列表信息
 * 兼容旧版本 JSBundle 使用
 *
 */
RCT_EXPORT_METHOD(saveViewProperties:(NSInteger)reactTag clickable:(BOOL)clickable parameters:(NSDictionary *)parameters) {
    @try {
        [[SAReactNativeManager sharedInstance] prepareView:@(reactTag) clickable:clickable parameters:parameters];
    } @catch (NSException *exception) {
        NSLog(@"[RNSensorsAnalytics] error:%@",exception);
    }
}

/**
 * React Native 保存可点击控件列表信息
 *
 * @param reactTag  当前控件唯一标识符
 * @param clickable  当前控件可点击状态
 * @param parameters  当前控件自定义参数
 * @param rootTag  当前 RN 页面的唯一标识
 *
 */
RCT_EXPORT_METHOD(saveRootViewProperties:(NSInteger)reactTag clickable:(BOOL)clickable parameters:(NSDictionary *)parameters rootTag:(NSInteger)rootTag) {
    @try {
        [[SAReactNativeManager sharedInstance] prepareView:@(reactTag) clickable:clickable parameters:parameters rootTag:@(rootTag)];
    } @catch (NSException *exception) {
        NSLog(@"[RNSensorsAnalytics] error:%@",exception);
    }
}

/// 设置 React Native 的动态公共属性
/// @param dynamicProperties 动态公共属性
RCT_EXPORT_METHOD(setDynamicSuperProperties:(NSDictionary *)properties) {
    @try {
        [[SAReactNativeManager sharedInstance] setDynamicSuperProperties:properties];
    } @catch (NSException *exception) {
        NSLog(@"[RNSensorsAnalytics] error:%@",exception);
    }
}

@end
