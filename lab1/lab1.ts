type Student ={
    studentID:number,
    studentName:string,
    studentAge:number
}
const WE173171:Student[]=[]

for(let i=0;i<10;i++){
    WE173171.push({studentID:i+1, studentName:"Dut"+i,studentAge:10+i})
}
console.log(WE173171);
