 class FpayUtils {
    constructor() {
      
      if (!FpayUtils.instance) {
        FpayUtils.instance = this;
      }
      return FpayUtils.instance;
    }

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
        let result = window.flutter_inappwebview.callHandler("openBluetoothAdapter",options);
        if(result.code === 0){
          options.success(result);
        }else{
          options.error(result);
        }
        options.complete(result);
      }
      //开始搜索蓝牙列表
      async startBluetoothDevicesDiscovery(options){
        let result = window.flutter_inappwebview.callHandler("startBluetoothDevicesDiscovery",options);
        if(result.code === 0){
          setInterval(()=>{
            options.success(result);
          },1000)
        }else{
          options.error(result);
        }
        options.complete(result);
      }
  }