cc.Class({
    extends: cc.Component,

    properties: {
       
     
    },

   

    // use this for initialization
    onLoad: function () {
       //初始化要根据checkpoint来读取相应的关卡数据
       
       //1读取 数据 还是加载场景？ wtf
       cc.log("game scenen!");
       //读取prefab 然后放入到 gameLayer中，让 卫士，气球，敌人，奖励品，墙之间去交互
       //这个prefab中 会有敌人和奖品（金币）还会有一些障碍物（黑色的墙）
    },

    // called every frame
    update: function (dt) {

    },


});
