window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" + 
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let empPayrollData = createEmmployeePayrollJSON()[0]                    
    const innerHtml = `${headerHtml}
     <tr>
      <td><img class="profile" src="${empPayrollData._profilePic}"alt="" ></td>
      <td>${empPayrollData._name}</td>
      <td>${empPayrollData._gender}</td>
      <td>${getDeptHtml(empPayrollData._department)}</td>
      <td>${empPayrollData._salary}</td>
      <td>${empPayrollData._startDate}</td>
      <td>
         <img id="1" onclick="remove(this)" alt="delete"src="../assets/icons/delete-black-18dp.svg">
         <img id="1" alt="edit" onclick="update(this)"src="../assets/icons/create-black-18dp.svg">
      </td>    
</tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const createEmmployeePayrollJSON=()=>{
    let empPayrollListLocal = [
        {
            _name : 'Nagraj Panchal',
            _gender : 'male',
            _department :[
                'Engineering','Finance'
            ],_salary : '5000000',
            _startDate : '4 Dec 2022',
            _note :'',
            _id : new Date().getTime(),
            _profilePic : '../assets/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Aruna',
            _gender: 'Female',
            _department: [
                'HR'
            ],
            _salary:'9999999',
            _startDate: '29 Sept 2020',
            _note:'',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}