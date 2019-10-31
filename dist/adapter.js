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
/**
 * The Target defines the domain-specific interface used by the client code.
 */
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.prototype.sendMessage = function () {
        return 'Target: The default target\'s behavior.';
    };
    return Message;
}());
var AZAdapter = /** @class */ (function (_super) {
    __extends(AZAdapter, _super);
    function AZAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AZAdapter.prototype.sendMessage = function () {
        return "AZ";
    };
    return AZAdapter;
}(Message));
var AWSAdapter = /** @class */ (function (_super) {
    __extends(AWSAdapter, _super);
    function AWSAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWSAdapter.prototype.sendMessage = function () {
        return "AWS";
    };
    return AWSAdapter;
}(Message));
function sendMes2sage(message) {
    console.log(message.sendMessage());
}
var aws = new AWSAdapter();
sendMes2sage(aws);
var adapter = new AZAdapter();
sendMes2sage(adapter);
//# sourceMappingURL=adapter.js.map