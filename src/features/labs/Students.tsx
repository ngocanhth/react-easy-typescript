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
  student: StudentModel,
  onClick?: (student: StudentModel) => void,
}

export function Student ({student, onClick}: StudentProps) {

  function handlestudentClick() {
    onClick?.(student);
  }
  return (
   // <div onClick={() => onClick?.(student)}>
   //    <div onClick={onClick}>
   
   <div onClick={handlestudentClick}>
      Students: {student.name}

      {student.gender ? 'gender: ' : ''}
       {student.gender}
    </div>
  );
}



