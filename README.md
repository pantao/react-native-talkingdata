# rn-talkingdata

TalkingData React Native 插件

## 安装

```bash
yarn add rn-talkingdata
```

## 链接

```bash
react-native link
```

### iOS工程配置

在工程 `target`的 `Build Phases->Link Binary with Libraries` 中加入 `CoreTelephony.framework、AdSupport.framework、SystemConfiguration.framework、Security.framework、CoreMotion.framework、liz.tbd`

在你工程的`AppDelegate.m`文件中添加如下代码：

```
#import "RCTTalkingData.h"


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
	// 添加在第一行
  [RCTTalkingData registerApp:@"APPID" channelID:@"渠道号" crashReport:YES];
  ...
  ...

}

```

### 安装Android工程

在`android/app/build.gradle`里，defaultConfig栏目下添加如下代码：

```
	manifestPlaceholders = [
           TD_APPID: "talkingdata的APPID",//在此修改微信APPID
           APP_CHANNEL: "渠道号",
   	]
```

在你自定义的MainActivity的onCreate()中第一行加入

```
	TalkingDataModule.register(getApplicationContext(), null, null, true);
```


## 如何使用

### 引入包

```
import * as TD from 'react-native-talkingdata';
```

### API

#### TD.trackPageBegin(page_name)
#### TD.trackPageEnd(page_name)
#### TD.trackEvent(event_name, event_label, parameters)
#### TD.setLocation(latitude, longitude)
#### TD.getDeviceID()
