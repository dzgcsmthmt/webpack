
/*
* path router对应path
* level 取第几级 0代表hash全路径
* isFullPath 是否要全路径
*/
export const getPath = function(path,level,isFullPath){
    if(!path){
        return '';
    }
    //处理一下全路径的情况 /index#/resource-center/knowledge/list
    let index,paths,i,result = '';
    if((index = path.indexOf('#')) > -1){
        path = path.substring(index + 1);
    }
    if(level == 0){
        return path;
    }
    paths = path.split('\/');
    if(!isFullPath){
        return paths[level] || '';
    }

    for(i = 0;i < level;i++){
        if(paths[i + 1]){
            result += '/' + paths[i + 1];
        }
    }

    return result;

}
