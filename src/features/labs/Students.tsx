import { StudentModel } from '@/models';
import * as React from 'react';

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
  const handleClick = () => {
    student.name = "Bob";
    console.log(student);

    // mutale probs
    // Not trigger rerender
    // inconsistent data
  }
  return (
    <div onClick = {handleClick}>
      Students: {student.name}

      {student.gender ? 'gender: ' : ''}
       {student.gender}
    </div>
  );
}



