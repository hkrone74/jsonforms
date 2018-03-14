import { RankedTester } from '../../core/testers';
import { Control, ControlProps, ControlState } from './Control';
/**
 * Default tester for boolean controls.
 * @type {RankedTester}
 */
export declare const booleanControlTester: RankedTester;
export declare class BooleanControl extends Control<ControlProps, ControlState> {
    render(): any;
}
declare const _default: any;
export default _default;
