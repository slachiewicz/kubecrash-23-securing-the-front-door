// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

import {ObjectMeta} from "../../meta/v1";

/**
 * AuthService is the Schema for the authservices API
 */
export class AuthService extends pulumi.CustomResource {
    /**
     * Get an existing AuthService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AuthService {
        return new AuthService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:getambassador.io/v1:AuthService';

    /**
     * Returns true if the given object is an instance of AuthService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuthService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AuthService.__pulumiType;
    }

    public readonly apiVersion!: pulumi.Output<"getambassador.io/v1" | undefined>;
    public readonly kind!: pulumi.Output<"AuthService" | undefined>;
    public readonly metadata!: pulumi.Output<ObjectMeta | undefined>;
    /**
     * AuthServiceSpec defines the desired state of AuthService
     */
    public readonly spec!: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a AuthService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AuthServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["apiVersion"] = "getambassador.io/v1";
            resourceInputs["kind"] = "AuthService";
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
        } else {
            resourceInputs["apiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["spec"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(AuthService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AuthService resource.
 */
export interface AuthServiceArgs {
    apiVersion?: pulumi.Input<"getambassador.io/v1">;
    kind?: pulumi.Input<"AuthService">;
    metadata?: pulumi.Input<ObjectMeta>;
    /**
     * AuthServiceSpec defines the desired state of AuthService
     */
    spec?: pulumi.Input<{[key: string]: any}>;
}
