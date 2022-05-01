import * as React from 'react';
import { StudentModel } from '../../models';

// cach 1:


// export interface StudentProps {
//   name: string,
//   gender?: string,
//   isHero?: boolean,
//   hobbyList?: string[],
//   sayHello?: () =>  void,
// }

// cach 2:



export interface StudentProps {
  student: StudentModel
}

export function Student ({student}: StudentProps) {
  return (
    <div>
      Students: {student.name}
      
      {student.gender ? 'gender: ' : ''}
       {student.gender}
    </div>
  );
}



