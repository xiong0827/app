let myPlugins={

}
myPlugins.install=function(Vue,options)
{
Vue.directive(options.name,(element,params)=>{
    console.log(element,params);
    element.innerHTML=params.value.toUpperCase();
})
}
export default myPlugins