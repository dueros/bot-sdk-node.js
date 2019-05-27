/**
 * @file 动画指令
 * @author yelvye@baidu.com
 */

/**
 * Copyright (c) 2017 Baidu, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * @class AnimationCommand 动画指令
 * @extends {BaseCommand}
 * @example
 * let animationCommand = new AnimationCommand()
 * animationCommand.setAttribute('width');
 * animationCommand.setFrom('10dp');
 * animationCommand.setTo('100dp');
 * animationCommand.setEasing('ease-in');
 * animationCommand.setRepeatCount('3');
 * animationCommand.setRepeatMode('reverse');
 */

const BaseCommand = require('./BaseCommand');

class AnimationCommand extends BaseCommand {

    /**
     * AnimationCommand 构造方法.
     */
    constructor() {
        super('Animation');
        this.data.attribute = '';
        this.data.from = '';
        this.data.to = '';
        this.data.easing = 'linear';
        this.data.duration = 1000;
        this.data.repeatCount = 'infinite';
        this.data.repeatMode = 'restart';
        this.data.onComplete = [];
    }


    /**
     * 设置动画属性
     *
     * @param {string} attribute 文本内容
     * @public
     */
    setAttribute(attribute) {
        if (typeof attribute === 'string') {
            this.data.attribute = attribute;
        }
    }

    /**
     * 设置动画作用属性的起始值
     *
     * @param {string} from 动画作用属性的起始值
     * @public
     */
    setFrom(from) {
        if (typeof from === 'string') {
            this.data.from = from;
        }
    }

    /**
     * 设置动画作用属性的结束值
     *
     * @param {string} to 动画作用属性的结束值
     * @public
     */
    setTo(to) {
        if (typeof to === 'string') {
            this.data.to = to;
        }
    }

    /**
     * 设置描述动画执行的速度的类型
     *
     * @param {string} easing 描述动画执行的速度的类型
     * @public
     */
    setEasing(easing) {
        if (easing.indexOf('cubic-bezier') !== -1) {
            this.data.easing = easing;
        }
        if (AnimationCommand.attrArr.indexOf(easing) !== -1) {
            this.data.easing = easing;
        }
    }

    /**
     * 设置动画执行的时间
     *
     * @param {number} duration 动画执行的时间
     * @public
     */
    setDuration(duration) {
        if (typeof duration === 'number') {
            this.data.duration = duration;
        }
    }

    /**
     * 设置动画重复的次数
     *
     * @param {string} repeatCount 动画重复的次数
     * @public
     */
    setRepeatCount(repeatCount) {
        if (typeof repeatCount === 'string') {
            this.data.repeatCount = repeatCount;
        }
    }

    /**
     * 设置动画重复方式
     *
     * @param {string} repeatMode 动画重复方式
     * @public
     */
    setRepeatMode(repeatMode) {
        if (AnimationCommand.repeatModeArr.indexOf(repeatMode) !== -1) {
            this.data.repeatMode = repeatMode;
        }
    }

    /**
     * 设置动画结束后需要触发的commands, 如果repeatCount为infinite，将不会触发onComplete
     *
     * @param {BaseCommand|Array} commands 动画结束后需要触发的commands
     * @public
     */
    addCompleteCommands(commands) {
        if (commands instanceof BaseCommand) {
            this.data.onComplete = [commands.getData()];
        }

        if (commands instanceof Array) {
            this.data.onComplete = commands.map(function (item) {
                if (item instanceof BaseCommand) {
                    return item.getData();
                }
            }).filter(function (item) {
                return !!item;
            });
        }
    }
}

AnimationCommand.attrArr = [
    'scaleX',
    'scaleY',
    'rotation'
];

AnimationCommand.easingArr = [
    'linear',
    'ease',
    'ease-in',
    'ease-out'
];

AnimationCommand.repeatModeArr = [
    'restart',
    'reverse'
];


module.exports = AnimationCommand;
