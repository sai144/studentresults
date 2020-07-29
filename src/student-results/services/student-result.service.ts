import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class StudentResultService {
  StudentData = [
    {
      name: 'rajiv',
      marks: {
        Maths: '18',
        English: '21',
        Science: '45',
      },
      rollNumber: 'KV2017-5A2',
    },
    {
      name: 'abhishek',
      marks: {
        Maths: '43',
        English: '30',
        Science: '37',
      },
      rollNumber: 'KV2017-5A1',
    },
    {
      name: 'zoya',
      marks: {
        Maths: '42',
        English: '31',
        Science: '50',
      },
      rollNumber: 'KV2017-5A3',
    },
  ];
  getStudentresults() {
    let highest = 0;
    this.StudentData.forEach((ele) => {
      if (
        Number(ele.marks.English) < 20 ||
        Number(ele.marks.Maths) < 20 ||
        Number(ele.marks.Science) < 20
      ) {
        ele['status'] = 'fail';
        ele['totalmarks'] =
          Number(ele.marks.English) +
          Number(ele.marks.Maths) +
          Number(ele.marks.Science);
      } else {
        ele['status'] = 'pass';
        ele['totalmarks'] =
          Number(ele.marks.English) +
          Number(ele.marks.Maths) +
          Number(ele.marks.Science);
      }
    });
    this.StudentData.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.StudentData.forEach((ele) => {
      if (highest > ele['totalmarks']) {
        highest = highest;
      } else {
        highest = ele['totalmarks'];
      }
    });
    this.StudentData.forEach((element) => {
      if (element['totalmarks'] === highest) {
        element['color'] = 'green';
        element['status'] = 'topper'
      } else if (element['status'] === 'fail') {
        element['color'] = 'red';
      } else {
        element['color'] = 'none';
      }
    });

    return this.StudentData;
  }
}
