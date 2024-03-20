 class FpayUtils {
    constructor() {
      if (!FpayUtils.instance) {
        FpayUtils.instance = this;
      }
      return FpayUtils.instance;
    }
    timeInterval;

    static getInstance(config) {
      return FpayUtils.instance || new FpayUtils();
    }
      //静默授权码
      async login(options){
        var appInfo =await window.flutter_inappwebview.callHandler('miniAppInfo');
      
        var result =await window.flutter_inappwebview.callHandler('getJsCode',
          appInfo,
        );
        if(result.code === 0){
          options.success(result);
        }else{
          options.error(result);
        }
      }

      //获取用户授权
      async getProfile(options){
        var appInfo =await window.flutter_inappwebview.callHandler('miniAppInfo');
        var result =await window.flutter_inappwebview.callHandler('getAuth',
          appInfo,
        );
        if(result.code === 0){
          options.success(result);
        }else{
          options.error(result);
        }
      }

      async requestPayment(options){
        var result =await window.flutter_inappwebview.callHandler('requestPayment',options);
        if(result.code === 0){
          options.success(result);
        }else{
          options.error(result);
        }
      }
      //初始化蓝牙模块
      async openBluetoothAdapter(options){
        let result =await window.flutter_inappwebview.callHandler("openBluetoothAdapter",options);
        if(result.code !==-1){
          options.success(result);
        }else{
          options.error(result);
        }
        options.complete(result);
      }
      //开始搜索蓝牙列表
      async startBluetoothDevicesDiscovery(options){
        let result =await window.flutter_inappwebview.callHandler("startBluetoothDevicesDiscovery",options);
        if(result.code !==-1){
          options.success(result);
        }else{
          options.error(result);
        }
        options.complete(result);
      }
      //监听蓝牙
      async onBluetoothDeviceFound(options){
        timeInterval = setInterval(async()=>{
          let result =await window.flutter_inappwebview.callHandler("onBluetoothDeviceFound",options);
        if(result.code !==-1){
          options.success(result);
        }else{
          options.error(result);
        }
        options.complete(result);
        },1000)
        
      }
      //停止搜索蓝牙列表
      async stopBluetoothDevicesDiscovery(options){
        let result =await window.flutter_inappwebview.callHandler("stopBluetoothDevicesDiscovery",options);
        if(result.code !==-1){
          options.success(result);
        }else{
          options.error(result);
        }
        options.complete(result);
      }
      //获取蓝牙适配器状态
      async getBluetoothAdapterState(options){
        let result =await window.flutter_inappwebview.callHandler("getBluetoothAdapterState",options);
        if(result.code !==-1){
          options.success(result);
        }else{
          options.error(result);
        }
        options.complete(result);
      }
      //获取链接的设备列表
      async getConnectedBluetoothDevices(options){
        let result =await window.flutter_inappwebview.callHandler("getConnectedBluetoothDevices",options);
        if(result.code !==-1){
          options.success(result);
        }else{
          options.error(result);
        }
        options.complete(result);
      }
      //获取所有的蓝牙设备
      async getBluetoothDevices(options){
        let result =await window.flutter_inappwebview.callHandler("getBluetoothDevices",options);
        if(result.code !==-1){
          options.success(result);
        }else{
          options.error(result);
        }
        options.complete(result);
      }
      //关闭蓝牙
      async closeBluetoothAdapter(options){
        let result =await window.flutter_inappwebview.callHandler("closeBluetoothAdapter",options);
        if(result.code !==-1){
          options.success(result);
        }else{
          options.error(result);
        }
        options.complete(result);
      }
  }