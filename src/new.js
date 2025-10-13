// array
var someArray = ['dsd', 'dsd'];
// tuples in typescript
var skills = [1, "fdf"];
// same protected tuple using generics
var newSkills = [2, 4, 5, 6];
// enums
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["SUCCESS"] = 1] = "SUCCESS";
    StatusCodes[StatusCodes["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    StatusCodes[StatusCodes["FAILED"] = 3] = "FAILED";
})(StatusCodes || (StatusCodes = {}));
var res = {
    statusCode: StatusCodes.SUCCESS
};
if (res.statusCode === StatusCodes.SUCCESS) {
    console.log('NICE');
}
