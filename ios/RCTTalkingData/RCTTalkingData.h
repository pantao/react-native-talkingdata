#import "RCTBridgeModule.h"

@interface RCTTalkingData : NSObject <RCTBridgeModule>

+ (void)registerApp:(NSString *)appId channelID:(NSString *)channelID crashReport:(BOOL)report;
+ (void)registerSMS:(NSString *)appId secret:(NSString *)secretId;

@end
