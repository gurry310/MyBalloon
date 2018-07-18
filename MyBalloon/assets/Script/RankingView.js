cc.Class({
    extends: cc.Component,
    name: "RankingView",
    properties: {
        groupFriendButton: cc.Node,
        friendButton: cc.Node,
        gameOverButton: cc.Node,
        rankingScrollView: cc.Sprite,//显示排行榜
    },
    onLoad() {
        this.timer = 0;
    },

    goStart: function () {
        cc.director.loadScene('start');
    },

    start() {
        if (CC_WECHATGAME) {
            window.wx.showShareMenu({ withShareTicket: true });//设置分享按钮，方便获取群id展示群排行榜
            this.tex = new cc.Texture2D();
            window.sharedCanvas.width = 1080;
            window.sharedCanvas.height = 1920;
            window.wx.postMessage({
                messageType: 1,
                MAIN_MENU_NUM: "user_best_score"
            });


            this.scheduleOnce(this._updateSubDomainCanvas,3.0);
        }
    },
    friendButtonFunc(event) {
        if (CC_WECHATGAME) {
            // 发消息给子域
            window.wx.postMessage({
                messageType: 1,
                MAIN_MENU_NUM: "user_best_score"
            });
        } else {
         
        }
    },

    groupFriendButtonFunc: function (event) {
        if (CC_WECHATGAME) {
            window.wx.shareAppMessage({
                success: (res) => {
                    if (res.shareTickets != undefined && res.shareTickets.length > 0) {
                        window.wx.postMessage({
                            messageType: 5,
                            MAIN_MENU_NUM: "user_best_score",
                            shareTicket: res.shareTickets[0]
                        });
                    }
                }
            });
        } else {
           
        }
    },

    gameOverButtonFunc: function (event) {
        if (CC_WECHATGAME) {
            window.wx.postMessage({// 发消息给子域
                messageType: 4,
                MAIN_MENU_NUM: "user_best_score"
            });
        } else {
            
        }
    },


    // submitScoreButtonFunc(){
    //     let score = 123;
    //     if (CC_WECHATGAME) {
    //         window.wx.postMessage({
    //             messageType: 3,
    //             MAIN_MENU_NUM: "user_best_score",
    //             score: score,
    //         });
    //     } else {
    //         cc.log("提交得分: x1 : " + score)
    //     }
    // },

    // 刷新子域的纹理
    _updateSubDomainCanvas() {
        if (window.sharedCanvas != undefined) {
            this.tex.initWithElement(window.sharedCanvas);
            this.tex.handleLoadedTexture();
            this.rankingScrollView.spriteFrame = new cc.SpriteFrame(this.tex);
        }
    },
    update(dt) {
        //this._updateSubDomainCanvas();
        // this.timer += dt;
        // if (this.timer > 2) {
        //     this._updateSubDomainCanvas();
        //     this.timer = 0;
        // }

    },
});
