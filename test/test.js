import {expect} from 'chai';
import {BabySitter} from '../src/main.js';

describe("BabySitter Application", () => {
    describe("Evening Payments", () => {
        it("should calculate one hour", () => {
            expect(BabySitter(17, 18)).to.eql(11);
        });
        it("should calculate two hours", () => {
            expect(BabySitter(18, 20)).to.eql(22);
        });
        it("should calculate entire time block", () => {
            expect(BabySitter(17, 22)).to.eql(55);
        });
    });

    describe("Afternoon Payments", () => {
        it("should calculate one hour", () => {
            expect(BabySitter(13, 14)).to.eql(7);
        });
        it("should calculate two hours", () => {
            expect(BabySitter(14, 16)).to.eql(14);
        });
        it("should calculate entire time block", () => {
            expect(BabySitter(13, 17)).to.eql(28);
        });
    });

    describe("Late Night Payments", () => {
        it("should calculate one hour", () => {
            expect(BabySitter(22, 23)).to.eql(13);
        });
        it("should calculate one hour after midnight", () => {
            expect(BabySitter(0, 1)).to.eql(13);
        });
        it("should calculate two hours", () => {
            expect(BabySitter(1, 3)).to.eql(26);
        });
        it("should calculate late night correctly when end time is less than start time", () => {
            expect(BabySitter(23, 0)).to.eql(13);
        });
    });

    describe("Baby Sitting Payments", () => {

        it("should calculate babysitting fee for afternoon into evening hours", () => {
            expect(BabySitter(14, 20)).to.eql(54);
        });
        it("should calculate babysitting fee for evening into late night hours", () => {
            expect(BabySitter(21, 23)).to.eql(24);
        });
        it("should calculate babysitting fee for afternoon into late night hours", () => {
            expect(BabySitter(14, 1)).to.eql(115);
        });
    });
});