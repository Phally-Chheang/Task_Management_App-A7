"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.members = [];
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getMember() {
        return Array.isArray(this.members) && this.members.length > 0 ? this.members[0] : -1;
    }
    addMember(userId) {
        if (!Array.isArray(this.members)) {
            console.warn("Team.members is not an array. Reinitializing:", this.members);
            this.members = [];
        }
        if (this.members.includes(userId)) {
            this.members.push(userId);
        }
        return userId;
    }
}
exports.Team = Team;
