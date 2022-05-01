import * as React from 'react';

// cach 1:


export interface StudentProps {
  name: string,
  gender?: string,
  isHero?: boolean,
  hobbyList?: string[],
  sayHello?: () =>  void,
}

// cach 2:

// export interface Student {
//   name: string,
//   gender?: string,
//   isHero?: boolean,
//   hobbyList?: string[],
//   sayHello?: () =>  void,
// }

// export interface StudentProps {
//   student: Student,
// }


// export function Student ({student}: StudentProps) {
//   return (
//     <div>
//       Students: {student.name}
//       Gender: {student.gender}
//     </div>
//   );
// }

export function Student ({name, gender = 'Male', isHero = false, hobbyList=[], sayHello = () => {}}: StudentProps) {
  return (
    <div>
      Students: {name}
      Gender: {gender}

      {isHero ? 'Hero' : 'No Hero'}
    </div>
  );
}


