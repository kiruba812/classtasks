const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
let add=value=>value.name
let copy=scores.map(add);
console.log(copy);
let pass=value=>value.marks>=40
let hh=scores.filter(pass)
console.log(hh)
let fail=value=>value.marks<=40
let kk=scores.filter(fail)
console.log(kk)