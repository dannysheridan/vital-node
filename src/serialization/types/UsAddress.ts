/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const UsAddress: core.serialization.ObjectSchema<serializers.UsAddress.Raw, Vital.UsAddress> =
    core.serialization.object({
        firstLine: core.serialization.property("first_line", core.serialization.string()),
        secondLine: core.serialization.property("second_line", core.serialization.string().optional()),
        city: core.serialization.string(),
        state: core.serialization.string(),
        zipCode: core.serialization.property("zip_code", core.serialization.string()),
        unit: core.serialization.string().optional(),
    });

export declare namespace UsAddress {
    interface Raw {
        first_line: string;
        second_line?: string | null;
        city: string;
        state: string;
        zip_code: string;
        unit?: string | null;
    }
}