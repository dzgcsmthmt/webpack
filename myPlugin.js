class MyPlugin {
    apply(compiler) {
        compiler.hooks.make.tap('MyPlugin',(compilation) => {
            compilation.hooks.finishModules.tap('MyPlugin',(modules) =>{
                console.log(modules[0]._source);
            })
        });

        compiler.hooks.emit.tap('MyPlugin', (compilation, entry) => {
            var keys = ["_buildingModules", "_modules", "_pluginCompat", "_preparedEntrypoints", "_rebuildingModules", "additionalChunkAssets",
            "assets", "bail", "cache", "children", "childrenCounters", "chunkGroups", "chunkTemplate", "chunks", "compilationDependencie",
            "compiler", "contextDependencies", "contextTimestamps", "dependencyFactories", "dependencyTemplates", "entries", "entrypoints",
            "errors", "fileDependencies", "fileTimestamps", "fullHash", "hash", "hooks", "hotUpdateChunkTemplate", "inputFileSystem",
            "mainTemplate", "missingDependencies", "moduleTemplates", "modules", "name", "namedChunkGroups", "namedChunks",
            "options", "outputOptions", "performance", "profile", "records", "requestShortener", "resolverFactory",
            "runtimeTemplate", "semaphore", "usedChunkIds", "usedModuleIds", "warnings"]
            // console.log(compilation.modules[0]);
            // console.log(compilation.modules[0]._chunks);
            // console.log(Object.keys(compilation.hooks));
            // for (var variable of compilation.modules[0]) {
            //     if (compilation.hasOwnProperty(variable)) {
            //         console.log(variable,compilation.modules[0][variable]);
            //     }
            // };
            // for (var variable in compilation.assets) {
            //     if (compilation.assets.hasOwnProperty(variable)) {
            //         console.log(Object.keys(compilation.assets[variable]));
            //     }
            // };
            // compilation.assets.forEach(function (asset) {
            // let module;
            // for (module of chunk._modules) {
            // console.log('module',Reflect.ownKeys(module));
            // console.log(compilation.modules[0].optimizationBailout);
            Object.keys(compilation.modules[0]).forEach((key) => {
                if(key == '_source'){
                    console.log('-------------------------------------\r')
                }
                // console.log(key,compilation.modules[0][key]);
            });
            // console.log('module',module.dependencies);
            // for(let dep of module.dependencies){
            //     console.log(Object.keys(dep));
            // }
            // }
            // Object.keys(chunk).forEach((key) => {
            //     console.log(key);
            // });
            // });
            // chunk 代表一个代码块
            // 代码块由多个模块组成，通过 chunk.forEachModule 能读取组成代码块的每个模块
            //     chunk.forEachModule(function (module) {
            //         // module 代表一个模块
            //             // module.fileDependencies 存放当前模块的所有依赖的文件路径，是一个数组
            //         module.fileDependencies.forEach(function (filepath) {
            //     });
            // });

            // Webpack 会根据 Chunk 去生成输出的文件资源，每个 Chunk 都对应一个及其以上的输出文件
            // 例如在 Chunk 中包含了 CSS 模块并且使用了 ExtractTextPlugin 时，
            // 该 Chunk 就会生成 .js 和 .css 两个文件
            // chunk.files.forEach(function (filename) {
            //   // compilation.assets 存放当前所有即将输出的资源
            //   // 调用一个输出资源的 source() 方法能获取到输出资源的内容
            //   let source = compilation.assets[filename].source();
            // });
            // console.log(compilation.getStats())
            // console.log('assets',compilation.assets);
            // console.log('chunks',compilation.chunks);
            // compilation.hooks.moduleAsset.tap('SourceMapDevToolModuleOptionsPlugin', module => {
            //     console.log(module);
            // });
            // compilation.hooks.finishModules.tap('SourceMapDevToolModuleOptionsPlugin', modules => {
            //     console.log(Reflect.ownKeys(modules[0]));
            // });
            // compilation.hooks.seal.tap('SourceMapDevToolModuleOptionsPlugin', modules => {
            //     console.log('seal');
            // });
            // compilation.hooks.unseal.tap('SourceMapDevToolModuleOptionsPlugin', modules => {
            //     console.log('unseal');
            // });
        });
        // compiler.hooks.emit.tap('MyPlugin', (compilation, entry) => {
        // console.log('emit',compilation.chunks);
        // compilation.assets['abc.js'] = {
        //     source: function() { return '1234567' },
        //     size: function() { return 7; }
        // }
        // });
    }
}

module.exports = MyPlugin;
