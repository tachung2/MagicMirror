class GWTranslations{constructor(){console.log("[GATEWAY] Translator Ready")}LoadGWTranslation(e){return new Promise((t=>{var a={};a.Rotate_Msg=e.translate("GW_Rotate_Msg"),a.Rotate_Continue=e.translate("GW_Rotate_Continue"),a.Login_Welcome=e.translate("GW_Login_Welcome"),a.Login_Username=e.translate("GW_Login_Username"),a.Login_Password=e.translate("GW_Login_Password"),a.Login_Error=e.translate("GW_Login_Error"),a.Login_Login=e.translate("GW_Login_Login"),a.Home=e.translate("GW_Home"),a.Home_Welcome=e.translate("GW_Home_Welcome"),a.Plugins=e.translate("GW_Plugins"),a.Plugins_Welcome=e.translate("GW_Plugins_Welcome"),a.Plugins_Table_Reset=e.translate("GW_Plugins_Table_Reset"),a.Plugins_Table_Showing=e.translate("GW_Plugins_Table_Showing"),a.Plugins_Table_Plugins=e.translate("GW_Plugins_Table_Plugins"),a.Plugins_Table_Name=e.translate("GW_Plugins_Table_Name"),a.Plugins_Table_Description=e.translate("GW_Plugins_Table_Description"),a.Plugins_Table_Actions=e.translate("GW_Plugins_Table_Actions"),a.Plugins_Table_Configuration=e.translate("GW_Plugins_Table_Configuration"),a.Plugins_Table_Search=e.translate("GW_Plugins_Table_Search"),a.Plugins_Table_Wiki=e.translate("GW_Plugins_Table_Wiki"),a.Plugins_Table_Install=e.translate("GW_Plugins_Table_Install"),a.Plugins_Table_Delete=e.translate("GW_Plugins_Table_Delete"),a.Plugins_Table_Modify=e.translate("GW_Plugins_Table_Modify"),a.Plugins_Table_Configure=e.translate("GW_Plugins_Table_Configure"),a.Plugins_Table_DeleteConfig=e.translate("GW_Plugins_Table_DeleteConfig"),a.Plugins_Delete_TerminalHeader=e.translate("GW_Plugins_Delete_TerminalHeader"),a.Plugins_Delete_Message=e.translate("GW_Plugins_Delete_Message"),a.Plugins_Delete_Progress=e.translate("GW_Plugins_Delete_Progress"),a.Plugins_Delete_Confirmed=e.translate("GW_Plugins_Delete_Confirmed"),a.Plugins_Install_TerminalHeader=e.translate("GW_Plugins_Install_TerminalHeader"),a.Plugins_Install_Message=e.translate("GW_Plugins_Install_Message"),a.Plugins_Install_Progress=e.translate("GW_Plugins_Install_Progress"),a.Plugins_Install_Confirmed=e.translate("GW_Plugins_Install_Confirmed"),a.Plugins_Initial_Title=e.translate("GW_Plugins_Initial_Title"),a.Plugins_DeleteConfig_Title=e.translate("GW_Plugins_DeleteConfig_Title"),a.Plugins_DeleteConfig_Confirmed=e.translate("GW_Plugins_DeleteConfig_Confirmed"),a.Plugins_Modify_Title=e.translate("GW_Plugins_Modify_Title"),a.Plugins_Error_Snowboy=e.translate("GW_Plugins_Error_Snowboy"),a.Plugins_Error_Porcupine=e.translate("GW_Plugins_Error_Porcupine"),a.Terminal=e.translate("GW_Terminal"),a.TerminalOpen=e.translate("GW_TerminalOpen"),a.TerminalGW=e.translate("GW_TerminalGW"),a.Configuration=e.translate("GW_Configuration"),a.Configuration_Welcome=e.translate("GW_Configuration_Welcome"),a.Configuration_EditLoad=e.translate("GW_Configuration_EditLoad"),a.Configuration_Edit_Title=e.translate("GW_Configuration_Edit_Title"),a.Configuration_Edit_AcualConfig=e.translate("GW_Configuration_Edit_AcualConfig"),a.Tools=e.translate("GW_Tools"),a.Tools_Welcome=e.translate("GW_Tools_Welcome"),a.Tools_subTitle=e.translate("GW_Tools_subTitle"),a.Tools_Restart=e.translate("GW_Tools_Restart"),a.Tools_Restart_Text1=e.translate("GW_Tools_Restart_Text1"),a.Tools_Restart_Text2=e.translate("GW_Tools_Restart_Text2"),a.Tools_Die=e.translate("GW_Tools_Die"),a.Tools_Die_Text1=e.translate("GW_Tools_Die_Text1"),a.Tools_Die_Text2=e.translate("GW_Tools_Die_Text2"),a.Tools_Die_Text3=e.translate("GW_Tools_Die_Text3"),a.Tools_Webview_Header=e.translate("GW_Tools_Webview_Header"),a.Tools_Webview_Needed=e.translate("GW_Tools_Webview_Needed"),a.Tools_Backup_Found=e.translate("GW_Tools_Backup_Found"),a.Tools_Backup_Text=e.translate("GW_Tools_Backup_Text"),a.Tools_Backup_Deleted=e.translate("GW_Tools_Backup_Deleted"),a.Tools_Screen_Text=e.translate("GW_Tools_Screen_Text"),a.Tools_GoogleAssistant_Text=e.translate("GW_Tools_GoogleAssistant_Text"),a.Tools_GoogleAssistant_Query=e.translate("GW_Tools_GoogleAssistant_Query"),a.Tools_Alert_Text=e.translate("GW_Tools_Alert_Text"),a.Tools_Alert_Query=e.translate("GW_Tools_Alert_Query"),a.Tools_Volume_Text_Record=e.translate("GW_Tools_Volume_Text_Record"),a.Tools_Volume_Text=e.translate("GW_Tools_Volume_Text"),a.Tools_Volume_Text2=e.translate("GW_Tools_Volume_Text2"),a.Tools_Volume_Text3=e.translate("GW_Tools_Volume_Text3"),a.Tools_Spotify_Text=e.translate("GW_Tools_Spotify_Text"),a.Tools_Spotify_Text2=e.translate("GW_Tools_Spotify_Text2"),a.Tools_Spotify_Query=e.translate("GW_Tools_Spotify_Query"),a.Tools_Spotify_Artist=e.translate("GW_Tools_Spotify_Artist"),a.Tools_Spotify_Track=e.translate("GW_Tools_Spotify_Track"),a.Tools_Spotify_Album=e.translate("GW_Tools_Spotify_Album"),a.Tools_Spotify_Playlist=e.translate("GW_Tools_Spotify_Playlist"),a.Tools_Update_Header=e.translate("GW_Tools_Update_Header"),a.Tools_Update_Text=e.translate("GW_Tools_Update_Text"),a.Tools_Update_Text2=e.translate("GW_Tools_Update_Text2"),a.Tools_YouTube_Text=e.translate("GW_Tools_YouTube_Text"),a.Tools_YouTube_Query=e.translate("GW_Tools_YouTube_Query"),a.Tools_Stop_Text=e.translate("GW_Tools_Stop_Text"),a.Tools_Radio_Text=e.translate("GW_Tools_Radio_Text"),a.Tools_Radio_Text2=e.translate("GW_Tools_Radio_Text2"),a.Setting=e.translate("GW_Setting"),a.Setting_Title=e.translate("GW_Setting_Title"),a.Setting_Credentials=e.translate("GW_Setting_Credentials"),a.Setting_Credentials_username=e.translate("GW_Setting_Credentials_username"),a.Setting_Credentials_password=e.translate("GW_Setting_Credentials_password"),a.Setting_Credentials_confirmpwd=e.translate("GW_Setting_Credentials_confirmpwd"),a.Setting_Credentials_clientID=e.translate("GW_Setting_Credentials_clientID"),a.Setting_Credentials_username_placeholder=e.translate("GW_Setting_Credentials_username_placeholder"),a.Setting_Credentials_password_placeholder=e.translate("GW_Setting_Credentials_password_placeholder"),a.Setting_Credentials_confirmpwd_placeholder=e.translate("GW_Setting_Credentials_confirmpwd_placeholder"),a.Setting_Credentials_clientID_placeholder=e.translate("GW_Setting_Credentials_clientID_placeholder"),a.Setting_Options=e.translate("GW_Setting_Options"),a.Setting_Options_debug=e.translate("GW_Setting_Options_debug"),a.Setting_Options_usePM2=e.translate("GW_Setting_Options_usePM2"),a.Setting_Options_PM2Id=e.translate("GW_Setting_Options_PM2Id"),a.Setting_Info_by=e.translate("GW_Setting_Info_by"),a.Setting_Info_Support=e.translate("GW_Setting_Info_Support"),a.Setting_Info_Donate=e.translate("GW_Setting_Info_Donate"),a.Setting_Info_Donate_Text=e.translate("GW_Setting_Info_Donate_Text"),a.Setting_Info_About=e.translate("GW_Setting_Info_About"),a.Setting_Info_Translator=e.translate("GW_Setting_Info_Translator"),a.Setting_Info_Translator1=e.translate("GW_Setting_Info_Translator1"),a.Setting_Info_Translator2=e.translate("GW_Setting_Info_Translator2"),a.Setting_Info_Translator3=e.translate("GW_Setting_Info_Translator3"),a.Setting_Info_Translator4=e.translate("GW_Setting_Info_Translator4"),a.Setting_Info_Translator5=e.translate("GW_Setting_Info_Translator5"),a.Setting_Info_Translator6=e.translate("GW_Setting_Info_Translator6"),a.Setting_Info_Translator7=e.translate("GW_Setting_Info_Translator7"),a.Setting_Info_Translator8=e.translate("GW_Setting_Info_Translator8"),a.Setting_Info_Translator9=e.translate("GW_Setting_Info_Translator9"),a.Setting_Info_Translator10=e.translate("GW_Setting_Info_Translator10"),a.System=e.translate("GW_System"),a.System_Box_Shutdown=e.translate("GW_System_Box_Shutdown"),a.System_Shutdown=e.translate("GW_System_Shutdown"),a.System_Box_Restart=e.translate("GW_System_Box_Restart"),a.System_Restart=e.translate("GW_System_Restart"),a.System_Box_Version=e.translate("GW_System_Box_Version"),a.System_NodeVersion=e.translate("GW_System_NodeVersion"),a.System_NPMVersion=e.translate("GW_System_NPMVersion"),a.System_OSVersion=e.translate("GW_System_OSVersion"),a.System_KernelVersion=e.translate("GW_System_KernelVersion"),a.System_CPUSystem=e.translate("GW_System_CPUSystem"),a.System_TypeCPU=e.translate("GW_System_TypeCPU"),a.System_SpeedCPU=e.translate("GW_System_SpeedCPU"),a.System_CurrentLoadCPU=e.translate("GW_System_CurrentLoadCPU"),a.System_GovernorCPU=e.translate("GW_System_GovernorCPU"),a.System_TempCPU=e.translate("GW_System_TempCPU"),a.System_MemorySystem=e.translate("GW_System_MemorySystem"),a.System_TypeMemory=e.translate("GW_System_TypeMemory"),a.System_SwapMemory=e.translate("GW_System_SwapMemory"),a.System_NetworkSystem=e.translate("GW_System_NetworkSystem"),a.System_IPNetwork=e.translate("GW_System_IPNetwork"),a.System_InterfaceNetwork=e.translate("GW_System_InterfaceNetwork"),a.System_SpeedNetwork=e.translate("GW_System_SpeedNetwork"),a.System_DuplexNetwork=e.translate("GW_System_DuplexNetwork"),a.System_WirelessInfo=e.translate("GW_System_WirelessInfo"),a.System_SSIDNetwork=e.translate("GW_System_SSIDNetwork"),a.System_BitRateNetwork=e.translate("GW_System_BitRateNetwork"),a.System_FrequencyNetwork=e.translate("GW_System_FrequencyNetwork"),a.System_TxPowerNetwork=e.translate("GW_System_TxPowerNetwork"),a.System_QualityNetwork=e.translate("GW_System_QualityNetwork"),a.System_SignalNetwork=e.translate("GW_System_SignalNetwork"),a.System_StorageSystem=e.translate("GW_System_StorageSystem"),a.System_MountStorage=e.translate("GW_System_MountStorage"),a.System_UsedStorage=e.translate("GW_System_UsedStorage"),a.System_PercentStorage=e.translate("GW_System_PercentStorage"),a.System_TotalStorage=e.translate("GW_System_TotalStorage"),a.System_UptimeSystem=e.translate("GW_System_UptimeSystem"),a.System_CurrentUptime=e.translate("GW_System_CurrentUptime"),a.System_System=e.translate("GW_System_System"),a.System_RecordUptime=e.translate("GW_System_RecordUptime"),a.System_DAY=e.translate("GW_System_DAY"),a.System_DAYS=e.translate("GW_System_DAYS"),a.System_HOUR=e.translate("GW_System_HOUR"),a.System_HOURS=e.translate("GW_System_HOURS"),a.System_MINUTE=e.translate("GW_System_MINUTE"),a.System_MINUTES=e.translate("GW_System_MINUTES"),a.System_ProcessSystem=e.translate("GW_System_ProcessSystem"),a.System_CPU=e.translate("GW_System_CPU"),a.System_Memory=e.translate("GW_System_Memory"),a.System_SpeedTestResult=e.translate("GW_System_SpeedTestResult"),a.System_GoogleAssistant=e.translate("GW_System_GoogleAssistant"),a.System_CurrentlyRunning=e.translate("GW_System_CurrentlyRunning"),a.System_NamePlugin=e.translate("GW_System_NamePlugin"),a.System_VersionPlugin=e.translate("GW_System_VersionPlugin"),a.System_RevPlugin=e.translate("GW_System_RevPlugin"),a.Logout=e.translate("GW_Logout"),a.Delete=e.translate("GW_Delete"),a.Install=e.translate("GW_Install"),a.Configure=e.translate("GW_Configure"),a.Modify=e.translate("GW_Modify"),a.Save=e.translate("GW_Save"),a.Wait=e.translate("GW_Wait"),a.Done=e.translate("GW_Done"),a.Error=e.translate("GW_Error"),a.Cancel=e.translate("GW_Cancel"),a.Confirm=e.translate("GW_Confirm"),a.Load=e.translate("GW_Load"),a.Restart=e.translate("GW_Restart"),a.ErrModule=e.translate("GW_ErrModule"),a.Warn_Error=e.translate("GW_Warn_Error"),a.LoadDefault=e.translate("GW_LoadDefault"),a.MergeDefault=e.translate("GW_MergeDefault"),a.Send=e.translate("GW_Send"),a.TurnOn=e.translate("GW_TurnOn"),a.TurnOff=e.translate("GW_TurnOff"),a.RequestDone=e.translate("GW_RequestDone"),a.Listen=e.translate("GW_Listen"),a.Update=e.translate("GW_Update"),a.Start=e.translate("GW_Start"),t(a)}))}LoadGWDescription(e){return new Promise((t=>{var a={};a["EXT-Alert"]=e.translate("EXT-Alert"),a["EXT-Background"]=e.translate("EXT-Background"),a["EXT-Bring"]=e.translate("EXT-Bring"),a["EXT-Browser"]=e.translate("EXT-Browser"),a["EXT-Detector"]=e.translate("EXT-Detector"),a["EXT-FreeboxTV"]=e.translate("EXT-FreeboxTV"),a["EXT-GooglePhotos"]=e.translate("EXT-GooglePhotos"),a["EXT-Governor"]=e.translate("EXT-Governor"),a["EXT-Internet"]=e.translate("EXT-Internet"),a["EXT-Keyboard"]=e.translate("EXT-Keyboard"),a["EXT-Librespot"]=e.translate("EXT-Librespot"),a["EXT-Motion"]=e.translate("EXT-Motion"),a["EXT-MusicPlayer"]=e.translate("EXT-MusicPlayer"),a["EXT-Pages"]=e.translate("EXT-Pages"),a["EXT-Photos"]=e.translate("EXT-Photos"),a["EXT-Pir"]=e.translate("EXT-Pir"),a["EXT-RadioPlayer"]=e.translate("EXT-RadioPlayer"),a["EXT-Selfies"]=e.translate("EXT-Selfies"),a["EXT-SelfiesFlash"]=e.translate("EXT-SelfiesFlash"),a["EXT-SelfiesSender"]=e.translate("EXT-SelfiesSender"),a["EXT-SelfiesViewer"]=e.translate("EXT-SelfiesViewer"),a["EXT-Screen"]=e.translate("EXT-Screen"),a["EXT-ScreenManager"]=e.translate("EXT-ScreenManager"),a["EXT-ScreenTouch"]=e.translate("EXT-ScreenTouch"),a["EXT-Spotify"]=e.translate("EXT-Spotify"),a["EXT-SpotifyCanvasLyrics"]=e.translate("EXT-SpotifyCanvasLyrics"),a["EXT-StreamDeck"]=e.translate("EXT-StreamDeck"),a["EXT-TelegramBot"]=e.translate("EXT-TelegramBot"),a["EXT-UpdateNotification"]=e.translate("EXT-UpdateNotification"),a["EXT-Volume"]=e.translate("EXT-Volume"),a["EXT-Welcome"]=e.translate("EXT-Welcome"),a["EXT-YouTube"]=e.translate("EXT-YouTube"),a["EXT-YouTubeCast"]=e.translate("EXT-YouTubeCast"),t(a)}))}LoadGWTrSchemaValidation(e){return new Promise((t=>{var a={};a.PluginDescription=e.translate("VAL_PluginDescription"),a.PluginName=e.translate("VAL_PluginName"),a.PluginDisable=e.translate("VAL_PluginDisable"),a.PluginPosition=e.translate("VAL_PluginPosition"),a.PluginConfigDeepMerge=e.translate("VAL_PluginConfigDeepMerge"),a.PluginConfiguration=e.translate("VAL_PluginConfiguration"),a.PluginDebug=e.translate("VAL_PluginDebug"),a["EXT-Alert_ignore"]=e.translate("VAL_EXT-Alert_ignore"),a["EXT-Background_Model"]=e.translate("VAL_EXT-Background_Model"),a["EXT-Background_Image"]=e.translate("VAL_EXT-Background_Image"),a["EXT-Bring_List"]=e.translate("VAL_EXT-Bring_List"),a["EXT-Bring_Email"]=e.translate("VAL_EXT-Bring_Email"),a["EXT-Bring_Password"]=e.translate("VAL_EXT-Bring_Password"),a["EXT-Bring_Language"]=e.translate("VAL_EXT-Bring_Language"),a["EXT-Bring_Colums"]=e.translate("VAL_EXT-Bring_Colums"),a["EXT-Bring_Rows"]=e.translate("VAL_EXT-Bring_Rows"),a["EXT-Bring_Update"]=e.translate("VAL_EXT-Bring_Update"),a["EXT-Bring_Background"]=e.translate("VAL_EXT-Bring_Background"),a["EXT-Bring_Box"]=e.translate("VAL_EXT-Bring_Box"),a["EXT-Bring_Header"]=e.translate("VAL_EXT-Bring_Header"),a["EXT-Browser_Delay"]=e.translate("VAL_EXT-Browser_Delay"),a["EXT-Browser_Scroll"]=e.translate("VAL_EXT-Browser_Scroll"),a["EXT-Browser_Step"]=e.translate("VAL_EXT-Browser_Step"),a["EXT-Browser_Interval"]=e.translate("VAL_EXT-Browser_Interval"),a["EXT-Browser_Start"]=e.translate("VAL_EXT-Browser_Start"),a["EXT-Detector_Icon"]=e.translate("VAL_EXT-Detector_Icon"),a["EXT-Detector_Touch"]=e.translate("VAL_EXT-Detector_Touch"),a["EXT-Detector_Detector"]=e.translate("VAL_EXT-Detector_Detector"),a["EXT-Detector_Engine"]=e.translate("VAL_EXT-Detector_Engine"),a["EXT-Detector_Keyword"]=e.translate("VAL_EXT-Detector_Keyword"),a["EXT-Detector_Sensitivity"]=e.translate("VAL_EXT-Detector_Sensitivity"),a["EXT-Detector_AccessKey"]=e.translate("VAL_EXT-Detector_AccessKey"),a["EXT-Detector_CustomModel"]=e.translate("VAL_EXT-Detector_CustomModel"),a["EXT-GooglePhotos_Type"]=e.translate("VAL_EXT-GooglePhotos_Type"),a["EXT-GooglePhotos_Delay"]=e.translate("VAL_EXT-GooglePhotos_Delay"),a["EXT-GooglePhotos_Infos"]=e.translate("VAL_EXT-GooglePhotos_Infos"),a["EXT-GooglePhotos_Albums"]=e.translate("VAL_EXT-GooglePhotos_Albums"),a["EXT-GooglePhotos_Background"]=e.translate("VAL_EXT-GooglePhotos_Background"),a["EXT-GooglePhotos_Sort"]=e.translate("VAL_EXT-GooglePhotos_Sort"),a["EXT-GooglePhotos_HD"]=e.translate("VAL_EXT-GooglePhotos_HD"),a["EXT-GooglePhotos_Format"]=e.translate("VAL_EXT-GooglePhotos_Format"),a["EXT-GooglePhotos_Height"]=e.translate("VAL_EXT-GooglePhotos_Height"),a["EXT-GooglePhotos_Width"]=e.translate("VAL_EXT-GooglePhotos_Width"),a["EXT-GooglePhotos_uploadAlbum"]=e.translate("VAL_EXT-GooglePhotos_uploadAlbum"),a["EXT-Governor_Sleep"]=e.translate("VAL_EXT-Governor_Sleep"),a["EXT-Governor_Work"]=e.translate("VAL_EXT-Governor_Work"),a["EXT-Internet_Ping"]=e.translate("VAL_EXT-Internet_Ping"),a["EXT-Internet_Delay"]=e.translate("VAL_EXT-Internet_Delay"),a["EXT-Internet_Scan"]=e.translate("VAL_EXT-Internet_Scan"),a["EXT-Internet_Command"]=e.translate("VAL_EXT-Internet_Command"),a["EXT-Internet_Alert"]=e.translate("VAL_EXT-Internet_Alert"),a["EXT-Internet_Restart"]=e.translate("VAL_EXT-Internet_Restart"),a["EXT-Keyboard_keyFinder"]=e.translate("VAL_EXT-Keyboard_keyFinder"),a["EXT-Keyboard_keys"]=e.translate("VAL_EXT-Keyboard_keys"),a["EXT-Keyboard_keycode"]=e.translate("VAL_EXT-Keyboard_keycode"),a["EXT-Keyboard_notification"]=e.translate("VAL_EXT-Keyboard_notification"),a["EXT-Keyboard_payload"]=e.translate("VAL_EXT-Keyboard_payload"),a["EXT-Keyboard_command"]=e.translate("VAL_EXT-Keyboard_command"),a["EXT-Keyboard_sound"]=e.translate("VAL_EXT-Keyboard_sound"),a["EXT-Librespot_Email"]=e.translate("VAL_EXT-Librespot_Email"),a["EXT-Librespot_Password"]=e.translate("VAL_EXT-Librespot_Password"),a["EXT-Librespot_Name"]=e.translate("VAL_EXT-Librespot_Name"),a["EXT-Librespot_Min"]=e.translate("VAL_EXT-Librespot_Min"),a["EXT-Librespot_Max"]=e.translate("VAL_EXT-Librespot_Max"),a["EXT-Motion_captureIntervalTime"]=e.translate("VAL_EXT-Motion_captureIntervalTime"),a["EXT-Motion_scoreThreshold"]=e.translate("VAL_EXT-Motion_scoreThreshold"),a["EXT-Motion_deviceId"]=e.translate("VAL_EXT-Motion_deviceId"),a["EXT-MusicPlayer_USB"]=e.translate("VAL_EXT-MusicPlayer_USB"),a["EXT-MusicPlayer_Path"]=e.translate("VAL_EXT-MusicPlayer_Path"),a["EXT-MusicPlayer_Check"]=e.translate("VAL_EXT-MusicPlayer_Check"),a["EXT-MusicPlayer_Start"]=e.translate("VAL_EXT-MusicPlayer_Start"),a["EXT-MusicPlayer_Min"]=e.translate("VAL_EXT-MusicPlayer_Min"),a["EXT-MusicPlayer_Max"]=e.translate("VAL_EXT-MusicPlayer_Max"),a["EXT-Pages_pages"]=e.translate("VAL_EXT-Pages_pages"),a["EXT-Pages_fixed"]=e.translate("VAL_EXT-Pages_fixed"),a["EXT-Pages_hiddenPages"]=e.translate("VAL_EXT-Pages_hiddenPages"),a["EXT-Pages_animateIn"]=e.translate("VAL_EXT-Pages_animateIn"),a["EXT-Pages_animateOut"]=e.translate("VAL_EXT-Pages_animateOut"),a["EXT-Pages_animationTime"]=e.translate("VAL_EXT-Pages_animationTime"),a["EXT-Pages_rotationTime"]=e.translate("VAL_EXT-Pages_rotationTime"),a["EXT-Pages_rotationTimes"]=e.translate("VAL_EXT-Pages_rotationTimes"),a["EXT-Pages_homePage"]=e.translate("VAL_EXT-Pages_homePage"),a["EXT-Pages_indicator"]=e.translate("VAL_EXT-Pages_indicator"),a["EXT-Pages_Gateway"]=e.translate("VAL_EXT-Pages_Gateway"),a["EXT-Pages_loading"]=e.translate("VAL_EXT-Pages_loading"),a["EXT-Photos_Delay"]=e.translate("VAL_EXT-Photos_Delay"),a["EXT-Photos_Loop"]=e.translate("VAL_EXT-Photos_Loop"),a["EXT-Pir_GPIO"]=e.translate("VAL_EXT-Pir_GPIO"),a["EXT-Pir_Reverse"]=e.translate("VAL_EXT-Pir_Reverse"),a["EXT-RadioPlayer_Min"]=e.translate("VAL_EXT-RadioPlayer_Min"),a["EXT-RadioPlayer_Max"]=e.translate("VAL_EXT-RadioPlayer_Max"),a["EXT-Selfies_captureWidth"]=e.translate("VAL_EXT-Selfies_captureWidth"),a["EXT-Selfies_captureHeight"]=e.translate("VAL_EXT-Selfies_captureHeight"),a["EXT-Selfies_device"]=e.translate("VAL_EXT-Selfies_device"),a["EXT-Selfies_usePreview"]=e.translate("VAL_EXT-Selfies_usePreview"),a["EXT-Selfies_previewWidth"]=e.translate("VAL_EXT-Selfies_previewWidth"),a["EXT-Selfies_previewHeight"]=e.translate("VAL_EXT-Selfies_previewHeight"),a["EXT-Selfies_displayButton"]=e.translate("VAL_EXT-Selfies_displayButton"),a["EXT-Selfies_buttonStyle"]=e.translate("VAL_EXT-Selfies_buttonStyle"),a["EXT-Selfies_buttons"]=e.translate("VAL_EXT-Selfies_buttons"),a["EXT-Selfies_blinkButton"]=e.translate("VAL_EXT-Selfies_blinkButton"),a["EXT-Selfies_playShutter"]=e.translate("VAL_EXT-Selfies_playShutter"),a["EXT-Selfies_resultDuration"]=e.translate("VAL_EXT-Selfies_resultDuration"),a["EXT-Selfies_autoValidate"]=e.translate("VAL_EXT-Selfies_autoValidate"),a["EXT-Selfies_counterStyle"]=e.translate("VAL_EXT-Selfies_counterStyle"),a["EXT-Selfies_showResult"]=e.translate("VAL_EXT-Selfies_showResult"),a["EXT-SelfiesFlash_gpio"]=e.translate("VAL_EXT-SelfiesFlash_gpio"),a["EXT-SelfiesSender_sendTelegramBotAuto"]=e.translate("VAL_EXT-SelfiesSender_sendTelegramBotAuto"),a["EXT-SelfiesSender_sendGooglePhotos"]=e.translate("VAL_EXT-SelfiesSender_sendGooglePhotos"),a["EXT-SelfiesSender_sendGooglePhotosAuto"]=e.translate("VAL_EXT-SelfiesSender_sendGooglePhotosAuto"),a["EXT-SelfiesSender_sendMail"]=e.translate("VAL_EXT-SelfiesSender_sendMail"),a["EXT-SelfiesSender_sendMailAuto"]=e.translate("VAL_EXT-SelfiesSender_sendMailAuto"),a["EXT-SelfiesSender_sendMailConfig"]=e.translate("VAL_EXT-SelfiesSender_sendMailConfig"),a["EXT-SelfiesSender_transport"]=e.translate("VAL_EXT-SelfiesSender_transport"),a["EXT-SelfiesSender_host"]=e.translate("VAL_EXT-SelfiesSender_host"),a["EXT-SelfiesSender_port"]=e.translate("VAL_EXT-SelfiesSender_port"),a["EXT-SelfiesSender_secure"]=e.translate("VAL_EXT-SelfiesSender_secure"),a["EXT-SelfiesSender_auth"]=e.translate("VAL_EXT-SelfiesSender_auth"),a["EXT-SelfiesSender_user"]=e.translate("VAL_EXT-SelfiesSender_user"),a["EXT-SelfiesSender_pass"]=e.translate("VAL_EXT-SelfiesSender_pass"),a["EXT-SelfiesSender_message"]=e.translate("VAL_EXT-SelfiesSender_message"),a["EXT-SelfiesSender_from"]=e.translate("VAL_EXT-SelfiesSender_from"),a["EXT-SelfiesSender_to"]=e.translate("VAL_EXT-SelfiesSender_to"),a["EXT-SelfiesSender_subject"]=e.translate("VAL_EXT-SelfiesSender_subject"),a["EXT-SelfiesSender_text"]=e.translate("VAL_EXT-SelfiesSender_text"),a["EXT-SelfiesViewer_moduleWidth"]=e.translate("VAL_EXT-SelfiesViewer_moduleWidth"),a["EXT-SelfiesViewer_moduleHeight"]=e.translate("VAL_EXT-SelfiesViewer_moduleHeight"),a["EXT-SelfiesViewer_displayDelay"]=e.translate("VAL_EXT-SelfiesViewer_displayDelay"),a["EXT-SelfiesViewer_displayBackground"]=e.translate("VAL_EXT-SelfiesViewer_displayBackground"),a["EXT-SelfiesViewer_sortBy"]=e.translate("VAL_EXT-SelfiesViewer_sortBy"),a["EXT-Screen_Body"]=e.translate("VAL_EXT-Screen_Body"),a["EXT-Screen_Delay"]=e.translate("VAL_EXT-Screen_Delay"),a["EXT-Screen_Display"]=e.translate("VAL_EXT-Screen_Display"),a["EXT-Screen_Mode"]=e.translate("VAL_EXT-Screen_Mode"),a["EXT-Screen_Eco"]=e.translate("VAL_EXT-Screen_Eco"),a["EXT-Screen_Counter"]=e.translate("VAL_EXT-Screen_Counter"),a["EXT-Screen_Bar"]=e.translate("VAL_EXT-Screen_Bar"),a["EXT-Screen_Style"]=e.translate("VAL_EXT-Screen_Style"),a["EXT-Screen_Presence"]=e.translate("VAL_EXT-Screen_Presence"),a["EXT-Screen_Date"]=e.translate("VAL_EXT-Screen_Date"),a["EXT-Screen_Sleeping"]=e.translate("VAL_EXT-Screen_Sleeping"),a["EXT-Screen_Hide"]=e.translate("VAL_EXT-Screen_Hide"),a["EXT-Screen_Delayed"]=e.translate("VAL_EXT-Screen_Delayed"),a["EXT-Screen_GPIO"]=e.translate("VAL_EXT-Screen_GPIO"),a["EXT-Screen_Reset"]=e.translate("VAL_EXT-Screen_Reset"),a["EXT-ScreenManager_Lock"]=e.translate("VAL_EXT-ScreenManager_Lock"),a["EXT-ScreenManager_On"]=e.translate("VAL_EXT-ScreenManager_On"),a["EXT-ScreenManager_Off"]=e.translate("VAL_EXT-ScreenManager_Off"),a["EXT-ScreenTouch_Mode"]=e.translate("VAL_EXT-ScreenTouch_Mode"),a["EXT-Spotify_Interval"]=e.translate("VAL_EXT-Spotify_Interval"),a["EXT-Spotify_Idle"]=e.translate("VAL_EXT-Spotify_Idle"),a["EXT-Spotify_BottomBar"]=e.translate("VAL_EXT-Spotify_BottomBar"),a["EXT-Spotify_ID"]=e.translate("VAL_EXT-Spotify_ID"),a["EXT-Spotify_Secret"]=e.translate("VAL_EXT-Spotify_Secret"),a["EXT-StreamDeck_device"]=e.translate("VAL_EXT-StreamDeck_device"),a["EXT-StreamDeck_brightness"]=e.translate("VAL_EXT-StreamDeck_brightness"),a["EXT-StreamDeck_ecobrightness"]=e.translate("VAL_EXT-StreamDeck_ecobrightness"),a["EXT-StreamDeck_ecotime"]=e.translate("VAL_EXT-StreamDeck_ecotime"),a["EXT-StreamDeck_logo"]=e.translate("VAL_EXT-StreamDeck_logo"),a["EXT-TelegramBot_telegramAPIKey"]=e.translate("VAL_EXT-TelegramBot_telegramAPIKey"),a["EXT-TelegramBot_adminChatId"]=e.translate("VAL_EXT-TelegramBot_adminChatId"),a["EXT-TelegramBot_allowedUser"]=e.translate("VAL_EXT-TelegramBot_allowedUser"),a["EXT-TelegramBot_commandAllowed"]=e.translate("VAL_EXT-TelegramBot_commandAllowed"),a["EXT-TelegramBot_useWelcomeMessage"]=e.translate("VAL_EXT-TelegramBot_useWelcomeMessage"),a["EXT-TelegramBot_useSoundNotification"]=e.translate("VAL_EXT-TelegramBot_useSoundNotification"),a["EXT-TelegramBot_TelegramBotServiceAlerte"]=e.translate("VAL_EXT-TelegramBot_TelegramBotServiceAlerte"),a["EXT-TelegramBot_favourites"]=e.translate("VAL_EXT-TelegramBot_favourites"),a["EXT-TelegramBot_telecast"]=e.translate("VAL_EXT-TelegramBot_telecast"),a["EXT-TelegramBot_telecastLife"]=e.translate("VAL_EXT-TelegramBot_telecastLife"),a["EXT-TelegramBot_telecastLimit"]=e.translate("VAL_EXT-TelegramBot_telecastLimit"),a["EXT-TelegramBot_telecastHideOverflow"]=e.translate("VAL_EXT-TelegramBot_telecastHideOverflow"),a["EXT-TelegramBot_telecastContainer"]=e.translate("VAL_EXT-TelegramBot_telecastContainer"),a["EXT-TelegramBot_dateFormat"]=e.translate("VAL_EXT-TelegramBot_dateFormat"),a["EXT-UpdateNotification_Interval"]=e.translate("VAL_EXT-UpdateNotification_Interval"),a["EXT-UpdateNotification_Delay"]=e.translate("VAL_EXT-UpdateNotification_Delay"),a["EXT-UpdateNotification_Ignore"]=e.translate("VAL_EXT-UpdateNotification_Ignore"),a["EXT-UpdateNotification_Commands"]=e.translate("VAL_EXT-UpdateNotification_Commands"),a["EXT-UpdateNotification_Module"]=e.translate("VAL_EXT-UpdateNotification_Module"),a["EXT-UpdateNotification_Command"]=e.translate("VAL_EXT-UpdateNotification_Command"),a["EXT-UpdateNotification_Notification"]=e.translate("VAL_EXT-UpdateNotification_Notification"),a["EXT-UpdateNotification_TB"]=e.translate("VAL_EXT-UpdateNotification_TB"),a["EXT-UpdateNotification_Ready"]=e.translate("VAL_EXT-UpdateNotification_Ready"),a["EXT-UpdateNotification_Screen"]=e.translate("VAL_EXT-UpdateNotification_Screen"),a["EXT-UpdateNotification_Callback"]=e.translate("VAL_EXT-UpdateNotification_Callback"),a["EXT-UpdateNotification_Update"]=e.translate("VAL_EXT-UpdateNotification_Update"),a["EXT-UpdateNotification_AutoUpdate"]=e.translate("VAL_EXT-UpdateNotification_AutoUpdate"),a["EXT-UpdateNotification_AutoRestart"]=e.translate("VAL_EXT-UpdateNotification_AutoRestart"),a["EXT-UpdateNotification_PM2"]=e.translate("VAL_EXT-UpdateNotification_PM2"),a["EXT-UpdateNotification_DefaultCommand"]=e.translate("VAL_EXT-UpdateNotification_DefaultCommand"),a["EXT-UpdateNotification_Log"]=e.translate("VAL_EXT-UpdateNotification_Log"),a["EXT-UpdateNotification_Timeout"]=e.translate("VAL_EXT-UpdateNotification_Timeout"),a["EXT-Volume_Start"]=e.translate("VAL_EXT-Volume_Start"),a["EXT-Volume_Sync"]=e.translate("VAL_EXT-Volume_Sync"),a["EXT-Welcome_Welcome"]=e.translate("VAL_EXT-Welcome_Welcome"),a["EXT-YouTube_Fullscreen"]=e.translate("VAL_EXT-YouTube_Fullscreen"),a["EXT-YouTube_Width"]=e.translate("VAL_EXT-YouTube_Width"),a["EXT-YouTube_Height"]=e.translate("VAL_EXT-YouTube_Height"),a["EXT-YouTube_Search"]=e.translate("VAL_EXT-YouTube_Search"),a["EXT-YouTube_Display"]=e.translate("VAL_EXT-YouTube_Display"),a["EXT-YouTube_Header"]=e.translate("VAL_EXT-YouTube_Header"),a["EXT-YouTube_Username"]=e.translate("VAL_EXT-YouTube_Username"),a["EXT-YouTube_Password"]=e.translate("VAL_EXT-YouTube_Password"),a["EXT-YouTubeCast_Name"]=e.translate("VAL_EXT-YouTubeCast_Name"),a["EXT-YouTubeCast_Port"]=e.translate("VAL_EXT-YouTubeCast_Port"),t(a)}))}}