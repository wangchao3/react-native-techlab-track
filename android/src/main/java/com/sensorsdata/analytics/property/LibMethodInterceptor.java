package com.sensorsdata.analytics.property;

import com.sensorsdata.analytics.property.RNPropertyManager.Interceptor;

import org.json.JSONObject;

public class LibMethodInterceptor implements Interceptor {

    public JSONObject proceed(JSONObject properties, boolean isAuto) {
        if (properties == null) {
            properties = new JSONObject();
        }
        try {
            if (!"autoTrack".equals(properties.optString("$lib_method"))) {
                if (isAuto) {
                    properties.put("$lib_method", "autoTrack");
                } else {
                    properties.put("$lib_method", "code");
                }
            }
        } catch (Exception ignored) {

        }
        return properties;
    }
}
