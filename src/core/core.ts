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
 * This File Created by Saeed on 22/04/2016.
 */
import {expressions} from "./expressions/expressions";
import {Exception} from "./exceptions/Exception";
import  * as collections  from "./collections/collections";
import {DateTime} from "./DateTime";
import {TimeSpan} from "./TimeSpan";
import  * as globalization  from "./globalization/globalization";
import * as security from "./security/security";
import * as services from "./ServiceContext";
import * as apps from "./AppContext";
import * as validations from "./validations/validations";



let hashCode: number = 0;



export interface IComparator<T> extends Number {

}

export interface IComparable<T> {
    compareTo(a: T): IComparator<T>;
}

export interface IEquatable<T>  {
    equalsTo(a: T): boolean;
}

export interface IEqualityComparable<T> extends IEquatable<T> {
    getHashCode(): number;
}

export class Comparable<T> implements IComparable<T> {
    private _value: T;
    constructor(value: T) {
        this._value = value;
    }
    compareTo(a: T): IComparator<T> {

        if ( typeof a === "string") {
            return (<any>this._value).localeCompare(<any>a);
        }
        else if (typeof a === "number") {

            if (<any>a > this._value) return 1;
            else if (<any>a === this._value) return 0;
            else return -1;
        }
        else if (a instanceof Comparable) {

            if ((<any>a).Value > this._value) return 1;
            else if ((<any>a).Value === this._value) return 0;
            else return -1;
        }
        else {
            if (<any>a >  this) return 1;
            else if (<any>a === this) return 0;
            else return -1;
      }

    }
    get Value(): T { return this._value; };
    set Value(value: T){this._value = value; };
}

export interface  Func<T, TResult> {
    (...args: any[]): TResult;
}

export interface  Predicate<T> extends Func<T, boolean> {

}


export {Exception}
export {DateTime}
export {TimeSpan}
export {collections}
export {globalization}
export {security}
export {services}
export {apps}
export {validations};
export {expressions};

