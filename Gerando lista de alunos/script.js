const alunos = [
    {
     nome: "Felipe",
     nota: 9.2
    },
    {
     nome: "João",
     nota: 5.5
    },
    {
     nome: "Julia",
     nota: 8.2
    },
    {
     nome: "Maria",
     nota: 4.9
    },
    {
     nome: "Marcos",
     nota: 6
    },
 ];

 const studentsThatPasses = alunos.filter(student => student.nota >= 6);
 console.log(studentsThatPasses);