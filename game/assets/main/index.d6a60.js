window.__require=function t(e,i,s){function o(c,l){if(!i[c]){if(!e[c]){var a=c.split("/");if(a=a[a.length-1],!e[a]){var r="function"==typeof __require&&__require;if(!l&&r)return r(a,!0);if(n)return n(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var h=i[c]={exports:{}};e[c][0].call(h.exports,function(t){return o(e[c][1][t]||t)},h,h.exports,t,e,i,s)}return i[c].exports}for(var n="function"==typeof __require&&__require,c=0;c<s.length;c++)o(s[c]);return o}({AudioUtils:[function(t,e){"use strict";cc._RF.push(e,"fe151y+R2lFvas76dyah2Uf","AudioUtils"),cc.Class({extends:cc.Component,properties:{swap:{type:cc.AudioClip,default:null},click:{type:cc.AudioClip,default:null},eliminate:{type:[cc.AudioClip],default:[]},continuousMatch:{type:[cc.AudioClip],default:[]}},onLoad:function(){},start:function(){},playClick:function(){cc.audioEngine.play(this.click,!1,1)},playSwap:function(){cc.audioEngine.play(this.swap,!1,1)},playEliminate:function(t){t=Math.min(this.eliminate.length-1,t),cc.audioEngine.play(this.eliminate[t],!1,1)},playContinuousMatch:function(t){console.log("step = ",t),(t=Math.min(t,11))<2||cc.audioEngine.play(this.continuousMatch[Math.floor(t/2)-1],!1,1)}}),cc._RF.pop()},{}],CellModel:[function(t,e,i){"use strict";cc._RF.push(e,"dae88GCevBMaK7lQqhume8G","CellModel"),i.__esModule=!0,i.default=void 0;var s=t("./ConstValue"),o=function(){function t(){this.type=null,this.status=s.CELL_STATUS.COMMON,this.x=1,this.y=1,this.startX=1,this.startY=1,this.cmd=[],this.isDeath=!1,this.objecCount=Math.floor(1e3*Math.random())}var e=t.prototype;return e.init=function(t){this.type=t},e.isEmpty=function(){return this.type==s.CELL_TYPE.EMPTY},e.setEmpty=function(){this.type=s.CELL_TYPE.EMPTY},e.setXY=function(t,e){this.x=t,this.y=e},e.setStartXY=function(t,e){this.startX=t,this.startY=e},e.setStatus=function(t){this.status=t},e.moveToAndBack=function(t){var e=cc.v2(this.x,this.y);this.cmd.push({action:"moveTo",keepTime:s.ANITIME.TOUCH_MOVE,playTime:0,pos:t}),this.cmd.push({action:"moveTo",keepTime:s.ANITIME.TOUCH_MOVE,playTime:s.ANITIME.TOUCH_MOVE,pos:e})},e.moveTo=function(t,e){cc.v2(this.x,this.y),this.cmd.push({action:"moveTo",keepTime:s.ANITIME.TOUCH_MOVE,playTime:e,pos:t}),this.x=t.x,this.y=t.y},e.toDie=function(t){this.cmd.push({action:"toDie",playTime:t,keepTime:s.ANITIME.DIE}),this.isDeath=!0},e.toShake=function(t){this.cmd.push({action:"toShake",playTime:t,keepTime:s.ANITIME.DIE_SHAKE})},e.setVisible=function(t,e){this.cmd.push({action:"setVisible",playTime:t,keepTime:0,isVisible:e})},e.moveToAndDie=function(){},e.isBird=function(){return this.type==s.CELL_TYPE.G},t}();i.default=o,e.exports=i.default,cc._RF.pop()},{"./ConstValue":"ConstValue"}],CellView:[function(t,e){"use strict";cc._RF.push(e,"fbf19Cx4ptFV62UZ7+qJJpQ","CellView");var i=t("../Model/ConstValue");cc.Class({extends:cc.Component,properties:{defaultFrame:{default:null,type:cc.SpriteFrame}},onLoad:function(){this.isSelect=!1},initWithModel:function(t){this.model=t;var e=t.startX,s=t.startY;this.node.x=i.CELL_WIDTH*(e-.5),this.node.y=i.CELL_HEIGHT*(s-.5);var o=this.node.getComponent(cc.Animation);t.status==i.CELL_STATUS.COMMON?o.stop():o.play(t.status)},updateView:function(){var t=this,e=this.model.cmd;if(!(e.length<=0)){var s,o=[],n=0;for(var c in e){if(e[c].playTime>n){var l=cc.delayTime(e[c].playTime-n);o.push(l)}if("moveTo"==e[c].action){var a=(e[c].pos.x-.5)*i.CELL_WIDTH,r=(e[c].pos.y-.5)*i.CELL_HEIGHT,h=cc.moveTo(i.ANITIME.TOUCH_MOVE,cc.v2(a,r));o.push(h)}else if("toDie"==e[c].action){this.status==i.CELL_STATUS.BIRD&&(this.node.getComponent(cc.Animation).play("effect"),o.push(cc.delayTime(i.ANITIME.BOMB_BIRD_DELAY)));var u=cc.callFunc(function(){this.node.destroy()},this);o.push(u)}else if("setVisible"==e[c].action)(function(){var i=e[c].isVisible;o.push(cc.callFunc(function(){this.node.opacity=i?255:0},t))})();else if("toShake"==e[c].action){var d=cc.rotateBy(.06,30),f=cc.rotateBy(.12,-60);o.push(cc.repeat(cc.sequence(d,f,d),2))}n=e[c].playTime+e[c].keepTime}1==o.length?this.node.runAction(o[0]):this.node.runAction((s=cc).sequence.apply(s,o))}},setSelect:function(t){var e=this.node.getComponent(cc.Animation),s=this.node.getChildByName("select");0==t&&this.isSelect&&this.model.status==i.CELL_STATUS.COMMON?(e.stop(),this.node.getComponent(cc.Sprite).spriteFrame=this.defaultFrame):t&&this.model.status==i.CELL_STATUS.COMMON?e.play(i.CELL_STATUS.CLICK):t&&this.model.status==i.CELL_STATUS.BIRD&&e.play(i.CELL_STATUS.CLICK),s.active=t,this.isSelect=t}}),cc._RF.pop()},{"../Model/ConstValue":"ConstValue"}],ConstValue:[function(t,e,i){"use strict";cc._RF.push(e,"f9088esGbNBtJmNaJsz0Gq4","ConstValue"),i.__esModule=!0,i.GRID_WIDTH=i.GRID_PIXEL_WIDTH=i.GRID_PIXEL_HEIGHT=i.GRID_HEIGHT=i.CELL_WIDTH=i.CELL_TYPE=i.CELL_STATUS=i.CELL_HEIGHT=i.CELL_BASENUM=i.ANITIME=void 0,i.CELL_TYPE={EMPTY:0,A:1,B:2,C:3,D:4,E:5,F:6,BIRD:7},i.CELL_BASENUM=6,i.CELL_STATUS={COMMON:0,CLICK:"click",LINE:"line",COLUMN:"column",WRAP:"wrap",BIRD:"bird"},i.GRID_WIDTH=9,i.GRID_HEIGHT=9,i.CELL_WIDTH=70,i.CELL_HEIGHT=70,i.GRID_PIXEL_WIDTH=630,i.GRID_PIXEL_HEIGHT=630,i.ANITIME={TOUCH_MOVE:.3,DIE:.2,DOWN:.5,BOMB_DELAY:.3,BOMB_BIRD_DELAY:.7,DIE_SHAKE:.4},cc._RF.pop()},{}],EffectLayer:[function(t,e){"use strict";cc._RF.push(e,"0e925myn0dIjqdao1TpipF9","EffectLayer");var i,s=t("../Model/ConstValue"),o=(i=t("../Utils/AudioUtils"))&&i.__esModule?i:{default:i};cc.Class({extends:cc.Component,properties:{bombWhite:{default:null,type:cc.Prefab},crushEffect:{default:null,type:cc.Prefab},audioUtils:{type:o.default,default:null}},onLoad:function(){},playEffects:function(t){if(t&&!(t.length<=0)){var e={};t.forEach(function(t){var i=cc.delayTime(t.playTime),o=cc.callFunc(function(){var i=null,o=null;"crush"==t.action?((o=(i=cc.instantiate(this.crushEffect)).getComponent(cc.Animation)).play("effect"),!e["crush"+t.playTime]&&this.audioUtils.playEliminate(t.step),e["crush"+t.playTime]=!0):"rowBomb"==t.action?(o=(i=cc.instantiate(this.bombWhite)).getComponent(cc.Animation)).play("effect_line"):"colBomb"==t.action&&(o=(i=cc.instantiate(this.bombWhite)).getComponent(cc.Animation)).play("effect_col"),i.x=s.CELL_WIDTH*(t.pos.x-.5),i.y=s.CELL_WIDTH*(t.pos.y-.5),i.parent=this.node,o.on("finished",function(){i.destroy()},this)},this);this.node.runAction(cc.sequence(i,o))},this)}}}),cc._RF.pop()},{"../Model/ConstValue":"ConstValue","../Utils/AudioUtils":"AudioUtils"}],GameController:[function(t,e){"use strict";cc._RF.push(e,"5ac64Iq16lBqrHZ0246FRcZ","GameController");var i=o(t("../Model/GameModel")),s=o(t("../Utils/Toast"));function o(t){return t&&t.__esModule?t:{default:t}}cc.Class({extends:cc.Component,properties:{grid:{default:null,type:cc.Node},audioButton:{default:null,type:cc.Node},audioSource:{default:null,type:cc.AudioSource,serializable:!1}},onLoad:function(){this.node.parent.getChildByName("audioButton").on("click",this.callback,this),this.gameModel=new i.default,this.gameModel.init(4);var t=this.grid.getComponent("GridView");t.setController(this),t.initWithCellModels(this.gameModel.getCells()),this.audioSource=cc.find("Canvas/GameScene")._components[1].audio},callback:function(){var t=this.audioSource._state;1===t?this.audioSource.pause():this.audioSource.play(),(0,s.default)(1===t?"\u5173\u95ed\u80cc\u666f\u97f3\u4e50\ud83c\udfb5":"\u6253\u5f00\u80cc\u666f\u97f3\u4e50\ud83c\udfb5")},selectCell:function(t){return this.gameModel.selectCell(t)},cleanCmd:function(){this.gameModel.cleanCmd()}}),cc._RF.pop()},{"../Model/GameModel":"GameModel","../Utils/Toast":"Toast"}],GameModelTest:[function(t,e){"use strict";cc._RF.push(e,"16fce9lOkpA7a2vuhmMkDMZ","GameModelTest"),cc.Class({extends:cc.Component,properties:{}}),cc._RF.pop()},{}],GameModel:[function(t,e,i){"use strict";cc._RF.push(e,"cc442HaMlBE/ZKi7W/YUKwd","GameModel"),i.__esModule=!0,i.default=void 0;var s,o=(s=t("./CellModel"))&&s.__esModule?s:{default:s},n=t("../Utils/ModelUtils"),c=t("./ConstValue");function l(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=a(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"==typeof t)return r(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var h=function(){function t(){this.cells=null,this.cellBgs=null,this.lastPos=cc.v2(-1,-1),this.cellTypeNum=5,this.cellCreateType=[]}var e=t.prototype;return e.init=function(t){this.cells=[],this.setCellTypeNum(t||this.cellTypeNum);for(var e=1;e<=c.GRID_WIDTH;e++){this.cells[e]=[];for(var i=1;i<=c.GRID_HEIGHT;i++)this.cells[e][i]=new o.default}for(e=1;e<=c.GRID_WIDTH;e++)for(i=1;i<=c.GRID_HEIGHT;i++)if(null==this.cells[e][i].type)for(var s=!0;s;)s=!1,this.cells[e][i].init(this.getRandomCellType()),this.checkPoint(i,e)[0].length>2&&(s=!0),this.cells[e][i].setXY(i,e),this.cells[e][i].setStartXY(i,e)},e.mock=function(){this.mockInit(5,1,c.CELL_TYPE.A),this.mockInit(5,3,c.CELL_TYPE.A),this.mockInit(4,2,c.CELL_TYPE.A),this.mockInit(3,2,c.CELL_TYPE.A),this.mockInit(5,2,c.CELL_TYPE.B),this.mockInit(6,2,c.CELL_TYPE.B),this.mockInit(7,3,c.CELL_TYPE.B),this.mockInit(8,2,c.CELL_TYPE.A)},e.mockInit=function(t,e,i){this.cells[t][e].init(i),this.cells[t][e].setXY(e,t),this.cells[t][e].setStartXY(e,t)},e.initWithData=function(){},e.checkPoint=function(t,e,i){var s=this.checkWithDirection(t,e,[cc.v2(1,0),cc.v2(-1,0)]),o=this.checkWithDirection(t,e,[cc.v2(0,-1),cc.v2(0,1)]),a=[],r="";s.length>=5||o.length>=5?r=c.CELL_STATUS.BIRD:s.length>=3&&o.length>=3?r=c.CELL_STATUS.WRAP:s.length>=4?r=c.CELL_STATUS.LINE:o.length>=4&&(r=c.CELL_STATUS.COLUMN),s.length>=3&&(a=s),o.length>=3&&(a=(0,n.mergePointArray)(a,o));var h=[a,r,this.cells[e][t].type,cc.v2(t,e)];if(i&&h.length>=3)for(var u,d=l((0,n.exclusivePoint)(a,cc.v2(t,e)));!(u=d()).done;){var f=u.value,p=this.checkPoint(f.x,f.y,!1);(p[1]>h[1]||p[1]===h[1]&&p[0].length>h[0].length)&&(h=p)}return h},e.checkWithDirection=function(t,e,i){var s=[],o=[];o[t+9*e]=!0,s.push(cc.v2(t,e));for(var n=0;n<s.length;){var c=s[n],l=this.cells[c.y][c.x];if(n++,l)for(var a=0;a<i.length;a++){var r=c.x+i[a].x,h=c.y+i[a].y;r<1||r>9||h<1||h>9||o[r+9*h]||!this.cells[h][r]||l.type===this.cells[h][r].type&&(o[r+9*h]=!0,s.push(cc.v2(r,h)))}}return s},e.printInfo=function(){for(var t=1;t<=9;t++){for(var e="",i=1;i<=9;i++)e+=this.cells[t][i].type+" ";console.log(e)}},e.getCells=function(){return this.cells},e.selectCell=function(t){this.changeModels=[],this.effectsQueue=[];var e=this.lastPos;if(1!=Math.abs(t.x-e.x)+Math.abs(t.y-e.y))return this.lastPos=t,[[],[]];var i=this.cells[t.y][t.x],s=this.cells[e.y][e.x];this.exchangeCell(e,t);var o=this.checkPoint(t.x,t.y)[0],n=this.checkPoint(e.x,e.y)[0];this.curTime=0,this.pushToChangeModels(i),this.pushToChangeModels(s);var l=i.status!=c.CELL_STATUS.COMMON&&s.status!=c.CELL_STATUS.COMMON||i.status==c.CELL_STATUS.BIRD||s.status==c.CELL_STATUS.BIRD;if(o.length<3&&n.length<3&&!l)return this.exchangeCell(e,t),i.moveToAndBack(e),s.moveToAndBack(t),this.lastPos=cc.v2(-1,-1),[this.changeModels];this.lastPos=cc.v2(-1,-1),i.moveTo(e,this.curTime),s.moveTo(t,this.curTime);var a=[t,e];return this.curTime+=c.ANITIME.TOUCH_MOVE,this.processCrush(a),[this.changeModels,this.effectsQueue]},e.processCrush=function(t){for(var e=0;t.length>0;){var i=[];if(0==e&&2==t.length){var s=t[0],o=t[1],n=this.cells[s.y][s.x],l=this.cells[o.y][o.x];n.status!=c.CELL_STATUS.BIRD&&l.status!=c.CELL_STATUS.BIRD||(n.status==c.CELL_STATUS.BIRD?(n.type=l.type,i.push(n)):(l.type=n.type,i.push(l)))}for(var a in t){var r=t[a];if(this.cells[r.y][r.x]){var h=this.checkPoint(r.x,r.y,!0),u=h[0],d=h[1],f=h[2],p=h[3];if(!(u.length<3)){for(var T in u){var C=this.cells[u[T].y][u[T].x];this.crushCell(u[T].x,u[T].y,!1,e),C.status!=c.CELL_STATUS.COMMON&&i.push(C)}this.createNewCell(p,d,f)}}}this.processBomb(i,e),this.curTime+=c.ANITIME.DIE,t=this.down(),e++}},e.createNewCell=function(t,e,i){if(""!=e){e==c.CELL_STATUS.BIRD&&(i=c.CELL_TYPE.BIRD);var s=new o.default;this.cells[t.y][t.x]=s,s.init(i),s.setStartXY(t.x,t.y),s.setXY(t.x,t.y),s.setStatus(e),s.setVisible(0,!1),s.setVisible(this.curTime,!0),this.changeModels.push(s)}},e.down=function(){for(var t=[],e=1;e<=c.GRID_WIDTH;e++)for(var i=1;i<=c.GRID_HEIGHT;i++)if(null==this.cells[e][i]){for(var s=e,n=s;n<=c.GRID_HEIGHT;n++)this.cells[n][i]&&(this.pushToChangeModels(this.cells[n][i]),t.push(this.cells[n][i]),this.cells[s][i]=this.cells[n][i],this.cells[n][i]=null,this.cells[s][i].setXY(i,s),this.cells[s][i].moveTo(cc.v2(i,s),this.curTime),s++);var l=1;for(n=s;n<=c.GRID_HEIGHT;n++)this.cells[n][i]=new o.default,this.cells[n][i].init(this.getRandomCellType()),this.cells[n][i].setStartXY(i,l+c.GRID_HEIGHT),this.cells[n][i].setXY(i,l+c.GRID_HEIGHT),this.cells[n][i].moveTo(cc.v2(i,n),this.curTime),l++,this.changeModels.push(this.cells[n][i]),t.push(this.cells[n][i])}return this.curTime+=c.ANITIME.TOUCH_MOVE+.3,t},e.pushToChangeModels=function(t){-1==this.changeModels.indexOf(t)&&this.changeModels.push(t)},e.cleanCmd=function(){for(var t=1;t<=c.GRID_WIDTH;t++)for(var e=1;e<=c.GRID_HEIGHT;e++)this.cells[t][e]&&(this.cells[t][e].cmd=[])},e.exchangeCell=function(t,e){var i=this.cells[t.y][t.x];this.cells[t.y][t.x]=this.cells[e.y][e.x],this.cells[t.y][t.x].x=t.x,this.cells[t.y][t.x].y=t.y,this.cells[e.y][e.x]=i,this.cells[e.y][e.x].x=e.x,this.cells[e.y][e.x].y=e.y},e.setCellTypeNum=function(t){console.log("num = ",t),this.cellTypeNum=t,this.cellCreateType=[];for(var e=this.cellCreateType,i=1;i<=c.CELL_BASENUM;i++)e.push(i);for(var s=0;s<e.length;s++){var o=Math.floor(Math.random()*(c.CELL_BASENUM-s))+s;e[s],e[o]=e[o],e[s]}},e.getRandomCellType=function(){var t=Math.floor(Math.random()*this.cellTypeNum);return this.cellCreateType[t]},e.processBomb=function(t,e){for(var i=this,s=function(){var s=[],o=c.ANITIME.BOMB_DELAY;t.forEach(function(t){if(t.status==c.CELL_STATUS.LINE){for(var i=1;i<=c.GRID_WIDTH;i++)this.cells[t.y][i]&&(this.cells[t.y][i].status!=c.CELL_STATUS.COMMON&&s.push(this.cells[t.y][i]),this.crushCell(i,t.y,!1,e));this.addRowBomb(this.curTime,cc.v2(t.x,t.y))}else if(t.status==c.CELL_STATUS.COLUMN){for(var n=1;n<=c.GRID_HEIGHT;n++)this.cells[n][t.x]&&(this.cells[n][t.x].status!=c.CELL_STATUS.COMMON&&s.push(this.cells[n][t.x]),this.crushCell(t.x,n,!1,e));this.addColBomb(this.curTime,cc.v2(t.x,t.y))}else if(t.status==c.CELL_STATUS.WRAP)for(var l=t.x,a=t.y,r=1;r<=c.GRID_HEIGHT;r++)for(var h=1;h<=c.GRID_WIDTH;h++){var u=Math.abs(l-h)+Math.abs(a-r);this.cells[r][h]&&u<=2&&(this.cells[r][h].status!=c.CELL_STATUS.COMMON&&s.push(this.cells[r][h]),this.crushCell(h,r,!1,e))}else if(t.status==c.CELL_STATUS.BIRD){var d=t.type;o<c.ANITIME.BOMB_BIRD_DELAY&&(o=c.ANITIME.BOMB_BIRD_DELAY),d==c.CELL_TYPE.BIRD&&(d=this.getRandomCellType());for(var f=1;f<=c.GRID_HEIGHT;f++)for(var p=1;p<=c.GRID_WIDTH;p++)this.cells[f][p]&&this.cells[f][p].type==d&&(this.cells[f][p].status!=c.CELL_STATUS.COMMON&&s.push(this.cells[f][p]),this.crushCell(p,f,!0,e))}},i),t.length>0&&(i.curTime+=o),t=s};t.length>0;)s()},e.addCrushEffect=function(t,e,i){this.effectsQueue.push({playTime:t,pos:e,action:"crush",step:i})},e.addRowBomb=function(t,e){this.effectsQueue.push({playTime:t,pos:e,action:"rowBomb"})},e.addColBomb=function(t,e){this.effectsQueue.push({playTime:t,pos:e,action:"colBomb"})},e.addWrapBomb=function(){},e.crushCell=function(t,e,i,s){var o=this.cells[e][t];this.pushToChangeModels(o),i&&o.toShake(this.curTime);var n=i?c.ANITIME.DIE_SHAKE:0;o.toDie(this.curTime+n),this.addCrushEffect(this.curTime+n,cc.v2(o.x,o.y),s),this.cells[e][t]=null},t}();i.default=h,e.exports=i.default,cc._RF.pop()},{"../Utils/ModelUtils":"ModelUtils","./CellModel":"CellModel","./ConstValue":"ConstValue"}],GridView:[function(t,e){"use strict";cc._RF.push(e,"d0d1fDj9rlDx5QUtP+2toQV","GridView");var i,s=t("../Model/ConstValue"),o=(i=t("../Utils/AudioUtils"))&&i.__esModule?i:{default:i};cc.Class({extends:cc.Component,properties:{aniPre:{default:[],type:[cc.Prefab]},effectLayer:{default:null,type:cc.Node},audioUtils:{type:o.default,default:null}},onLoad:function(){this.setListener(),this.lastTouchPos=cc.Vec2(-1,-1),this.isCanMove=!0,this.isInPlayAni=!1},setController:function(t){this.controller=t},initWithCellModels:function(t){this.cellViews=[];for(var e=1;e<=9;e++){this.cellViews[e]=[];for(var i=1;i<=9;i++){var s=t[e][i].type,o=cc.instantiate(this.aniPre[s]);o.parent=this.node,o.getComponent("CellView").initWithModel(t[e][i]),this.cellViews[e][i]=o}}},setListener:function(){this.node.on(cc.Node.EventType.TOUCH_START,function(t){if(this.isInPlayAni)return!0;var e=t.getLocation(),i=this.convertTouchPosToCell(e);if(i){var s=this.selectCell(i);this.isCanMove=s.length<3}else this.isCanMove=!1;return!0},this),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){if(this.isCanMove){var e=t.getStartLocation(),i=this.convertTouchPosToCell(e),s=t.getLocation(),o=this.convertTouchPosToCell(s);i.x==o.x&&i.y==o.y||(this.isCanMove=!1,this.selectCell(o))}},this),this.node.on(cc.Node.EventType.TOUCH_END,function(){},this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(){},this)},convertTouchPosToCell:function(t){if((t=this.node.convertToNodeSpace(t)).x<0||t.x>=s.GRID_PIXEL_WIDTH||t.y<0||t.y>=s.GRID_PIXEL_HEIGHT)return!1;var e=Math.floor(t.x/s.CELL_WIDTH)+1,i=Math.floor(t.y/s.CELL_HEIGHT)+1;return cc.v2(e,i)},updateView:function(t){var e=[];for(var i in t){var s=t[i],o=this.findViewByModel(s),n=null;if(o)n=o.view,this.cellViews[o.y][o.x]=null;else{var c=s.type,l=cc.instantiate(this.aniPre[c]);l.parent=this.node,l.getComponent("CellView").initWithModel(s),n=l}n.getComponent("CellView").updateView(),s.isDeath||e.push({model:s,view:n})}e.forEach(function(t){var e=t.model;this.cellViews[e.y][e.x]=t.view},this)},updateSelect:function(t){for(var e=1;e<=9;e++)for(var i=1;i<=9;i++)if(this.cellViews[e][i]){var s=this.cellViews[e][i].getComponent("CellView");t.x==i&&t.y==e?s.setSelect(!0):s.setSelect(!1)}},findViewByModel:function(t){for(var e=1;e<=9;e++)for(var i=1;i<=9;i++)if(this.cellViews[e][i]&&this.cellViews[e][i].getComponent("CellView").model==t)return{view:this.cellViews[e][i],x:i,y:e};return null},getPlayAniTime:function(t){if(!t)return 0;var e=0;return t.forEach(function(t){t.cmd.forEach(function(t){e<t.playTime+t.keepTime&&(e=t.playTime+t.keepTime)},this)},this),e},getStep:function(t){return t?t.reduce(function(t,e){return Math.max(t,e.step||0)},0):0},disableTouch:function(t,e){t<=0||(this.isInPlayAni=!0,this.node.runAction(cc.sequence(cc.delayTime(t),cc.callFunc(function(){this.isInPlayAni=!1,this.audioUtils.playContinuousMatch(e)},this))))},selectCell:function(t){var e=this.controller.selectCell(t),i=e[0],s=e[1];return this.playEffect(s),this.disableTouch(this.getPlayAniTime(i),this.getStep(s)),this.updateView(i),this.controller.cleanCmd(),i.length>=2?(this.updateSelect(cc.v2(-1,-1)),this.audioUtils.playSwap()):(this.updateSelect(t),this.audioUtils.playClick()),i},playEffect:function(t){this.effectLayer.getComponent("EffectLayer").playEffects(t)}}),cc._RF.pop()},{"../Model/ConstValue":"ConstValue","../Utils/AudioUtils":"AudioUtils"}],LoginController:[function(t,e){"use strict";var i;cc._RF.push(e,"5f4845Bus5AQoZakK7KAXht","LoginController"),(i=t("../Utils/AudioUtils"))&&i.__esModule,cc.Class({extends:cc.Component,properties:{loadingBar:{type:cc.ProgressBar,default:null},loginButton:{type:cc.Button,default:null},worldSceneBGM:{type:cc.AudioClip,default:null}},onLoad:function(){this.gameSceneBGMAudioId=cc.audioEngine.play(this.worldSceneBGM,!0,1)},onLogin:function(){var t=this;this.last=0,this.loadingBar.node.active=!0,this.loginButton.node.active=!1,this.loadingBar.progress=0,this.loadingBar.barSprite.fillRange=0,cc.loader.onProgress=function(e,i){(e/i).toFixed(2)>t.loadingBar.barSprite.fillRange&&(t.loadingBar.barSprite.fillRange=e/i)},cc.director.preloadScene("Game",function(){this.loadingBar.node.active=!1,this.loginButton.node.active=!1,cc.director.loadScene("Game")}.bind(this))},onDestroy:function(){cc.audioEngine.stop(this.gameSceneBGMAudioId)}}),cc._RF.pop()},{"../Utils/AudioUtils":"AudioUtils"}],ModelUtils:[function(t,e,i){"use strict";cc._RF.push(e,"5a4d0rEszhGNqSG/EcGQQi5","ModelUtils"),Object.defineProperty(i,"__esModule",{value:!0}),i.exclusivePoint=i.mergePointArray=void 0,i.mergePointArray=function(t,e){var i=t.concat();return e=e.filter(function(t){var e=!1;return i.forEach(function(i){t.equals(i)&&(e=!0)},this),!e},this),i.push.apply(i,e),i},i.exclusivePoint=function(t,e){for(var i=new Array,s=0,o=t;s<o.length;s++){var n=o[s];n.equals(e)||i.push(n)}return i},cc._RF.pop()},{}],Toast:[function(t,e){"use strict";cc._RF.push(e,"7775bvWKyFNCa465R+EmYU0","Toast"),e.exports=function(t,e){void 0===t&&(t="");var i=void 0===e?{}:e,s=i.gravity,o=void 0===s?"CENTER":s,n=i.duration,c=void 0===n?1:n,l=i.bg_color,a=void 0===l?cc.color(102,102,102,200):l,r=cc.director.getScene().getComponentInChildren(cc.Canvas),h=r.node.width,u=r.node.height,d=new cc.Node,f=new cc.Node,p=f.addComponent(cc.Label);p.horizontalAlign=cc.Label.HorizontalAlign.CENTER,p.verticalAlign=cc.Label.VerticalAlign.CENTER,p.fontSize=30,p.string=t,t.length*p.fontSize>3*h/5?(f.width=3*h/5,p.overflow=cc.Label.Overflow.RESIZE_HEIGHT):f.width=t.length*p.fontSize;var T=1+~~(t.length*p.fontSize/(3*h/5));f.height=p.fontSize*T;var C=d.addComponent(cc.Graphics);C.arc(-f.width/2,0,f.height/2+20,.5*Math.PI,1.5*Math.PI,!0),C.lineTo(f.width/2,-(f.height/2+20)),C.arc(f.width/2,0,f.height/2+20,1.5*Math.PI,.5*Math.PI,!0),C.lineTo(-f.width/2,f.height/2+20),C.fillColor=a,C.fill(),d.addChild(f),"CENTER"===o?(d.y=0,d.x=0):"TOP"===o?d.y=d.y+u/5*2:"BOTTOM"===o&&(d.y=d.y-u/5*2),r.node.addChild(d);var y=cc.callFunc(function(){d.destroy()}),m=cc.sequence(cc.moveBy(c,cc.v2(0,0)),cc.fadeOut(.3),y);d.runAction(m)},cc._RF.pop()},{}],"use_v2.0.x_cc.Toggle_event":[function(t,e){"use strict";cc._RF.push(e,"6a67b9H1IdAuJd6PInpnviU","use_v2.0.x_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_check=!0),cc._RF.pop()},{}]},{},["GameController","LoginController","CellModel","ConstValue","GameModel","GameModelTest","AudioUtils","ModelUtils","Toast","CellView","EffectLayer","GridView","use_v2.0.x_cc.Toggle_event"]);