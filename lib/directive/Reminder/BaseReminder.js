/**
 * @file BaseReminder 提醒基础指令
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
const BaseDirective = require('../BaseDirective');

/**
 * 提醒基础指令
 *
 * @class {BaseReminder} 提醒基础指令
 */
class BaseReminder extends BaseDirective {

    constructor(type) {
        super(type);
    }

    /**
     * @desc 设置提醒触发的时间
     * @param {string} scheduledTime 提醒触发时间
     */
    setScheduledTime(scheduledTime) {
        if (typeof scheduledTime === 'string') {
            if (!this.data.trigger) {
                this.data.trigger = {};
            }
            this.data.trigger.scheduledTime = scheduledTime;
        }
    }

    /**
     * @desc 设置提醒触发的日期
     * @param {string} scheduledDate 提醒触发日期
     */
    setScheduledDate(scheduledDate){
        if (typeof scheduledDate === 'string') {
            if (!this.data.trigger) {
                this.data.trigger = {};
            }
            this.data.trigger.scheduledDate = scheduledDate;
        }
    }

    /**
     * @desc 设置提醒触发周期
     * @param {string} freqType 周期类型
     */
    setFreq(freqType) {
        if(typeof freqType === 'string' && BaseReminder.freqArr.indexOf(freqType) !== -1) {
            if (!this.data.trigger) {
                this.data.trigger = {};
            }
            if (!this.data.trigger.recurrence) {
                this.data.trigger.recurrence = {};
            }
            this.data.trigger.recurrence.freq = freqType;
        }
    }

    /**
     * @desc 设置weekDay
     * @param {array} weekDays 工作日数组
     */
    setWeekDay(weekDays) {
        if (weekDays instanceof Array) {
            let arr = [];
            weekDays.map((item) => {
                if (typeof item === 'string' && BaseReminder.weekDayArr.indexOf(item) !== -1) {
                    arr.push(item);
                }
            });
            if (!this.data.trigger) {
                this.data.trigger = {};
            }
            if (!this.data.trigger.recurrence) {
                this.data.trigger.recurrence = {};
            }
            this.data.trigger.recurrence.byDay = arr;
        }
    }

    /**
     * @desc 设置提醒播报内容
     * @param {string} text 播报内容
     * @param {string} type 播报类型
     */
    setAlertInfo(text, type = BaseReminder.CONTENT_TYPE) {
        if(typeof text === 'string' && typeof type === 'string') {
            if (!this.data.alertInfo) {
                this.data.alertInfo = {};
            }
            if (!this.data.alertInfo.spokenInfo) {
                this.data.alertInfo.spokenInfo = {};
            }
            if (!this.data.alertInfo.spokenInfo.content) {
                this.data.alertInfo.spokenInfo.content = [];
            }
            this.data.alertInfo.spokenInfo.content.push({
                type: type,
                text: text
            });
        }
    }
}
BaseReminder.weekDayArr = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT"
];

BaseReminder.freqArr = [
    "WEEKLY",
    "DAILY"
];

BaseReminder.CONTENT_TYPE = 'plainText';

module.exports = BaseReminder;

