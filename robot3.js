class RGroup {
    constructor(members) {
        this.members = members;
    }
    add(value) {
        if (this.has(value)) return this;
        return new RGroup(this.members.concat({ value }));
    }
    delete(value) {
        if (!this.has(value)) return this;
        return new RGroup(this.members.filter(m => m !== value));
    }
    has(value) {
        return this.members.includes(value);
    }

}
RGroup.empty = new RGroup([]);
let r = RGroup.empty.add("r")
let ro = a.add("o")
let o = ab.delete("a");

console.log(o.has("o"));
console.log(o.has("a"))
console.log(b.has("a"));