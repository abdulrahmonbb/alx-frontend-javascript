export default function createReportObject(employeesList) {
    return {
        allEmployees: {
            ...employeesList,
        },
            getNumberOfDepartments: (employeeList) => Object.keys(employeesList).length,
    };
}
