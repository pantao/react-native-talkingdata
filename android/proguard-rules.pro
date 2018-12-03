#-dontwarn com.tendcloud.tenddata.**
#-keep class com.tendcloud.** {*;}
#-keep public class com.tendcloud.tenddata.** { public protected *;}
#-keepclassmembers class com.tendcloud.tenddata.**{
#public void *(***);
#}
#-keep class com.talkingdata.sdk.TalkingDataSDK {public *;}
#-keep class com.apptalkingdata.** {*;}
#-keep class dice.** {*; }
#-dontwarn dice.**