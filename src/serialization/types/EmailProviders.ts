/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const EmailProviders: core.serialization.Schema<serializers.EmailProviders.Raw, Vital.EmailProviders> =
    core.serialization.stringLiteral("freestyle_libre");

export declare namespace EmailProviders {
    type Raw = "freestyle_libre";
}