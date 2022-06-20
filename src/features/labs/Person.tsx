import * as React from 'react';

export interface Person {
    name: string;
    age: number;
    country: string;
}

export function Person(options?: Partial<Person>): Person {
    const defaults = {
        name: '',
        age: 0,
        country: '',
    };

    return {
        ...defaults,
        ...options,
    };
}
  
