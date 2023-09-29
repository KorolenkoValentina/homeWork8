// Фільтрація масиву

// Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.

function filterArray<T>(array: T[], condition: (element: T) => boolean): T[] {
  return array.filter((element) => condition(element));
}



// Узагальнений стек

// Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.



class Stack<T> {
  private elements: T[] = [];

  push(item: T): void {
    this.elements.push(item);
  }

  pop(): T | undefined {
    return this.elements.pop();
  }

  peek(): T | undefined {
    // const lastIndex = this.elements.length - 1;
    // return this.elements[lastIndex];
    if (this.isEmpty()) {
      return undefined;
    }
    return this.elements[this.elements.length - 1];
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  size(): number {
    return this.elements.length;
  }

  clear(): void {
    this.elements = [];
  }
}



// Узагальнений словник

// Створіть узагальнений клас Dictionary, який являє собою словник (асоціативний масив) з методами set, get і has.
//  Обмежте ключі тільки валідними типами для об'єкта

class Dictionary<T extends string> {
  private items: { [key: string]: T } = {};

  set(key: string, value: T): void {
    this.items[key] = value;
  }

  get(key: string): T | undefined {
    return this.items[key];
  }

  has(key: string): boolean {
    return key in this.items;
  }
}



// class Dictionary<T extends string | number | symbol, U> {
//   private items: Record<T, U> = {} as Record<T, U>;

//   set(key: T, value: U): void {
//     this.items[key] = value;
//   }

//   get(key: T): U | undefined {
//     return this.items[key];
//   }

//   has(key: T): boolean {
//     return key in this.items;
//   }
// }





