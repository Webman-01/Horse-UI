import {
  withInstall
} from "./chunk-7FPKLWMX.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  guardReactiveProps,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-4DJJ5XJP.js";

// node_modules/horse-ui/es/components/upload/index.js
var baseProps = {
  FileList: {
    type: Array,
    default: () => []
  },
  action: {
    type: String,
    default: ""
  },
  multiple: {
    type: Boolean,
    default: false
  },
  //input中需要的类型
  name: {
    type: String,
    default: "file"
  },
  accept: {
    type: String,
    default: ""
  },
  //上传文件调用ajax需要的
  method: {
    type: String,
    default: "post"
  },
  headers: {
    type: Object,
    default: () => ({})
  },
  data: {
    type: Object,
    default: () => ({})
  },
  drag: {
    type: Boolean,
    default: false
  },
  avatarUploader: {
    type: Boolean,
    default: false
  },
  showFileList: {
    type: Boolean,
    default: true
  }
};
var DefaultFunction = () => {
};
var uploadProps = {
  ...baseProps,
  //预览
  onPreview: {
    type: Function,
    default: DefaultFunction
  },
  beforeUpload: {
    type: Function,
    default: DefaultFunction
  },
  onChange: {
    type: Function,
    default: DefaultFunction
  },
  beforeRemove: {
    type: Function,
    default: DefaultFunction
  },
  onRemove: {
    type: Function,
    default: DefaultFunction
  },
  onProgress: {
    type: Function,
    default: DefaultFunction
  },
  onSuccess: {
    type: Function,
    default: DefaultFunction
  },
  onError: {
    type: Function,
    default: DefaultFunction
  }
};
var id = 0;
var genId = () => id++;
var updateEmits = {
  "onUpdate:file-list": (val) => true
};
var _bem = (namespace, blockSuffix, element, modifier) => {
  let cls = namespace;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
function createBEM(namespace) {
  const b = (blockSuffix = "") => _bem(namespace, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace, blockSuffix, element, "") : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace, blockSuffix, "", modifier) : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace, "", element, modifier) : "";
  const bem2 = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace, blockSuffix, element, modifier) : "";
  const is = (name, state) => state ? `is-${name}` : "";
  return { b, e, m, be, bm, em, bem: bem2, is };
}
function createNameSpace(name) {
  const namespace = `h-${name}`;
  return createBEM(namespace);
}
var bem = createNameSpace("button");
console.log(bem.b("box"));
console.log(bem.bem("block", "element", "modifier"));
console.log(bem.is("isChecked", true));
var defaultFunction = () => {
};
var uploadContentProps = {
  ...baseProps,
  beforeUpload: uploadProps["beforeUpload"],
  onChange: uploadProps["onChange"],
  onStart: {
    type: Function,
    default: defaultFunction
  },
  onProgress: {
    type: Function,
    default: defaultFunction
  },
  onRemove: {
    type: Function,
    default: defaultFunction
  },
  onError: {
    type: Function,
    default: defaultFunction
  },
  onSuccess: {
    type: Function,
    default: defaultFunction
  }
};
function httpRequest(options) {
  const xhr = new XMLHttpRequest();
  const action = options.action;
  xhr.open(options.method, action, true);
  xhr.upload.addEventListener("progress", (e) => {
    const progressEvent = e;
    progressEvent.percentage = e.total > 0 ? e.loaded / e.total * 100 : 0;
    options.onProgress(progressEvent);
  });
  const headers = options.headers;
  if (headers) {
    for (const [key, value] of Object.entries(options.headers)) {
      xhr.setRequestHeader(key, value);
    }
  }
  const formData = new FormData();
  if (options.data) {
    for (const [key, value] of Object.entries(options.data)) {
      formData.append(key, value);
    }
  }
  formData.append(options.name, options.file);
  xhr.onload = function() {
    if (xhr.status < 300 && xhr.status >= 200) {
      options.onSuccess(xhr.response);
    } else {
      options.onError({ status: xhr.status });
    }
  };
  xhr.addEventListener("error", (error) => {
    options.onError(error);
  });
  xhr.send(formData);
  return xhr;
}
var script$3 = defineComponent({
  __name: "upload-content-drag",
  emits: {},
  setup(__props, { emit: __emit }) {
    const bem2 = createNameSpace("upload");
    const isOver = ref(false);
    const emit = __emit;
    const onDrop = (e) => {
      e.stopPropagation();
      emit("file", Array.from(e.dataTransfer.files));
    };
    const onDragover = (e) => {
      isOver.value = true;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(bem2).b("dragger")),
          onDragover: withModifiers(onDragover, ["prevent"]),
          onDragleave: _cache[0] || (_cache[0] = withModifiers(($event) => isOver.value = false, ["prevent"])),
          onDrop: withModifiers(onDrop, ["prevent"])
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        34
        /* CLASS, NEED_HYDRATION */
      );
    };
  }
});
script$3.__file = "packages/components/upload/src/upload-content-drag.vue";
var _hoisted_1$3 = ["name", "accept", "multiple"];
var script$2 = defineComponent({
  ...{
    name: "h-upload",
    inheritAttrs: false
  },
  __name: "upload-content",
  props: uploadContentProps,
  setup(__props) {
    const bem2 = createNameSpace("upload");
    const props = __props;
    const inputRef = ref();
    const handleClick = () => {
      inputRef.value.value = "";
      inputRef.value.click();
    };
    async function upload(file) {
      let result = await props.beforeUpload(file);
      if (!result) return props.onRemove(file);
      console.log(result, "result");
      const { method, name, action, headers, data } = props;
      httpRequest({
        method,
        file,
        name,
        action,
        headers,
        data,
        onError: (error) => {
          props.onError(error, file);
        },
        onSuccess: (res) => {
          props.onSuccess(res, file);
        },
        onProgress: (e) => {
          props.onProgress(e, file);
        }
      });
    }
    const uploadFiles = (files) => {
      for (let i = 0; i < files.length; i++) {
        const rawFile = files[i];
        rawFile.uid = genId();
        props.onStart(rawFile);
        upload(rawFile);
      }
    };
    const handleChange = (e) => {
      const files = e.target.files;
      console.log(files, "files111");
      uploadFiles(files);
      console.log(files, "files222  ");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          onClick: handleClick,
          class: normalizeClass([unref(bem2).b()])
        },
        [
          createCommentVNode(" 可拖动上传 "),
          _ctx.drag ? (openBlock(), createBlock(script$3, {
            key: 0,
            onFile: uploadFiles
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
            /* FORWARDED */
          })) : (openBlock(), createElementBlock(
            Fragment,
            { key: 1 },
            [
              createCommentVNode(" 普通 "),
              renderSlot(_ctx.$slots, "default")
            ],
            64
            /* STABLE_FRAGMENT */
          )),
          createBaseVNode("input", {
            type: "file",
            ref_key: "inputRef",
            ref: inputRef,
            name: _ctx.name,
            accept: _ctx.accept,
            multiple: _ctx.multiple,
            onChange: handleChange
          }, null, 40, _hoisted_1$3)
        ],
        2
        /* CLASS */
      );
    };
  }
});
script$2.__file = "packages/components/upload/src/upload-content.vue";
var iconProps = {
  color: String,
  size: [Number, String]
};
var script$1 = defineComponent({
  ...{
    name: "h-icon"
  },
  __name: "icon",
  props: iconProps,
  setup(__props) {
    const bem2 = createNameSpace("icon");
    const props = __props;
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color) return {};
      return {
        ...size ? { "font-size": size + "px" } : {},
        ...color ? { color } : {}
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "i",
        {
          class: normalizeClass(unref(bem2).b()),
          style: normalizeStyle(style.value)
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});
script$1.__file = "packages/components/icon/src/icon.vue";
var Icon = withInstall(script$1);
var _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
var _hoisted_2$1 = createBaseVNode(
  "path",
  {
    d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$1 = createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M352 176L217.6 336L160 272"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4$1 = [_hoisted_2$1, _hoisted_3$1];
var CheckmarkCircleOutline = defineComponent({
  name: "CheckmarkCircleOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4$1);
  }
});
var _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
var _hoisted_2 = createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M368 368L144 144"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3 = createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M368 144L144 368"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4 = [_hoisted_2, _hoisted_3];
var CloseOutline = defineComponent({
  name: "CloseOutline",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4);
  }
});
var _hoisted_1 = { class: "progress-text" };
var script = defineComponent({
  ...{
    name: "h-upload"
  },
  __name: "upload",
  props: uploadProps,
  emits: updateEmits,
  setup(__props, { emit: __emit }) {
    const bem2 = createNameSpace("upload");
    const props = __props;
    const emit = __emit;
    const uploadFiles = ref(props.FileList);
    watch(uploadFiles, (newVal) => {
      emit("onUpdate:file-list", newVal);
    });
    const findFile = (rawFile) => {
      return uploadFiles.value.find((file) => file.uid === rawFile.uid);
    };
    const uploadContentProps2 = computed(() => ({
      ...props,
      //上传前
      onStart: (rawFile) => {
        console.log("start");
        const uploadFile = {
          uid: rawFile.uid,
          name: rawFile.name,
          percentage: 0,
          raw: rawFile,
          size: rawFile.size,
          status: "start"
        };
        uploadFile.url = URL.createObjectURL(rawFile);
        uploadFiles.value = [...uploadFiles.value, uploadFile];
        props.onChange(uploadFile);
      },
      onProgress: (file, rawFile) => {
        console.log("progress");
        const uploadFile = findFile(rawFile);
        console.log(uploadFiles.value, "000");
        uploadFile.status = "uploading";
        uploadFile.percentage = file.percentage;
        props.onProgress(file, uploadFile, uploadFiles.value);
      },
      onRemove: async (rawFile) => {
        console.log("remove");
        const uploadFile = findFile(rawFile);
        const result = await props.beforeRemove(uploadFile, uploadFiles.value);
        if (result) {
          const fileList = uploadFiles.value;
          fileList.splice(fileList.indexOf(uploadFile), 1);
          props.onRemove(uploadFile, uploadFiles.value);
        }
      },
      onError: (error, rawFile) => {
        console.log("err");
        const uploadFile = findFile(rawFile);
        uploadFile.status = "error";
        const fileList = uploadFiles.value;
        fileList.splice(fileList.indexOf(uploadFile), 1);
        props.onError(error, uploadFile, fileList);
      },
      onSuccess: (res, rawFile) => {
        console.log("success");
        const uploadFile = findFile(rawFile);
        uploadFile.status = "success";
        const fileList = uploadFiles.value;
        props.onSuccess(res, uploadFile, fileList);
      }
    }));
    const deleteFile = (index) => {
      uploadFiles.value.splice(index, 1);
      emit("onUpdate:file-list", uploadFiles);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createVNode(
            script$2,
            normalizeProps(guardReactiveProps(uploadContentProps2.value)),
            {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
              /* FORWARDED */
            },
            16
            /* FULL_PROPS */
          ),
          createCommentVNode(" {{ uploadFiles }} "),
          createCommentVNode(" 展示的文件列表 "),
          withDirectives(createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(bem2).b("list"))
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(uploadFiles.value, (item, index) => {
                  return openBlock(), createElementBlock(
                    "div",
                    {
                      class: normalizeClass(unref(bem2).be("list", "item")),
                      key: index
                    },
                    [
                      createBaseVNode(
                        "div",
                        {
                          class: normalizeClass(unref(bem2).be("list", "item-name"))
                        },
                        toDisplayString(item.name),
                        3
                        /* TEXT, CLASS */
                      ),
                      createCommentVNode(" show check "),
                      createBaseVNode(
                        "div",
                        {
                          class: normalizeClass(unref(bem2).be("list", "item-label"))
                        },
                        [
                          withDirectives(createVNode(
                            unref(Icon),
                            { size: 20 },
                            {
                              default: withCtx(() => [
                                createVNode(unref(CheckmarkCircleOutline))
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1536
                            /* NEED_PATCH, DYNAMIC_SLOTS */
                          ), [
                            [vShow, item.percentage === 100]
                          ])
                        ],
                        2
                        /* CLASS */
                      ),
                      createCommentVNode(" show close "),
                      createBaseVNode(
                        "div",
                        {
                          class: normalizeClass(unref(bem2).be("list", "item-label-hover"))
                        },
                        [
                          createVNode(unref(Icon), {
                            onClick: ($event) => deleteFile(index),
                            size: 20
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(CloseOutline))
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["onClick"])
                        ],
                        2
                        /* CLASS */
                      ),
                      createCommentVNode(" 进度条 "),
                      withDirectives(createBaseVNode(
                        "div",
                        {
                          class: normalizeClass(unref(bem2).b("progress"))
                        },
                        [
                          createBaseVNode(
                            "div",
                            {
                              class: normalizeClass(unref(bem2).b("pro1gress-bar")),
                              style: normalizeStyle({ width: item.percentage + "%" })
                            },
                            null,
                            6
                            /* CLASS, STYLE */
                          ),
                          createBaseVNode(
                            "div",
                            _hoisted_1,
                            toDisplayString(Math.floor(item.percentage)) + "%",
                            1
                            /* TEXT */
                          )
                        ],
                        2
                        /* CLASS */
                      ), [
                        [vShow, item.percentage !== 100]
                      ])
                    ],
                    2
                    /* CLASS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            2
            /* CLASS */
          ), [
            [vShow, _ctx.showFileList]
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
script.__file = "packages/components/upload/src/upload.vue";
var Upload = withInstall(script);
export {
  Upload,
  baseProps,
  Upload as default,
  genId,
  updateEmits,
  uploadProps
};
//# sourceMappingURL=horse-ui_es_components_upload_index__js.js.map
