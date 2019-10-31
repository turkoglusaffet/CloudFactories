var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CloudFactories = /** @class */ (function () {
    function CloudFactories() {
    }
    CloudFactories.prototype.sendMessage = function () {
        return "-->" + this.factoryService().sendMessage();
    };
    return CloudFactories;
}());
var AZFactory = /** @class */ (function (_super) {
    __extends(AZFactory, _super);
    function AZFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AZFactory.prototype.factoryService = function () {
        return new AZService();
    };
    return AZFactory;
}(CloudFactories));
var AWSFactory = /** @class */ (function (_super) {
    __extends(AWSFactory, _super);
    function AWSFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWSFactory.prototype.factoryService = function () {
        return new AWSService();
    };
    return AWSFactory;
}(CloudFactories));
var AZService = /** @class */ (function () {
    function AZService() {
    }
    AZService.prototype.sendMessage = function () {
        return '{Result of the AZService}';
    };
    return AZService;
}());
var AWSService = /** @class */ (function () {
    function AWSService() {
    }
    AWSService.prototype.sendMessage = function () {
        return '{Result of the AWSService}';
    };
    return AWSService;
}());
var CloudInstance = /** @class */ (function () {
    function CloudInstance() {
    }
    CloudInstance.getInstance = function () {
        if (!CloudInstance.instance) {
            CloudInstance.instance = platform === "AZ" ? new AZFactory() : new AWSFactory();
        }
        return CloudInstance.instance;
    };
    return CloudInstance;
}());
function sendMessage() {
    console.log(CloudInstance.getInstance().sendMessage());
}
var platform = "AZ";
sendMessage();
//# sourceMappingURL=CloudFactories.js.map