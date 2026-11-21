/* LabKit 卡片扩展示例（classic script，零构建）
   kind = "widget"：只允许注册 Dashboard 卡片，调用 registerTool 会被类型门禁拒绝。
   卡片由注册表声明支持的尺寸档；body(size) 出骨架，render(el,size) 刷数据。
   契约见主仓库 docs/PLUGIN_DEV.md；视觉 token 见 docs/DESIGN_SYSTEM.md。 */
(function () {
  'use strict';

  LabKit.registerWidget({
    id: 'hello-card',
    title: '示例卡片',
    desc: '多尺寸形态演示',
    size: '2x2',
    sizes: ['1x1', '1x2', '2x2', '4x2'],
    body: function (size) {
      return size.w <= 1 && size.h <= 1
        ? '<div id="starterMini"></div>'
        : '<div id="starterFull"></div>';
    },
    render: function (el, size) {
      var metas = window.TOOL_META || [];
      var pluginTools = metas.filter(function (t) { return t.plugin; }).length;
      var groups = {};
      metas.forEach(function (t) { groups[t.group || '未分组'] = true; });
      var mini = el.querySelector('#starterMini');
      var full = el.querySelector('#starterFull');
      if (mini) {
        mini.innerHTML =
          '<div class="big-num">' + pluginTools + '</div>' +
          '<div class="sub">个来自扩展的工具</div>';
      }
      if (full) {
        full.innerHTML =
          '<div class="sub">已安装工具扩展提供 ' + pluginTools + ' 个工具 · ' +
          Object.keys(groups).length + ' 个分组 · 当前卡片 ' + size.w + '×' + size.h + '</div>';
      }
    },
  });
})();
