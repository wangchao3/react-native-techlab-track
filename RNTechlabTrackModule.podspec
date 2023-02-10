
Pod::Spec.new do |s|
  s.name         = "RNTechlabTrackModule"
  s.version      = "2.3.4"
  s.summary      = "The official React Native SDK of TechLab Track."
  s.description  = <<-DESC
                  techlab track RN 组件
                   DESC
  s.homepage     = "http://cdc-ui.aswatson.net"
  s.license      = { :type => "Apache License, Version 2.0" }
  s.author       = { "Wang Chao" => "chao.wang@aswatson.com" }
  s.platform     = :ios, "8.0"
  s.source       = { :git => "https://github.com/wangchao3/react-native-techlab-track.git", :tag => "v#{s.version}" }
  s.source_files = "ios/*.{h,m}"
  s.requires_arc = true
  s.dependency   "React"
  s.dependency   "TechlabTrackSDK", ">= 1.0.0"

end
