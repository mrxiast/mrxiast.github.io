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
  async login(options) {
    var appInfo = await window.flutter_inappwebview.callHandler('miniAppInfo');

    var result = await window.flutter_inappwebview.callHandler('getJsCode',
      appInfo,
    );
    if (result.code === 0) {
      options.success(result);
    } else {
      options.error(result);
    }
  }

  //获取用户授权
  async getProfile(options) {
    var appInfo = await window.flutter_inappwebview.callHandler('miniAppInfo');
    var result = await window.flutter_inappwebview.callHandler('getAuth',
      appInfo,
    );
    if (result.code === 0) {
      options.success(result);
    } else {
      options.error(result);
    }
  }

  async requestPayment(options) {
    var result = await window.flutter_inappwebview.callHandler('requestPayment', options);
    if (result.code === 0) {
      options.success(result);
    } else {
      options.error(result);
    }
  }
  //初始化蓝牙模块
  async openBluetoothAdapter(options) {
    let result = await window.flutter_inappwebview.callHandler("openBluetoothAdapter", options);
    if (result.code !== -1) {
      options.success(result);
    } else {
      options.error(result);
    }
    options.complete(result);
  }
  //开始搜索蓝牙列表
  async startBluetoothDevicesDiscovery(options) {
    let result = await window.flutter_inappwebview.callHandler("startBluetoothDevicesDiscovery", options);
    if (result.code !== -1) {
      options.success(result);
    } else {
      options.error(result);
    }
    options.complete(result);
  }

  //停止搜索蓝牙列表
  async stopBluetoothDevicesDiscovery(options) {
    let result = await window.flutter_inappwebview.callHandler("stopBluetoothDevicesDiscovery", options);
    if (result.code !== -1) {
      options.success(result);
    } else {
      options.error(result);
    }
    options.complete(result);
  }
  //获取蓝牙适配器状态
  async getBluetoothAdapterState(options) {
    let result = await window.flutter_inappwebview.callHandler("getBluetoothAdapterState", options);
    if (result.code !== -1) {
      options.success(result);
    } else {
      options.error(result);
    }
    options.complete(result);
  }

  //获取所有的蓝牙设备
  async getBluetoothDevices(options) {
    let result = await window.flutter_inappwebview.callHandler("getBluetoothDevices", options);
    if (result.code !== -1) {
      options.success(result);
    } else {
      options.error(result);
    }
    options.complete(result);
  }
  //关闭蓝牙
  async closeBluetoothAdapter(options) {
    let result = await window.flutter_inappwebview.callHandler("closeBluetoothAdapter", options);
    if (result.code !== -1) {
      options.success(result);
    } else {
      options.error(result);
    }
    options.complete(result);
  }
  //连接低功耗蓝牙
  async createBLEConnection(options) {
    let result = await window.flutter_inappwebview.callHandler("createBLEConnection", options);
    if (result.code !== -1) {
      options.success(result);
    } else {
      options.error(result);
    }
    options.complete(result);
  }

  //获取蓝牙设备所有服务(service)
  async getBLEDeviceServices(options) {
    let result = await window.flutter_inappwebview.callHandler("getBLEDeviceServices", options);
    if (result.code !== -1) {
      options.success(result);
    } else {
      options.error(result);
    }
    options.complete(result);
  }

  //获取蓝牙设备某个服务中所有特征值(characteristic)
  async getBLEDeviceCharacteristics(options) {
    let result = await window.flutter_inappwebview.callHandler("getBLEDeviceCharacteristics", options);
    if (result.code !== -1) {
      options.success(result);
    } else {
      options.error(result);
    }
    options.complete(result);
  }

  //写入二进制数据
  async writeBLECharacteristicValue(options) {
    let result = await window.flutter_inappwebview.callHandler("writeBLECharacteristicValue", options);
    if (result.code !== -1) {
      options.success(result);
    } else {
      options.error(result);
    }
    options.complete(result);
  }

  //读取低功耗蓝牙设备的特征值的二进制数据值
  async readBLECharacteristicValue(options) {
    let result = await window.flutter_inappwebview.callHandler("readBLECharacteristicValue", options);
    if (result.code !== -1) {
      options.success(result);
    } else {
      options.error(result);
    }
    options.complete(result);
  }
  //断开低功耗蓝牙
  async closeBLEConnection(options) {
    let result = await window.flutter_inappwebview.callHandler("closeBLEConnection", options);
    if (result.code !== -1) {
      options.success(result);
    } else {
      options.error(result);
    }
    options.complete(result);
  }
}