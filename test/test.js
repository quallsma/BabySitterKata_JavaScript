import {expect} from 'chai';
import {BabySitter} from '../src/main.js';

describe("BabySitter Aplication", () => {
    describe("Evening Payment Plan", () => {
        it("should calculate one hour to equal $11.00", () => {
            expect(BabySitter(17, 18)).to.eql(11);
        });
        it("should calculate two hours to equal $22.00", () => {
            expect(BabySitter(18, 20)).to.eql(22);
        });
        
        it("should calculate entire evening block to equal $55.00", () => {
            expect(BabySitter(17, 22)).to.eql(55);
        });
    });

    describe("Afternoon Payment Plan", () => {
        it("should calculate one hour to equal $7.00", () => {
            expect(BabySitter(13, 14)).to.eql(7);
        });
        it("should calculate two hours to equal $14.00", () => {
            expect(BabySitter(14, 16)).to.eql(14);
        });
        it("should calculate entire afternoon to equal $35.00", () => {
            expect(BabySitter(13, 17)).to.eql(28);
        });
    });

    describe("Late Night Payment Plan", () => {
        it("should calculate one hour to equal $13.00", () => {
            expect(BabySitter(22, 23)).to.eql(13);
        });
        it("should calculate two hours to equal $26.00", () => {
            expect(BabySitter(0, 2)).to.eql(26);
        });
        it("should calculate two hours both after midnight to equal $26", () => {
            expect(BabySitter(1, 3)).to.eql(26);
        });
        it("should calculate late night correctly when end time is less than start time", () => {
            expect(BabySitter(23, 0)).to.eql(13);
        });
    });

    describe("Combine Payment Plan", () => {

        it("should calculate 2pm - 8pm to equal $24.00", () => {
            expect(BabySitter(14, 20)).to.eql(54);
        });
        it("should calculate 9pm - 11pm to equal $24.00", () => {
            expect(BabySitter(21, 23)).to.eql(24);
        });
        it("should calculate 1pm - 3am to equal $148", () => {
            expect(BabySitter(13, 3)).to.eql(148);
        });
    });
});