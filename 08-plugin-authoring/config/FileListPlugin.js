class FileListPlugin {
  static defaultOptions = {
    outputFile: "assets.md",
  };

  constructor(options = {}) {
    this.options = { ...FileListPlugin.defaultOptions, ...options };
  }

  apply(compiler) {
    const pluginName = FileListPlugin.name;

    const { webpack } = compiler;

    const { Compilation } = webpack;

    const { RawSource } = webpack.sources;

    compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: pluginName,
          stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
        },
        (assets) => {
          const content =
            "# In this build:\n\n" +
            Object.keys(assets)
              .map((filename) => `- ${filename}`)
              .join("\n");

          compilation.emitAsset(
            this.options.outputFile,
            new RawSource(content)
          );
        }
      );
    });
  }
}

module.exports = { FileListPlugin };
