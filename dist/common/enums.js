"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.Priority = void 0;
var Priority;
(function (Priority) {
    Priority["LOW"] = "LOW";
    Priority["MEDIUM"] = "MEDIUM";
    Priority["HIGH"] = "HIGH";
})(Priority || (exports.Priority = Priority = {}));
var Status;
(function (Status) {
    Status["TODO"] = "TODO";
    Status["IN_PROGRESS"] = "IN_PROGRESS";
    Status["DONE"] = "DONE";
    Status["Completed"] = "Completed";
})(Status || (exports.Status = Status = {}));
