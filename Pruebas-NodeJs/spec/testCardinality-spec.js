var appCardinality = require("../NumberCardinality");

describe("isFive", function () {
    it("the function validate is number is Five", function(){
        var value = appCardinality.number_cardinality(5);
        expect(value).toBe("five");
    })
})

describe("isEven", function () {
    it("the function validate is number is Even", function(){
        var value = appCardinality.number_cardinality(12);
        expect(value).toBe("even");
    })
})

describe("isOdd", function () {
    it("the function validate is number is Odd", function(){
        var value = appCardinality.number_cardinality(11);
        expect(value).toBe("odd");
    })
})

describe("isZero", function () {
    it("the function validate is number is Zero", function(){
        var value = appCardinality.number_cardinality(20);
        expect(value).toBe("zero");
    })
})
