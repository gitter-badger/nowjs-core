/*
 *
 *  *  Copyright 2016 Now Can DO LTD (info(at)nowcando.com)
 *  *
 *  *  Licensed under the Apache License, Version 2.0 (the "License");
 *  *  you may not use this file except in compliance with the License.
 *  *  You may obtain a copy of the License at
 *  *
 *  *       http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  *  Unless required by applicable law or agreed to in writing, software
 *  *  distributed under the License is distributed on an "AS IS" BASIS,
 *  *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  *  See the License for the specific language governing permissions and
 *  *  limitations under the License.
 *  *
 *  * For more information: http://www.nowcando.com
 *
 */



/**
 * This File Created by Saeed on 24/04/2016.
 */

import * as collections from './collections';

export class Collection<T> extends collections.ReadOnlyCollection<T> implements collections.ICollection<T> {
    constructor();
    constructor(enumerable:collections.IEnumerable<T>);
    constructor(enumerable:Iterable<T>);
    constructor(enumerable?:collections.IEnumerable<T> | Iterable<T>) {
        super(enumerable);
    }

    add(item:T):boolean;
    add(...items:T[]):boolean;
    add(item:any):boolean {
        if (item instanceof Array) {
            for (let x of item) {
                this._arr.push(item);
            }
            return true;
        }
        else {
            return this._arr.push(item) === 1;
        }

    }

    remove(item:T):boolean {
        return this._arr.splice(this._arr.indexOf(item), 1).length === 1;

    }

    clear():boolean {
        this._arr.splice(0, this._arr.length);
        return true;
    }
}
