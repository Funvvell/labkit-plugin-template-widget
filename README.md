# LabKit 卡片扩展示例（本地副本）

对应社区仓库 `Funvvell/labkit-plugin-template-widget`。演示**只注册 Dashboard 卡片**的包：
`manifest.kind = "widget"`，`main.js` 只调用 `LabKit.registerWidget()`。

- `manifest.json`：`kind` 必须是 `widget`；
- `main.js`：一个 1×1 / 1×2 / 2×2 / 4×2 四档尺寸的卡片；
- `styles.css`：带 `x-starter-card-` 前缀的专属样式。

工具扩展见同级的 `labkit-plugin-template/`（`kind = "tool"`，只调 `registerTool`）。

## 调试

1. 复制本目录到任意位置，改 `manifest.json` 的 `id` / `name`。
2. LabKit →「扩展管理」→ 载入为「卡片扩展」→ 选择目录。
3. 装好后到首页「+ 添加卡片 → 获取卡片」，或直接在「已装卡片」里勾选。

## 发布

```bash
git tag v1.1.0 && git push origin v1.1.0
```

Release 生成后，到索引仓库 `Funvvell/labkit-plugins` 的 `widgets.json` 追加条目并发 PR。
详见主仓库 `docs/PLUGIN_DEV.md`。
