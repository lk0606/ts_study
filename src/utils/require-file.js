

const path = require('path')

/**
 * @desc 批量引入文件，节省代码
 * @param _path <string> 要引入文件的相对路径，就像平常引入文件一样
 * @param _ext <string> 文件扩展名 不带点
 */
function requireFile(_path, _ext) {
    // 自动引入./modules组件
    const reg = new RegExp(`\.${_ext}$`)
    const files = require.context(_path, false, reg)
    const modules = {}
    files.keys().forEach(key=> {
        const name = path.basename(key, '.vue')
        console.log(key, name, files, 'key, name, files[key]')
        modules[name] = files(key).default || files(key)
    })
    return modules
}
module.exports = {
    requireFile
}
