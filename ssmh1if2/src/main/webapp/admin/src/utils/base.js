const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmh1if2/",
            name: "ssmh1if2",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmh1if2/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "罪犯信息管理系统"
        } 
    }
}
export default base
