import { UploadProgressEvent } from "./upload";
import { RequestOptions } from "./upload-content";

export function httpRequest(options: RequestOptions) {
  const xhr = new XMLHttpRequest();
  const action = options.action;
  //打开
  xhr.open(options.method, action, true);
  //加载时
  xhr.upload.addEventListener("progress", (e) => {
    const progressEvent = e as UploadProgressEvent;
    //获取进度条的百分比
    progressEvent.percentage = e.total > 0 ? (e.loaded / e.total) * 100 : 0;
    //调用上传进度
    options.onProgress(progressEvent);
  });
  //设置请求头
  const headers = options.headers;
  if (headers) {
    for (const [key, value] of Object.entries(options.headers)) {
      xhr.setRequestHeader(key, value);
    }
  }
  //设置请求体
  const formData = new FormData(); //主要用于构建和发送 multipart/form-data 类型的数据
  //用append方法添加键值对
  if (options.data) {
    for (const [key, value] of Object.entries(options.data)) {
      formData.append(key, value);
    }
  }
  //用append方法添加文件
  formData.append(options.name, options.file);

  //加载完
  xhr.onload = function () {
    if (xhr.status < 300 && xhr.status >= 200) {
      options.onSuccess(xhr.response);
    } else {
      options.onError({ status: xhr.status });
    }
  };
  //发生错误
  xhr.addEventListener("error", (error) => {
    options.onError(error);
  });
  //发送
  xhr.send(formData);

  return xhr;
}
