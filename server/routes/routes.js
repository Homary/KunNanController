class List{
    '/'(res) {
        res.end('hello');
    }

    '/user/checkLogin' (res, path, params, method){
        require('./handles/login')(res, path, params, method);
    }

    '/user/loginOut' (res, path, params, method){
        require('./handles/quit')(res,method);
    }

    '/system/getSysList' (res, path, params, method){
        require('./handles/systemList')(res, method);
    }

    '/instruction/sendSysInstruction' (res, path, params, method){
        require('./handles/instruction')(res, params, method);
    }
}

const routerAttrList = Object.getOwnPropertyNames(List.prototype);

function isRouter(pathname) {
    return routerAttrList.find((item, index) => {

        if(pathname === item || pathname.startsWith(item) && (item !== '/')){
            return item;
        }else{
            return false;
        }
    })
}

module.exports = {
    isRouter,
    routerAttrList,
    list: new List()
}